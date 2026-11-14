// Station: the layout on a hand-built vault (a known answer), then the real dev page in headless Chrome: the model is drawn, a
// real click on a module opens its note, the arrows change the topic, the host's selection picks the topic, and an empty vault
// says what it needs.
//   node tests/test_station.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";
import { stationLayout, RING, GAP, PER_RING } from "../src/scenes/station.js";

const NAME = "station", { ok, same, done } = checks(NAME);

// Topic 0: the map M links a, b and e (e is stale); c links only with a; d links only with q, a note of topic 1. Topic 1 has no map.
const N = (id, extra) => ({ id, name: id, cluster: 0, folder: "", outlinks: 0, inlinks: 0, mentions: 0, bc: 0, recent: 0, words: 100, age: 60, tasks: 0, isolated: false, ...extra });
const link = (source, target, kind = "link") => ({ source, target, w: 1, kind });
const nodes = [N("M", { moc: true }), N("a", { inlinks: 3 }), N("b", { inlinks: 2, age: 1 }), N("c"), N("d"), N("e", { inlinks: 1, age: 400 }), N("q", { cluster: 1, inlinks: 2 }), N("r", { cluster: 1 }), N("p", { person: true })];
const data = { nodes, links: [link("M", "a", "moc"), link("M", "b", "moc"), link("e", "M"), link("c", "a"), link("d", "q"), link("r", "q"), link("p", "d", "person")],
  clusters: [{ id: 0, name: "Zero", label: "Zero", size: 6 }, { id: 1, name: "One", label: "One", size: 2 }], wanted: [], quality: { stale_days: 180 } };

const L = stationLayout(data, 0), ids = list => list.map(m => m.id);
same("the hub is the topic's map", L.core, { id: "M", name: "M", map: true });
same("a note the map links with is docked, the most relied-on first", ids(L.docked), ["a", "b", "e"]);
same("a note that links only with other notes of the topic rides the second ring, tied to the docked one", L.second.map(m => [m.id, m.anchor]), [["c", "a"]]);
same("a note that links with nothing in its topic is adrift", ids(L.adrift), ["d"]);
same("the counts are of every note, shown or not", L.counts, { docked: 3, second: 1, adrift: 1 });
same("a module's state: edited lately, steady, stale", L.docked.map(m => m.state), ["steady", "active", "stale"]);
ok(L.docked.every(m => Math.abs(Math.hypot(m.at[0], m.at[1]) - RING) < 1e-6 && m.at[2] === GAP) && L.second.every(m => m.at[2] === -GAP), "docked modules stand on the front ring, the rest on the second");
ok(L.adrift.every(m => Math.hypot(m.at[0], m.at[1]) > RING + 4), "a rock is outside the rings");
const one = stationLayout(data, 1);
same("a topic with no map: its most relied-on note is the hub", [one.core, ids(one.docked)], [{ id: "q", name: "q", map: false }, ["r"]]);
same("a topic that isn't there: the biggest topic is shown", stationLayout(data, 7).cluster, 0);
same("no notes: no station", stationLayout({ ...data, nodes: [], links: [] }).core, null);
const crowd = Array.from({ length: 60 }, (_, i) => N("n" + i)), full = stationLayout({ ...data, nodes: [N("M", { moc: true }), ...crowd], links: crowd.map(n => link("M", n.id, "moc")) }, 0);
same("a ring shows at most its limit and counts the rest", [full.docked.length, full.counts.docked], [PER_RING, 60]);

const page = await openDev();
if (!page) { done(); skip(NAME); }
const { ev } = page, V = "window.__views", A = `${V}.api`;
const text = sel => ev(`(document.querySelector(${JSON.stringify(sel)}) || {}).innerText || ""`);
try {
  same("the Station mounts", await page.mount("station"), null);
  await page.drawn();
  same("the view says which it is, and what it asks of the host", await ev(`[${V}.view, VaultGraphViews.VIEWS.find(v => v.id === "station").actions]`), ["station", ["graph"]]);
  const pic = await page.pixels();
  ok(pic.lit > 2000 && pic.colours > 3, `the station is drawn (${pic.lit} pixels, ${pic.colours} colour groups)`);
  ok(/ · \d+ docked · \d+ on the second ring · \d+ adrift$/.test(await text(".vgv-stat")), `the stat line: ${await text(".vgv-stat")}`);
  ok((await text(".vgv-legend")).includes("spoke or strut = a link"), "the legend explains the spokes");
  await page.shot("station");
  const lay = await ev(`(() => { const l = ${A}.layout(); return { cluster: l.cluster, core: l.core.id, parts: [...l.docked, ...l.second, ...l.adrift].map(m => m.id), topics: l.topics.map(t => t.cluster) }; })()`);
  ok(lay.parts.length > 0, `the topic has notes round its hub (${lay.parts.length})`);
  let note = null;
  for (const id of lay.parts) { note = await page.find("note", id); if (note) break; }
  ok(!!note, "a module is on screen to click");
  if (note) { await page.click(note); same("a click opens the note", await ev("window.__opened"), note.id); }
  ok(lay.topics.length > 1, "the sample vault has more than one topic");
  ok(await page.press("The next topic"), "the next topic is offered");
  same("and shows it", await ev(`${A}.layout().cluster`), lay.topics[1]);
  await page.shot("station-next");
  ok(await page.press("The topic before"), "and the one before");
  same("which returns", await ev(`${A}.layout().cluster`), lay.topics[0]);
  const other = await ev(`window.__DATA.nodes.find(n => n.cluster === ${lay.topics[1]} && !n.moc && !n.person && !n.ghost).id`);
  await ev(`${V}.update({ selected: ${JSON.stringify(other)} })`);
  same("the host's selection shows that note's topic", await ev(`${A}.layout().cluster`), lay.topics[1]);
  const d = await ev("window.__DATA");
  same("a vault with no notes of its own mounts", await page.mount("station", undefined, { ...d, nodes: d.nodes.filter(n => n.person), links: [] }), null);
  ok((await text(".vgv-controls")).includes("The Station needs notes in a topic."), "with no notes it says what it needs");
  ok(await page.press("Open the graph"), "and offers the graph");
  same("which asks the host", await ev("window.__actions"), ["graph"]);
  same("no errors in the page", await page.errors(), []);
} catch (e) { ok(false, `the test itself failed: ${e.message}`); }
finally { await page.close(); }
done();
