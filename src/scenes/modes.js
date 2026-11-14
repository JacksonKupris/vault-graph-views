// Normal modes: the vault as a drum skin, ringing. Notes are masses on a stretched sheet, written links are springs, and the sheet
// vibrates in the shapes the links allow (the eigenvectors of the graph Laplacian). Amber swings up while blue swings down; the
// dark line between them is a nodal line, which does not move. Mode 1 is the cleanest cut of the vault into two halves.
//   data.nodes[] the rest as importance needs · data.links the written links (kind "link")
//   inputs.selected the host's selected note · onOpen(id) a note · onAction("graph")
// The maths is modes.js; this only draws it.
import { InstancedMesh, SphereGeometry, MeshStandardMaterial, Matrix4, Color, PlaneGeometry, Mesh, BufferGeometry, BufferAttribute, LineSegments, LineBasicMaterial, DoubleSide, Float32BufferAttribute } from "three";
import { modeInsights } from "../insights.js";
import { plural, clip } from "../text.js";
import { vaultModes, halves } from "../modes.js";

export const UP = "#f59e0b", DOWN = "#38bdf8", RISE = 6, SWING = 0.18, GRID = 44;

export const modes = {
  id: "modes", name: "Normal modes", hint: "How the vault would ring: its natural cuts into halves",
  home: { yaw: 0.7, pitch: 0.8, dist: 50, min: 14, max: 110 }, stage: { fog: [40, 100] },
  actions: ["graph"],
  build({ stage, frame, data, inputs, onOpen, onAction, theme, invalidate }) {
    const V = vaultModes(data.nodes, data.links, { max: 80 }), n = V.ids.length;
    if (!V.modes.length) {
      const stat = () => plural(n, "linked note");
      frame.stat(stat());
      frame.controls({ at: "centre", lines: ["Normal modes needs a set of notes joined by written links.", `${plural(n, "note")} joined so far.`], buttons: [{ label: "Open the graph", title: "Open the graph", run: () => onAction("graph") }] });
      return { targets: () => [], click() {}, update() {}, stat, today: () => null, api: { empty: true } };
    }
    const byId = new Map(data.nodes.map(x => [x.id, x])), name = i => byId.get(V.ids[i]).name, at = new Map(V.ids.map((id, i) => [id, i]));
    const up = new Color(UP), down = new Color(DOWN), still = new Color(theme.bg).lerp(new Color(theme.muted), 0.12), m = new Matrix4(), col = new Color();
    const add = o => { stage.scene.add(o); return o; };
    const xs = V.pos.map(p => p[0]), zs = V.pos.map(p => p[1]), pad = 2, x0 = Math.min(...xs) - pad, x1 = Math.max(...xs) + pad, z0 = Math.min(...zs) - pad, z1 = Math.max(...zs) + pad;
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, spanX = x1 - x0, spanZ = z1 - z0;
    const place = i => [V.pos[i][0] - cx, V.pos[i][1] - cz];
    // the camera backs off to fit a long layout, so a fixed swing would look flat from there (a phone, a thin vault): it grows with the long side
    const rise = Math.max(RISE, SWING * Math.max(spanX, spanZ));

    // the sheet: a grid whose height at each point is the mode's swing there, blended from the notes round it (nearer counts more)
    const sheet = new PlaneGeometry(spanX, spanZ, GRID, GRID).rotateX(-Math.PI / 2), vcount = sheet.attributes.position.count;
    const W = new Float32Array(vcount * n);
    for (let g = 0; g < vcount; g++) {
      const gx = sheet.attributes.position.getX(g), gz = sheet.attributes.position.getZ(g); let s = 0;
      for (let i = 0; i < n; i++) { const [px, pz] = place(i), w = 1 / ((gx - px) ** 2 + (gz - pz) ** 2 + 4); W[g * n + i] = w; s += w; }
      for (let i = 0; i < n; i++) W[g * n + i] /= s;
    }
    sheet.setAttribute("color", new Float32BufferAttribute(new Float32Array(vcount * 3), 3));
    const skin = add(new Mesh(sheet, new MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0.05, side: DoubleSide, transparent: true, opacity: 0.9 })));
    const mesh = add(new Mesh(sheet, new MeshStandardMaterial({ color: theme.fg, wireframe: true, transparent: true, opacity: 0.12 })));
    const beads = add(new InstancedMesh(new SphereGeometry(1, 16, 12), new MeshStandardMaterial({ roughness: 0.4 }), n));
    const springs = new BufferGeometry(); springs.setAttribute("position", new BufferAttribute(new Float32Array(V.bars.length * 6), 3));
    const wire = add(new LineSegments(springs, new LineBasicMaterial({ color: theme.fg, transparent: true, opacity: 0.55 })));
    wire.frustumCulled = beads.frustumCulled = skin.frustumCulled = mesh.frustumCulled = false;
    const size = i => 0.4 + (i < 6 ? 0.2 : 0);   // the most important notes are a little bigger

    const reduced = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    let touching = false, settle = 0, k = 0, playing = !reduced, phase = reduced ? 0.25 : 0, last = null, selected = inputs.selected && at.has(inputs.selected) ? at.get(inputs.selected) : null, hovered = null;
    const mode = () => V.modes[k], sway = () => Math.sin(phase * 2 * Math.PI), height = new Float64Array(n);
    const split = () => halves(mode().vector);
    const swing = i => mode().vector[i];
    const stat = () => {
      const f = hovered != null ? hovered : selected;
      if (f != null) return `${name(f)} · ${Math.abs(swing(f)) < 0.05 ? "on a nodal line" : swing(f) > 0 ? "swings up" : "swings down"} ${Math.abs(swing(f)).toFixed(2)} in mode ${k + 1}`;
      const h = split();
      return `Mode ${k + 1} of ${V.modes.length} · ${h.up.length} up, ${h.down.length} down · frequency ${mode().freq.toFixed(2)}`;
    };
    function controls() {
      const h = split(), lines = [k === 0 ? "The cleanest cut of the vault into two halves" : `${plural(h.up.length, "note")} swinging up, ${plural(h.down.length, "note")} down, ${plural(h.rest.length, "note")} on a nodal line`];
      frame.controls({ lines, buttons: [
        { label: "◀", title: "Previous mode (slower)", off: k === 0, run: () => setMode(k - 1) },
        { label: `Mode ${k + 1}`, title: "Back to mode 1, the slowest", run: () => setMode(0) },
        { label: "▶", title: "Next mode (faster)", off: k === V.modes.length - 1, run: () => setMode(k + 1) },
        { label: playing ? "Hold" : "Ring", title: playing ? "Hold the sheet still" : "Let the sheet ring", run: () => { playing = !playing; last = null; controls(); invalidate(); } },
      ] });
    }
    function labels() {
      const out = [], v = mode().vector, hi = v.indexOf(Math.max(...v)), lo = v.indexOf(Math.min(...v)), f = hovered != null ? hovered : selected;
      const tag = (i, text, color) => out.push({ text: clip(text, 34), at: [place(i)[0], 0, place(i)[1]], dy: -14, color });
      if (f != null) out.push({ text: clip(name(f), 34), at: [place(f)[0], 0, place(f)[1]], strong: true, dy: -18, run: () => open(f), title: `Open ${name(f)}` });
      else { tag(hi, name(hi), UP); if (lo !== hi) tag(lo, name(lo), DOWN); }
      frame.labels(out);
    }
    function paintStill() {   // what depends on the mode and not on the time: the sheet's colours and the notes' colours
      const v = mode().vector, colors = sheet.attributes.color;
      for (let g = 0; g < vcount; g++) {
        let s = 0; for (let i = 0; i < n; i++) s += W[g * n + i] * v[i];
        col.copy(still).lerp(s >= 0 ? up : down, Math.min(1, Math.abs(s) ** 0.8 * 1.25)); colors.setXYZ(g, col.r, col.g, col.b);
      }
      colors.needsUpdate = true; refresh();
    }
    function explain() {
      const I = modeInsights({ bars: V.bars, vector: mode().vector, freq: mode().freq, k, count: V.modes.length }, name);
      frame.explain({ plain: I.plain, about: I.about, legend: [{ color: UP, text: "swings up" }, { color: DOWN, text: "swings down" }, { color: theme.muted, text: "nodal line, still" }],
        insights: I.insights.map(it => ({ text: it.text, label: it.label, run: () => { if (it.note != null) open(it.note); else { selected = null; setMode(k); } } })) });
    }
    function refresh() { labels(); frame.stat(stat()); }
    function shape() {   // what depends on the time: heights
      const v = mode().vector, s = sway(), pos = sheet.attributes.position;
      for (let g = 0; g < vcount; g++) { let h = 0; for (let i = 0; i < n; i++) h += W[g * n + i] * v[i]; pos.setY(g, h * rise * s); }
      pos.needsUpdate = true; sheet.computeVertexNormals();
      const sp = springs.attributes.position;
      for (let i = 0; i < n; i++) height[i] = v[i] * rise * s;
      V.bars.forEach(([i, j], b) => { const [ax, az] = place(i), [bx, bz] = place(j); sp.setXYZ(2 * b, ax, height[i] + 0.05, az); sp.setXYZ(2 * b + 1, bx, height[j] + 0.05, bz); });
      sp.needsUpdate = true;
      for (let i = 0; i < n; i++) {
        const [x, z] = place(i), f = i === (hovered != null ? hovered : selected), r = size(i) * (f ? 1.5 : 1);
        m.makeScale(r, r, r).setPosition(x, height[i] + r * 0.6, z); beads.setMatrixAt(i, m);
        col.copy(still).lerp(v[i] >= 0 ? up : down, Math.min(1, Math.abs(v[i]) ** 0.8 * 1.25 + 0.25)); if (f) col.set(theme.fg); beads.setColorAt(i, col);
      }
      beads.instanceMatrix.needsUpdate = true; if (beads.instanceColor) beads.instanceColor.needsUpdate = true;
    }
    function setMode(next) { k = Math.max(0, Math.min(V.modes.length - 1, next)); paintStill(); explain(); controls(); shape(); invalidate(); }
    function open(i) { selected = i; refresh(); shape(); invalidate(); onOpen(V.ids[i]); }
    const targets = () => V.ids.map((id, i) => { const [x, z] = place(i); return { at: [x, height[i] + 0.4, z], r: size(i) * 1.2, key: { kind: "note", id, tip: `${name(i)} · ${Math.abs(swing(i)) < 0.05 ? "still" : swing(i) > 0 ? "up" : "down"} ${Math.abs(swing(i)).toFixed(2)}` } }; });
    // a note moving under a finger is hard to hit: the sheet holds while a finger or the mouse is down, and rings again a moment after
    const down_ = () => { touching = true; clearTimeout(settle); }, up_ = () => { clearTimeout(settle); settle = setTimeout(() => { touching = false; last = null; invalidate(); }, 1500); };
    stage.canvas.addEventListener("pointerdown", down_, true); addEventListener("pointerup", up_); addEventListener("pointercancel", up_);
    explain(); paintStill(); controls(); shape();
    return {
      targets,
      click(key) { if (key.kind === "note") open(at.get(key.id)); },
      hover(key) { const h = key && key.kind === "note" ? at.get(key.id) : null; if (h !== hovered) { hovered = h; refresh(); shape(); } },
      update(next) { if ("selected" in next) { selected = next.selected && at.has(next.selected) ? at.get(next.selected) : null; refresh(); shape(); } },
      frame() {
        if (playing && !touching) { const now = performance.now(); if (last != null) phase = (phase + ((now - last) / 1000) * 0.5 * Math.min(2.2, 0.45 + mode().freq * 0.8)) % 1; last = now; shape(); invalidate(); } else last = null;
      },
      stat,
      today: () => { const h = halves(V.modes[0].vector); return { text: `The vault's cleanest cut is ${h.up.length} notes against ${h.down.length}`, label: "Show it", run: () => { selected = null; setMode(0); } }; },
      api: {
        modes: () => V.modes, ids: () => V.ids, mode: () => k, setMode, playing: () => playing, moving: () => playing && !touching, hold(p) { playing = false; if (p != null) phase = p; shape(); controls(); invalidate(); },
        span: () => Math.max(spanX, spanZ), rise: () => rise, selected: () => (selected == null ? null : V.ids[selected]), heights: () => Array.from(height), sheetHeights: () => Array.from(sheet.attributes.position.array.filter((_, i) => i % 3 === 1)), split,
      },
      dispose() { clearTimeout(settle); stage.canvas.removeEventListener("pointerdown", down_, true); removeEventListener("pointerup", up_); removeEventListener("pointercancel", up_); for (const o of [skin, mesh, beads, wire]) o.material.dispose(); sheet.dispose(); springs.dispose(); },
    };
  },
};
