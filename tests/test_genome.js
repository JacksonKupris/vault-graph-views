// Genome fold on the real dev page in headless Chrome: every day is a bead, a real click on a note opens it, a real
// click on a day opens that day's journal, a real click on a loop shows the notes its two days share and the chip puts
// it back, a drag turns the fold and opens nothing, the host's selection is marked, and with too few journals it says
// what it needs and its button reaches the host's graph.
//   node tests/test_genome.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";

const NAME = "genome", { ok, same, done } = checks(NAME);
const page = await openDev();
if (!page) skip(NAME);
const { ev } = page, V = "window.__views", A = `${V}.api`;
const text = sel => ev(`(document.querySelector(${JSON.stringify(sel)}) || {}).innerText || ""`);
const labels = () => ev(`[...document.querySelectorAll(".vgv-frame > div:nth-child(3) > *")].filter(n => n.style.display !== "none").map(n => n.textContent)`);

try {
  same("Genome fold mounts with the sample fold", await page.mount("genome"), null);
  same("the view says which it is, and what it asks of the host", await ev(`[${V}.view, VaultGraphViews.VIEWS.find(v => v.id === "genome").actions]`), ["genome", ["graph"]]);
  const S = await ev("window.__DATA.strand"), F = await ev("window.__FOLD");
  const G = await ev(`(() => { const G = ${A}.layout(); return { beads: G.beads.length, notes: ${A}.notes(), loops: ${A}.loops() }; })()`);
  same("a bead a day", G.beads, S.days.length);
  ok(G.notes.length >= 10, `the notes the journals name are placed (${G.notes.length})`);
  same("a loop for each the fold found", G.loops.length, F.loops.length);
  const stat = `${F.n} days · ${F.domains.length} domains · ${F.loops.length} loops · fit ${F.grade} (stress ${F.stress.toFixed(2)})`;
  same("the stat line gives the days, the domains, the loops and the fit", [await ev(`${V}.stat()`), await text(".vgv-stat")], [stat, stat]);
  const pic = await page.pixels();
  ok(pic.lit > 3000 && pic.colours > 4, `the fold is drawn, a colour a domain (${pic.lit} pixels, ${pic.colours} colour groups)`);
  ok(pic.gold > 30, `the loops are drawn in their own colour (${pic.gold} pixels)`);
  ok((await labels()).some(t => /^\w{3} \d+ – \w{3} \d+$/.test(t)), `a long domain is named by its days: ${JSON.stringify((await labels()).slice(0, 4))}`);
  await page.shot("genome-fold");

  // ---- a real click on a note opens it, and marks it
  const note = await page.find("note");
  ok(!!note, "a note is on screen to click");
  if (note) {
    await page.click(note);
    same("a click on a note opens it", await ev("window.__opened"), note.id);
    same("and it is the selected one", await ev(`${A}.selected()`), note.id);
    const name = await ev(`window.__DATA.nodes.find(n => n.id === ${JSON.stringify(note.id)}).name`);
    ok((await labels()).includes(name.length > 34 ? name.slice(0, 33) + "…" : name), "its name is on the fold");
    await page.shot("genome-selected");
    // its name is a button that does the same as the note itself
    await ev(`${V}.update({ selected: null }); window.__opened = null`);
    await page.send("Input.dispatchMouseEvent", { type: "mouseMoved", x: note.x, y: note.y, button: "none" });
    ok(await page.press(`Open ${name}`), "the hovered note's name can be pressed");
    same("pressing the name opens the note and selects it, as a click on the note does", [await ev("window.__opened"), await ev(`${A}.selected()`)], [note.id, note.id]);
  }
  // ---- a real click on a day opens that day's journal
  await ev("window.__opened = null");
  const day = await page.find("day");
  ok(!!day, "a day is on screen to click");
  if (day) {
    await page.click(day);
    same("a click on a day opens its journal", await ev("window.__opened"), S.paths[day.id]);
    ok(/\d{4}-\d\d-\d\d\.md$/.test(S.paths[day.id]), `a day's note is a journal: ${S.paths[day.id]}`);
    same("the selected note is still the note", await ev(`${A}.selected()`), note && note.id);
  }
  // ---- hovering a day says which day and how many notes it names
  if (day) {
    await page.send("Input.dispatchMouseEvent", { type: "mouseMoved", x: day.x, y: day.y, button: "none" });
    same("the tooltip", await text(".vgv-tip"), `${S.days[day.id]} · ${new Set(S.rows[day.id]).size} ${new Set(S.rows[day.id]).size === 1 ? "note" : "notes"} named`);
  }
  // ---- a real click on a loop shows the notes its two days share
  await ev("window.__opened = null");
  const loop = await page.find("loop");
  ok(!!loop, "a loop's dot is on screen to click");
  if (loop) {
    await page.click(loop);
    same("a click on a loop shows it", await ev(`${A}.shown()`), loop.id);
    same("and opens nothing", await ev("window.__opened"), null);
    const l = F.loops[loop.id], both = [...new Set(S.rows[l.a].filter(j => S.rows[l.b].includes(j)))].map(j => S.ids[j]);
    same("its notes are the ones named on both its days", [...G.loops[loop.id].ids].sort(), [...both].sort());
    same("as many as the fold counted", both.length, l.count);
    const shownNames = await labels(), inGraph = await ev(`${JSON.stringify(both)}.filter(id => window.__DATA.nodes.some(n => n.id === id)).length`);
    ok(inGraph > 0 && shownNames.length > 0, "the shared notes are named on the fold");
    const chip = await ev(`(([...document.querySelectorAll(".vgv-frame button")].find(b => b.title.startsWith("Named on both")) || {}).title) || null`);
    ok(!!chip, "the chip says which two days");
    await page.shot("genome-loop");
    ok(chip && await page.press(chip), "the chip can be pressed");
    same("and puts the fold back", await ev(`${A}.shown()`), null);
  }
  // ---- the today strip offers the strongest loop
  const best = F.loops.reduce((a, b) => (a.count >= b.count ? a : b));
  const today = await ev(`(() => { const t = ${V}.today(); return t && { text: t.text, label: t.label }; })()`);
  ok(today && today.text.startsWith("Strongest loop: ") && today.text.includes(`name the same ${best.count} notes`) && today.label === "Show them", `the today strip: ${JSON.stringify(today)}`);
  await ev(`${V}.today().run()`);
  same("its button shows that loop", F.loops[await ev(`${A}.shown()`)].count, best.count);

  // ---- a drag turns the fold and opens nothing
  await ev("window.__opened = null");
  const before = await ev(`${V}.turn()`), empty = (await page.grid(20)).find(p => !p.key);
  ok(!!empty, "there is empty space to drag");
  await page.drag(empty, { x: empty.x + 180, y: empty.y + 40 });
  const after = await ev(`${V}.turn()`);
  ok(Math.abs(after.yaw - before.yaw) > 0.5, `a drag turned the fold (${JSON.stringify(after)})`);
  same("and opened nothing", await ev("window.__opened"), null);
  await page.shot("genome-turned");

  // ---- the host's selection
  await ev(`${V}.update({ selected: ${JSON.stringify(G.notes[3])} })`);
  same("the host's selected note is marked", await ev(`${A}.selected()`), G.notes[3]);
  await ev(`${V}.update({ selected: null })`);
  same("and unmarked", await ev(`${A}.selected()`), null);

  // ---- too few journals: it says what it needs, and its button opens the graph
  const few = { ...(await ev("window.__DATA")), strand: { days: ["2026-01-05", "2026-01-06"], paths: ["a.md", "b.md"], ids: [], rows: [[], []] } };
  same("two days of journals mount", await page.mount("genome", { fold: { n: 2, X: [[0, 0, 0], [1, 0, 0]], stress: 0, grade: "good", domains: [[0, 1]], loops: [] } }, few), null);
  same("the stat line counts them", await text(".vgv-stat"), "2 days of journals");
  const said = await text(".vgv-controls");
  ok(said.includes("Genome fold needs 4 days of journals that name notes.") && said.includes("2 days so far."), `it says what it needs: ${said}`);
  same("nothing to click on the fold", (await page.grid(40)).filter(p => p.key).length, 0);
  await page.shot("genome-empty");
  ok(await page.press("Open the graph"), "its button is there to press");
  same("and asks the host for the graph", await ev("window.__actions"), ["graph"]);
  same("no journals at all mount too", await page.mount("genome", { fold: { n: 0, X: [], stress: 0, grade: "", domains: [], loops: [] } }, { ...few, strand: { days: [], paths: [], ids: [], rows: [] } }), null);
  same("and say so", await text(".vgv-stat"), "0 days of journals");
  // journals and a fold, but not one note in the graph (a trimmed vault): no note is drawn, and nothing throws
  await ev(`window.__errs = []; addEventListener("error", e => window.__errs.push(String(e.message)))`);
  same("a graph with no notes mounts", await page.mount("genome", undefined, { ...(await ev("window.__DATA")), nodes: [], links: [], clusters: [] }), null);
  await new Promise(r => setTimeout(r, 400));
  same("and draws without an error", await ev("window.__errs"), []);

  // ---- refusals: the host is told what is wrong
  ok(((await page.mount("genome", {})) || "").includes("inputs.fold should be object"), "no fold is refused, and the message says why");
  ok(((await page.mount("genome", { fold: { ...F, n: F.n - 1 } })) || "").includes("the fold is from other data"), "a fold of other journals is refused");
  same("no errors in the page", await page.errors(), []);
} catch (e) {
  ok(false, "the test itself failed: " + e.message);
} finally {
  await page.close();
}
done();
