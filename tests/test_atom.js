// Atom: the layout on a hand-built vault (a known answer), then the real dev page in headless Chrome: the model is drawn, a real
// click on an electron opens the note and makes it the nucleus, Back returns, the host's selection recentres, and with no links
// it says what it needs.
//   node tests/test_atom.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";
import { atomLayout, SHELLS, RADII, NUCLEONS } from "../src/scenes/atom.js";

const NAME = "atom", { ok, same, done } = checks(NAME);

// a and b link to c; c links to d; d to e; e to f. x and y link only to each other. z is isolated, p is a person.
const N = (id, extra) => ({ id, name: id, cluster: 0, folder: "", outlinks: 0, inlinks: 0, mentions: 0, bc: 0, recent: 0, words: 100, age: 1, tasks: 0, isolated: false, ...extra });
const link = (source, target, kind = "link") => ({ source, target, w: 1, kind });
const nodes = [N("a"), N("b"), N("c", { inlinks: 2 }), N("d", { inlinks: 1 }), N("e", { inlinks: 1 }), N("f", { inlinks: 1 }), N("x"), N("y", { inlinks: 1 }), N("z", { isolated: true }), N("p", { person: true })];
const data = { nodes, links: [link("a", "c"), link("b", "c"), link("c", "d"), link("d", "e"), link("e", "f"), link("x", "y"), link("p", "c", "person"), link("z", "c", "similar")], clusters: [{ id: 0, name: "Zero", label: "Zero", size: 9 }], wanted: [], quality: { stale_days: 180 } };

const L = atomLayout(data, "c");
same("the wanted note is the nucleus", L.centre, "c");
same("a red ball for each note linking in, a blue one for each it links to", [L.protons, L.neutrons, L.nucleus.filter(b => b.proton).length, L.nucleus.filter(b => !b.proton).length], [2, 1, 2, 1]);
same("a shell holds the notes that many links away", L.shells.map(s => s.ids.slice().sort()), [["a", "b", "d"], ["e"], ["f"]]);
same("only written links count: not a person's, not a similar note's", [L.dist("p"), L.dist("z")], [null, null]);
same("notes no chain of links reaches are named", L.unreached.slice().sort(), ["x", "y"]);
same("the farthest note and how far", [L.far.id, L.far.d, L.within, L.linked], ["f", 3, 5, 8]);
ok(L.electrons.every(e => Math.abs(Math.hypot(...e.at) - RADII[e.shell]) < 1e-6), "an electron stands on its shell's ring");
same("with no note wanted, the most relied-on linked note is the nucleus", atomLayout(data).centre, "c");
same("a note with no links can't be the nucleus", atomLayout(data, "z").centre, "c");
same("nothing linked: no nucleus", atomLayout({ ...data, links: [] }).centre, null);
// a hub with 100 notes linking in: the shell is capped and says how many there are, the nucleus keeps the share
const many = Array.from({ length: 100 }, (_, i) => N("m" + i)), big = atomLayout({ ...data, nodes: [N("hub", { inlinks: 100 }), N("out"), ...many], links: [...many.map(m => link(m.id, "hub")), link("hub", "out")] }, "hub");
same("a full shell shows what an atom's holds and counts the rest", [big.shells[0].ids.length, big.shells[0].all], [SHELLS[0], 101]);
same("the nucleus draws at most its limit, with one ball kept for the smaller side", [big.nucleus.length, big.nucleus.filter(b => !b.proton).length], [NUCLEONS, 1]);

const page = await openDev();
if (!page) { done(); skip(NAME); }
const { ev } = page, V = "window.__views", A = `${V}.api`;
const text = sel => ev(`(document.querySelector(${JSON.stringify(sel)}) || {}).innerText || ""`);
try {
  same("the Atom mounts", await page.mount("atom"), null);
  await page.drawn();
  same("the view says which it is, and what it asks of the host", await ev(`[${V}.view, VaultGraphViews.VIEWS.find(v => v.id === "atom").actions]`), ["atom", ["graph"]]);
  const pic = await page.pixels();
  ok(pic.lit > 2000 && pic.colours > 3, `the atom is drawn (${pic.lit} pixels, ${pic.colours} colour groups)`);
  ok(/ · \d+ links? in · \d+ out · \d+, \d+, \d+ notes one, two and three links away$/.test(await text(".vgv-stat")), `the stat line: ${await text(".vgv-stat")}`);
  ok((await text(".vgv-legend")).includes("a note that links to it"), "the legend explains the red balls");
  await page.shot("atom");
  const first = await ev(`${A}.centre()`), shell = await ev(`${A}.layout().shells[0].ids`);
  ok(shell.length > 0, `the nucleus has a first shell (${shell.length})`);
  let note = null;
  for (const id of await ev(`${A}.layout().electrons.map(e => e.id)`)) { note = await page.find("note", id); if (note) break; }
  ok(!!note, "an electron is on screen to click");
  if (note) {
    await page.click(note);
    same("a click opens the note", await ev("window.__opened"), note.id);
    same("and makes it the nucleus", await ev(`${A}.centre()`), note.id);
    ok((await text(".vgv-stat")).startsWith(await ev(`window.__DATA.nodes.find(n => n.id === ${JSON.stringify(note.id)}).name`)), "the stat line is the new nucleus's");
    await page.shot("atom-picked");
    ok(await page.press("Back to the note before"), "Back is offered");
    same("and returns to the note before", await ev(`${A}.centre()`), first);
  }
  await ev(`${V}.update({ selected: ${JSON.stringify(shell[0])} })`);
  same("the host's selection becomes the nucleus", await ev(`${A}.centre()`), shell[0]);
  same("no today strip", await ev(`${V}.today()`), null);
  const d = await ev("window.__DATA");
  same("a vault with no links mounts", await page.mount("atom", undefined, { ...d, links: [] }), null);
  ok((await text(".vgv-controls")).includes("The Atom needs notes that link to one another."), "with no links it says what it needs");
  ok(await page.press("Open the graph"), "and offers the graph");
  same("which asks the host", await ev("window.__actions"), ["graph"]);
  same("no errors in the page", await page.errors(), []);
} catch (e) { ok(false, `the test itself failed: ${e.message}`); }
finally { await page.close(); }
done();
