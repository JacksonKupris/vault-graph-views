// Slime mould in the real dev page (headless Chrome): the tubes are drawn, they grow when played (the widths move) and hold when
// held, the buttons jump to the start and the end, a real click on a note opens it, the host's selection is marked, the today strip
// says how many links carry on, a drag turns the view, and with too few joined notes it says what it needs. The maths is test_physarum.js.
//   node tests/test_slimeview.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";

const NAME = "slimeview", { ok, same, done } = checks(NAME);
const page = await openDev();
if (!page) { done(); skip(NAME); }
const { ev } = page, V = "window.__views", A = `${V}.api`;
const text = sel => ev(`(document.querySelector(${JSON.stringify(sel)}) || {}).innerText || ""`);
const wait = ms => new Promise(r => setTimeout(r, ms));
try {
  same("Slime mould mounts with the sample graph", await page.mount("slime"), null);
  same("the view says which it is, and what it asks of the host", await ev(`[${V}.view, VaultGraphViews.VIEWS.find(v => v.id === "slime").actions]`), ["slime", ["graph", "add-link", "decline-link"]]);
  const ids = await ev(`${A}.ids()`), hubs = await ev(`${A}.hubs()`), links = await ev(`${A}.links()`);
  ok(ids.length >= 10 && hubs.length >= 2 && links >= ids.length - 1, `notes, hubs and links (${ids.length} notes, ${hubs.length} hubs, ${links} links)`);
  same("it starts growing", [await ev(`${A}.step()`) < await ev(`${A}.steps()`), await ev(`${A}.playing()`)], [true, true]);

  await ev(`${A}.hold()`); await page.drawn();
  const pic = await page.pixels();
  ok(pic.lit > 1500 && pic.colours > 4, `the tubes are drawn (${pic.lit} pixels, ${pic.colours} colour groups)`);
  await ev(`${A}.setStep(0)`); await page.drawn();
  const start = await ev(`${A}.widths()`);
  ok(start.every(w => Math.abs(w - 1) < 1e-6), "at the start every tube has the same width");
  ok(/^\d+ of \d+ links carry on · fed by \d+ hubs · step 0 of \d+$/.test(await text(".vgv-stat")), `the stat line: ${await text(".vgv-stat")}`);
  await page.shot("slime-start");

  await ev(`${A}.setStep(${A}.steps())`); await page.drawn();
  const end = await ev(`${A}.widths()`), fin = await ev(`${A}.final()`);
  same("at the end the widths are the finished ones", end.map(x => +x.toFixed(5)), fin.map(x => +x.toFixed(5)));
  const peak = Math.max(...end), carried = end.filter(w => w / peak >= 0.1).length;
  ok(carried >= 1 && carried < end.length, `some links carry on and some fade (${carried} of ${end.length})`);
  same("and the stat line counts them", await ev(`${A}.carrying()`), carried);
  await page.shot("slime-end");

  ok(await page.press("Back to tubes of equal width") && await ev(`${A}.step()`) === 0, "Start goes back to tubes of equal width");
  ok(await page.press("Let the mould grow") && await ev(`${A}.playing()`), "Play sets it growing");
  await wait(700); await page.drawn();
  ok(await ev(`${A}.step()`) > 1, `and the mould grows (step ${await ev(`${A}.step()`)})`);
  ok(await page.press("Hold the growth") && !(await ev(`${A}.playing()`)), "Hold stops it");
  const held = await ev(`${A}.widths()`); await wait(300); await page.drawn();
  same("held, it does not change", await ev(`${A}.widths()`), held);
  ok(await page.press("Jump to the finished backbone"), "End is there to press");
  same("it jumps to the last step", await ev(`${A}.step()`), await ev(`${A}.steps()`));
  ok(await page.press("Start again from tubes of equal width"), "and at the end Play becomes Grow again");
  same("which sets it growing from the start", [await ev(`${A}.step()`) < await ev(`${A}.steps()`) / 2, await ev(`${A}.playing()`)], [true, true]);
  await ev(`${A}.hold()`);

  await ev(`${A}.setStep(${A}.steps())`); await page.drawn();
  const note = await page.find("note");
  ok(!!note, "a note is on screen to click");
  if (note) {
    await ev("window.__opened = null");
    await page.click(note);
    same("a click opens the note", await ev("window.__opened"), note.id);
    same("and selects it", await ev(`${A}.selected()`), note.id);
    ok(/ · (hub · )?\d+ of \d+ links? carry on$/.test(await text(".vgv-stat")), `the stat line gives its links: ${await text(".vgv-stat")}`);
  }
  await ev(`${V}.update({ selected: null })`);
  same("the host can clear the selection", await ev(`${A}.selected()`), null);
  await ev(`${V}.update({ selected: ${JSON.stringify(ids[3])} })`);
  same("and set it", await ev(`${A}.selected()`), ids[3]);

  const today = await ev(`(() => { const t = ${V}.today(); return t && { text: t.text, label: t.label }; })()`);
  ok(today && /^\d+ of \d+ links carry the vault between its \d+ hubs$/.test(today.text) && today.label === "Show it", `the today strip: ${JSON.stringify(today)}`);
  await ev(`${A}.setStep(0); ${V}.today().run()`);
  same("its button shows the finished backbone", await ev(`${A}.step()`), await ev(`${A}.steps()`));

  // Simulate: rows of links that beat random links; Add and Decline call the host and the row moves on; nothing is written by the view
  ok(await page.press("Find links that would shorten the routes between your hubs, and test each against random links"), "Simulate is there to press");
  await page.drawn();
  const rows = async () => ev(`[...document.querySelectorAll(".vgv-insights > div")].map(r => ({ text: r.firstChild.textContent, buttons: [...r.querySelectorAll("button")].map(b => b.textContent) })).filter(r => r.buttons[0] === "Add link" || /^No (link|more)/.test(r.text))`);
  const found = await rows();
  ok(found.length >= 1, `Simulate lists a result (${found.length} rows)`);
  const first = found[0];
  ok(first.buttons[0] === "Add link" ? /^Link .+ to .+: routes between your hubs get [0-9]+% shorter[.] A random link would do this about 1 in [0-9]+ times[.]$/.test(first.text) && first.buttons.join() === "Add link,Decline,Show"
     : /^No link does better/.test(first.text), `the row says what it does and offers Add, Decline and Show: ${first.text}`);
  if (first.buttons[0] === "Add link") {
    await ev("window.__actions.length = 0; window.__actionDetail = null");
    await ev(`[...document.querySelectorAll(".vgv-insights button")].find(b => b.textContent === "Decline").click()`);
    same("Decline tells the host which link", await ev("[window.__actions.slice(), Object.keys(window.__actionDetail || {})]"), [["decline-link"], ["from", "to"]]);
    const left = await rows();
    ok(left.length === found.length - 1 || (found.length === 1 && /^No more links/.test(left[0].text)), `the declined row is gone and the next is first (${left.length} left)`);
    // the host keeps what was declined and hands it back (inputs.declined): after a reload the row stays gone
    const dec = await ev("window.__actionDetail");
    same("the host is told which link", Object.keys(dec).sort(), ["from", "to"]);
    await page.mount("slime", { declined: [dec] });
    await page.press("Find links that would shorten the routes between your hubs, and test each against random links");
    const again = await rows();
    ok(again.length === left.length && again.every((r, i) => r.text === left[i].text), `a declined link stays gone when the view is mounted again (${again.length} rows)`);
    await ev(`window.__views.update({ declined: [] })`);
    ok((await rows()).length === found.length, "and comes back when the host forgets it");
    await page.mount("slime");
    await page.press("Find links that would shorten the routes between your hubs, and test each against random links");
    const left2 = await rows();
    if (left2.length && left2[0].buttons[0] === "Add link") {
      await ev("window.__actions.length = 0");
      await ev(`[...document.querySelectorAll(".vgv-insights button")].find(b => b.textContent === "Add link").click()`);
      same("Add link tells the host", await ev("[window.__actions.slice(), Object.keys(window.__actionDetail || {})]"), [["add-link"], ["from", "to"]]);
    }
  }
  await page.shot("slime-simulate");

  await ev("window.__opened = null");
  const empty = (await page.grid(20)).find(p => !p.key), before = await ev(`${V}.turn()`);
  ok(!!empty, "there is empty space to drag");
  await page.drag(empty, { x: empty.x + 180, y: empty.y + 40 });
  ok(Math.abs((await ev(`${V}.turn()`)).yaw - before.yaw) > 0.5, "a drag turned the view");
  same("and opened nothing", await ev("window.__opened"), null);

  const all = await ev("window.__DATA");
  same("two notes mount", await page.mount("slime", undefined, { ...all, nodes: all.nodes.slice(0, 2), links: [] }), null);
  ok((await text(".vgv-controls")).includes("Slime mould needs a set of notes joined by written links."), `it says what it needs: ${await text(".vgv-controls")}`);
  ok(await page.press("Open the graph"), "its button is there to press");
  same("and asks the host for the graph", await ev("window.__actions"), ["graph"]);
  same("no errors in the page", await page.errors(), []);
} catch (e) {
  ok(false, "the test itself failed: " + e.message);
} finally {
  await page.close();
}
done();
