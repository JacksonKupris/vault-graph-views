// Normal modes in the real dev page (headless Chrome): the sheet is drawn and rings (it moves between two moments and holds still
// when held), the arrows step through the modes, a real click on a note opens it, the host's selection is marked, the today strip
// shows the cleanest cut, a drag turns the view, and with too few joined notes it says what it needs. The maths is test_modes.js.
//   node tests/test_modesview.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";

const NAME = "modesview", { ok, same, done } = checks(NAME);
const page = await openDev();
if (!page) { done(); skip(NAME); }
const { ev } = page, V = "window.__views", A = `${V}.api`;
const text = sel => ev(`(document.querySelector(${JSON.stringify(sel)}) || {}).innerText || ""`);
const wait = ms => new Promise(r => setTimeout(r, ms));
try {
  same("Normal modes mounts with the sample graph", await page.mount("modes"), null);
  same("the view says which it is, and what it asks of the host", await ev(`[${V}.view, VaultGraphViews.VIEWS.find(v => v.id === "modes").actions]`), ["modes", ["graph"]]);
  const ids = await ev(`${A}.ids()`), nModes = await ev(`${A}.modes().length`);
  ok(ids.length >= 10 && nModes === ids.length - 1, `the notes are masses and there is a mode for each way they can move (${ids.length} notes, ${nModes} modes)`);
  same("it starts on mode 1", await ev(`${A}.mode()`), 0);
  ok(/^Mode 1 of \d+ · \d+ up, \d+ down · frequency [\d.]+$/.test(await text(".vgv-stat")), `the stat line: ${await text(".vgv-stat")}`);

  await ev(`${A}.hold(0.25)`); await page.drawn();
  const full = await ev(`${A}.sheetHeights()`);
  ok(Math.max(...full.map(Math.abs)) > 1, `held at the top of a swing the sheet is lifted and pressed (${Math.min(...full).toFixed(1)} to ${Math.max(...full).toFixed(1)})`);
  const pic = await page.pixels();
  ok(pic.lit > 3000 && pic.colours > 6, `the sheet is drawn (${pic.lit} pixels, ${pic.colours} colour groups)`);
  await page.shot("modes");
  await ev(`${A}.hold(0)`); await page.drawn();
  ok(Math.max(...(await ev(`${A}.sheetHeights()`)).map(Math.abs)) < 1e-6, "at the still moment of the swing the sheet is flat");
  await ev(`${A}.hold(0.25)`);
  const a = await ev(`${A}.heights()`); await wait(300); await page.drawn();
  same("held, it does not move", await ev(`${A}.heights()`), a);
  ok(await page.press("Let the sheet ring"), "the Ring button is there to press");
  const b = await ev(`${A}.heights()`); await wait(500); await page.drawn();
  ok(JSON.stringify(await ev(`${A}.heights()`)) !== JSON.stringify(b) && await ev(`${A}.playing()`), "pressing Ring sets it moving");
  ok(await page.press("Hold the sheet still") && !(await ev(`${A}.playing()`)), "and Hold stills it");

  // ringing: a note moving under a finger is hard to hit, so the sheet holds while the pointer is down
  ok(await page.press("Let the sheet ring") && await ev(`${A}.moving()`), "ringing again");
  const spot = (await page.grid(20)).find(p => !p.key), press = type => page.send("Input.dispatchMouseEvent", { type, x: spot.x, y: spot.y, button: "left", clickCount: 1 });
  await press("mousePressed");
  same("a mouse going down holds it still", await ev(`${A}.moving()`), false);
  const h1 = await ev(`${A}.heights()`); await wait(400); await page.drawn();
  same("and the sheet really stops under it", await ev(`${A}.heights()`), h1);
  await press("mouseReleased"); await wait(300);
  same("and it stays held just after the pointer lifts", await ev(`${A}.moving()`), false);
  await wait(1500);
  same("then it rings again", await ev(`${A}.moving()`), true);
  ok(await page.press("Hold the sheet still") && !(await ev(`${A}.moving()`)), "Hold stills it again");
  ok(await page.press("Next mode (faster)"), "the next-mode button is there to press");
  same("it steps to mode 2", await ev(`${A}.mode()`), 1);
  ok(/^Mode 2 of/.test(await text(".vgv-stat")), `and the stat line follows: ${await text(".vgv-stat")}`);
  const flat = await ev(`(() => { const m = ${A}.modes(); return [m[0].freq < m[1].freq, Math.abs(m[1].vector.reduce((s, x) => s + x, 0)) < 1e-6 * m[1].vector.length]; })()`);
  same("mode 2 is faster than mode 1, and moves as much up as down", flat, [true, true]);
  ok(await page.press("Previous mode (slower)"), "the previous-mode button is there");
  same("it steps back to mode 1", await ev(`${A}.mode()`), 0);

  await ev(`${A}.hold(0.25)`); await page.drawn();
  const note = await page.find("note");
  ok(!!note, "a note is on screen to click");
  if (note) {
    await ev("window.__opened = null");
    await page.click(note);
    same("a click opens the note", await ev("window.__opened"), note.id);
    same("and selects it", await ev(`${A}.selected()`), note.id);
    ok(/ · (swings up|swings down|on a nodal line) [\d.]+ in mode 1$/.test(await text(".vgv-stat")), `the stat line gives its swing: ${await text(".vgv-stat")}`);
    await page.shot("modes-selected");
  }
  await ev(`${V}.update({ selected: null })`);
  same("the host can clear the selection", await ev(`${A}.selected()`), null);
  await ev(`${V}.update({ selected: ${JSON.stringify(ids[3])} })`);
  same("and set it", await ev(`${A}.selected()`), ids[3]);

  const today = await ev(`(() => { const t = ${V}.today(); return t && { text: t.text, label: t.label }; })()`);
  ok(today && /^The vault's cleanest cut is \d+ notes against \d+$/.test(today.text) && today.label === "Show it", `the today strip: ${JSON.stringify(today)}`);
  await ev(`${A}.setMode(3); ${V}.today().run()`);
  same("its button shows mode 1", await ev(`${A}.mode()`), 0);

  await ev("window.__opened = null");
  const empty = (await page.grid(20)).find(p => !p.key), before = await ev(`${V}.turn()`);
  ok(!!empty, "there is empty space to drag");
  await page.drag(empty, { x: empty.x + 180, y: empty.y + 40 });
  ok(Math.abs((await ev(`${V}.turn()`)).yaw - before.yaw) > 0.5, "a drag turned the view");
  same("and opened nothing", await ev("window.__opened"), null);

  const all = await ev("window.__DATA");
  same("two notes mount", await page.mount("modes", undefined, { ...all, nodes: all.nodes.slice(0, 2), links: [] }), null);
  ok((await text(".vgv-controls")).includes("Normal modes needs a set of notes joined by written links."), `it says what it needs: ${await text(".vgv-controls")}`);
  ok(await page.press("Open the graph"), "its button is there to press");
  same("and asks the host for the graph", await ev("window.__actions"), ["graph"]);
  same("no errors in the page", await page.errors(), []);
} catch (e) {
  ok(false, "the test itself failed: " + e.message);
} finally {
  await page.close();
}
done();
