// What a host imports. README.md has the table.
//   mountViews(el, { view, data, inputs, onOpen, onAction, theme }) -> { view, resize, update, mark, turn, keyAt, noteAt, pageAt, stat, today, snapshot, api, dispose }
//   view      one of VIEWS' ids (default "bodies")
//   data      the graph data (contract.js)
//   inputs    what that view needs beyond the data, and the host's selection (contract.js, checkInputs)
//   onOpen    (noteId) => void: the host's one detail panel, so every body opens the same detail
//   onAction  (name) => void: a view asking the host for something it doesn't own (VIEWS lists each view's actions)
//   theme     { bg, fg, muted, accent, palette } from the host
import { check, checkInputs, theme as withTheme } from "./contract.js";
import { runScene } from "./run.js";
import { bodies } from "./scenes/bodies.js";
import { cas9 } from "./scenes/cas9.js";
import { genome } from "./scenes/genome.js";
import { cones } from "./scenes/cones.js";
import { loadpaths } from "./scenes/loadpaths.js";
import { modes } from "./scenes/modes.js";
import { slime } from "./scenes/slime.js";
import { cyberpunk } from "./scenes/cyberpunk.js";
import { radar } from "./scenes/radar.js";

const SCENES = { bodies, cas9, genome, cones, loadpaths, modes, slime, cyberpunk, radar };
export const VIEWS = Object.values(SCENES).map(s => ({ id: s.id, name: s.name, hint: s.hint, actions: s.actions || [] }));

export function mountViews(el, { view = "bodies", data, inputs, onOpen, onAction, theme } = {}) {
  const def = SCENES[view];
  if (!def) throw new Error(`vault-graph-views: no view "${view}" (there is ${Object.keys(SCENES).join(", ")})`);
  const problems = check(data);
  if (!problems.length) problems.push(...checkInputs(view, data, inputs));
  if (problems.length) throw new Error("vault-graph-views: " + problems.join("; "));
  if (typeof onOpen !== "function") throw new Error("vault-graph-views: onOpen is required");
  if ((def.actions || []).length && typeof onAction !== "function") throw new Error(`vault-graph-views: onAction is required for the ${def.name} view (it asks the host for: ${def.actions.join(", ")})`);
  return runScene(el, def, { data, inputs: inputs || {}, onOpen, onAction, theme: withTheme(theme) });
}
export { check, checkInputs };
export { bench } from "./bench.js";
