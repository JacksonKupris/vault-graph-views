// Light cones: the cone arithmetic on a hand-built chain with dates (a known answer), then the real dev page in headless
// Chrome: a real click on a note opens it and lights its past and future, hovering does too, the host's selection is marked,
// the today strip offers the note with the longest reach, and with too few dated notes it says what it needs.
//   node tests/test_cones.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";
import { causalGraph, reach, conesLayout } from "../src/scenes/cones.js";

const NAME = "cones", { ok, same, done } = checks(NAME);

// a -> b -> c is a chain over three days; d links b the same day as b (no order); e links c by a similar link (carries no cause);
// f is undated; g links a and c but is written after both. Every link is written in either direction to show direction doesn't matter.
const N = (id, born, extra) => ({ id, name: id, born, cluster: 0, ...extra });
const nodes = [N("a", "2026-01-01"), N("b", "2026-01-05"), N("c", "2026-01-09"), N("d", "2026-01-05"), N("e", "2026-01-12"), N("f", undefined), N("g", "2026-01-20")];
const L = (source, target, kind = "link") => ({ source, target, kind });
const links = [L("b", "a"), L("b", "c"), L("b", "d"), L("e", "c", "similar"), L("f", "a"), L("a", "g"), L("c", "g"), L("a", "b")];
const G = causalGraph(nodes, links), names = s => [...s].sort();
same("a note without a day is left out", [...G.day.keys()].sort(), ["a", "b", "c", "d", "e", "g"]);
same("what b rested on", names(reach(G.older, "b")), ["a"]);
same("what b could have touched: c, and g through c or a", names(reach(G.newer, "b")), ["c", "g"]);
same("g rests on all three", names(reach(G.older, "g")), ["a", "b", "c"]);
same("a similar link carries no cause: e has no past", names(reach(G.older, "e")), []);
same("two notes of one day don't order one another", [names(reach(G.older, "d")), names(reach(G.newer, "d"))], [[], []]);
same("a link written twice counts once", G.newer.get("a").filter(x => x === "b").length, 1);
const lay = conesLayout(nodes, G);
ok(lay.pos.get("a")[1] < lay.pos.get("b")[1] && lay.pos.get("b")[1] < lay.pos.get("c")[1] && lay.pos.get("c")[1] < lay.pos.get("g")[1], "an older note sits lower");
same("notes of one day sit at one height", lay.pos.get("b")[1], lay.pos.get("d")[1]);

const page = await openDev();
if (!page) { done(); skip(NAME); }
const { ev } = page, V = "window.__views", A = `${V}.api`;
const text = sel => ev(`(document.querySelector(${JSON.stringify(sel)}) || {}).innerText || ""`);
try {
  same("Light cones mounts with the sample graph", await page.mount("cones"), null);
  same("the view says which it is, and what it asks of the host", await ev(`[${V}.view, VaultGraphViews.VIEWS.find(v => v.id === "cones").actions]`), ["cones", ["graph"]]);
  const ids = await ev(`${A}.notes()`), dated = await ev(`window.__DATA.nodes.filter(n => n.born && !/^(Daily|Weekly)/.test(n.name)).length`);
  ok(ids.length >= 10 && ids.length <= dated, `the dated notes are placed (${ids.length})`);
  const pic = await page.pixels();
  ok(pic.lit > 2000 && pic.colours > 3, `the notes are drawn, a colour a topic (${pic.lit} pixels, ${pic.colours} colour groups)`);
  ok(/dated notes · \d+ links? · \d+ days/.test(await text(".vgv-stat")), `the stat line before a pick: ${await text(".vgv-stat")}`);
  await page.shot("cones");

  const note = await page.find("note");
  ok(!!note, "a note is on screen to click");
  if (note) {
    await page.click(note);
    same("a click opens the note", await ev("window.__opened"), note.id);
    same("and selects it", await ev(`${A}.selected()`), note.id);
    const c = await ev(`(() => { const c = ${A}.cones(${JSON.stringify(note.id)}); return { past: [...c.past], future: [...c.future] }; })()`);
    const stat = await text(".vgv-stat");
    ok(stat.includes(`${c.past.length} note${c.past.length === 1 ? "" : "s"} in its past`) && stat.includes(`${c.future.length} note${c.future.length === 1 ? "" : "s"} in its future`), `the stat line counts both cones: ${stat}`);
    const day = id => ev(`${A}.graph().day.get(${JSON.stringify(id)})`), mine = await day(note.id);
    ok((await Promise.all(c.past.map(day))).every(d => d < mine) && (await Promise.all(c.future.map(day))).every(d => d > mine), "everything in the past is older and everything in the future newer");
    await page.shot("cones-selected");
  }
  await ev(`${V}.update({ selected: null }); window.__opened = null`);
  same("the host can clear the selection", await ev(`${A}.selected()`), null);
  await ev(`${V}.update({ selected: ${JSON.stringify(ids[2])} })`);
  same("and set it", await ev(`${A}.selected()`), ids[2]);

  const today = await ev(`(() => { const t = ${V}.today(); return t && { text: t.text, label: t.label }; })()`);
  ok(today && /reaches the most: \d+ notes? in its future$/.test(today.text) && today.label === "Show it", `the today strip: ${JSON.stringify(today)}`);
  await ev(`${V}.update({ selected: null }); ${V}.today().run()`);
  const most = await ev(`(() => ${A}.notes().reduce((a, b) => (${A}.cones(a).future.size >= ${A}.cones(b).future.size ? a : b)))()`);
  same("its button shows that note", await ev(`${A}.selected()`), most);

  // a drag turns the view and opens nothing
  await ev("window.__opened = null");
  const empty = (await page.grid(20)).find(p => !p.key), before = await ev(`${V}.turn()`);
  ok(!!empty, "there is empty space to drag");
  await page.drag(empty, { x: empty.x + 180, y: empty.y + 40 });
  ok(Math.abs((await ev(`${V}.turn()`)).yaw - before.yaw) > 0.5, "a drag turned the view");
  same("and opened nothing", await ev("window.__opened"), null);

  // too few dated notes
  const few = { ...(await ev("window.__DATA")), nodes: (await ev("window.__DATA")).nodes.slice(0, 1), links: [], clusters: (await ev("window.__DATA")).clusters };
  same("one dated note mounts", await page.mount("cones", undefined, few), null);
  const said = await text(".vgv-controls");
  ok(said.includes("Light cones needs notes with a date and links between them."), `it says what it needs: ${said}`);
  ok(await page.press("Open the graph"), "its button is there to press");
  same("and asks the host for the graph", await ev("window.__actions"), ["graph"]);
  same("no errors in the page", await page.errors(), []);
} catch (e) {
  ok(false, "the test itself failed: " + e.message);
} finally {
  await page.close();
}
done();
