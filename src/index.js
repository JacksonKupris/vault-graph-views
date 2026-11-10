// mountViews(el, { data, onOpen, theme }) -> { dispose, resize }. The only thing a host imports.
//   data    the graph data (see contract.js)
//   onOpen  (noteId) => void: the host's one detail panel, so every body opens the same detail
//   theme   { bg, fg, muted, accent } colours from the host
import { check, theme as withTheme } from "./contract.js";
import { bodyScene } from "./scenes/bodies.js";

export function mountViews(el, { data, onOpen, theme } = {}) {
  const problems = check(data);
  if (problems.length) throw new Error("vault-graph-views: " + problems.join("; "));
  if (typeof onOpen !== "function") throw new Error("vault-graph-views: onOpen is required");
  return bodyScene(el, data, onOpen, withTheme(theme));
}
export { check };
export { bench } from "./bench.js";
