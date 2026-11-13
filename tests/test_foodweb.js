// Food web: the layout on a hand-built vault (a known answer), then the real dev page in headless Chrome: spheres are drawn at
// their levels, a real click opens a note and lights what rests on it, the host's selection is marked, a stale note others rest
// on is found and offered, the contract names what is missing, and with too few notes it says what it needs.
//   node tests/test_foodweb.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";
import { webLayout, GAP } from "../src/scenes/foodweb.js";
import { check, checkInputs } from "../src/contract.js";

const NAME = "foodweb", { ok, same, done } = checks(NAME);

// c is the base, relied on by a, b, d and e, and it is old; a leans on b and c; f is isolated; p is a person
const N = (id, extra) => ({ id, name: id, cluster: 0, folder: "", outlinks: 0, inlinks: 0, mentions: 0, bc: 0, recent: 0, words: 100, age: 1, tasks: 0, isolated: false, ...extra });
const nodes = [N("a"), N("b", { inlinks: 1 }), N("c", { inlinks: 4, age: 400 }), N("d"), N("e"), N("f", { isolated: true }), N("p", { person: true })];
const data = { nodes, links: [], clusters: [{ id: 0, name: "Zero", label: "Zero", size: 5 }], wanted: [], quality: { stale_days: 180 } };
const web = { ids: ["a", "b", "c", "d", "e"], level: [3, 2, 1, 2, 2], edges: [[0, 1], [0, 2], [1, 2], [3, 2], [4, 2]], stats: { mean: 2, maxLevel: 3, incoherence: 0.2, connectance: 0.2, links: 5 } };

const L = webLayout(data, web), by = id => L.notes.find(t => t.n.id === id);
same("a sphere for every linked note, none for an isolated note or a person", L.notes.map(t => t.n.id).sort(), ["a", "b", "c", "d", "e"]);
same("a layer holds the notes of its level", L.bands, [1, 3, 1]);
same("height is the level: the base at the bottom", [by("c").y, by("b").y, by("a").y], [0, GAP, 2 * GAP]);
same("what rests on a note is the notes that link to it", [L.up("c").sort(), L.down("a").sort()], [["a", "b", "d", "e"], ["b", "c"]]);
same("a note counts the notes resting on it", [by("c").reliedOn, by("b").reliedOn, by("a").leansOn], [4, 1, 2]);
same("only a stale note that four rest on is endangered", L.notes.filter(t => t.endangered).map(t => t.n.id), ["c"]);
same("a note not stale is not endangered however many rest on it", webLayout({ ...data, nodes: nodes.map(n => (n.id === "c" ? { ...n, age: 3 } : n)) }, web).notes.filter(t => t.endangered).length, 0);

same("the contract accepts the web", checkInputs("foodweb", data, { web }), []);
ok(checkInputs("foodweb", data, {}).some(p => p.includes("inputs.web should be object")), "the contract says when the web is missing");
ok(checkInputs("foodweb", data, { web: { ...web, level: [1] } }).some(p => p.includes("ids and 1 levels")), "and when the levels are for other notes");
ok(checkInputs("foodweb", data, { web: { ...web, edges: [[0, 9]] } }).some(p => p.includes("don't name two of its ids")), "and when a link names a note that isn't there");
same("the same data stays valid", check(data), []);

const page = await openDev();
if (!page) { done(); skip(NAME); }
const { ev } = page, V = "window.__views", A = `${V}.api`;
const text = sel => ev(`(document.querySelector(${JSON.stringify(sel)}) || {}).innerText || ""`);
try {
  same("the Food web mounts with the sample web", await page.mount("foodweb"), null);
  await page.drawn();
  same("the view says which it is, and what it asks of the host", await ev(`[${V}.view, VaultGraphViews.VIEWS.find(v => v.id === "foodweb").actions]`), ["foodweb", ["graph"]]);
  const spheres = await ev(`${A}.notes()`);
  ok(spheres >= 10, `spheres are built (${spheres})`);
  const pic = await page.pixels();
  ok(pic.lit > 2000 && pic.colours > 3, `the web is drawn (${pic.lit} pixels, ${pic.colours} colour groups)`);
  ok(/^mean level [0-9.]+ · top [0-9.]+ · incoherence [0-9.]+ · \d+ endangered notes?$/.test(await text(".vgv-stat")), `the stat line: ${await text(".vgv-stat")}`);
  ok((await text(".vgv-legend")).includes("stale, and others rest on it"), "the legend explains the red spheres");
  await page.shot("foodweb");

  const note = await page.find("note");
  ok(!!note, "a sphere is on screen to click");
  if (note) {
    await page.click(note);
    same("a click opens the note", await ev("window.__opened"), note.id);
    same("and selects it", await ev(`${A}.selected()`), note.id);
    ok(/ · rests on \d+ notes? · \d+ notes? rest on it/.test(await text(".vgv-stat")), `the stat line describes the note: ${await text(".vgv-stat")}`);
    ok((await ev(`${A}.layout().up(${V}.api.selected()).length + ${A}.layout().down(${V}.api.selected()).length`)) > 0, "the note has links to light");
    await page.shot("foodweb-selected");
  }
  await ev(`${V}.update({ selected: null }); window.__opened = null`);
  same("the host can clear the selection", await ev(`${A}.selected()`), null);

  // the sample vault has no stale note that four rest on, so age the most relied-on one
  const all = await ev("window.__DATA");
  same("no today strip when nothing endangered", await ev(`${V}.today()`), null);
  same("an old, relied-on note mounts", await page.mount("foodweb", undefined, { ...all, nodes: all.nodes.map(n => (n.id === "03-Resources/Infrastructure/VPN Setup.md" ? { ...n, age: 400 } : n)) }), null);
  const today = await ev(`(() => { const t = ${V}.today(); return t && { text: t.text, label: t.label }; })()`);
  ok(!!today && /is stale and \d+ notes? rest on it$/.test(today.text) && today.label === "Open note", `the today strip offers the stale note others rest on: ${JSON.stringify(today)}`);
  await ev(`${V}.today().run()`);
  same("which opens it", [await ev(`${A}.layout().notes.find(t => t.n.id === window.__opened).endangered`)], [true]);

  same("a missing web is named", (await page.mount("foodweb", {})) || "", "vault-graph-views: inputs.web should be object, is undefined");
  same("two notes mount", await page.mount("foodweb", undefined, { ...all, nodes: all.nodes.slice(0, 2), links: [] }), null);
  ok((await text(".vgv-controls")).includes("The Food web needs notes that link to one another."), "with too few notes it says what it needs");
  ok(await page.press("Open the graph"), "and offers the graph");
  same("which asks the host", await ev("window.__actions"), ["graph"]);
  same("no errors in the page", await page.errors(), []);
} catch (e) { ok(false, `the test itself failed: ${e.message}`); }
finally { await page.close(); }
done();
