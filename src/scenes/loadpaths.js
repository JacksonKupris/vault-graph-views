// Load paths: the vault as a truss (the direct stiffness method). Notes are joints, written links are bars, an open task is a weight
// on its note and the vault's most important notes are the ground. A bar's thickness is the force it carries; blue is pulled
// (tension), red is pushed (compression). The note that sags most and the pushed bar closest to buckling are named.
//   data.nodes[]   .tasks (open tasks), the rest as importance needs · data.links  the written links (kind "link")
//   inputs.selected the host's selected note · onOpen(id) a note · onAction("graph")
// The maths is truss.js; this only draws it.
import { InstancedMesh, SphereGeometry, CylinderGeometry, MeshStandardMaterial, Matrix4, Quaternion, Vector3, Color } from "three";
import { importanceOf } from "../notes.js";
import { plural, clip } from "../text.js";
import { solveTruss, vaultTruss, readTruss } from "../truss.js";

// how much a note resists being pushed sideways, as a share of one bar: a note on a single link would otherwise sag without limit
export const SWAY = 0.01;
export const TENSION = "#60a5fa", COMPRESSION = "#f87171";

export const loadpaths = {
  id: "loadpaths", name: "Load paths", hint: "Which links carry the vault, and which note sags first",
  home: { yaw: 0.6, pitch: 0.25, dist: 46, min: 12, max: 110 }, stage: { fog: [38, 90] },
  actions: ["graph"],
  build({ stage, frame, data, inputs, onOpen, onAction, theme, invalidate }) {
    const T = vaultTruss(data.nodes, data.links);
    if (T.ids.length < 4) {
      const stat = () => plural(T.ids.length, "linked note");
      frame.stat(stat());
      frame.controls({ at: "centre", lines: ["Load paths needs a set of notes joined by written links.", `${plural(T.ids.length, "note")} joined so far.`], buttons: [{ label: "Open the graph", title: "Open the graph", run: () => onAction("graph") }] });
      return { targets: () => [], click() {}, update() {}, stat, today: () => null, api: { empty: true } };
    }
    const S = solveTruss(T, { sway: SWAY }), R = readTruss(T, S), byId = new Map(data.nodes.map(n => [n.id, n])), importance = importanceOf(data.nodes);
    const n = T.ids.length, name = i => byId.get(T.ids[i]).name, at = new Map(T.ids.map((id, i) => [id, i]));
    const size = i => 0.3 + 0.55 * Math.sqrt(Math.max(0, importance(byId.get(T.ids[i])))), maxCarry = Math.max(...R.carry, 1e-9);
    const pal = theme.palette, m = new Matrix4(), q = new Quaternion(), col = new Color(), up = new Vector3(0, 1, 0), add = o => { stage.scene.add(o); return o; };
    const grounded = new Set(T.fixed);

    const joints = add(new InstancedMesh(new SphereGeometry(1, 16, 12), new MeshStandardMaterial({ roughness: 0.45 }), n));
    const rods = add(new InstancedMesh(new CylinderGeometry(1, 1, 1, 8, 1), new MeshStandardMaterial({ roughness: 0.6 }), Math.max(T.bars.length, 1)));
    const thick = b => 0.03 + 0.17 * Math.sqrt(R.carry[b] / maxCarry);

    let selected = inputs.selected && at.has(inputs.selected) ? at.get(inputs.selected) : null, bar = null, hovered = null;
    const barsOf = i => T.bars.map((p, b) => (p[0] === i || p[1] === i ? b : -1)).filter(b => b >= 0);
    const kind = b => (S.force[b] < 0 ? "pushed" : "pulled"), amount = b => R.carry[b].toFixed(R.carry[b] < 10 ? 2 : 1);
    const stat = () => {
      if (bar != null) return `${name(T.bars[bar][0])} – ${name(T.bars[bar][1])} · ${kind(bar)} with ${amount(bar)}`;
      const f = hovered != null ? hovered : selected;
      if (f != null) { const own = barsOf(f), load = own.reduce((s, b) => s + R.carry[b], 0); return `${name(f)} · ${grounded.has(f) ? "ground" : `sags ${R.sag[f].toFixed(2)}`} · ${plural(own.length, "bar")} carrying ${load.toFixed(1)}`; }
      return `${plural(n, "note")} · ${plural(T.bars.length, "bar")} · ${plural(T.ground.length, "ground note")} · load ${T.weight.reduce((a, b) => a + b, 0).toFixed(1)}`;
    };
    function paint() {
      const f = hovered != null ? hovered : selected, mine = new Set(f != null ? barsOf(f) : bar != null ? [bar] : []), lit = new Set(bar != null ? T.bars[bar] : []);
      for (let i = 0; i < n; i++) {
        const r = size(i) * (i === f ? 1.4 : 1);
        m.makeScale(r, r, r).setPosition(...T.pos[i]); joints.setMatrixAt(i, m);
        const dim = (f != null || bar != null) && i !== f && !lit.has(i) && !barsOf(i).some(b => mine.has(b));
        col.set(grounded.has(i) ? theme.accent : pal[(byId.get(T.ids[i]).cluster || 0) % pal.length]); if (i === f) col.set(theme.fg); if (dim) col.multiplyScalar(0.25);
        joints.setColorAt(i, col);
      }
      T.bars.forEach(([i, j], b) => {
        const a = new Vector3(...T.pos[i]), c = new Vector3(...T.pos[j]), d = c.clone().sub(a), L = d.length() || 1e-6, w = thick(b) * (mine.has(b) ? 1.6 : 1);
        q.setFromUnitVectors(up, d.normalize()); m.compose(a.add(c).multiplyScalar(0.5), q, new Vector3(w, L, w)); rods.setMatrixAt(b, m);
        col.set(S.force[b] < 0 ? COMPRESSION : TENSION); if ((f != null || bar != null) && !mine.has(b)) col.multiplyScalar(0.25);
        rods.setColorAt(b, col);
      });
      for (const o of [joints, rods]) { o.instanceMatrix.needsUpdate = true; if (o.instanceColor) o.instanceColor.needsUpdate = true; }
      const labels = [];
      const tag = (i, text, color) => labels.push({ text: clip(text, 34), at: T.pos[i], dy: -14, color });   // plain text: a button here would sit over notes and take a finger's tap
      if (f != null) labels.push({ text: clip(name(f), 34), at: T.pos[f], strong: true, dy: -18, run: () => open(f), title: `Open ${name(f)}` });
      else if (bar == null) {
        if (R.sag[R.sagging] > 0) tag(R.sagging, `${name(R.sagging)} sags most`, theme.fg);
        if (R.weakest >= 0) { const [i, j] = T.bars[R.weakest]; tag(R.sag[i] >= R.sag[j] ? i : j, "closest to buckling", COMPRESSION); }
      } else for (const i of T.bars[bar]) tag(i, name(i), theme.fg);
      frame.labels(labels); frame.stat(stat());
    }
    function open(i) { selected = i; bar = null; paint(); invalidate(); onOpen(T.ids[i]); }
    const mid = b => [0, 1, 2].map(k => (T.pos[T.bars[b][0]][k] + T.pos[T.bars[b][1]][k]) / 2);
    const targets = [...T.ids.map((id, i) => ({ at: T.pos[i], r: size(i), key: { kind: "note", id, tip: `${name(i)} · ${grounded.has(i) ? "ground" : `sags ${R.sag[i].toFixed(2)}`}` } })),
      ...T.bars.map((p, b) => ({ at: mid(b), r: Math.max(thick(b) * 2, 0.35), key: { kind: "bar", id: String(b), tip: `${name(p[0])} – ${name(p[1])} · ${kind(b)} with ${amount(b)}` } }))];
    paint();
    return {
      targets: () => targets,
      click(k) { if (k.kind === "note") open(at.get(k.id)); else if (k.kind === "bar") { bar = +k.id; selected = null; paint(); invalidate(); } },
      hover(k) { const h = k && k.kind === "note" ? at.get(k.id) : null; if (h !== hovered) { hovered = h; paint(); } },
      update(next) { if ("selected" in next) { selected = next.selected && at.has(next.selected) ? at.get(next.selected) : null; bar = null; paint(); } },
      stat,
      today: () => R.busiest < 0 ? null : { text: `${name(T.bars[R.busiest][0])} – ${name(T.bars[R.busiest][1])} carries the most (${amount(R.busiest)}), ${kind(R.busiest)}`, label: "Show it", run: () => { bar = R.busiest; selected = null; paint(); invalidate(); } },
      api: { truss: () => T, solved: () => S, read: () => R, selected: () => (selected == null ? null : T.ids[selected]), bar: () => bar, notes: () => T.ids },
      dispose() { joints.material.dispose(); rods.material.dispose(); },
    };
  },
};
