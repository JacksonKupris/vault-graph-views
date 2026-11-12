// Cyberpunk: the vault as a neon city. Each topic is a district; a note is a tower. Height is how much the vault leans on the
// note, lit windows how recently it was edited, a dark tower is stale, a pink beacon on the roof is an open task, the spire at
// a district's middle is the topic's map, and notes in no topic are stalls on the street at the front. Cars in each district's
// air lane are its activity. Pick a tower: its links arc to the towers it joins and everything else dims.
//   data.nodes[]   cluster, inlinks, mentions, bc, recent, words, age, tasks, isolated, moc
//   data.links     the links drawn as arcs from the picked tower (every kind but a wanted one)
//   inputs.selected  the host's selected note
//   onOpen(id)     a note · onAction("graph") when there are too few notes to build a city
import { Mesh, InstancedMesh, BoxGeometry, SphereGeometry, MeshBasicMaterial, BufferGeometry, Float32BufferAttribute, LineSegments, LineBasicMaterial, CanvasTexture, RepeatWrapping, SRGBColorSpace, NearestFilter, Matrix4, Color, DoubleSide } from "three";
import { importanceOf, activityOf, staleOf, special, hash } from "../notes.js";
import { districtsOf, gridDims, scatter, fromMiddle } from "../districts.js";
import { plural, clip } from "../text.js";

export const PITCH = 2.4, WINDOWS = ["#22d3ee", "#f472b6", "#facc15", "#a5f3fc"], BEACON = "#fb7185", STALL = "#facc15";
// how a note's tower is lit: 0 dark (stale), 1 dim, 2 busy
export const litLevel = (n, active, stale) => (stale(n) ? 0 : active(n) > 0.3 ? 2 : 1);

// Where everything stands. Pure (no GPU), so tests check it.
//   towers [{ n, x, z, w, h, kind: "tower"|"spire"|"stall", d (district index, -1 for a stall), level }]
//   pads [{ x, z, size, d }] · districts [{ cluster, name, notes, moc, x, z, cars }] · cell (a district's side) · front (z of the street of stalls)
export function cityLayout(data) {
  const importance = importanceOf(data.nodes), active = activityOf(data.nodes), stale = staleOf(data);
  const ds = districtsOf(data), cell = Math.max(...ds.map(d => gridDims(d.notes.length).cols), 2) * PITCH + 3;
  const { cols, rows } = gridDims(Math.max(ds.length, 1), 0.8), towers = [], pads = [], placed = new Set();
  const x0 = (-(cols - 1) * cell) / 2, z0 = (-(rows - 1) * cell) / 2;
  ds.forEach((d, i) => {
    d.x = x0 + (i % cols) * cell; d.z = z0 + Math.floor(i / cols) * cell;
    pads.push({ x: d.x, z: d.z, size: cell - 1.2, d: i });
    // the most relied-on notes stand at the district's middle, so each district has a skyline with a peak
    const spots = fromMiddle(d.notes.length);
    d.notes.forEach((n, j) => {
      const w = Math.max(0.7, Math.min(1.8, 0.35 + Math.log1p(n.words || 0) * 0.2)), h = 0.9 + 9 * Math.sqrt(Math.max(0, importance(n))), [dx, dz] = spots[j];
      towers.push({ n, x: d.x + dx * PITCH, z: d.z + dz * PITCH, w, h, kind: "tower", d: i, level: litLevel(n, active, stale) }); placed.add(n.id);
    });
    if (d.moc) {
      const top = Math.max(3, ...towers.filter(t => t.d === i).map(t => t.h));
      towers.push({ n: d.moc, x: d.x, z: d.z - cell / 2 + 1.6, w: 0.9, h: top + 3, kind: "spire", d: i, level: 2 }); placed.add(d.moc.id);
    }
    d.cars = Math.round(2 + 10 * Math.min(1, d.notes.reduce((s, n) => s + active(n), 0) / 6));
  });
  // the notes in no district stand along the street at the front, placed by their name so they stay put
  const front = z0 + (rows - 1) * cell + cell / 2 + 3, span = Math.max(cols * cell - 4, 8);
  for (const n of data.nodes) {
    if (special(n) || placed.has(n.id)) continue;
    const [u] = scatter("stall:" + n.id);
    towers.push({ n, x: x0 - cell / 2 + 2 + u * span, z: front + (hash(n.id) % 3) * 1.4, w: 0.7, h: 0.8, kind: "stall", d: -1, level: 1 });
  }
  return { towers, pads, districts: ds, cell, front, bounds: { x: [x0 - cell / 2, -x0 + cell / 2], z: [z0 - cell / 2, front + 3] } };
}

// a sheet of windows, 8 x 8 to the tile: lit ones coloured, the rest a dim pane; a tower tiles it by its size
function windows(lit) {
  const c = document.createElement("canvas"); c.width = c.height = 128;
  const g = c.getContext("2d"); g.fillStyle = "#2a2a36"; g.fillRect(0, 0, 128, 128);
  for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) {
    const h = (hash(`${lit}:${x}:${y}`) % 1000) / 1000, on = h < lit;
    g.fillStyle = on ? WINDOWS[(x + y * 3) % WINDOWS.length] : "#3a3a4a"; g.globalAlpha = on ? 0.55 + 0.45 * (h / lit) : 0.5;
    g.fillRect(x * 16 + 3, y * 16 + 3, 10, 11);
  }
  const t = new CanvasTexture(c); t.wrapS = t.wrapT = RepeatWrapping; t.colorSpace = SRGBColorSpace; t.magFilter = NearestFilter;
  return t;
}
const mix = (a, b, f) => new Color(a).lerp(new Color(b), f);

export const cyberpunk = {
  id: "cyberpunk", name: "Cyberpunk", hint: "A neon city: topics are districts, notes are towers, stale ones go dark",
  home: { yaw: 0.55, pitch: 0.38, dist: 58, min: 12, max: 140 }, stage: { fog: [55, 170], ambient: 0.4 },
  actions: ["graph"],
  build({ stage, frame, data, inputs, onOpen, onAction, theme, invalidate }) {
    const L = cityLayout(data), T = L.towers, own = T.filter(t => t.kind !== "stall");
    if (own.length < 3) {
      const stat = () => plural(T.length, "note");
      frame.stat(stat());
      frame.controls({ at: "centre", lines: ["Cyberpunk needs notes in topics, linked to one another.", `${plural(own.length, "tower")} so far.`], buttons: [{ label: "Open the graph", title: "Open the graph", run: () => onAction("graph") }] });
      return { targets: () => [], click() {}, update() {}, stat, today: () => null, api: { empty: true } };
    }
    const byId = new Map(T.map(t => [t.n.id, t])), name = t => t.n.name, add = o => { stage.scene.add(o); return o; };
    const neon = t => (t.kind === "stall" ? STALL : theme.palette[(t.n.cluster || 0) % theme.palette.length]);
    const nb = new Map(), join = (a, b) => { if (!nb.has(a)) nb.set(a, new Set()); nb.get(a).add(b); };
    for (const l of data.links) if (l.kind !== "wanted" && byId.has(l.source) && byId.has(l.target)) { join(l.source, l.target); join(l.target, l.source); }
    const reduced = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const m4 = new Matrix4();

    // the districts' streets: a dark pad tinted with the topic's colour, and the street of stalls in front
    const pads = add(new InstancedMesh(new BoxGeometry(1, 0.1, 1), new MeshBasicMaterial(), L.pads.length));
    L.pads.forEach((p, i) => { pads.setMatrixAt(i, m4.makeScale(p.size, 1, p.size).setPosition(p.x, -0.05, p.z)); pads.setColorAt(i, mix(theme.palette[L.districts[p.d].cluster % theme.palette.length], theme.bg, 0.86)); });
    const street = add(new Mesh(new BoxGeometry(L.bounds.x[1] - L.bounds.x[0], 0.1, 5), new MeshBasicMaterial({ color: mix(STALL, theme.bg, 0.9) })));
    street.position.set((L.bounds.x[0] + L.bounds.x[1]) / 2, -0.06, L.front + 0.5);

    // one mesh a lit level: the walls of every tower of that level, windows tiled by the tower's size, tinted by its district
    const parts = [0, 1, 2].map(level => {
      const list = T.filter(t => t.level === level && t.kind !== "stall"), pos = [], uv = [], idx = [];
      list.forEach(t => {
        const hw = t.w / 2, o = (hash(t.n.id) % 8) / 8;
        for (const [ax, az, bx, bz] of [[-hw, -hw, hw, -hw], [hw, -hw, hw, hw], [hw, hw, -hw, hw], [-hw, hw, -hw, -hw]]) {
          // a tile is 4 stage units, so a window is half a unit and a tower of ten units has a score of floors
          const k = pos.length / 3, run = Math.hypot(bx - ax, bz - az) / 4, rise = t.h / 4;
          pos.push(t.x + ax, 0, t.z + az, t.x + bx, 0, t.z + bz, t.x + bx, t.h, t.z + bz, t.x + ax, t.h, t.z + az);
          uv.push(o, 0, o + run, 0, o + run, rise, o, rise);
          idx.push(k, k + 1, k + 2, k, k + 2, k + 3);
        }
      });
      const geo = new BufferGeometry().setAttribute("position", new Float32BufferAttribute(pos, 3)).setAttribute("uv", new Float32BufferAttribute(uv, 2)).setAttribute("color", new Float32BufferAttribute(new Float32Array(pos.length), 3));
      geo.setIndex(idx);
      const mesh = add(new Mesh(geo, new MeshBasicMaterial({ map: windows([0.04, 0.28, 0.7][level]), vertexColors: true, side: DoubleSide })));
      mesh.frustumCulled = false;
      return { list, geo, mesh };
    });
    // each tower's top (a stall is one low box): one flat box each, in the district's neon
    const roofs = add(new InstancedMesh(new BoxGeometry(1, 1, 1), new MeshBasicMaterial(), T.length));
    roofs.frustumCulled = false;
    const tasks = T.filter(t => t.n.tasks > 0), beacons = add(new InstancedMesh(new SphereGeometry(1, 10, 8), new MeshBasicMaterial({ color: BEACON }), Math.max(tasks.length, 1)));
    beacons.count = tasks.length; beacons.frustumCulled = false;
    tasks.forEach((t, i) => beacons.setMatrixAt(i, m4.makeScale(0.28, 0.28, 0.28).setPosition(t.x, t.h + 0.35, t.z)));
    // the cars of each district's air lane
    const cars = L.districts.flatMap(d => Array.from({ length: d.cars }, (_, i) => { const [u, v] = scatter(`car:${d.cluster}:${i}`); return { d, u, y: 4 + v * 8, z: (u - 0.5) * (L.cell - 3), v: (0.02 + v * 0.05) * (i % 2 ? 1 : -1), c: i % 3 ? "#fca5a5" : "#e0f2fe" }; }));
    const carMesh = add(new InstancedMesh(new BoxGeometry(0.7, 0.12, 0.14), new MeshBasicMaterial(), Math.max(cars.length, 1)));
    carMesh.count = cars.length; carMesh.frustumCulled = false; cars.forEach((c, i) => carMesh.setColorAt(i, new Color(c.c)));
    const arcs = add(new LineSegments(new BufferGeometry(), new LineBasicMaterial({ color: "#22d3ee", transparent: true, opacity: 0.9 }))); arcs.frustumCulled = false;

    let selected = inputs.selected && byId.has(inputs.selected) ? inputs.selected : null, hovered = null, only = null, held = reduced;
    const focus = () => hovered || selected, lit = new Set(), showing = t => (only == null || t.d === only || t.d < 0) && (!focus() || lit.has(t.n.id));
    const dark = T.filter(t => t.kind === "tower" && t.level === 0), darkIn = d => dark.filter(t => t.d === d);
    const stat = () => {
      const f = focus() && byId.get(focus());
      if (f && f.kind === "spire") return `${name(f)} · map of ${plural(L.districts[f.d].notes.length, "note")}`;
      if (f) return `${name(f)} · ${plural(f.n.inlinks || 0, "link")} in · ${f.level === 0 ? "dark" : f.level === 2 ? "busy" : "dim"}${f.n.tasks ? ` · ${plural(f.n.tasks, "open task")}` : ""}`;
      return `${plural(T.filter(t => t.kind === "tower").length, "tower")} · ${dark.length} dark · ${plural(L.districts.length, "district")}`;
    };
    function paint() {
      const f = focus(); lit.clear(); if (f) { lit.add(f); for (const id of nb.get(f) || []) lit.add(id); }
      for (const p of parts) {
        const c = p.geo.getAttribute("color"); let at = 0;
        p.list.forEach(t => { const tint = mix(neon(t), "#ffffff", t.level === 0 ? 0.55 : 0.3).multiplyScalar(showing(t) ? (t.level === 0 ? 0.5 : 1) : 0.16); for (let k = 0; k < 16; k++) c.setXYZ(at++, tint.r, tint.g, tint.b); });
        c.needsUpdate = true;
      }
      T.forEach((t, i) => {
        const stall = t.kind === "stall", w = stall ? t.w : t.w * 1.04;
        roofs.setMatrixAt(i, m4.makeScale(w, stall ? t.h : 0.12, w).setPosition(t.x, stall ? t.h / 2 : t.h + 0.06, t.z));
        roofs.setColorAt(i, mix(neon(t), theme.bg, showing(t) ? (t.level === 0 ? 0.55 : 0) : 0.85));
      });
      roofs.instanceMatrix.needsUpdate = true; roofs.instanceColor.needsUpdate = true;
      const pts = [];
      if (f) {
        const a = byId.get(f);
        for (const id of nb.get(f) || []) {
          const b = byId.get(id), from = [a.x, a.h, a.z], to = [b.x, b.h, b.z], mid = [(a.x + b.x) / 2, Math.max(a.h, b.h) + 3 + Math.hypot(a.x - b.x, a.z - b.z) * 0.25, (a.z + b.z) / 2];
          let prev = from;
          for (let s = 1; s <= 12; s++) { const u = s / 12, q = [0, 1, 2].map(k => (1 - u) * (1 - u) * from[k] + 2 * (1 - u) * u * mid[k] + u * u * to[k]); pts.push(...prev, ...q); prev = q; }
        }
      }
      arcs.geometry.setAttribute("position", new Float32BufferAttribute(pts, 3)); arcs.visible = pts.length > 0;
      const labels = L.districts.map((d, i) => ({ d, i })).filter(x => only == null || only === x.i).map(({ d }) => ({ text: clip(d.name, 28), at: [d.x, 0.4, d.z + L.cell / 2 - 0.6], color: mix(theme.palette[d.cluster % theme.palette.length], "#ffffff", 0.45).getStyle(), dy: 6 }));
      if (f) { const t = byId.get(f); labels.unshift({ text: clip(name(t), 34), at: [t.x, t.h, t.z], strong: true, dy: -18, run: () => open(f), title: `Open ${name(t)}` }); }
      frame.labels(labels); frame.stat(stat());
      frame.chip(only == null ? null : `District: ${clip(L.districts[only].name, 24)}`, () => { only = null; paint(); invalidate(); });
    }
    function open(id) { selected = id; paint(); invalidate(); onOpen(id); }
    const goTo = d => { only = d; selected = null; paint(); invalidate(); };
    const worst = L.districts.map((_, i) => [darkIn(i).length, i]).sort((a, b) => b[0] - a[0])[0], stalls = T.filter(t => t.kind === "stall"), staleTall = [...dark].sort((a, b) => b.h - a.h)[0];
    const insights = [];
    if (worst && worst[0]) insights.push({ text: `${L.districts[worst[1]].name} is the darkest district: ${plural(worst[0], "stale note")}. Open the tallest and decide whether it is still true.`, label: "Show district", run: () => goTo(worst[1]) });
    if (staleTall && staleTall.h > 3) insights.push({ text: `${name(staleTall)} stands tall yet has gone dark: other notes lean on it and it has not been edited in ${staleTall.n.age} days.`, label: "Open note", run: () => open(staleTall.n.id) });
    if (tasks.length) insights.push({ text: `${plural(tasks.length, "tower")} carry a pink beacon: an open task. The tallest is the one the most notes wait on.`, label: "Open note", run: () => open([...tasks].sort((a, b) => b.h - a.h)[0].n.id) });
    if (stalls.length) insights.push({ text: `${plural(stalls.length, "note")} stand as stalls on the street, in no topic. Link each to a topic's notes and it gets a tower.`, label: "Open note", run: () => open(stalls[0].n.id) });
    frame.explain({
      plain: "Picture your notes as a city. A tall tower is a note everything else leans on. Lit windows mean someone has been in it lately; a dark tower has been left alone for a long time.",
      about: "Each topic is a district and each note a tower. Height is how many notes link to it and how much runs through it; lit windows are how recently it was edited; dark is stale. A pink beacon on a roof is an open task, the tall thin spire is the topic's map, and a stall on the street is a note in no topic.",
      legend: [{ color: "#22d3ee", text: "height = relied on, windows = recent" }, { color: "#6b7280", text: "dark = stale" }, { color: BEACON, text: "beacon = open task" }, { color: STALL, text: "stall = no topic" }], insights,
    });
    frame.controls({ lines: ["Pick a tower to see what it links to"] });
    paint();
    const started = performance.now();
    const drive = t => {
      cars.forEach((c, i) => carMesh.setMatrixAt(i, m4.makeTranslation(c.d.x + ((((c.u + c.v * t) % 1) + 1) % 1 - 0.5) * (L.cell - 2), c.y, c.d.z + c.z)));
      carMesh.instanceMatrix.needsUpdate = true; if (carMesh.instanceColor) carMesh.instanceColor.needsUpdate = true;
    };
    drive(0);
    let timer = 0;
    return {
      targets: () => T.filter(t => only == null || t.d === only || t.d < 0).map(t => ({ at: [t.x, t.h / 2, t.z], r: Math.max(t.w * 0.7, Math.min(t.h * 0.3, 1.5)), key: { kind: "note", id: t.n.id, tip: `${name(t)}${t.level === 0 ? " · dark" : ""}${t.n.tasks ? ` · ${plural(t.n.tasks, "open task")}` : ""}` } })),
      click(k) { if (k.kind === "note") open(k.id); },
      hover(k) { const h = k && k.kind === "note" ? k.id : null; if (h !== hovered) { hovered = h; paint(); } },
      update(next) { if ("selected" in next) { selected = next.selected && byId.has(next.selected) ? next.selected : null; paint(); } },
      // beacons blink and cars drive while the view is open; held (or with reduced motion), the city stands still
      frame() { if (held) return; const t = (performance.now() - started) / 1000; beacons.visible = Math.sin(t * 4) > -0.3; drive(t); clearTimeout(timer); timer = setTimeout(invalidate, 33); },
      stat,
      today: () => (worst && worst[0] ? { text: `Darkest district: ${L.districts[worst[1]].name} · ${plural(worst[0], "stale note")}`, label: "Go there", run: () => goTo(worst[1]) } : null),
      api: { layout: () => L, selected: () => selected, district: () => (only == null ? null : L.districts[only].cluster), hold() { held = true; beacons.visible = true; invalidate(); }, towers: () => T.filter(t => t.kind === "tower").length, stalls: () => stalls.length, dark: () => dark.length },
      dispose() { held = true; clearTimeout(timer); for (const o of [pads, street, roofs, beacons, carMesh, arcs, ...parts.map(p => p.mesh)]) { if (o.material.map) o.material.map.dispose(); } },
    };
  },
};
