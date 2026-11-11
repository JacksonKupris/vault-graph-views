// Load paths in the real dev page (headless Chrome): the truss is drawn, a real click on a note opens it and marks its bars,
// a click on a bar names the force it carries and opens nothing, the host's selection is marked, the today strip shows the
// busiest bar, a drag turns the view, and with too few joined notes it says what it needs. The maths is test_truss.js.
//   node tests/test_loadpaths.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";

const NAME = "loadpaths", { ok, same, done } = checks(NAME);
const page = await openDev();
if (!page) { done(); skip(NAME); }
const { ev } = page, V = "window.__views", A = `${V}.api`;
const text = sel => ev(`(document.querySelector(${JSON.stringify(sel)}) || {}).innerText || ""`);
try {
  same("Load paths mounts with the sample graph", await page.mount("loadpaths"), null);
  same("the view says which it is, and what it asks of the host", await ev(`[${V}.view, VaultGraphViews.VIEWS.find(v => v.id === "loadpaths").actions]`), ["loadpaths", ["graph"]]);
  const T = await ev(`(() => { const t = ${A}.truss(); return { n: t.ids.length, bars: t.bars.length, ground: t.ground.length }; })()`);
  ok(T.n >= 10 && T.bars >= T.n - 1 && T.ground >= 3, `the notes are joints, the links bars, some notes ground (${JSON.stringify(T)})`);
  ok((await ev(`${A}.solved().residual`)) < 1e-4, "the page's own solve balances the load");
  const pic = await page.pixels();
  ok(pic.lit > 1500 && pic.colours > 3, `the truss is drawn (${pic.lit} pixels, ${pic.colours} colour groups)`);
  ok(/\d+ notes · \d+ bars · \d+ ground notes · load [\d.]+/.test(await text(".vgv-stat")), `the stat line before a pick: ${await text(".vgv-stat")}`);
  await page.shot("loadpaths");

  const note = await page.find("note");
  ok(!!note, "a note is on screen to click");
  if (note) {
    await page.click(note);
    same("a click opens the note", await ev("window.__opened"), note.id);
    same("and selects it", await ev(`${A}.selected()`), note.id);
    ok(/bars? carrying/.test(await text(".vgv-stat")), `the stat line gives its bars: ${await text(".vgv-stat")}`);
    await page.shot("loadpaths-selected");
  }
  await ev("window.__opened = null");
  const bar = await page.find("bar");
  ok(!!bar, "a bar is on screen to click");
  if (bar) {
    await page.click(bar);
    same("a click on a bar opens no note", await ev("window.__opened"), null);
    same("and picks that bar", await ev(`${A}.bar()`), +bar.id);
    ok(/ · (pulled|pushed) with [\d.]+$/.test(await text(".vgv-stat")), `the stat line names the force: ${await text(".vgv-stat")}`);
  }
  await ev(`${V}.update({ selected: null })`);
  same("the host can clear the selection", [await ev(`${A}.selected()`), await ev(`${A}.bar()`)], [null, null]);
  const ids = await ev(`${A}.notes()`);
  await ev(`${V}.update({ selected: ${JSON.stringify(ids[3])} })`);
  same("and set it", await ev(`${A}.selected()`), ids[3]);

  const today = await ev(`(() => { const t = ${V}.today(); return t && { text: t.text, label: t.label }; })()`);
  ok(today && /carries the most \([\d.]+\), (pulled|pushed)$/.test(today.text) && today.label === "Show it", `the today strip: ${JSON.stringify(today)}`);
  await ev(`${V}.update({ selected: null }); ${V}.today().run()`);
  same("its button shows the busiest bar", await ev(`${A}.bar()`), await ev(`${A}.read().busiest`));

  await ev("window.__opened = null");
  const empty = (await page.grid(20)).find(p => !p.key), before = await ev(`${V}.turn()`);
  ok(!!empty, "there is empty space to drag");
  await page.drag(empty, { x: empty.x + 180, y: empty.y + 40 });
  ok(Math.abs((await ev(`${V}.turn()`)).yaw - before.yaw) > 0.5, "a drag turned the view");
  same("and opened nothing", await ev("window.__opened"), null);

  const all = await ev("window.__DATA");
  same("two notes mount", await page.mount("loadpaths", undefined, { ...all, nodes: all.nodes.slice(0, 2), links: [] }), null);
  ok((await text(".vgv-controls")).includes("Load paths needs a set of notes joined by written links."), `it says what it needs: ${await text(".vgv-controls")}`);
  ok(await page.press("Open the graph"), "its button is there to press");
  same("and asks the host for the graph", await ev("window.__actions"), ["graph"]);
  same("no errors in the page", await page.errors(), []);
} catch (e) {
  ok(false, "the test itself failed: " + e.message);
} finally {
  await page.close();
}
done();
