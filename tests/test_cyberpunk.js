// Cyberpunk: the layout on a hand-built vault (a known answer), then the real dev page in headless Chrome: towers are drawn,
// a real click opens a note and arcs its links, the host's selection is marked, the darkest district can be shown and cleared,
// and with too few notes it says what it needs.
//   node tests/test_cyberpunk.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";
import { cityLayout } from "../src/scenes/cyberpunk.js";
import { districtsOf, fromMiddle, gridDims } from "../src/districts.js";
import { staleOf, activityOf } from "../src/notes.js";

const NAME = "cyberpunk", { ok, same, done } = checks(NAME);

// topic 0: a (most linked), b, c(old); topic 1: d, e(isolated); f is in no linked topic; p is a person; m0 is topic 0's map
const N = (id, extra) => ({ id, name: id, cluster: 0, inlinks: 0, mentions: 0, bc: 0, recent: 0, words: 100, age: 1, tasks: 0, isolated: false, ...extra });
const nodes = [N("a", { inlinks: 9, mentions: 5, tasks: 2 }), N("b", { inlinks: 3 }), N("c", { age: 400 }), N("d", { cluster: 1, inlinks: 1 }), N("e", { cluster: 1, isolated: true }), N("f", { cluster: 7, isolated: true }), N("p", { person: true }), N("m0", { moc: true })];
const clusters = [{ id: 0, name: "Zero", label: "Zero", size: 3 }, { id: 1, name: "One", label: "One", size: 2 }];
const data = { nodes, links: [], clusters, wanted: [], quality: { stale_days: 180 } };

const ds = districtsOf(data);
same("a district per topic that has notes, biggest first", ds.map(d => d.cluster), [0, 1]);
same("the most relied-on note leads its district", ds[0].notes.map(n => n.id), ["a", "b", "c"]);
same("an unlinked note is left out of its topic", ds[1].notes.map(n => n.id), ["d"]);
same("the topic's map is found", [ds[0].moc && ds[0].moc.id, ds[1].moc], ["m0", null]);
same("a grid holds its cells", [gridDims(7).cols * gridDims(7).rows >= 7, fromMiddle(5).length, fromMiddle(1)], [true, 5, [[0, 0]]]);
same("the middle of a grid comes first", fromMiddle(9)[0], [0, 0]);
ok(staleOf(data)(nodes[2]) && !staleOf(data)(nodes[1]), "a note past the vault's stale limit is stale");
ok(!staleOf(data)(N("Daily Standup 2020-01-01", { age: 999 })), "a note named for a day is a record, never stale");
ok(activityOf(nodes)(nodes[1]) > activityOf(nodes)(nodes[2]), "a fresh note is livelier than an old one");

const L = cityLayout(data), by = id => L.towers.find(t => t.n.id === id);
same("a tower for every note of a district, a spire for its map, a stall for the rest", [L.towers.filter(t => t.kind === "tower").length, L.towers.filter(t => t.kind === "spire").length, L.towers.filter(t => t.kind === "stall").map(t => t.n.id).sort()], [4, 1, ["e", "f"]]);
same("a person is not in the city", !!by("p"), false);
ok(by("a").h > by("b").h && by("b").h > by("c").h, "a note the vault leans on stands taller");
same("the stale note is dark and a fresh one is lit", [by("c").level, by("a").level > 0], [0, true]);
const away = id => Math.hypot(by(id).x - L.districts[0].x, by(id).z - L.districts[0].z);
ok(away("a") <= away("b") && away("b") <= away("c"), "the most relied-on note stands nearest its district's middle");
ok(by("m0").h > by("a").h, "the spire is the tallest in its district");

const page = await openDev();
if (!page) { done(); skip(NAME); }
const { ev } = page, V = "window.__views", A = `${V}.api`;
const text = sel => ev(`(document.querySelector(${JSON.stringify(sel)}) || {}).innerText || ""`);
try {
  same("Cyberpunk mounts with the sample graph", await page.mount("cyberpunk"), null);
  await ev(`${A}.hold()`); await page.drawn();
  same("the view says which it is, and what it asks of the host", await ev(`[${V}.view, VaultGraphViews.VIEWS.find(v => v.id === "cyberpunk").actions]`), ["cyberpunk", ["graph"]]);
  const towers = await ev(`${A}.towers()`);
  ok(towers >= 10, `towers are built (${towers})`);
  const pic = await page.pixels();
  ok(pic.lit > 2000 && pic.colours > 3, `the city is drawn (${pic.lit} pixels, ${pic.colours} colour groups)`);
  ok(/^\d+ towers? · \d+ dark · \d+ districts?$/.test(await text(".vgv-stat")), `the stat line: ${await text(".vgv-stat")}`);
  ok((await text(".vgv-legend")).includes("beacon = open task"), "the legend explains the beacon");
  await page.shot("cyberpunk");

  const note = await page.find("note");
  ok(!!note, "a tower is on screen to click");
  if (note) {
    await page.click(note);
    same("a click opens the note", await ev("window.__opened"), note.id);
    same("and selects it", await ev(`${A}.selected()`), note.id);
    ok(/( in · (dark|busy|dim)| · map of \d+ notes?$)/.test(await text(".vgv-stat")), `the stat line describes the tower: ${await text(".vgv-stat")}`);
    await page.shot("cyberpunk-selected");
  }
  await ev(`${V}.update({ selected: null }); window.__opened = null`);
  same("the host can clear the selection", await ev(`${A}.selected()`), null);

  const today = await ev(`(() => { const t = ${V}.today(); return t && { text: t.text, label: t.label }; })()`);
  ok((await ev(`${A}.dark()`)) > 0, "the sample vault has stale notes, so the strip has something to say");
  ok(!!today && /^Darkest district: .+ · \d+ stale notes?$/.test(today.text) && today.label === "Go there", `the today strip: ${JSON.stringify(today)}`);
  await ev(`${V}.today().run()`); await page.drawn();
  const label = await ev(`(document.querySelector(".vgv-frame button[title$='. Clear']") || {}).title || ""`);
  ok((await ev(`${A}.district()`)) !== null && /^District: .+\. Clear$/.test(label), `its button shows that district, with the way out: ${label}`);
  ok((await page.press(label)) && (await ev(`${A}.district()`)) === null, "the chip clears it");

  // a drag turns the view and opens nothing
  await ev("window.__opened = null");
  const empty = (await page.grid(20)).find(p => !p.key), before = await ev(`${V}.turn()`);
  ok(!!empty, "there is empty space to drag");
  await page.drag(empty, { x: empty.x + 180, y: empty.y + 40 });
  ok((await ev(`${V}.turn()`)).yaw !== before.yaw && !(await ev("window.__opened")), "a drag turns the view and opens nothing");

  // too few notes: it says what it needs, with a way on
  const all = await ev("window.__DATA");
  same("two notes mount", await page.mount("cyberpunk", undefined, { ...all, nodes: all.nodes.slice(0, 2), links: [] }), null);
  ok((await text(".vgv-controls")).includes("Cyberpunk needs notes in topics, linked to one another."), "with too few notes it says what it needs");
  ok(await page.press("Open the graph"), "and offers the graph");
  same("which asks the host", await ev("window.__actions"), ["graph"]);
  same("no errors in the page", await page.errors(), []);
} catch (e) { ok(false, `the test itself failed: ${e.message}`); }
finally { await page.close(); }
done();
