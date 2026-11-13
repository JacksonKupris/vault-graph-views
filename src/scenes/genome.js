// Genome fold: the journals as one strand folded in space. A day is a bead, days that name the same notes fold
// together, a stretch of days that belong together is a domain (one colour), and two distant days that name the same
// notes are joined by a loop. A note sits among the days that name it.
// The folding is the plugin's (VGScience.genomeFold); this file only draws its result.
//   data.strand      { days, paths, ids, rows }: a day each, and the notes it names as indexes into ids
//   inputs.fold      the fold of those rows (contract.js, FOLD_SHAPE)
//   inputs.selected  the host's selected note
//   onOpen(path)     a note, or a day's journal
//   onAction("graph")   the host opens its main graph (the empty state's way out)
import { InstancedMesh, SphereGeometry, CylinderGeometry, RingGeometry, TubeGeometry, QuadraticBezierCurve3, Mesh, MeshStandardMaterial, MeshBasicMaterial, LineSegments, LineBasicMaterial, BufferGeometry, Float32BufferAttribute, Matrix4, Quaternion, Vector3, Color, DoubleSide } from "three";
import { importanceOf, hash } from "../notes.js";
import { plural, clip, dayLabel, daysApart } from "../text.js";

export const SIZE = 18, MIN_DAYS = 4, LOOP = "#facc15", TOP_NAMES = 14;

// Where everything sits. Pure, so tests check it without a GPU.
//   beads [[x, y, z]] a day · domainOf [index] a day · daysOf Map(note id -> [day index]) · notes Map(note id -> [x, y, z])
export function genomeLayout(strand, fold) {
  const beads = fold.X.map(p => [p[0] * SIZE, p[1] * SIZE, (p[2] || 0) * SIZE]), domainOf = new Array(fold.n).fill(0), daysOf = new Map(), notes = new Map();
  fold.domains.forEach(([a, b], d) => { for (let i = a; i <= b && i < fold.n; i++) domainOf[i] = d; });
  strand.rows.forEach((row, i) => { for (const j of new Set(row)) { const id = strand.ids[j]; if (!daysOf.has(id)) daysOf.set(id, []); daysOf.get(id).push(i); } });
  for (const [id, days] of daysOf) {
    // the middle of its days, nudged a little its own way so two notes named on the same days don't sit on each other
    const c = [0, 0, 0], h = hash(id), a = (h % 628) / 100, b = ((h >>> 10) % 314) / 100 - 1.57, r = SIZE * 0.03;
    for (const i of days) for (let k = 0; k < 3; k++) c[k] += beads[i][k] / days.length;
    notes.set(id, [c[0] + Math.cos(a) * Math.cos(b) * r, c[1] + Math.sin(b) * r, c[2] + Math.sin(a) * Math.cos(b) * r]);
  }
  return { beads, domainOf, daysOf, notes };
}

export const genome = {
  id: "genome", name: "Genome fold", hint: "The journals as one folded strand",
  home: { yaw: 0.6, pitch: 0.25, dist: 46, min: 12, max: 110 }, stage: { fog: [34, 80] },
  actions: ["graph"],
  build({ stage, frame, data, inputs, onOpen, onAction, theme, invalidate }) {
    const strand = data.strand, fold = inputs.fold, n = fold.n;
    if (n < MIN_DAYS) {
      const stat = () => `${plural(n, "day")} of journals`;
      frame.stat(stat());
      frame.controls({ at: "centre", lines: [`Genome fold needs ${MIN_DAYS} days of journals that name notes.`, `${plural(n, "day")} so far.`], buttons: [{ label: "Open the graph", title: "Open the graph", run: () => onAction("graph") }] });
      return { targets: () => [], click() {}, update() {}, stat, today: () => null, api: { empty: true } };
    }
    const G = genomeLayout(strand, fold), byId = new Map(data.nodes.map(x => [x.id, x])), importance = importanceOf(data.nodes);
    const noteIds = [...G.notes.keys()].filter(id => byId.has(id)), weight = new Map(noteIds.map(id => [id, importance(byId.get(id))]));
    const size = id => 0.22 + 0.55 * Math.sqrt(Math.max(0, weight.get(id)));
    const pal = theme.palette, domainColour = d => pal[d % pal.length], GREY = "#6b7280";
    const m = new Matrix4(), q = new Quaternion(), v = new Vector3(), up = new Vector3(0, 1, 0), col = new Color();
    const add = o => { stage.scene.add(o); return o; };

    const days = add(new InstancedMesh(new SphereGeometry(1, 16, 12), new MeshStandardMaterial({ roughness: 0.55 }), n));
    const joins = add(new InstancedMesh(new CylinderGeometry(1, 1, 1, 8, 1, true), new MeshStandardMaterial({ roughness: 0.7 }), Math.max(n - 1, 1)));
    joins.count = n - 1;
    for (let i = 0; i + 1 < n; i++) {
      const a = G.beads[i], b = G.beads[i + 1], same = G.domainOf[i] === G.domainOf[i + 1], w = same ? 0.11 : 0.05;
      v.set(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      const len = v.length() || 1e-6;
      m.compose(new Vector3((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2), q.setFromUnitVectors(up, v.divideScalar(len)), new Vector3(w, len, w));
      joins.setMatrixAt(i, m);
      joins.setColorAt(i, col.set(same ? domainColour(G.domainOf[i]) : GREY));
    }
    const notes = add(new InstancedMesh(new SphereGeometry(1, 16, 12), new MeshStandardMaterial({ roughness: 0.4 }), Math.max(noteIds.length, 1)));
    notes.count = noteIds.length;

    // loops: an arc from one day to the other, bowed outward, with a dot at its middle to press
    const loopOn = new MeshBasicMaterial({ color: LOOP, transparent: true, opacity: 0.85 }), loopOff = new MeshBasicMaterial({ color: LOOP, transparent: true, opacity: 0.18 });
    const dotGeo = new SphereGeometry(0.3, 12, 8);
    const loops = fold.loops.map((l, k) => {
      const A = G.beads[l.a], B = G.beads[l.b], curve = new QuadraticBezierCurve3(new Vector3(...A), new Vector3((A[0] + B[0]) * 0.68, (A[1] + B[1]) * 0.68, (A[2] + B[2]) * 0.68), new Vector3(...B));
      const mid = curve.getPoint(0.5), tube = add(new Mesh(new TubeGeometry(curve, 24, 0.045, 6), loopOn)), dot = add(new Mesh(dotGeo, loopOn));
      dot.position.copy(mid);
      const shared = strand.rows[l.a].filter(j => strand.rows[l.b].includes(j)), ids = [...new Set(shared)].map(j => strand.ids[j]);
      const apart = daysApart(strand.days[l.a], strand.days[l.b]), pair = `${dayLabel(strand.days[l.a])} and ${dayLabel(strand.days[l.b])}`;
      return { k, l, tube, dot, mid: [mid.x, mid.y, mid.z], ids, apart, pair, tip: `${pair}: ${plural(l.count, "note")} named on both, ${plural(apart, "day")} apart` };
    });
    const ringGeo = new RingGeometry(1, 1.18, 40), ring = c => add(new Mesh(ringGeo, new MeshBasicMaterial({ color: c, side: DoubleSide, fog: false })));
    const newest = ring(theme.fg), chosen = ring(theme.accent);
    newest.position.set(...G.beads[n - 1]); newest.scale.setScalar(0.62);
    const ties = add(new LineSegments(new BufferGeometry(), new LineBasicMaterial({ color: theme.accent, transparent: true, opacity: 0.7 })));

    let selected = inputs.selected || null, hovered = null, shown = null;   // shown: the loop whose notes are picked out
    const focus = () => (hovered && G.notes.has(hovered) ? hovered : selected && G.notes.has(selected) ? selected : null);
    const name = id => (byId.get(id) ? byId.get(id).name : id);
    const stat = () => `${plural(n, "day")} · ${plural(fold.domains.length, "domain")} · ${plural(fold.loops.length, "loop")} · fit ${fold.grade} (stress ${fold.stress.toFixed(2)})`;
    const best = loops.reduce((a, b) => (a && a.l.count >= b.l.count ? a : b), null);
    const topNames = [...noteIds].sort((a, b) => weight.get(b) - weight.get(a)).slice(0, TOP_NAMES);

    function paint() {
      const f = focus(), mine = f ? new Set(G.daysOf.get(f)) : null, picked = shown ? new Set(shown.ids) : null;
      for (let i = 0; i < n; i++) {
        const r = mine && mine.has(i) ? 0.5 : 0.32;
        m.makeScale(r, r, r).setPosition(...G.beads[i]);
        days.setMatrixAt(i, m);
        days.setColorAt(i, col.set(domainColour(G.domainOf[i])).multiplyScalar(mine && !mine.has(i) ? 0.35 : 1));
      }
      noteIds.forEach((id, i) => {
        const r = size(id) * (id === f ? 1.25 : 1);
        m.makeScale(r, r, r).setPosition(...G.notes.get(id));
        notes.setMatrixAt(i, m);
        notes.setColorAt(i, col.set(pal[(byId.get(id).cluster || 0) % pal.length]).multiplyScalar(picked && !picked.has(id) ? 0.25 : 1));
      });
      for (const mesh of [days, notes]) { mesh.instanceMatrix.needsUpdate = true; if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true; }
      for (const L of loops) L.tube.material = L.dot.material = !shown || shown === L ? loopOn : loopOff;
      chosen.visible = !!(selected && G.notes.has(selected) && byId.has(selected));
      if (chosen.visible) { chosen.position.set(...G.notes.get(selected)); chosen.scale.setScalar(size(selected) + 0.25); }
      const pts = [];
      if (f) for (const i of G.daysOf.get(f)) pts.push(...G.notes.get(f), ...G.beads[i]);
      ties.geometry.dispose();
      ties.geometry = new BufferGeometry().setAttribute("position", new Float32BufferAttribute(pts, 3));

      const labels = [];
      if (f) labels.push({ text: clip(name(f), 34), at: G.notes.get(f), strong: true, dy: -22, run: () => open(f), title: `Open ${name(f)}` });
      fold.domains.forEach(([a, b], d) => { if (b - a >= 3) labels.push({ text: `${dayLabel(strand.days[a])} – ${dayLabel(strand.days[b])}`, at: G.beads[(a + b) >> 1], color: domainColour(d), dy: -14 }); });
      for (const id of picked ? shown.ids.filter(x => byId.has(x)) : topNames) if (id !== f) labels.push({ text: clip(name(id), 26), at: G.notes.get(id), dy: 14 });
      frame.labels(labels);
      frame.chip(shown ? `Named on both ${shown.pair}` : null, () => { shown = null; paint(); invalidate(); });
      frame.stat(stat());
    }
    function show(L) { shown = L; paint(); invalidate(); }
    // a note is opened one way, from its body or from its name: it becomes the selected one, and the host opens it
    function open(id) { paint(); invalidate(); onOpen(id); }
    const targets = [];
    G.beads.forEach((p, i) => targets.push({ at: p, r: 0.4, key: { kind: "day", id: i, tip: `${strand.days[i]} · ${plural(new Set(strand.rows[i]).size, "note")} named` } }));
    noteIds.forEach(id => targets.push({ at: G.notes.get(id), r: size(id), key: { kind: "note", id, tip: name(id) } }));
    loops.forEach(L => targets.push({ at: L.mid, r: 0.4, key: { kind: "loop", id: L.k, tip: L.tip } }));
    paint();
    return {
      targets: () => targets,
      click(k) {
        if (k.kind === "note") open(k.id);
        else if (k.kind === "day") onOpen(strand.paths[k.id]);
        else show(loops[k.id]);
      },
      hover(k) { const h = k && k.kind === "note" ? k.id : null; if (h !== hovered) { hovered = h; paint(); } },
      // the rings face the viewer however the fold is turned
      frame() { newest.quaternion.copy(stage.camera.quaternion); chosen.quaternion.copy(stage.camera.quaternion); },
      update(next) { if ("selected" in next) { selected = next.selected || null; paint(); } },
      stat,
      today: () => (best ? { text: `Strongest loop: ${best.pair} name the same ${plural(best.l.count, "note")}, ${plural(best.apart, "day")} apart`, label: "Show them", run: () => show(best) } : null),
      api: { layout: () => G, loops: () => loops.map(L => ({ a: L.l.a, b: L.l.b, count: L.l.count, ids: L.ids, mid: L.mid })), shown: () => (shown ? shown.k : null), selected: () => selected, notes: () => noteIds, show: k => show(loops[k]) },
      dispose() { loopOn.dispose(); loopOff.dispose(); dotGeo.dispose(); ringGeo.dispose(); },
    };
  },
};
