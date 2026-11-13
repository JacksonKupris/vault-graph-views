// Food web: which notes feed which, as layers in space. A note feeds on the notes it links to, so the notes everything rests on
// (context, reference) sit at the base and the notes that only link out (logs, plans, task lists) sit at the top. Height is the
// note's trophic level, worked out by the host from which way each written link points. A red sphere is a note others rest on
// that has gone stale: what stands above it feeds on something out of date. Pick a note: what it rests on and what rests on it light up.
//   data.nodes[]     cluster, inlinks, mentions, bc, recent, age, isolated, moc, person, ghost
//   inputs.web       { ids, level, edges, stats }: the host's VGScience.webForViews. level[i] is the height of ids[i]; edges are
//                    [from, to] pairs of indexes into ids (from links to to); stats { mean, maxLevel, incoherence, connectance, links }
//   inputs.selected  the host's selected note
//   onOpen(id) a note · onAction("graph") when there are too few linked notes to layer
import { Mesh, InstancedMesh, SphereGeometry, CircleGeometry, MeshBasicMaterial, BufferGeometry, Float32BufferAttribute, LineSegments, LineBasicMaterial, Matrix4, Color, DoubleSide } from "three";
import { importanceOf, staleOf, special } from "../notes.js";
import { plural, clip } from "../text.js";

export const GAP = 4, SPREAD = 1.15, RELIED = 4, RED = "#f87171", UP = "#fde047", DOWN = "#22d3ee";
const GOLDEN = 2.399963;

// Where everything stands. Pure (no GPU), so tests check it.
//   notes [{ n, x, y, z, r, level, band, reliedOn, leansOn, endangered }] · bands [count a layer] · radius (of the widest layer)
//   up(id) ids of the notes that link to it (what rests on it) · down(id) ids it links to (what it rests on)
export function webLayout(data, web) {
  const at = new Map(web.ids.map((id, i) => [id, i])), importance = importanceOf(data.nodes), stale = staleOf(data);
  const below = new Map(), above = new Map(), put = (m, k, v) => { if (!m.has(k)) m.set(k, []); m.get(k).push(v); };
  for (const [a, b] of web.edges) { put(below, web.ids[a], web.ids[b]); put(above, web.ids[b], web.ids[a]); }   // a links to b: a rests on b
  const own = data.nodes.filter(n => at.has(n.id) && !special(n) && !n.isolated);
  const bands = Math.max(2, Math.ceil(Math.max(1, ...own.map(n => web.level[at.get(n.id)])))), byBand = Array.from({ length: bands }, () => []);
  for (const n of own) byBand[Math.max(0, Math.min(bands - 1, Math.round(web.level[at.get(n.id)]) - 1))].push(n);
  const notes = [];
  byBand.forEach((list, b) => {
    list.sort((x, y) => x.cluster - y.cluster || importance(y) - importance(x));
    list.forEach((n, i) => {
      const lvl = web.level[at.get(n.id)], rad = SPREAD * Math.sqrt(i + 0.5) * 1.5, a = i * GOLDEN, reliedOn = (above.get(n.id) || []).length;
      notes.push({ n, x: rad * Math.cos(a), z: rad * Math.sin(a), y: (lvl - 1) * GAP, r: 0.3 + 0.9 * Math.sqrt(Math.max(0, importance(n))), level: lvl, band: b, reliedOn, leansOn: (below.get(n.id) || []).length, endangered: reliedOn >= RELIED && stale(n) });
    });
  });
  const radius = Math.max(4, ...notes.map(t => Math.hypot(t.x, t.z))) + 2;
  return { notes, bands: byBand.map(l => l.length), radius, up: id => above.get(id) || [], down: id => below.get(id) || [] };
}

const mix = (a, b, f) => new Color(a).lerp(new Color(b), f);

export const foodweb = {
  id: "foodweb", name: "Food web", hint: "Which notes feed which: the notes everything rests on at the base, logs and plans on top, stale ones others rest on in red",
  home: { yaw: 0.6, pitch: 0.3, dist: 46, min: 10, max: 130 }, stage: { fog: [60, 190], ambient: 0.5 },
  actions: ["graph"],
  build({ stage, frame, data, inputs, onOpen, onAction, theme, invalidate }) {
    const L = webLayout(data, inputs.web), T = L.notes, S = inputs.web.stats, add = o => { stage.scene.add(o); return o; };
    if (T.length < 3) {
      const stat = () => plural(T.length, "note");
      frame.stat(stat());
      frame.controls({ at: "centre", lines: ["The Food web needs notes that link to one another.", `${plural(T.length, "note")} so far.`], buttons: [{ label: "Open the graph", title: "Open the graph", run: () => onAction("graph") }] });
      return { targets: () => [], click() {}, update() {}, stat, today: () => null, api: { empty: true } };
    }
    const byId = new Map(T.map(t => [t.n.id, t])), name = t => t.n.name, m4 = new Matrix4(), colour = t => (t.endangered ? RED : theme.palette[(t.n.cluster || 0) % theme.palette.length]);
    // a thin plate a layer, so the levels read as floors
    const plates = L.bands.map((c, b) => {
      if (!c) return null;
      const m = add(new Mesh(new CircleGeometry(L.radius, 48), new MeshBasicMaterial({ color: mix(theme.palette[b % theme.palette.length], theme.bg, 0.9), transparent: true, opacity: 0.55, side: DoubleSide })));
      m.rotation.x = -Math.PI / 2; m.position.y = b * GAP - 0.4; m.frustumCulled = false; return m;
    });
    const balls = add(new InstancedMesh(new SphereGeometry(1, 14, 10), new MeshBasicMaterial(), T.length)); balls.frustumCulled = false;
    const mk = c => add(new LineSegments(new BufferGeometry(), new LineBasicMaterial({ color: c, transparent: true, opacity: 0.9 })));
    const upLines = mk(UP), downLines = mk(DOWN); upLines.frustumCulled = downLines.frustumCulled = false;
    let selected = inputs.selected && byId.has(inputs.selected) ? inputs.selected : null, hovered = null;
    const focus = () => hovered || selected, lit = new Set(), endangered = T.filter(t => t.endangered), word = t => (t.endangered ? " · stale, others rest on it" : "");
    const stat = () => {
      const f = focus() && byId.get(focus());
      if (f) return `${name(f)} · rests on ${plural(f.leansOn, "note")} · ${plural(f.reliedOn, "note")} rest on it${word(f)}`;
      return `mean level ${S.mean.toFixed(1)} · top ${S.maxLevel.toFixed(1)} · incoherence ${S.incoherence.toFixed(2)} · ${plural(endangered.length, "endangered note")}`;
    };
    const seg = (a, b, out) => out.push(a.x, a.y, a.z, b.x, b.y, b.z);
    function paint() {
      const f = focus(); lit.clear(); if (f) { lit.add(f); L.up(f).forEach(i => lit.add(i)); L.down(f).forEach(i => lit.add(i)); }
      T.forEach((t, i) => { balls.setMatrixAt(i, m4.makeScale(t.r, t.r, t.r).setPosition(t.x, t.y, t.z)); balls.setColorAt(i, mix(colour(t), theme.bg, !f || lit.has(t.n.id) ? 0 : 0.8)); });
      balls.instanceMatrix.needsUpdate = true; balls.instanceColor.needsUpdate = true;
      const u = [], d = [];
      if (f) { const a = byId.get(f); L.up(f).forEach(id => byId.has(id) && seg(byId.get(id), a, u)); L.down(f).forEach(id => byId.has(id) && seg(a, byId.get(id), d)); }
      upLines.geometry.setAttribute("position", new Float32BufferAttribute(u, 3)); upLines.visible = u.length > 0;
      downLines.geometry.setAttribute("position", new Float32BufferAttribute(d, 3)); downLines.visible = d.length > 0;
      const labels = L.bands.map((c, b) => (c ? { text: `${b === 0 ? "Level 1 · the base" : "Level " + (b + 1)} (${c})`, at: [-L.radius, b * GAP, 0], color: "#bbf7d0" } : null)).filter(Boolean);
      if (f) { const t = byId.get(f); labels.unshift({ text: clip(name(t), 34), at: [t.x, t.y + t.r, t.z], strong: true, dy: -18, run: () => open(f), title: `Open ${name(t)}` }); }
      frame.labels(labels); frame.stat(stat());
    }
    function open(id) { selected = id; paint(); invalidate(); onOpen(id); }
    const keystone = [...endangered].sort((a, b) => b.reliedOn - a.reliedOn)[0], base = [...T].filter(t => t.band === 0).sort((a, b) => b.reliedOn - a.reliedOn)[0];
    const insights = [];
    if (keystone) insights.push({ text: `${name(keystone)} holds up ${plural(keystone.reliedOn, "note")} and has not been edited in ${keystone.n.age} days. Open it and decide whether it is still true.`, label: "Open note", run: () => open(keystone.n.id) });
    if (base && base.reliedOn) insights.push({ text: `${name(base)} is the most relied-on note at the base: ${plural(base.reliedOn, "note")} rest on it.`, label: "Open note", run: () => open(base.n.id) });
    frame.explain({
      plain: "Picture a food chain. The notes everything rests on are the plants at the bottom; logs and plans that mostly point at other notes are the animals at the top. If a note at the bottom goes out of date, everything standing on it is built on something stale.",
      about: `A note rests on the notes it links to, so each note gets a level: the more links lead up from the base to it, the higher it sits. Level is worked out so that every link climbs by about one; incoherence ${S.incoherence.toFixed(2)} is how far the links are from a clean hierarchy (0 is a clean one, 1 shows no direction at all). A red sphere is a note ${RELIED} or more notes link to that has not been edited within the vault's stale limit. Pick a note: yellow lines go to the notes resting on it, blue to the notes it rests on.`,
      legend: [{ color: "#bbf7d0", text: "height = level, the base at the bottom" }, { color: RED, text: "stale, and others rest on it" }, { color: UP, text: "rests on the picked note" }, { color: DOWN, text: "the picked note rests on" }], insights,
    });
    frame.controls({ lines: ["Pick a note to see what rests on it"] });
    paint();
    return {
      targets: () => T.map(t => ({ at: [t.x, t.y, t.z], r: Math.max(t.r * 1.2, 0.9), key: { kind: "note", id: t.n.id, tip: `${name(t)} · level ${t.level.toFixed(1)}${word(t)}` } })),
      click(k) { if (k.kind === "note") open(k.id); },
      hover(k) { const h = k && k.kind === "note" ? k.id : null; if (h !== hovered) { hovered = h; paint(); } },
      update(next) { if ("selected" in next) { selected = next.selected && byId.has(next.selected) ? next.selected : null; paint(); } },
      stat,
      today: () => (keystone ? { text: `${name(keystone)} is stale and ${plural(keystone.reliedOn, "note")} rest on it`, label: "Open note", run: () => open(keystone.n.id) } : null),
      api: { layout: () => L, selected: () => selected, hold() {}, notes: () => T.length },
      dispose() { for (const m of [...plates.filter(Boolean), balls, upLines, downLines]) { m.geometry.dispose(); m.material.dispose(); } },
    };
  },
};
