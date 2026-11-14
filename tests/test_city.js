// City: what it adds to the shared city layout on a hand-built vault (a known answer: the town hall, the cranes), then the
// real dev page in headless Chrome: buildings, halls and cranes are drawn, the stat line names the tallest, "Show tallest"
// picks it without opening it, a real click opens a note, and Cyberpunk still gets its spire from the same layout.
//   node tests/test_city.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";
import { cityLayout } from "../src/scenes/cyberpunk.js";

const NAME = "city", { ok, same, done } = checks(NAME);

const NOW = Date.parse("2026-11-13T12:00:00Z"), day = back => new Date(NOW - back * 864e5).toISOString().slice(0, 10);
const N = (id, extra) => ({ id, name: id, cluster: 0, inlinks: 0, mentions: 0, bc: 0, recent: 0, words: 100, age: 1, tasks: 0, isolated: false, born: day(400), ...extra });
// topic 0: a (most linked), b (written 2 days ago), c (written 5 days ago), old (no date); topic 1: d (written 8 days ago); m0 is topic 0's map
const nodes = [N("a", { inlinks: 9 }), N("b", { inlinks: 3, born: day(2) }), N("c", { born: day(5) }), N("old", { born: undefined }), N("d", { cluster: 1, inlinks: 1, born: day(8) }), N("m0", { moc: true, born: day(1) })];
const clusters = [{ id: 0, name: "Zero", label: "Zero", size: 4 }, { id: 1, name: "One", label: "One", size: 1 }];
const data = { nodes, links: [], clusters, wanted: [], quality: { stale_days: 180 } };

const L = cityLayout(data, { hall: true, now: NOW }), by = id => L.towers.find(t => t.n.id === id), plain = cityLayout(data, { now: NOW });
same("the topic's map is a town hall", [by("m0").kind, L.towers.filter(t => t.kind === "spire").length], ["hall", 0]);
same("and a spire when no hall is asked for", plain.towers.find(t => t.n.id === "m0").kind, "spire");
ok(by("m0").h < by("c").h + 1 && by("m0").h < by("a").h, "a hall is low: it never hides the buildings");
ok(by("m0").z > Math.max(...L.towers.filter(t => t.kind === "tower" && t.d === 0).map(t => t.z)), "a hall stands at its district's front, before every building");
same("the buildings written in the last week are new, newest first", L.fresh, ["b", "c"]);
same("an older note, a note with no date and the map are not", ["d", "old", "m0"].filter(id => L.fresh.includes(id)), []);
same("everything else stands where Cyberpunk puts it", L.towers.filter(t => t.kind === "tower").map(t => [t.n.id, t.x, t.z, t.h]), plain.towers.filter(t => t.kind === "tower").map(t => [t.n.id, t.x, t.z, t.h]));
const many = { ...data, nodes: Array.from({ length: 30 }, (_, i) => N("n" + i, { inlinks: 1, born: day(1) })) };
same("at most 15 are new at once", cityLayout(many, { now: NOW }).fresh.length, 15);

const page = await openDev();
if (!page) { done(); skip(NAME); }
const { ev } = page, V = "window.__views", A = `${V}.api`;
const text = sel => ev(`(document.querySelector(${JSON.stringify(sel)}) || {}).innerText || ""`);
try {
  // the sample's dates are fixed, so five of its notes are written today here: the cranes
  const all = await ev("window.__DATA"), today = new Date().toISOString().slice(0, 10);
  const own = all.nodes.filter(n => !n.moc && !n.person && !n.ghost && !n.isolated).slice(0, 5).map(n => n.id);
  const fresh = { ...all, nodes: all.nodes.map(n => (own.includes(n.id) ? { ...n, born: today } : n)) };
  same("City mounts with the sample graph", await page.mount("city", undefined, fresh), null);
  await ev(`${A}.hold()`); await page.drawn();
  same("the view says which it is, and what it asks of the host", await ev(`[${V}.view, VaultGraphViews.VIEWS.find(v => v.id === "city").actions]`), ["city", ["graph"]]);
  const [towers, halls, cranes, mocs] = await ev(`[${A}.towers(), ${A}.halls(), ${A}.cranes(), window.__DATA.nodes.filter(n => n.moc).length]`);
  ok(towers >= 10, `buildings are built (${towers})`);
  ok(mocs > 0 && halls > 0 && halls <= mocs, `the sample's maps are town halls (${halls} of ${mocs} maps)`);
  ok(cranes > 0 && cranes <= 5, `the notes written today carry cranes (${cranes})`);
  const pic = await page.pixels();
  ok(pic.lit > 2000 && pic.colours > 3, `the city is drawn (${pic.lit} pixels, ${pic.colours} colour groups)`);
  const stat = await text(".vgv-stat");
  ok(new RegExp(`^${towers} buildings · ${cranes} new this week · tallest: .+$`).test(stat), `the stat line: ${stat}`);
  const legend = await text(".vgv-legend");
  ok(legend.includes("crane = new this week") && legend.includes("hall = the topic's map") && legend.includes("grey = stale"), `the legend explains the crane, the hall and grey: ${legend}`);
  await page.shot("city");

  // Show tallest picks the tallest building and opens nothing
  await ev("window.__opened = null");
  const tallest = await ev(`${A}.tallest()`);
  ok(await page.press("Insights") || await page.press("How the notes relate to this view and how to improve them"), "the Insights button opens");
  ok(await page.press("Show tallest"), "Show tallest is offered");
  same("it picks the tallest building, and opens nothing", await ev(`[${A}.selected(), window.__opened]`), [tallest, null]);
  ok(/ in · (dark|busy|dim)/.test(await text(".vgv-stat")), `the stat line describes it: ${await text(".vgv-stat")}`);
  await page.shot("city-tallest");
  await ev(`${V}.update({ selected: null })`);
  ok(await page.press("Close the insights"), "the insights close");

  const note = await page.find("note");
  ok(!!note, "a building is on screen to click");
  if (note) { await page.click(note); same("a click opens the note", await ev("window.__opened"), note.id); }

  same("Cyberpunk mounts on the same data", await page.mount("cyberpunk", undefined, fresh), null);
  same("and has spires, no halls and no cranes", await ev(`[${A}.halls(), ${A}.cranes()]`), [0, 0]);
  const corner = () => ev(`(async () => { const img = new Image(); img.src = ${V}.snapshot(); await img.decode(); const c = document.createElement("canvas"); c.width = img.width; c.height = img.height; const x = c.getContext("2d"); x.drawImage(img, 0, 0); return [...x.getImageData(2, 2, 1, 1).data].slice(0, 3); })()`);
  const far = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);
  same("Cyberpunk has no sky", await ev(`${A}.sky()`), null);
  const bare = await corner(), dist = await ev(`${A}.back()`);

  // the sky: its glow follows the hour, stars only at night, and the open ground is never what the camera frames
  const sky = {};
  for (const hour of [12, 19, 23]) { same(`City mounts at ${hour}:00`, await page.mount("city", { hour }, fresh), null); await ev(`${A}.hold()`); await page.drawn(); sky[hour] = { ...(await ev(`${A}.sky()`)), px: await corner() }; }
  same("the sky knows its hour, and has stars only at night", [12, 19, 23].map(h => [sky[h].hour, sky[h].stars]), [[12, false], [19, false], [23, true]]);
  ok(far(sky[12].px, bare) > 4 && far(sky[12].px, sky[19].px) > 4, `the sky is drawn, and noon's is not dusk's (${sky[12].px} · ${sky[19].px} · no sky ${bare})`);
  ok(far(sky[12].px, bare) < 90 && far(sky[19].px, bare) < 90, `the sky stays near the theme background, so the frame text still reads (${sky[12].px} · ${sky[19].px} · no sky ${bare})`);
  const cityDist = await ev(`${A}.back()`);
  ok(Math.abs(cityDist - dist) < dist * 0.15, `the ground is not framed: the camera stands where it does over Cyberpunk (${cityDist.toFixed(0)} · ${dist.toFixed(0)})`);
  await page.shot("city-night");

  same("two notes mount", await page.mount("city", undefined, { ...all, nodes: all.nodes.slice(0, 2), links: [] }), null);
  ok((await text(".vgv-controls")).includes("City needs notes in topics, linked to one another."), "with too few notes it says what it needs");
  ok(await page.press("Open the graph"), "and offers the graph");
  same("no errors in the page", await page.errors(), []);
} catch (e) { ok(false, `the test itself failed: ${e.message}`); }
finally { await page.close(); }
done();
