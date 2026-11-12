// Radar: the notes that have open tasks, as blips on a radar screen. The longer a note's oldest task has waited, the nearer the
// centre it sits; inside the red ring (90 days) a blip is holding. Each topic has its own slice of the screen. A sweep goes round.
// It is a flat view: it opens looking straight down, a drag slides it, and Tilt lifts the same screen into 3D, where a blip is a
// column as tall as its task count.
//   data.nodes[]   tasks (open tasks), taskAge (days the oldest has waited; age when the data has none), cluster
//   inputs.selected  the host's selected note
//   onOpen(id)     a note · onAction("graph") with no open tasks, onAction("triage") to go through the tasks one by one
import { Mesh, InstancedMesh, CylinderGeometry, CircleGeometry, RingGeometry, MeshBasicMaterial, BufferGeometry, Float32BufferAttribute, LineSegments, LineBasicMaterial, Matrix4, Color, DoubleSide } from "three";
import { special, hash } from "../notes.js";
import { plural, clip } from "../text.js";

export const RMAX = 18, RMIN = 2.5, HOLD_DAYS = 90, GREEN = "#22c55e", RED = "#f87171";
// how far from the centre a task that has waited `days` sits: waiting a year or more is nearest the middle
export const radiusOf = days => RMIN + (RMAX - RMIN) * (1 - Math.min(1, Math.log1p(Math.max(0, days)) / Math.log1p(365)));
export const waited = n => (n.taskAge != null ? n.taskAge : n.age) || 0;

// Where everything stands. Pure (no GPU), so tests check it.
//   blips [{ n, x, z, r (blip size), h (column height), holding }] · sectors [{ cluster, name, a0, a1, n }] · hold (radius of the red ring) · tasks · notes
export function radarLayout(data) {
  const ns = data.nodes.filter(n => !special(n) && n.tasks > 0), groups = new Map();
  for (const n of ns) { if (!groups.has(n.cluster)) groups.set(n.cluster, []); groups.get(n.cluster).push(n); }
  const names = new Map(data.clusters.map(c => [c.id, c.name]));
  const keys = [...groups.keys()].sort((a, b) => groups.get(b).length - groups.get(a).length || a - b), total = Math.max(1, ns.length);
  // a slice each, as wide as its share of the notes (never thinner than a sliver), then scaled to fill the circle exactly
  const raw = keys.map(c => Math.max(0.25, (groups.get(c).length / total) * 2 * Math.PI * 0.92 + 0.08)), sum = raw.reduce((a, b) => a + b, 0) || 1;
  let a0 = -Math.PI / 2;
  const sectors = keys.map((c, i) => { const span = (raw[i] / sum) * 2 * Math.PI, s = { cluster: c, name: names.get(c) || "No topic", a0, a1: a0 + span, n: groups.get(c).length }; a0 += span; return s; });
  const blips = [];
  for (const s of sectors) for (const n of groups.get(s.cluster)) {
    const h = hash(n.id), a = s.a0 + (s.a1 - s.a0) * (0.1 + 0.8 * ((h % 100) / 100)), r = Math.max(RMIN * 0.6, Math.min(RMAX, radiusOf(waited(n)) + (((h >>> 7) % 41) - 20) / 20));
    blips.push({ n, x: Math.cos(a) * r, z: Math.sin(a) * r, r: 0.28 + 0.16 * Math.sqrt(n.tasks), h: 0.6 + 0.9 * n.tasks, holding: waited(n) > HOLD_DAYS });
  }
  return { blips, sectors, hold: radiusOf(HOLD_DAYS), tasks: ns.reduce((s, n) => s + n.tasks, 0), notes: ns.length };
}

export const radar = {
  id: "radar", name: "Radar", hint: "Open tasks as blips by how long they've waited; red = 90+ days",
  home: { yaw: 0, pitch: 1.5, dist: 46, min: 14, max: 110, minPitch: 0.55, maxPitch: 1.5, pan: true }, stage: { fog: false, ambient: 1 },
  actions: ["graph", "triage"],
  build({ stage, frame, orbit, data, inputs, onOpen, onAction, theme, invalidate }) {
    const L = radarLayout(data), byId = new Map(L.blips.map(b => [b.n.id, b])), add = o => { stage.scene.add(o); return o; };
    const reduced = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const flat = o => { o.rotation.x = -Math.PI / 2; return o; };
    if (L.notes < 1) {
      const stat = () => "No open tasks";
      frame.stat(stat());
      frame.controls({ at: "centre", lines: ["Radar shows the notes that have open tasks.", "No note has one."], buttons: [{ label: "Open the graph", title: "Open the graph", run: () => onAction("graph") }] });
      return { targets: () => [], click() {}, update() {}, stat, today: () => null, api: { empty: true } };
    }
    const m4 = new Matrix4(), col = new Color(), line = (pts, color, opacity) => { const g = new BufferGeometry().setAttribute("position", new Float32BufferAttribute(pts, 3)); return add(new LineSegments(g, new LineBasicMaterial({ color, transparent: true, opacity }))); };

    // the screen: a dark disc, four range rings, the red ring of 90 days, and a spoke where each topic's slice begins
    add(flat(new Mesh(new CircleGeometry(RMAX, 64), new MeshBasicMaterial({ color: "#04140b" }))));
    const ring = (r, color, opacity, w = 0.05) => add(flat(new Mesh(new RingGeometry(r - w, r + w, 96), new MeshBasicMaterial({ color, transparent: true, opacity, side: DoubleSide })))).position.set(0, 0.02, 0);
    // each topic's slice tinted its own colour (flat discs lie in x/y before the turn, so an angle a is -a there)
    L.sectors.forEach((s, i) => { const w = add(flat(new Mesh(new CircleGeometry(RMAX, 24, -s.a1, s.a1 - s.a0), new MeshBasicMaterial({ color: theme.palette[i % theme.palette.length], transparent: true, opacity: 0.3, side: DoubleSide })))); w.position.y = 0.01; });
    for (let i = 1; i <= 4; i++) ring((RMAX * i) / 4, GREEN, 0.25);
    ring(L.hold, RED, 0.7, 0.07);
    line(L.sectors.flatMap(s => [0, 0.03, 0, Math.cos(s.a0) * RMAX, 0.03, Math.sin(s.a0) * RMAX]), GREEN, 0.3);
    const sweep = add(flat(new Mesh(new CircleGeometry(RMAX, 32, 0, 0.7), new MeshBasicMaterial({ color: GREEN, transparent: true, opacity: 0.22, side: DoubleSide }))));
    sweep.position.y = 0.05;

    const blips = add(new InstancedMesh(new CylinderGeometry(1, 1, 1, 14), new MeshBasicMaterial(), L.blips.length)); blips.frustumCulled = false;
    let selected = inputs.selected && byId.has(inputs.selected) ? inputs.selected : null, hovered = null, held = reduced;
    const focus = () => hovered || selected;
    const name = b => clip(b.n.name, 30), stat = () => {
      const f = focus() && byId.get(focus());
      if (f) return `${name(f)} · ${plural(f.n.tasks, "open task")} · waiting ${waited(f.n)} days`;
      return `${plural(L.tasks, "open task")} · ${plural(L.notes, "note")}`;
    };
    const mix = (c, k) => col.set(c).multiplyScalar(k);
    function paint() {
      const f = focus();
      L.blips.forEach((b, i) => {
        const on = !f || b.n.id === f, size = b.r * (b.n.id === f ? 1.5 : 1);
        m4.makeScale(size, b.h, size).setPosition(b.x, b.h / 2, b.z); blips.setMatrixAt(i, m4);
        blips.setColorAt(i, on ? col.set(b.n.id === f ? theme.fg : b.holding ? RED : GREEN) : mix(b.holding ? RED : GREEN, 0.25));
      });
      blips.instanceMatrix.needsUpdate = true; if (blips.instanceColor) blips.instanceColor.needsUpdate = true;
      // the slice names at the rim, the busiest blips by name; the picked one always, and a way to open it
      const labels = L.sectors.map(s => { const a = (s.a0 + s.a1) / 2; return { text: `${clip(s.name, 24).toUpperCase()} · ${s.n}`, at: [Math.cos(a) * (RMAX + 1.2), 0, Math.sin(a) * (RMAX + 1.2)], color: GREEN }; });
      for (const b of [...L.blips].sort((p, q) => q.n.tasks - p.n.tasks).slice(0, 8)) labels.push({ text: `${clip(b.n.name, 22)} · ${b.n.tasks}`, at: [b.x, b.h, b.z], dy: -10, color: b.holding ? "#fecaca" : "#bbf7d0" });
      if (f) { const b = byId.get(f); labels.unshift({ text: name(b), at: [b.x, b.h, b.z], strong: true, dy: -18, run: () => open(f), title: `Open ${name(b)}` }); }
      frame.labels(labels); frame.stat(stat());
    }
    function open(id) { selected = id; paint(); invalidate(); onOpen(id); }
    const hold = L.blips.filter(b => b.holding), oldest = [...L.blips].sort((p, q) => waited(q.n) - waited(p.n))[0];
    const insights = [];
    if (hold.length) insights.push({ text: `${plural(hold.length, "note")} ${hold.length === 1 ? "has" : "have"} a task waiting more than ${HOLD_DAYS} days. Each is either still wanted or can be crossed off.`, label: "Triage", run: () => onAction("triage") });
    if (oldest && waited(oldest.n) > 30) insights.push({ text: `${clip(oldest.n.name, 40)} has waited longest: ${waited(oldest.n)} days.`, label: "Open note", run: () => open(oldest.n.id) });
    const widest = L.sectors[0];
    if (widest && L.sectors.length > 1) insights.push({ text: `${widest.name} holds the most notes with open tasks (${widest.n} of ${L.notes}).`, label: "Open its busiest", run: () => open(L.blips.filter(b => b.n.cluster === widest.cluster).sort((p, q) => q.n.tasks - p.n.tasks)[0].n.id) });
    frame.explain({
      plain: "Picture a radar screen. Every note with an open task is a blip. The longer its oldest task has waited, the closer to the middle it drifts, and inside the red ring it has been waiting more than three months.",
      about: "Each topic has a slice of the screen and each note with open tasks is a blip in its slice. Distance from the centre is how long the oldest open task has waited (a year or more sits in the middle). The size of a blip, and the height of its column when you tilt, is how many open tasks it holds. Tick tasks off in the note and its blip drifts away or goes.",
      legend: [{ color: GREEN, text: "note with open tasks" }, { color: RED, text: "oldest task 90+ days" }, { color: "#6b7280", text: "nearer the middle = waited longer" }], insights,
    });
    const controls = () => frame.controls({ lines: [hold.length ? `${plural(hold.length, "note")} holding past ${HOLD_DAYS} days` : "Pick a blip to open its note"], buttons: [{ label: orbit.tilted ? "Flat" : "Tilt", title: orbit.tilted ? "Look straight down again" : "Tilt into 3D: a blip becomes a column as tall as its task count", run: () => { orbit.tilt(); controls(); } }, ...(hold.length ? [{ label: "Triage", title: "Go through the open tasks one by one", run: () => onAction("triage") }] : [])] });
    controls(); paint();
    const started = performance.now(); let timer = 0;
    const turn = t => { sweep.rotation.z = -((t * 0.5) % (2 * Math.PI)); };
    turn(0);
    return {
      targets: () => L.blips.map(b => ({ at: [b.x, b.h / 2, b.z], r: Math.max(0.7, b.r * 1.3), key: { kind: "note", id: b.n.id, tip: `${b.n.name} · ${plural(b.n.tasks, "open task")} · waiting ${waited(b.n)} days` } })),
      click(k) { if (k.kind === "note") open(k.id); },
      hover(k) { const h = k && k.kind === "note" ? k.id : null; if (h !== hovered) { hovered = h; paint(); } },
      update(next) { if ("selected" in next) { selected = next.selected && byId.has(next.selected) ? next.selected : null; paint(); } },
      frame() { if (held) return; turn((performance.now() - started) / 1000); clearTimeout(timer); timer = setTimeout(invalidate, 33); },
      stat,
      today: () => (hold.length ? { text: `${plural(hold.length, "note")} ${hold.length === 1 ? "has" : "have"} tasks waiting ${HOLD_DAYS}+ days · oldest: ${clip(oldest.n.name, 30)} (${waited(oldest.n)} days)`, label: "Triage", run: () => onAction("triage") } : null),
      api: { layout: () => L, selected: () => selected, hold() { held = true; invalidate(); }, blips: () => L.blips.length, holding: () => hold.length, tilted: () => orbit.tilted },
      dispose() { held = true; clearTimeout(timer); },
    };
  },
};
