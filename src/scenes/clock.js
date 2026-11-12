// Heat clock: when each topic comes up in your daily notes. Two dials, the days of the week and the months of the year. Each ring is a
// topic (the busiest outside) and each cell is one weekday or month: the hotter and, tilted, the taller, the more mentions then.
// A yellow hand marks right now. It is a flat view: it opens looking straight down, a drag slides it, Tilt lifts the cells.
//   data.rhythm       { [clusterId]: { wd: [7 counts, Monday first], mo: [12 counts, January first] } } (what the plugin's engine writes)
//   data.nodes[]      cluster, inlinks, outlinks (the busiest note of a topic is the one to open from its ring)
//   inputs.now        a Date, for tests; today when left out
//   onOpen(id) a note · onAction("graph") when there is no rhythm to show
import { Mesh, BufferGeometry, Float32BufferAttribute, MeshBasicMaterial, LineSegments, LineBasicMaterial, SphereGeometry, Color, DoubleSide } from "three";
import { special } from "../notes.js";
import { plural, clip } from "../text.js";

export const WD = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], MO = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const RING0 = 3.2, STEP = 1.5, THICK = 1.2, HMAX = 2.2, MAX_RINGS = 12, MIN_MENTIONS = 3, NOW = "#fde047";
const DIALS = [{ key: "wd", n: 7, name: "WEEK", labels: WD }, { key: "mo", n: 12, name: "YEAR", labels: MO }];
const ang = (s, n) => (s / n) * 2 * Math.PI - Math.PI / 2;

// Where everything stands. Pure (no GPU), so tests check it.
//   rings [{ cluster, name, tot, wd, mo }] busiest last (outermost) · dials [{ key, n, name, labels, centre [x, z], totals, peak }]
//   cells [{ dial, ring, s, v, t (share of the ring's busiest slot), cluster, a0, a1, r0, r1, h }] · rOut · now { wd, mo, frac { wd, mo } }
export function clockLayout(data, now = new Date(), vertical = false) {
  const names = new Map(data.clusters.map(c => [c.id, c.name]));
  const rings = Object.entries(data.rhythm || {}).map(([c, v]) => ({ cluster: +c, name: names.get(+c) || "No topic", wd: v.wd, mo: v.mo, tot: v.wd.reduce((a, b) => a + b, 0) }))
    .filter(r => r.tot >= MIN_MENTIONS && names.has(r.cluster)).sort((a, b) => a.tot - b.tot || a.cluster - b.cluster).slice(-MAX_RINGS);
  const rOut = RING0 + rings.length * STEP, off = rOut + 3;
  const dials = DIALS.map((d, i) => {
    const totals = new Array(d.n).fill(0); rings.forEach(r => r[d.key].forEach((v, s) => { totals[s] += v; }));
    const c = (i ? 1 : -1) * off;
    return { ...d, centre: vertical ? [0, c] : [c, 0], totals, peak: totals.indexOf(Math.max(...totals)) };
  });
  const cells = [];
  dials.forEach((d, di) => rings.forEach((r, ri) => { const mx = Math.max(1, ...r[d.key]);
    for (let s = 0; s < d.n; s++) { const v = r[d.key][s], t = v / mx; cells.push({ dial: di, ring: ri, s, v, t, cluster: r.cluster, a0: ang(s, d.n), a1: ang(s + 1, d.n), r0: RING0 + ri * STEP, r1: RING0 + ri * STEP + THICK, h: v ? 0.15 + HMAX * t : 0.04 }); } }));
  const wd = (now.getDay() + 6) % 7, dim = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(), mo = now.getMonth();
  return { rings, dials, cells, rOut, now: { wd, mo, frac: { wd: (wd + (now.getHours() + now.getMinutes() / 60) / 24) / 7, mo: (mo + (now.getDate() - 1 + now.getHours() / 24) / dim) / 12 } } };
}

// the busiest weekday and month of one ring (the first when two tie)
export const peakOf = (r, key) => r[key].indexOf(Math.max(...r[key]));

export const clock = {
  id: "clock", name: "Heat clock", hint: "When each topic comes up: weekday and month dials, hotter = more mentions",
  home: { yaw: 0, pitch: 1.5, dist: 60, min: 20, max: 140, minPitch: 0.55, maxPitch: 1.5, pan: true }, stage: { fog: false, ambient: 1 },
  actions: ["graph"],
  build({ stage, frame, orbit, data, inputs, onOpen, onAction, theme, invalidate }) {
    const vertical = (stage.camera.aspect || 1) < 1, L = clockLayout(data, inputs.now || new Date(), vertical), add = o => { stage.scene.add(o); return o; };
    if (L.rings.length < 1) {
      const stat = () => "No weekday or month pattern yet";
      frame.stat(stat());
      frame.controls({ at: "centre", lines: ["The Heat clock shows when each topic comes up in your daily notes.", "There is no pattern to show yet."], buttons: [{ label: "Open the graph", title: "Open the graph", run: () => onAction("graph") }] });
      return { targets: () => [], click() {}, update() {}, stat, today: () => null, api: { empty: true } };
    }
    const colorOf = c => theme.palette[Math.max(0, data.clusters.findIndex(k => k.id === c)) % theme.palette.length];
    const base = new Color("#1f2933"), idle = new Color("#1a2027"), tint = new Color(), col = new Color();
    const at = (d, a, r) => [d.centre[0] + Math.cos(a) * r, d.centre[1] + Math.sin(a) * r];

    // one geometry for every cell: a prism per cell (top, outer and inner wall, two sides), coloured per vertex so a focus can dim the rest
    const pos = [], ranges = [], segs = d => (d.n === 7 ? 3 : 2);
    const tri = (...p) => { for (const q of p) pos.push(q[0], q[1], q[2]); };
    for (const c of L.cells) {
      const d = L.dials[c.dial], start = pos.length / 3, n = segs(d), step = (c.a1 - c.a0) / n, pad = 0.012;
      const P = (a, r, y) => { const [x, z] = at(d, a, r); return [x, y, z]; };
      for (let k = 0; k < n; k++) {
        const a = c.a0 + k * step + (k === 0 ? pad : 0), b = c.a0 + (k + 1) * step - (k === n - 1 ? pad : 0);
        tri(P(a, c.r0, c.h), P(b, c.r0, c.h), P(b, c.r1, c.h), P(a, c.r0, c.h), P(b, c.r1, c.h), P(a, c.r1, c.h));
        tri(P(a, c.r1, 0), P(b, c.r1, 0), P(b, c.r1, c.h), P(a, c.r1, 0), P(b, c.r1, c.h), P(a, c.r1, c.h));
        tri(P(a, c.r0, 0), P(b, c.r0, c.h), P(b, c.r0, 0), P(a, c.r0, 0), P(a, c.r0, c.h), P(b, c.r0, c.h));
      }
      const a = c.a0 + pad, b = c.a1 - pad;
      tri(P(a, c.r0, 0), P(a, c.r1, 0), P(a, c.r1, c.h), P(a, c.r0, 0), P(a, c.r1, c.h), P(a, c.r0, c.h));
      tri(P(b, c.r0, 0), P(b, c.r1, c.h), P(b, c.r1, 0), P(b, c.r0, 0), P(b, c.r0, c.h), P(b, c.r1, c.h));
      ranges.push([start, pos.length / 3 - start, n * 6]);   // first vertex, count, the vertices of the top (drawn brightest)
    }
    const geo = new BufferGeometry().setAttribute("position", new Float32BufferAttribute(pos, 3)), colours = new Float32BufferAttribute(new Float32Array(pos.length), 3);
    geo.setAttribute("color", colours);
    add(new Mesh(geo, new MeshBasicMaterial({ vertexColors: true, side: DoubleSide }))).frustumCulled = false;

    // the hands: right now, on each dial, and the slice it falls in
    const hand = [], slot = [];
    L.dials.forEach(d => {
      const f = L.now.frac[d.key], a = ang(f * d.n, d.n), s = L.now[d.key], r0 = RING0 - 0.6, r1 = L.rOut + 0.4;
      const [x0, z0] = at(d, a, r0), [x1, z1] = at(d, a, r1); hand.push(x0, 0.3, z0, x1, 0.3, z1);
      for (const e of [ang(s, d.n), ang(s + 1, d.n)]) { const [p, q] = at(d, e, r0), [u, v] = at(d, e, r1); slot.push(p, 0.3, q, u, 0.3, v); }
    });
    const line = (pts, opacity) => { const g = new BufferGeometry().setAttribute("position", new Float32BufferAttribute(pts, 3)); return add(new LineSegments(g, new LineBasicMaterial({ color: NOW, transparent: true, opacity }))); };
    line(hand, 1); line(slot, 0.55);
    L.dials.forEach(d => { const a = ang(L.now.frac[d.key] * d.n, d.n), [x, z] = at(d, a, L.rOut + 0.4); add(new Mesh(new SphereGeometry(0.4, 12, 8), new MeshBasicMaterial({ color: NOW }))).position.set(x, 0.3, z); });

    const byRing = new Map(L.rings.map(r => [r.cluster, r])), notesOf = c => data.nodes.filter(n => n.cluster === c && !special(n)).sort((a, b) => (b.inlinks + b.outlinks) - (a.inlinks + a.outlinks) || (a.id < b.id ? -1 : 1));
    let focus = null, hovered = null;
    const slotName = c => L.dials[c.dial].labels[c.s], share = c => Math.round((100 * c.v) / Math.max(1, byRing.get(c.cluster).tot));
    const cellOf = new Map(L.cells.map((c, i) => [`${c.dial}:${c.ring}:${c.s}`, i]));
    const stat = () => {
      const h = hovered != null && L.cells[hovered];
      if (h) return `${clip(byRing.get(h.cluster).name, 28)} · ${slotName(h)} · ${plural(h.v, "mention")}`;
      if (focus != null) { const r = byRing.get(focus); return `${clip(r.name, 28)} · busiest ${WD[peakOf(r, "wd")]} · ${MO[peakOf(r, "mo")]} · ${plural(r.tot, "mention")}`; }
      return `${plural(L.rings.length, "topic")} · busiest ${L.dials[0].labels[L.dials[0].peak]} · ${L.dials[1].labels[L.dials[1].peak]}`;
    };
    function paint() {
      const arr = colours.array;
      L.cells.forEach((c, i) => {
        const on = focus == null || c.cluster === focus, [start, count, top] = ranges[i], hot = i === hovered;
        if (c.v) col.copy(base).lerp(tint.set(colorOf(c.cluster)), 0.15 + 0.85 * c.t); else col.copy(idle);
        if (!on) col.multiplyScalar(0.3);
        if (hot) col.lerp(tint.set(theme.fg), 0.35);
        for (let v = 0; v < count; v++) { const k = v < top ? 1 : 0.62; arr[(start + v) * 3] = col.r * k; arr[(start + v) * 3 + 1] = col.g * k; arr[(start + v) * 3 + 2] = col.b * k; }
      });
      colours.needsUpdate = true;
      const labels = [];
      L.dials.forEach(d => {
        d.labels.forEach((t, s) => { const a = (ang(s, d.n) + ang(s + 1, d.n)) / 2, [x, z] = at(d, a, L.rOut + 1.6); labels.push({ text: t, at: [x, 0, z], color: s === L.now[d.key] ? NOW : "#e2e8f0" }); });
        labels.push({ text: d.name, at: [d.centre[0], 0, d.centre[1]], dy: -8, color: "#94a3b8" }, { text: `busiest: ${d.labels[d.peak]}`, at: [d.centre[0], 0, d.centre[1]], dy: 8, color: "#f8fafc" });
      });
      if (focus != null) { const n = notesOf(focus)[0], r = byRing.get(focus), d = L.dials[0], ri = L.rings.indexOf(r), [x, z] = at(d, ang(0, 7), RING0 + ri * STEP + THICK / 2); labels.push({ text: clip(r.name, 26), at: [x, 0.5, z], strong: true, dy: -10, ...(n ? { run: () => onOpen(n.id), title: `Open ${n.name}` } : {}) }); }
      frame.labels(labels); frame.stat(stat());
    }
    function pick(c) { focus = focus === c ? null : c; paint(); controls(); invalidate(); }
    const concentrated = L.rings.filter(r => r.tot >= 10).map(r => ({ r, k: Math.max(...r.wd) / r.tot })).sort((a, b) => b.k - a.k)[0];
    const insights = [];
    insights.push({ text: `Mentions peak on ${L.dials[0].labels[L.dials[0].peak]} and in ${L.dials[1].labels[L.dials[1].peak]}.`, label: "Busiest topic", run: () => pick(L.rings[L.rings.length - 1].cluster) });
    if (concentrated && concentrated.k > 0.3) insights.push({ text: `${concentrated.r.name} clusters on ${WD[peakOf(concentrated.r, "wd")]}: ${Math.round(concentrated.k * 100)}% of its mentions.`, label: "Show its ring", run: () => pick(concentrated.r.cluster) });
    frame.explain({
      plain: "Picture two clock faces. One is a week, one is a year, and each topic is a ring on both. A cell glows when that topic comes up in your daily notes on that weekday or in that month.",
      about: "Each ring is a topic, the busiest outside. A cell's heat, and its height when you tilt, is that topic's share of its own mentions that fall on that weekday or month, so a bright cell is where the topic peaks. It counts mentions in daily notes, not hours worked. The yellow hand is right now.",
      legend: [{ color: theme.fg, text: "bright, tall cell: the topic's busiest weekday or month" }, { color: "#1f2933", text: "dark cell: rarely" }, { color: NOW, text: "now" }], insights,
    });
    function controls() {
      const n = focus != null ? notesOf(focus)[0] : null;
      frame.controls({ lines: [focus != null ? `${byRing.get(focus).name}` : "Pick a ring to see its topic"], buttons: [
        ...(n ? [{ label: `Open ${clip(n.name, 18)}`, title: `Open ${n.name}, the topic's most linked note`, run: () => onOpen(n.id) }] : []),
        ...(focus != null ? [{ label: "Clear", title: "Show every topic again", run: () => pick(focus) }] : []),
        { label: orbit.tilted ? "Flat" : "Tilt", title: orbit.tilted ? "Look straight down again" : "Tilt into 3D: a cell is as tall as its heat", run: () => { orbit.tilt(); controls(); } }] });
    }
    controls(); paint();
    const top = L.rings[L.rings.length - 1];
    return {
      targets: () => L.cells.map((c, i) => { const d = L.dials[c.dial], a = (c.a0 + c.a1) / 2, [x, z] = at(d, a, (c.r0 + c.r1) / 2), arc = ((c.a1 - c.a0) * (c.r0 + c.r1)) / 2;
        return { at: [x, c.h / 2, z], r: Math.max(0.55, Math.min(STEP * 0.6, arc * 0.4)), key: { kind: "ring", id: c.cluster, cell: i, tip: `${byRing.get(c.cluster).name} · ${slotName(c)} · ${plural(c.v, "mention")} (${share(c)}%)` } }; }),
      click(k) { if (k.kind === "ring") pick(k.id); },
      hover(k) { const h = k && k.kind === "ring" ? k.cell : null; if (h !== hovered) { hovered = h; paint(); } },
      update() {},
      stat,
      today() {
        const w = L.now.wd, best = L.rings.map(r => ({ r, k: r.wd[w] / r.tot })).sort((a, b) => b.k - a.k)[0], n = best && notesOf(best.r.cluster)[0];
        return best && best.k > 0 ? { text: `It is ${WD[w]}: ${clip(best.r.name, 30)} usually comes up most on this day (${Math.round(best.k * 100)}% of its mentions)`, label: n ? "Open note" : "Show ring", run: () => (n ? onOpen(n.id) : pick(best.r.cluster)) } : null;
      },
      api: { layout: () => L, focus: () => focus, hovered: () => hovered, tilted: () => orbit.tilted, rings: () => L.rings.length, cells: () => L.cells.length, vertical: () => vertical, cell: (d, r, s) => cellOf.get(`${d}:${r}:${s}`), top: () => top && top.cluster },
      dispose() {},
    };
  },
};
