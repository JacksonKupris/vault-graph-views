// A vault as districts: one per topic, the notes of each ranked by how much the vault leans on them. Every scene that
// groups notes by topic (the city, and any grouped view after it) asks here, so "a topic's notes" means one thing.
import { special, hash, importanceOf } from "./notes.js";

// A topic's own notes, most relied-on first: no people, maps or unwritten notes; linkedOnly leaves out the unlinked ones.
// Returns [{ cluster, name, notes, moc }] for topics that have any, biggest first. `moc` is the topic's map of content (or null).
export function districtsOf(data, { linkedOnly = true } = {}) {
  const importance = importanceOf(data.nodes);
  const moc = new Map();
  for (const n of data.nodes) if (n.moc && !moc.has(n.cluster)) moc.set(n.cluster, n);
  return [...data.clusters].sort((a, b) => b.size - a.size || a.id - b.id).map(c => ({
    cluster: c.id, name: c.label || c.name, moc: moc.get(c.id) || null,
    notes: data.nodes.filter(n => n.cluster === c.id && !special(n) && !(linkedOnly && n.isolated)).sort((a, b) => importance(b) - importance(a) || (a.id < b.id ? -1 : 1)),
  })).filter(d => d.notes.length);
}

// cols and rows of a grid that holds n cells, `stretch` wider than tall (1 is square)
export const gridDims = (n, stretch = 1) => { const cols = Math.max(1, Math.ceil(Math.sqrt(n * stretch))); return { cols, rows: Math.ceil(n / cols) }; };

// a steady pair in 0..1 for a key: the same place for the same text, every run
export const scatter = key => { const h = hash(key), h2 = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0; return [((h >>> 4) % 1000) / 1000, ((h2 >>> 7) % 1000) / 1000]; };

// n cells of a square grid ordered from the middle out, so the most important of a district's notes stand at its centre
export function fromMiddle(n) {
  const { cols, rows } = gridDims(n), cx = (cols - 1) / 2, cy = (rows - 1) / 2, cells = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) cells.push([c - cx, r - cy]);
  return cells.sort((a, b) => Math.hypot(a[0], a[1]) - Math.hypot(b[0], b[1]) || a[1] - b[1] || a[0] - b[0]).slice(0, n);
}
