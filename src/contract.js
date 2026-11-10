// The host contract, one copy. A host (the Obsidian plugin, the dev page) calls mountViews(el, { data, onOpen, theme }).
// The data shape is owned by the plugin (its engine writes it); DATA_SHAPE is what these views read of it, and
// tests/test_contract.js fails when fixtures/sample-graph.json stops matching, so a change on either side shows up here.

export const DATA_SHAPE = {
  top: { nodes: "array", links: "array", clusters: "array", wanted: "array" },
  node: { id: "string", name: "string", cluster: "number", folder: "string", inlinks: "number", outlinks: "number", words: "number" },
  link: { source: "string", target: "string", kind: "string" },
  cluster: { id: "number", name: "string", label: "string", size: "number" },
};
export const THEME_TOKENS = ["bg", "fg", "muted", "accent"];

const typeOf = v => (Array.isArray(v) ? "array" : v === null ? "null" : typeof v);

// Returns a list of problems (empty when the data is usable). Never throws, so a host can show them.
export function check(data) {
  const out = [];
  if (!data || typeof data !== "object") return ["data is not an object"];
  const part = (label, v, shape) => {
    for (const [k, t] of Object.entries(shape)) if (typeOf(v[k]) !== t) out.push(`${label}.${k} should be ${t}, is ${typeOf(v[k])}`);
  };
  part("data", data, DATA_SHAPE.top);
  if (out.length) return out;
  if (data.nodes[0]) part("nodes[0]", data.nodes[0], DATA_SHAPE.node);
  if (data.links[0]) part("links[0]", data.links[0], DATA_SHAPE.link);
  if (data.clusters[0]) part("clusters[0]", data.clusters[0], DATA_SHAPE.cluster);
  // a link ends on a note, or (kind "wanted") on a note that does not exist yet, listed in data.wanted
  const ids = new Set(data.nodes.map(n => n.id));
  for (const w of data.wanted) ids.add(w.id);
  const dangling = data.links.filter(l => !ids.has(l.source) || !ids.has(l.target)).length;
  if (dangling) out.push(`${dangling} links point at a note that is in neither nodes nor wanted`);
  return out;
}

export function theme(t) {
  return Object.assign({ bg: "#14161a", fg: "#dddddd", muted: "#8a8f98", accent: "#6aa9ff" }, t || {});
}

