// Slime mould network: tubes between notes grow thick where flow between the hubs is high and thin where it is not, leaving the
// efficient backbone of the written links (the Physarum solver). Press Play to watch it grow from tubes of equal width.
//   data.nodes[] the rest as importance needs · data.links the written links (kind "link")
//   inputs.selected the host's selected note · onOpen(id) a note · onAction("graph")
// The maths is physarum.js; this only draws it.
import { InstancedMesh, SphereGeometry, CylinderGeometry, MeshStandardMaterial, Matrix4, Color, Vector3, Quaternion } from "three";
import { slimeInsights } from "../insights.js";
import { plural, clip } from "../text.js";
import { vaultSlime } from "../physarum.js";

export const FRAMES_PER_SECOND = 8, CARRY = 0.1;

export const slime = {
  id: "slime", name: "Slime mould", hint: "Which written links carry the vault, and which fade away",
  home: { yaw: 0.6, pitch: 0.75, dist: 46, min: 14, max: 110 }, stage: { fog: [40, 100] },
  actions: ["graph"],
  build({ stage, frame, data, inputs, onOpen, onAction, theme, invalidate }) {
    const S = vaultSlime(data.nodes, data.links, { max: 80 }), n = S.ids.length, T = S.frames.length - 1;
    if (n < 3 || S.hubs.length < 2) {
      const stat = () => plural(n, "linked note");
      frame.stat(stat());
      frame.controls({ at: "centre", lines: ["Slime mould needs a set of notes joined by written links.", `${plural(n, "note")} joined so far.`], buttons: [{ label: "Open the graph", title: "Open the graph", run: () => onAction("graph") }] });
      return { targets: () => [], click() {}, update() {}, stat, today: () => null, api: { empty: true } };
    }
    const byId = new Map(data.nodes.map(x => [x.id, x])), name = i => byId.get(S.ids[i]).name, at = new Map(S.ids.map((id, i) => [id, i]));
    const hub = new Set(S.hubs), peak = Math.max(...S.D, 1e-12), add = o => { stage.scene.add(o); return o; };
    const xs = S.pos.map(p => p[0]), zs = S.pos.map(p => p[1]), cx = (Math.min(...xs) + Math.max(...xs)) / 2, cz = (Math.min(...zs) + Math.max(...zs)) / 2;
    // the layout is drawn at one size whatever the vault's: its farthest note sits RADIUS from the middle, so it fits the first view
    const RADIUS = 20, reach = Math.max(1e-9, ...S.pos.map(p => Math.hypot(p[0] - cx, p[1] - cz))), fit = RADIUS / reach;
    const place = i => [(S.pos[i][0] - cx) * fit, (S.pos[i][1] - cz) * fit];
    // a note rises with the flow through it, so the backbone stands up as a ridge and the faded links lie in the valley
    const RISE = 9, high = new Float64Array(n), pins = [], lift = i => [place(i)[0], high[i], place(i)[1]];
    const heights = () => { const through = new Float64Array(n); S.bars.forEach(([i, j], e) => { const w = current[e] / peak; through[i] += w; through[j] += w; }); const top = Math.max(...through, 1e-9); for (let i = 0; i < n; i++) high[i] = RISE * Math.sqrt(through[i] / top) * (hub.has(i) ? 1 : 0.85); };
    const m = new Matrix4(), col = new Color(), faded = new Color(theme.bg).lerp(new Color(theme.muted), 0.55), carry = new Color("#f59e0b"), food = new Color(theme.accent || "#38bdf8"), ink = new Color(theme.fg);
    const up = new Vector3(0, 1, 0), dir = new Vector3(), mid = new Vector3(), q = new Quaternion(), sc = new Vector3();
    const tubes = add(new InstancedMesh(new CylinderGeometry(1, 1, 1, 10, 1), new MeshStandardMaterial({ roughness: 0.5 }), S.bars.length));
    const beads = add(new InstancedMesh(new SphereGeometry(1, 16, 12), new MeshStandardMaterial({ roughness: 0.4 }), n));
    tubes.frustumCulled = beads.frustumCulled = false;
    const reduced = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    let t = reduced ? T : 0, playing = !reduced, last = null, selected = inputs.selected && at.has(inputs.selected) ? at.get(inputs.selected) : null, hovered = null;
    const widths = () => { const a = S.frames[Math.floor(t)], b = S.frames[Math.min(T, Math.floor(t) + 1)], f = t - Math.floor(t); return Array.from(a, (x, e) => x + (b[e] - x) * f); };
    const carrying = w => w.filter(x => x / peak >= CARRY).length;
    const size = i => (hub.has(i) ? 0.75 : 0.4);
    let current = widths(); heights();
    const stat = () => {
      const f = hovered != null ? hovered : selected;
      if (f != null) { const own = S.bars.map((b, e) => (b[0] === f || b[1] === f ? e : -1)).filter(e => e >= 0), keep = own.filter(e => current[e] / peak >= CARRY).length; return `${name(f)} · ${hub.has(f) ? "hub · " : ""}${keep} of ${plural(own.length, "link")} carry on`; }
      return `${carrying(current)} of ${plural(S.bars.length, "link")} carry on · fed by ${S.hubs.length} hubs · step ${Math.round(t)} of ${T}`;
    };
    function controls() {
      const done = t >= T;
      frame.controls({ lines: [done ? "The links that carry flow between the hubs" : "Tubes thicken where flow is high and thin where it is not"], buttons: [
        { label: playing && !done ? "Hold" : done ? "Grow again" : "Play", title: playing && !done ? "Hold the growth" : done ? "Start again from tubes of equal width" : "Let the mould grow", run: () => { if (t >= T) t = 0; playing = !(playing && !done); last = null; refresh(); invalidate(); } },
        { label: "Start", title: "Back to tubes of equal width", off: t === 0, run: () => { t = 0; playing = false; last = null; refresh(); invalidate(); } },
        { label: "End", title: "Jump to the finished backbone", off: t >= T, run: () => { t = T; playing = false; refresh(); invalidate(); } },
      ] });
    }
    function labels() {
      const out = [], f = hovered != null ? hovered : selected; pins.length = 0;
      const pin = (i, l) => { l.at = lift(i); pins.push([i, l.at]); out.push(l); };   // shape() moves the point as the note rises
      for (const i of S.hubs.slice(0, 4)) if (i !== f) pin(i, { text: clip(name(i), 30), dy: -16, color: theme.accent });
      if (f != null) pin(f, { text: clip(name(f), 34), strong: true, dy: -20, run: () => open(f), title: `Open ${name(f)}` });
      frame.labels(out);
    }
    function refresh() { current = widths(); shape(); labels(); controls(); frame.stat(stat()); }
    function shape() {
      heights();
      S.bars.forEach(([i, j], e) => {
        const [ax, ay, az] = lift(i), [bx, by, bz] = lift(j), w = Math.min(1, current[e] / peak), r = 0.05 + 0.4 * Math.sqrt(w);
        dir.set(bx - ax, by - ay, bz - az); const len = dir.length() || 1e-6; dir.normalize(); mid.set((ax + bx) / 2, (ay + by) / 2, (az + bz) / 2);
        q.setFromUnitVectors(up, dir); sc.set(r, len, r); m.compose(mid, q, sc); tubes.setMatrixAt(e, m);
        col.copy(faded).lerp(carry, Math.min(1, Math.sqrt(w) * 1.1)); tubes.setColorAt(e, col);
      });
      tubes.instanceMatrix.needsUpdate = true; if (tubes.instanceColor) tubes.instanceColor.needsUpdate = true;
      for (let i = 0; i < n; i++) {
        const [x, y, z] = lift(i), f = i === (hovered != null ? hovered : selected), r = size(i) * (f ? 1.4 : 1);
        m.makeScale(r, r, r).setPosition(x, y, z); beads.setMatrixAt(i, m);
        col.copy(hub.has(i) ? food : faded).lerp(ink, hub.has(i) ? 0 : 0.35); if (f) col.copy(ink); beads.setColorAt(i, col);
      }
      for (const [i, a] of pins) a[1] = high[i];
      beads.instanceMatrix.needsUpdate = true; if (beads.instanceColor) beads.instanceColor.needsUpdate = true;
    }
    function open(i) { selected = i; refresh(); invalidate(); onOpen(S.ids[i]); }
    const targets = () => S.ids.map((id, i) => { return { at: lift(i), r: size(i) * 1.3, key: { kind: "note", id, tip: `${name(i)}${hub.has(i) ? " · hub" : ""}` } }; });
    const I = slimeInsights({ n, bars: S.bars, kept: S.kept, hubs: S.hubs, order: S.ids.map((_, i) => i) }, name);
    frame.explain({ plain: I.plain, about: I.about, legend: [{ color: "#f59e0b", text: "carries flow (higher = more)" }, { color: theme.muted, text: "fading" }, { color: theme.accent || "#38bdf8", text: "hub" }],
      insights: I.insights.map(it => ({ text: it.text, label: it.label, run: () => { if (it.note != null) open(it.note); else { selected = null; t = T; playing = false; refresh(); invalidate(); } } })) });
    refresh();
    return {
      targets,
      click(key) { if (key.kind === "note") open(at.get(key.id)); },
      hover(key) { const h = key && key.kind === "note" ? at.get(key.id) : null; if (h !== hovered) { hovered = h; refresh(); } },
      update(next) { if ("selected" in next) { selected = next.selected && at.has(next.selected) ? at.get(next.selected) : null; refresh(); } },
      frame() {
        if (playing && t < T) { const now = performance.now(); if (last != null) t = Math.min(T, t + ((now - last) / 1000) * FRAMES_PER_SECOND); last = now; if (t >= T) { playing = false; refresh(); } else { current = widths(); shape(); frame.stat(stat()); } invalidate(); } else last = null;
      },
      stat,
      today: () => ({ text: `${carrying(S.frames[T])} of ${plural(S.bars.length, "link")} carry the vault between its ${S.hubs.length} hubs`, label: "Show it", run: () => { selected = null; t = T; playing = false; refresh(); } }),
      api: {
        ids: () => S.ids, hubs: () => S.hubs.map(i => S.ids[i]), step: () => t, steps: () => T, playing: () => playing && t < T, widths: () => Array.from(current), final: () => Array.from(S.D),
        setStep(v) { t = Math.max(0, Math.min(T, v)); playing = false; refresh(); invalidate(); }, hold() { playing = false; refresh(); }, selected: () => (selected == null ? null : S.ids[selected]),
        carrying: () => carrying(current), links: () => S.bars.length,
      },
      dispose() { for (const o of [tubes, beads]) { o.material.dispose(); o.geometry.dispose(); } },
    };
  },
};
