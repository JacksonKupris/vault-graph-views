// The host contract, one copy. A host (the Obsidian plugin, the dev page) calls
// mountViews(el, { view, data, inputs, onOpen, onAction, theme }).
// The data shape is owned by the plugin (its engine writes it); DATA_SHAPE is what these views read of it, and
// tests/test_contract.js fails when fixtures/sample-graph.json stops matching, so a change on either side shows up here.
// inputs are what one view needs beyond the data: something the plugin computes (the fold) or holds (the scan, the selection).

export const DATA_SHAPE = {
  top: { nodes: "array", links: "array", clusters: "array", wanted: "array" },
  node: { id: "string", name: "string", cluster: "number", folder: "string", inlinks: "number", outlinks: "number", words: "number" },
  link: { source: "string", target: "string", kind: "string" },
  cluster: { id: "number", name: "string", label: "string", size: "number" },
  // the journals as one strand (Genome fold): a day each, the notes each day names as indexes into ids
  strand: { days: "array", paths: "array", ids: "array", rows: "array" },
};
// Optional on a node: taskAge, the days its oldest open task has waited (Radar; the note's age when absent).
// Optional on data: rhythm, { [clusterId]: { wd: 7 counts (Monday first), mo: 12 counts (January first) } }, what the Heat clock shows.
// inputs.fold (Genome fold): the plugin's VGScience.genomeFold(data.strand.rows), with its grade. X is a point a day.
export const FOLD_SHAPE = { n: "number", X: "array", stress: "number", grade: "string", domains: "array", loops: "array" };
// inputs.scan (Cas9): the Guide scan's result. notes: [{ path, hits }] (hits 0 is a look-alike). ids, when given, is the
// scan's scope (the notes in its folder or tag); where says that scope in words. No scan yet: leave it out.
export const SCAN_SHAPE = { guide: "string", where: "string", notes: "array" };
// inputs.web (Food web): the plugin's VGScience.webForViews. level[i] is the trophic height of ids[i]; edges are [from, to] indexes into ids
// (from links to, so rests on, to); stats are the web's figures.
export const WEB_SHAPE = { ids: "array", level: "array", edges: "array", stats: "object" };
export const THEME_TOKENS = ["bg", "fg", "muted", "accent", "warn", "palette"];

const typeOf = v => (Array.isArray(v) ? "array" : v === null ? "null" : typeof v);
const part = (out, label, v, shape) => {
  for (const [k, t] of Object.entries(shape)) if (typeOf(v[k]) !== t) out.push(`${label}.${k} should be ${t}, is ${typeOf(v[k])}`);
};

// Returns a list of problems (empty when the data is usable). Never throws, so a host can show them.
export function check(data) {
  const out = [];
  if (!data || typeof data !== "object") return ["data is not an object"];
  part(out, "data", data, DATA_SHAPE.top);
  if (out.length) return out;
  if (data.nodes[0]) part(out, "nodes[0]", data.nodes[0], DATA_SHAPE.node);
  if (data.links[0]) part(out, "links[0]", data.links[0], DATA_SHAPE.link);
  if (data.clusters[0]) part(out, "clusters[0]", data.clusters[0], DATA_SHAPE.cluster);
  // a link ends on a note, or (kind "wanted") on a note that does not exist yet, listed in data.wanted
  const ids = new Set(data.nodes.map(n => n.id));
  for (const w of data.wanted) ids.add(w.id);
  const dangling = data.links.filter(l => !ids.has(l.source) || !ids.has(l.target)).length;
  if (dangling) out.push(`${dangling} links point at a note that is in neither nodes nor wanted`);
  return out;
}

// What one view needs on top of check(data). Same rule: a list of problems, never a throw.
export function checkInputs(view, data, inputs) {
  const out = [], inp = inputs || {};
  if (view === "genome") {
    const s = data && data.strand;
    if (typeOf(s) !== "object") return [`data.strand should be object, is ${typeOf(s)}`];
    part(out, "data.strand", s, DATA_SHAPE.strand);
    if (typeOf(inp.fold) !== "object") return out.concat(`inputs.fold should be object, is ${typeOf(inp.fold)}`);
    part(out, "inputs.fold", inp.fold, FOLD_SHAPE);
    if (out.length) return out;
    const f = inp.fold;
    if (s.rows.length !== s.days.length || s.paths.length !== s.days.length) out.push(`data.strand has ${s.days.length} days, ${s.rows.length} rows and ${s.paths.length} paths: they should be the same number`);
    if (f.n !== s.days.length || f.X.length !== f.n) out.push(`inputs.fold is for ${f.n} days (${f.X.length} points) and data.strand has ${s.days.length}: the fold is from other data`);
    const bad = f.loops.filter(l => !(l.a >= 0 && l.a < f.n && l.b >= 0 && l.b < f.n && typeof l.count === "number")).length;
    if (bad) out.push(`${bad} of inputs.fold.loops don't name two days of the strand and a count`);
  }
  if (view === "foodweb") {
    if (typeOf(inp.web) !== "object") return out.concat(`inputs.web should be object, is ${typeOf(inp.web)}`);
    part(out, "inputs.web", inp.web, WEB_SHAPE);
    if (out.length) return out;
    const w = inp.web;
    if (w.level.length !== w.ids.length) out.push(`inputs.web has ${w.ids.length} ids and ${w.level.length} levels: they should be the same`);
    const bad = w.edges.filter(e => !(e[0] >= 0 && e[0] < w.ids.length && e[1] >= 0 && e[1] < w.ids.length)).length;
    if (bad) out.push(`${bad} of inputs.web.edges don't name two of its ids`);
    for (const k of ["mean", "maxLevel", "incoherence"]) if (typeof w.stats[k] !== "number") out.push(`inputs.web.stats.${k} should be number, is ${typeOf(w.stats[k])}`);
    if (out.length) return out;
  }
  if (view === "cas9" && inp.scan != null) {
    if (typeOf(inp.scan) !== "object") return [`inputs.scan should be object, is ${typeOf(inp.scan)}`];
    part(out, "inputs.scan", inp.scan, SCAN_SHAPE);
    if (inp.scan.ids !== undefined && !Array.isArray(inp.scan.ids)) out.push(`inputs.scan.ids should be array, is ${typeOf(inp.scan.ids)}`);
    if (!out.length && inp.scan.notes[0] && (typeof inp.scan.notes[0].path !== "string" || typeof inp.scan.notes[0].hits !== "number")) out.push("inputs.scan.notes[0] should be { path: string, hits: number }");
  }
  if (inp.hour != null && typeof inp.hour !== "number") out.push(`inputs.hour should be number, is ${typeOf(inp.hour)}`);
  if (inp.selected != null && typeof inp.selected !== "string") out.push(`inputs.selected should be string, is ${typeOf(inp.selected)}`);
  return out;
}

// palette: the plugin's topic colours (its PALETTE), so a note is the same colour here as everywhere else in the plugin
const PALETTE = ["#4385BE", "#879A39", "#DA702C", "#8B7EC8", "#3AA99F", "#D14D41", "#D0A215", "#CE5D97",
  "#205EA6", "#66800B", "#BC5215", "#5E409D", "#24837B", "#AF3029", "#AD8301", "#A02F6F"];
export function theme(t) {
  return Object.assign({ bg: "#14161a", fg: "#dddddd", muted: "#8a8f98", accent: "#6aa9ff", warn: "#f59e0b", palette: PALETTE }, t || {});
}
