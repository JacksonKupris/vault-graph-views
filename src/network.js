// The vault's written links as a network, one copy for every view that needs one (Load paths, Normal modes): which notes the
// largest connected set of links joins, and where a short spring layout puts them. Pure, so tests check it.
import { special, importanceOf, hash } from "./notes.js";

// The vault's own notes that the largest connected set of written links joins, at most `max` of the most important ones,
// most important first. bars are pairs of indexes into ids; own maps an id to its node; imp scores a node 0 to 1.
export function joinedNotes(nodes, links, { max = 120 } = {}) {
  const imp = importanceOf(nodes), own = new Map(nodes.filter(n => !special(n)).map(n => [n.id, n]));
  const adj = new Map([...own.keys()].map(id => [id, new Set()]));
  for (const l of links) if (l.kind === "link" && l.source !== l.target && adj.has(l.source) && adj.has(l.target)) { adj.get(l.source).add(l.target); adj.get(l.target).add(l.source); }
  const seen = new Set(); let best = [];
  for (const id of [...adj.keys()].sort()) {
    if (seen.has(id) || !adj.get(id).size) continue;
    const comp = [id]; seen.add(id);
    for (let i = 0; i < comp.length; i++) for (const nb of adj.get(comp[i])) if (!seen.has(nb)) { seen.add(nb); comp.push(nb); }
    if (comp.length > best.length) best = comp;
  }
  const ids = best.sort((a, b) => imp(own.get(b)) - imp(own.get(a)) || (a < b ? -1 : 1)).slice(0, max), at = new Map(ids.map((id, i) => [id, i]));
  const bars = [];
  for (const id of ids) for (const nb of adj.get(id)) if (at.has(nb) && at.get(id) < at.get(nb)) bars.push([at.get(id), at.get(nb)]);
  return { ids, bars, own, imp };
}

// A short spring layout on a plane: [x, z] for each id, started from a ring that the id's hash fixes (the same vault gives
// the same places), the more important notes nearer the middle.
export function springLayout(ids, bars, { radius = 14, rest = 3 } = {}) {
  const n = ids.length, P = ids.map((id, i) => { const a = (hash(id) % 6283) / 1000, r = radius * Math.sqrt((i + 1) / n); return [Math.cos(a) * r, Math.sin(a) * r]; });
  for (let step = 0; step < 80; step++) {
    const F = P.map(() => [0, 0]), cool = 0.5 * (1 - step / 80);
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) { const dx = P[i][0] - P[j][0], dy = P[i][1] - P[j][1], f = 6 / (dx * dx + dy * dy + 0.01); F[i][0] += dx * f; F[i][1] += dy * f; F[j][0] -= dx * f; F[j][1] -= dy * f; }
    for (const [i, j] of bars) { const dx = P[j][0] - P[i][0], dy = P[j][1] - P[i][1], d = Math.hypot(dx, dy) || 1e-6, f = (d - rest) * 0.08; F[i][0] += dx * f; F[i][1] += dy * f; F[j][0] -= dx * f; F[j][1] -= dy * f; }
    for (let i = 0; i < n; i++) { const m = Math.hypot(...F[i]) || 1, s = Math.min(m, cool * 4) / m; P[i][0] += F[i][0] * s; P[i][1] += F[i][1] * s; }
  }
  return P;
}
