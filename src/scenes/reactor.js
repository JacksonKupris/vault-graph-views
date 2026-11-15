// Reactor: the vault's last 30 days as a reactor cut open, a model to turn in the hand. A note edited in that time is a fuel rod,
// taller the livelier it is. A stale note other notes still link to is a control rod, pushed deeper the more notes link to it.
// k is the notes edited in the 30 days for each note that went stale in them: above 1 the vault is heating up, below 1 it is cooling.
// The four topics with the most edited notes are the four coolant loops; pick one to see only its rods.
//   data.nodes[]  age, recent, inlinks, cluster · data.clusters[] · data.quality.stale_days
//   onOpen(id) a note · onAction("graph") when nothing was edited and nothing is stale
import { Mesh, Group, CylinderGeometry, SphereGeometry, MeshPhongMaterial, DoubleSide } from "three";
import { special, activityOf, staleOf } from "../notes.js";
import { copies, span, mix, scrap } from "../models/parts.js";
import { plural, clip } from "../text.js";
import { tooFew } from "./few.js";

export const WINDOW = 30, FUEL = 37, CONTROL = 12, LOOPS = 4, PITCH = 1.5, HOT = "#ef4444", COLD = "#3b82f6";
const YAW = 0.6, CUT = 2.1, TOP = 7.2, ROD = 5;   // the wedge cut out of the walls faces the home view

// the middle of every cell of a hex lattice within `rings` of the centre, nearest first; `shift` moves to the gaps between cells
function lattice(rings, shift = []) {
  const out = [];
  for (let q = -rings - 1; q <= rings; q++) for (let r = -rings - 1; r <= rings; r++) for (const o of shift.length ? shift : [0]) {
    const a = q + o, b = r + o, x = PITCH * (a + b / 2), z = PITCH * b * 0.8660254;
    if (shift.length || Math.max(Math.abs(q), Math.abs(r), Math.abs(q + r)) <= rings) out.push([x, z]);
  }
  return out.sort((p, q) => Math.hypot(...p) - Math.hypot(...q) || Math.atan2(p[1], p[0]) - Math.atan2(q[1], q[0]));
}

// What the reactor holds. Pure (no GPU), so tests check it.
//   edited (notes edited in the 30 days) · wentStale (notes that went stale in them) · stale (every stale note) · k (edited / wentStale, null when none went stale)
//   fuel [{ id, cluster, heat (0 to 1), at: [x, z], h }] the liveliest first · control [{ id, cluster, links, depth (0 to 1), at: [x, z] }] the most linked first
//   loops [{ cluster, name, edited, share }] the topics with the most edited notes
export function reactorLayout(data) {
  const notes = data.nodes.filter(n => !special(n)), act = activityOf(data.nodes), isStale = staleOf(data), days = (data.quality && data.quality.stale_days) || 180;
  const byId = (p, q) => (p.id < q.id ? -1 : 1);
  const edited = notes.filter(n => (n.age || 0) <= WINDOW).sort((p, q) => act(q) - act(p) || byId(p, q));
  const stale = notes.filter(isStale), wentStale = stale.filter(n => n.age <= days + WINDOW);
  const cells = lattice(3), gaps = lattice(3, [1 / 3, 2 / 3]);
  const fuel = edited.slice(0, FUEL).map((n, i) => ({ id: n.id, cluster: n.cluster, heat: act(n), at: cells[i], h: 2.2 + 3.2 * act(n) }));
  const leaned = stale.filter(n => n.inlinks > 0).sort((p, q) => q.inlinks - p.inlinks || byId(p, q)), most = leaned.length ? leaned[0].inlinks : 1;
  const control = leaned.slice(0, CONTROL).map((n, i) => ({ id: n.id, cluster: n.cluster, links: n.inlinks, depth: 0.25 + 0.75 * (n.inlinks / most), at: gaps[i] }));
  const count = new Map();
  for (const n of edited) count.set(n.cluster, (count.get(n.cluster) || 0) + 1);
  const label = new Map(data.clusters.map(c => [c.id, c.label || c.name]));
  const loops = [...count].sort((p, q) => q[1] - p[1] || p[0] - q[0]).slice(0, LOOPS).map(([cluster, n]) => ({ cluster, name: label.get(cluster) || `Topic ${cluster}`, edited: n, share: n / edited.length }));
  return { edited: edited.length, wentStale: wentStale.length, stale: stale.length, leaned: leaned.length, k: wentStale.length ? edited.length / wentStale.length : null, fuel, control, loops };
}

export const reactor = {
  id: "reactor", name: "Reactor", hint: "The last 30 days as a reactor: edited notes are fuel, stale notes others link to are control rods",
  home: { yaw: YAW, pitch: 0.42, dist: 62, min: 10, max: 200 }, stage: { light: "camera", fog: [90, 300], ambient: 0.6 },
  actions: ["graph"],
  build({ stage, frame, data, onOpen, onAction, theme, invalidate }) {
    const L = reactorLayout(data), byId = new Map(data.nodes.map(n => [n.id, n])), name = id => byId.get(id).name;
    if (!L.fuel.length && !L.control.length) return tooFew(frame, onAction, plural(data.nodes.length, "note"), [`The Reactor needs notes edited in the last ${WINDOW} days, or stale notes other notes link to.`, "Neither yet."]);
    let model = null, only = null;
    const colour = c => theme.palette[(c || 0) % theme.palette.length], k = L.k == null ? null : L.k.toFixed(2);
    const stat = () => `${k ? `k ${k} · ` : ""}${plural(L.edited, "note")} edited in ${WINDOW} days · ${L.wentStale || "none"} went stale · ${plural(L.control.length, "control rod")}`;
    // where loop i stands: round the back of the hall, away from the cut
    const bearing = i => YAW + Math.PI + (i - (L.loops.length - 1) / 2) * 1.0, round = (a, r, y) => [r * Math.sin(a), y, r * Math.cos(a)];
    function draw() {
      if (model) scrap(stage.scene, model);
      model = new Group();
      const steel = mix(theme.muted, theme.fg, 0.35), concrete = mix(theme.muted, theme.bg, 0.45), dark = mix(theme.fg, theme.bg, 0.25), dim = c => (only == null || only === c ? 0 : 0.82);
      const phong = (c, more) => new MeshPhongMaterial({ color: c, specular: "#666666", shininess: 35, ...more }), lay = (geo, mat, y) => { const o = new Mesh(geo, mat); o.position.y = y; model.add(o); return o; };
      const wall = (r, h) => new CylinderGeometry(r, r, h, 64, 1, true, YAW + CUT / 2, Math.PI * 2 - CUT), cap = (r, up) => new SphereGeometry(r, 64, 20, YAW + CUT / 2 + Math.PI / 2, Math.PI * 2 - CUT, up ? 0 : Math.PI / 2, Math.PI / 2);
      // the hall: a slab, a concrete wall and dome with a quarter cut away
      lay(new CylinderGeometry(19, 19, 1, 64), phong(concrete), -5.5);
      // the hall is see-through glass-grey, so the vessel inside shows
      const hall = { side: DoubleSide, transparent: true, opacity: 0.42, depthWrite: false };
      lay(wall(18, 17), phong(concrete, hall), 3.5); lay(cap(18, true), phong(concrete, hall), 12).scale.y = 0.6;
      // the vessel: a steel wall and bottom with the same cut, the water in it, the plate the control rods hang from
      lay(wall(6.2, 12), phong(steel, { side: DoubleSide }), 3); lay(cap(6.2, false), phong(steel, { side: DoubleSide }), -3).scale.y = 0.5; lay(cap(6.2, true), phong(steel, { side: DoubleSide }), 9).scale.y = 0.5;
      lay(new CylinderGeometry(5.9, 5.9, 0.3, 48), phong(dark), -0.2); lay(new CylinderGeometry(5.9, 5.9, 0.3, 48), phong(dark), TOP);
      lay(new CylinderGeometry(5.8, 5.8, TOP, 48, 1, false, YAW + CUT / 2, Math.PI * 2 - CUT), new MeshPhongMaterial({ color: "#38bdf8", transparent: true, opacity: 0.2, depthWrite: false, side: DoubleSide }), TOP / 2);
      const rod = n => new CylinderGeometry(1, 1, 1, n);
      model.add(copies(rod(12), new MeshPhongMaterial({ color: "#ffffff", shininess: 70 }), L.fuel, (f, i, m) => { span(m, [f.at[0], 0, f.at[1]], [f.at[0], f.h, f.at[1]], 0.42); return mix(mix(dark, colour(f.cluster), 0.5 + 0.5 * f.heat), theme.bg, dim(f.cluster)); }));
      model.add(copies(rod(8), phong("#ffffff"), L.control, (c, i, m) => { const low = TOP - ROD * c.depth; span(m, [c.at[0], low, c.at[1]], [c.at[0], low + ROD + 1.4, c.at[1]], 0.2); return mix(dark, theme.bg, dim(c.cluster)); }));
      model.add(copies(new SphereGeometry(1, 12, 8), phong("#ffffff"), L.control, (c, i, m) => { m.makeScale(0.36, 0.36, 0.36).setPosition(c.at[0], TOP - ROD * c.depth + ROD + 1.4, c.at[1]); return mix(dark, theme.bg, dim(c.cluster)); }));
      // a coolant loop for each of the busiest topics: a steam generator, a pump, a hot leg out and a cold leg back
      const pipes = [];
      L.loops.forEach((lp, i) => {
        const a = bearing(i), w = 0.28 + 0.5 * lp.share, f = dim(lp.cluster), gen = round(a, 13.5, 0), pump = round(a + 0.2, 10.5, 0);
        const sg = new Mesh(new CylinderGeometry(1.9, 1.4, 12, 24), phong(mix(colour(lp.cluster), theme.bg, f))); sg.position.set(gen[0], 1, gen[2]); model.add(sg);
        const top = new Mesh(new SphereGeometry(1.9, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), phong(mix(colour(lp.cluster), theme.bg, f))); top.position.set(gen[0], 7, gen[2]); model.add(top);
        const pm = new Mesh(new CylinderGeometry(0.9, 0.9, 3.4, 16), phong(mix(steel, theme.bg, f))); pm.position.set(pump[0], 1.2, pump[2]); model.add(pm);
        pipes.push({ from: round(a - 0.07, 6.1, 5), to: round(a - 0.05, 12.4, 5), w, c: mix(HOT, theme.bg, f) }, { from: round(a + 0.05, 12.6, 1), to: [pump[0], 1, pump[2]], w, c: mix(COLD, theme.bg, f) }, { from: [pump[0], 2.4, pump[2]], to: round(a + 0.12, 6.1, 3.2), w, c: mix(COLD, theme.bg, f) });
      });
      model.add(copies(rod(12), phong("#ffffff"), pipes, (p, i, m) => { span(m, p.from, p.to, p.w); return p.c; }));
      stage.scene.add(model);
      const labels = L.loops.map((lp, i) => ({ text: `${clip(lp.name, 20)} (${lp.edited})`, at: round(bearing(i), 13.5, 9), dy: -14, run: () => filter(lp.cluster), title: `Only ${lp.name}` }));
      for (const f of L.fuel.slice(0, 3)) labels.push({ text: clip(name(f.id), 22), at: [f.at[0], f.h, f.at[1]], dy: -14, run: () => onOpen(f.id), title: `Open ${name(f.id)}` });
      if (L.control[0]) labels.push({ text: clip(name(L.control[0].id), 22), at: [L.control[0].at[0], TOP + ROD + 1.4, L.control[0].at[1]], dy: -14, color: theme.muted, run: () => onOpen(L.control[0].id), title: `Open ${name(L.control[0].id)}` });
      frame.labels(labels); frame.stat(stat());
      const lp = only == null ? null : L.loops.find(x => x.cluster === only);
      frame.chip(lp ? `Only ${lp.name}` : null, () => filter(null));
    }
    function filter(cluster) { only = cluster === only ? null : cluster; draw(); invalidate(); }
    const out = [];
    if (k) out.push({ text: `k is ${k}: ${plural(L.edited, "note")} edited in the last ${WINDOW} days for ${plural(L.wentStale, "note")} that went stale in them. ${L.k >= 1 ? "Above 1, the vault is heating up." : "Below 1, the vault is cooling."}`, ...(L.fuel[0] ? { label: "Open liveliest", run: () => onOpen(L.fuel[0].id) } : {}) });
    else out.push({ text: `${plural(L.edited, "note")} edited in the last ${WINDOW} days and none went stale in them, so there is no k to work out.`, ...(L.fuel[0] ? { label: "Open liveliest", run: () => onOpen(L.fuel[0].id) } : {}) });
    if (L.control[0]) out.push({ text: `${plural(L.leaned, "stale note")} still ${L.leaned === 1 ? "has" : "have"} notes linking to ${L.leaned === 1 ? "it" : "them"}. ${name(L.control[0].id)} has the most: ${plural(L.control[0].links, "note")} link to it.`, label: "Open note", run: () => onOpen(L.control[0].id) });
    if (L.loops[0]) out.push({ text: `${L.loops[0].name} had the most edits: ${L.loops[0].edited} of the ${L.edited}.`, label: "Only this topic", run: () => filter(L.loops[0].cluster) });
    frame.explain({
      plain: "Picture a reactor. Every note you edited this month is a fuel rod giving off heat. Every note left to go stale takes heat away. Divide one by the other and you get k: above 1 the vault is heating up, below 1 it is cooling.",
      about: `A fuel rod is a note edited in the last ${WINDOW} days, taller and brighter the livelier it is; the ${FUEL} liveliest are drawn, the liveliest in the middle. A control rod is a stale note that other notes still link to, pushed deeper the more notes link to it; the ${CONTROL} most linked are drawn. k is the notes edited in the ${WINDOW} days divided by the notes that went stale in them. Each coolant loop is one of the ${LOOPS} topics with the most edited notes; its pipes are wider the bigger its share.`,
      legend: [{ color: theme.palette[0], text: "fuel rod = a note edited lately, colour = topic" }, { color: mix(theme.fg, theme.bg, 0.25), text: "control rod = a stale note others link to" }, { color: HOT, text: "hot leg" }, { color: COLD, text: "cold leg, back to the vessel" }], insights: out,
    });
    frame.controls({ lines: ["Pick a rod to open its note, a loop to see only its topic"], buttons: [] });
    draw();
    return {
      targets: () => [
        ...L.fuel.map(f => ({ at: [f.at[0], f.h * 0.6, f.at[1]], r: 0.7, key: { kind: "note", id: f.id, tip: `${name(f.id)} · edited ${plural(byId.get(f.id).age || 0, "day")} ago` } })),
        ...L.control.map(c => ({ at: [c.at[0], TOP - ROD * c.depth + ROD + 1.4, c.at[1]], r: 0.6, key: { kind: "note", id: c.id, tip: `${name(c.id)} · stale · ${plural(c.links, "note")} link to it` } })),
        ...L.loops.map((lp, i) => ({ at: round(bearing(i), 13.5, 4), r: 2.4, key: { kind: "loop", id: lp.cluster, tip: `${lp.name} · ${plural(lp.edited, "note")} edited · pick to see only this topic` } }))],
      click(key) { if (key.kind === "note") onOpen(key.id); else if (key.kind === "loop") filter(key.id); },
      update() {},
      stat,
      today: () => (L.control[0] ? { text: `${name(L.control[0].id)} is stale and ${plural(L.control[0].links, "note")} link to it.`, label: "Open note", run: () => onOpen(L.control[0].id) } : null),
      api: { layout: () => L, filter, only: () => only },
      dispose() { if (model) scrap(stage.scene, model); },
    };
  },
};
