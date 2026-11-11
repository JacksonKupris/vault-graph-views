// Light cones: time is the vertical axis and every note sits at the date it was written. A link between two notes joins an
// earlier one to a later one, so following links down in time gives what a note could have rested on (its past cone) and
// following them up gives what it could have touched (its future cone). Pick a note and both cones light up; the rest dims.
// A link only counts when the notes have different dates: two notes of the same day can't have shaped one another.
//   data.nodes[].born   the day the note was written ("2026-10-03"); a note without one is left out
//   data.links          the written links (kind "link"); similar, gap, person and map links don't carry cause
//   inputs.selected     the host's selected note
//   onOpen(id)          a note
import { InstancedMesh, SphereGeometry, ConeGeometry, Mesh, MeshStandardMaterial, MeshBasicMaterial, LineSegments, LineBasicMaterial, BufferGeometry, Float32BufferAttribute, Matrix4, Color, DoubleSide } from "three";
import { importanceOf, special, hash } from "../notes.js";
import { plural, clip, dayLabel, daysApart } from "../text.js";

export const SIZE = 18, PAST = "#60a5fa", FUTURE = "#f59e0b";
const DAY = 86400000;

// The notes that have a day and are the vault's own writing, and the links between two of them that order them in time.
// older Map(id -> [id]) the notes a note links with that are earlier · newer the same for later ones. Pure, so tests check it.
export function causalGraph(nodes, links) {
  const day = new Map();
  for (const n of nodes) if (!special(n) && typeof n.born === "string" && Number.isFinite(Date.parse(n.born))) day.set(n.id, Date.parse(n.born) / DAY);
  const older = new Map(), newer = new Map();
  for (const id of day.keys()) { older.set(id, []); newer.set(id, []); }
  const seen = new Set();
  for (const l of links) {
    if (l.kind !== "link" || !day.has(l.source) || !day.has(l.target) || day.get(l.source) === day.get(l.target)) continue;
    const [a, b] = day.get(l.source) < day.get(l.target) ? [l.source, l.target] : [l.target, l.source], key = a + "\n" + b;
    if (seen.has(key)) continue;
    seen.add(key); older.get(b).push(a); newer.get(a).push(b);
  }
  return { day, older, newer };
}

// Every note a chain of links reaches from `id` in one direction (not `id` itself).
export function reach(step, id) {
  const out = new Set(), todo = [id];
  while (todo.length) for (const next of step.get(todo.pop()) || []) if (!out.has(next)) { out.add(next); todo.push(next); }
  return out;
}

// Where each note sits: its height is its date, its place around the axis is its topic's sector and a steady nudge of its own.
//   pos Map(id -> [x, y, z]) · from, to the first and last day · axis [x, y, z] the bottom and top of the time line
export function conesLayout(nodes, G) {
  const ids = [...G.day.keys()], days = ids.map(id => G.day.get(id)), t0 = Math.min(...days), t1 = Math.max(...days), span = Math.max(t1 - t0, 1);
  const byId = new Map(nodes.map(n => [n.id, n])), clusters = [...new Set(ids.map(id => byId.get(id).cluster || 0))].sort((a, b) => a - b);
  const pos = new Map();
  for (const id of ids) {
    const h = hash(id), sector = clusters.indexOf(byId.get(id).cluster || 0) / Math.max(clusters.length, 1) * Math.PI * 2;
    const a = sector + ((h % 1000) / 1000 - 0.5) * (Math.PI * 2 / Math.max(clusters.length, 1)) * 0.8, r = SIZE * (0.25 + 0.65 * (((h >>> 10) % 1000) / 1000));
    pos.set(id, [Math.cos(a) * r, ((G.day.get(id) - t0) / span - 0.5) * SIZE * 1.6, Math.sin(a) * r]);
  }
  return { pos, from: t0, to: t1, axis: [[0, -SIZE * 0.8, 0], [0, SIZE * 0.8, 0]] };
}

const isoOf = day => new Date(day * DAY).toISOString().slice(0, 10);

export const cones = {
  id: "cones", name: "Light cones", hint: "What a note rested on and what it touched",
  home: { yaw: 0.7, pitch: 0.2, dist: 52, min: 14, max: 120 }, stage: { fog: [40, 95] },
  actions: ["graph"],
  build({ stage, frame, data, inputs, onOpen, onAction, theme, invalidate }) {
    const G = causalGraph(data.nodes, data.links), ids = [...G.day.keys()];
    if (ids.length < 2) {
      const stat = () => plural(ids.length, "dated note");
      frame.stat(stat());
      frame.controls({ at: "centre", lines: ["Light cones needs notes with a date and links between them.", `${plural(ids.length, "dated note")} so far.`], buttons: [{ label: "Open the graph", title: "Open the graph", run: () => onAction("graph") }] });
      return { targets: () => [], click() {}, update() {}, stat, today: () => null, api: { empty: true } };
    }
    const L = conesLayout(data.nodes, G), byId = new Map(data.nodes.map(n => [n.id, n])), importance = importanceOf(data.nodes);
    const size = id => 0.25 + 0.6 * Math.sqrt(Math.max(0, importance(byId.get(id)))), name = id => byId.get(id).name;
    const pal = theme.palette, m = new Matrix4(), col = new Color(), add = o => { stage.scene.add(o); return o; };

    const bodies = add(new InstancedMesh(new SphereGeometry(1, 16, 12), new MeshStandardMaterial({ roughness: 0.45 }), ids.length));
    const pts = [];
    for (const [b, list] of G.older) for (const a of list) pts.push(...L.pos.get(a), ...L.pos.get(b));
    const lines = add(new LineSegments(new BufferGeometry().setAttribute("position", new Float32BufferAttribute(pts, 3)), new LineBasicMaterial({ color: theme.muted, transparent: true, opacity: 0.22 })));
    add(new LineSegments(new BufferGeometry().setAttribute("position", new Float32BufferAttribute([...L.axis[0], ...L.axis[1]], 3)), new LineBasicMaterial({ color: theme.muted, transparent: true, opacity: 0.6 })));
    const coneMat = c => new MeshBasicMaterial({ color: c, transparent: true, opacity: 0.1, side: DoubleSide, depthWrite: false });
    const pastCone = add(new Mesh(new ConeGeometry(1, 1, 40, 1, true), coneMat(PAST))), futureCone = add(new Mesh(new ConeGeometry(1, 1, 40, 1, true), coneMat(FUTURE)));
    pastCone.visible = futureCone.visible = false;

    let selected = inputs.selected && L.pos.has(inputs.selected) ? inputs.selected : null, hovered = null;
    const cache = new Map();
    const conesOf = id => { if (!cache.has(id)) cache.set(id, { past: reach(G.older, id), future: reach(G.newer, id) }); return cache.get(id); };
    const focus = () => hovered || selected;
    const stat = () => (selected ? `${name(selected)} · ${plural(conesOf(selected).past.size, "note")} in its past · ${plural(conesOf(selected).future.size, "note")} in its future` : `${plural(ids.length, "dated note")} · ${plural(pts.length / 6, "link")} · ${daysApart(isoOf(L.from), isoOf(L.to))} days`);

    function place(cone, id, upwards) {
      const y = L.pos.get(id)[1], top = L.axis[1][1], bottom = L.axis[0][1], h = Math.max(upwards ? top - y : y - bottom, 0.5);
      cone.visible = true; cone.scale.set(h * 0.55, h, h * 0.55);
      cone.position.set(L.pos.get(id)[0], y + (upwards ? h / 2 : -h / 2), L.pos.get(id)[2]);
      cone.rotation.set(upwards ? Math.PI : 0, 0, 0);   // the apex is the note: it points down for the future, up for the past
    }
    function paint() {
      const f = focus(), C = f ? conesOf(f) : null;
      ids.forEach((id, i) => {
        const r = size(id) * (id === f ? 1.4 : 1);
        m.makeScale(r, r, r).setPosition(...L.pos.get(id));
        bodies.setMatrixAt(i, m);
        const tone = !C ? col.set(pal[(byId.get(id).cluster || 0) % pal.length]) : id === f ? col.set(theme.accent) : C.past.has(id) ? col.set(PAST) : C.future.has(id) ? col.set(FUTURE) : col.set(pal[(byId.get(id).cluster || 0) % pal.length]).multiplyScalar(0.22);
        bodies.setColorAt(i, tone);
      });
      bodies.instanceMatrix.needsUpdate = true; if (bodies.instanceColor) bodies.instanceColor.needsUpdate = true;
      pastCone.visible = futureCone.visible = false;
      if (f) { place(pastCone, f, false); place(futureCone, f, true); }
      const labels = [{ text: dayLabel(isoOf(L.from)), at: L.axis[0], dy: 12, color: theme.muted }, { text: dayLabel(isoOf(L.to)), at: L.axis[1], dy: -12, color: theme.muted }];
      if (f) labels.push({ text: clip(name(f), 34), at: L.pos.get(f), strong: true, dy: -18, run: () => open(f), title: `Open ${name(f)}` });
      if (C) {
        const nearest = (set, sign) => [...set].sort((a, b) => sign * (G.day.get(a) - G.day.get(b)))[0];
        for (const [set, sign] of [[C.past, -1], [C.future, 1]]) { const far = nearest(set, sign); if (far) labels.push({ text: clip(name(far), 26), at: L.pos.get(far), dy: 14, color: sign < 0 ? PAST : FUTURE }); }
      }
      frame.labels(labels);
      frame.stat(stat());
    }
    function open(id) { selected = id; paint(); invalidate(); onOpen(id); }
    const targets = ids.map(id => ({ at: L.pos.get(id), r: size(id), key: { kind: "note", id, tip: `${name(id)} · ${byId.get(id).born}` } }));
    paint();
    return {
      targets: () => targets,
      click(k) { if (k.kind === "note") open(k.id); },
      hover(k) { const h = k && k.kind === "note" ? k.id : null; if (h !== hovered) { hovered = h; paint(); } },
      update(next) { if ("selected" in next) { selected = next.selected && L.pos.has(next.selected) ? next.selected : null; paint(); } },
      stat,
      today: () => {
        const best = ids.reduce((a, b) => (a && conesOf(a).future.size >= conesOf(b).future.size ? a : b), null);
        return best && conesOf(best).future.size ? { text: `${name(best)} reaches the most: ${plural(conesOf(best).future.size, "note")} in its future`, label: "Show it", run: () => { selected = best; paint(); invalidate(); } } : null;
      },
      api: { layout: () => L, graph: () => G, cones: id => conesOf(id), selected: () => selected, notes: () => ids },
      dispose() { lines.material.dispose(); pastCone.material.dispose(); futureCone.material.dispose(); },
    };
  },
};
