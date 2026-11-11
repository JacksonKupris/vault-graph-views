// What each maths view says about the vault's own notes, and what to do about it: pure (no screen), so tests check the words
// and the numbers they quote. A scene attaches the action (open a note, select a bar) to each item by its `note` / `bar` / `show`.
// Each returns { about, insights: [{ text, label, note?, bar?, show? }] }; `note` is an index into the view's notes.
import { plural } from "./text.js";

const degree = (n, bars) => { const d = new Array(n).fill(0); for (const [i, j] of bars) { d[i]++; d[j]++; } return d; };

// Load paths: each written link is a bar, a note a joint, the most linked notes the ground. A note held by few links sags most.
export function loadInsights({ n, bars, ground, sag, sagging, weakest, busiest, carry }, name) {
  const deg = degree(n, bars), out = [];
  if (sag[sagging] > 0) out.push({ text: `${name(sagging)} sags most (${sag[sagging].toFixed(2)}). It is held by ${plural(deg[sagging], "link")}; link it to a note near the ground notes and it stiffens.`, label: "Open note", note: sagging });
  if (weakest >= 0) out.push({ text: `${name(bars[weakest][0])} – ${name(bars[weakest][1])} is closest to buckling: it is pushed hardest, so if that link goes its notes lose their support. A second route between them takes the load.`, label: "Show link", bar: weakest });
  if (busiest >= 0) out.push({ text: `${name(bars[busiest][0])} – ${name(bars[busiest][1])} carries the most (${carry[busiest].toFixed(1)}). Everything leaning on it is one edit from sagging.`, label: "Show link", bar: busiest });
  const thin = deg.map((d, i) => [d, i]).filter(([d, i]) => d === 1 && !ground.includes(i)).length;
  if (thin) out.push({ text: `${plural(thin, "note")} hang from a single link. Each is a note to link from a second place.`, label: "Show worst", note: sagging });
  return { about: "Each written link is a steel bar and each note a joint; the most linked notes are the ground. Load is the notes' weight. A note sags when few links hold it, and a link carries more when more notes lean on it.", insights: out };
}

// Normal modes: the sheet rings in the shapes the links allow; a mode is a cut of the vault, and few links crossing it means a clean cut.
export function modeInsights({ bars, vector, freq, k, count }, name) {
  const side = i => (Math.abs(vector[i]) < 0.05 ? 0 : vector[i] > 0 ? 1 : -1);
  const up = vector.filter((_, i) => side(i) > 0).length, down = vector.filter((_, i) => side(i) < 0).length;
  const cross = bars.filter(([i, j]) => side(i) * side(j) < 0).length, hi = vector.indexOf(Math.max(...vector)), lo = vector.indexOf(Math.min(...vector));
  const out = [{ text: `Mode ${k + 1} splits the vault ${up} notes against ${down}; ${plural(cross, "link")} cross the cut${cross <= Math.max(2, bars.length * 0.05) ? ", so the two halves are barely connected" : ""}.`, label: "Show it", show: true }];
  if (hi !== lo) out.push({ text: `${name(hi)} and ${name(lo)} swing furthest apart. A link between them, or through a shared note, ties the halves together.`, label: "Open " + name(hi).slice(0, 18), note: hi });
  const rest = vector.filter((_, i) => side(i) === 0).length;
  if (rest) out.push({ text: `${plural(rest, "note")} sit on the nodal line, belonging to neither half. They are the bridges; keep their links.`, label: "Show it", show: true });
  return { about: "Notes are masses on a stretched sheet and links are springs. The sheet rings in the shapes the links allow; amber swings up while blue swings down, and the dark line between them does not move. A lower frequency means a cleaner cut.", insights: out, freq, count };
}

// Slime mould: tubes are links; the ones that carry flow between the hubs thicken, the rest fade. Notes off the backbone are only reached by detour.
export function slimeInsights({ n, bars, kept, hubs, order }, name) {
  const on = new Array(n).fill(0); bars.forEach(([i, j], e) => { if (kept[e]) { on[i]++; on[j]++; } });
  const off = order.filter(i => !on[i] && !hubs.includes(i)), deg = degree(n, bars), carrying = kept.filter(Boolean).length, out = [];
  out.push({ text: `${carrying} of ${plural(bars.length, "link")} carry the vault between its ${hubs.length} hubs. The rest are never the short way from one hub to another.`, label: "Show it", show: true });
  if (off.length) out.push({ text: `${plural(off.length, "note")} are off the backbone. ${name(off[0])} has ${plural(deg[off[0]], "link")} but none that leads to a hub; link it to one.`, label: "Open note", note: off[0] });
  out.push({ text: `Links off the backbone are not wrong, but they add detours. Where two notes say the same thing, keep the one on the backbone.`, label: "Show it", show: true });
  return { about: "A slime mould thickens the tubes that carry the most flow and lets the rest die. Here each written link is a tube and the hubs are the food: what survives is the shortest set of links that holds the vault together.", insights: out };
}
