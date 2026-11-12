// Radar: the layout on a hand-built vault (a known answer), then the real dev page in headless Chrome: blips are drawn, a real
// click opens a note, the host's selection is marked, Tilt switches to 3D and back, a drag slides the screen and opens nothing,
// and with no open tasks it says so.
//   node tests/test_radar.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";
import { radarLayout, radiusOf, HOLD_DAYS } from "../src/scenes/radar.js";

const NAME = "radar", { ok, same, done } = checks(NAME);
const N = (id, extra) => ({ id, name: id, cluster: 0, age: 1, tasks: 0, ...extra });
const data = { nodes: [N("a", { tasks: 3, taskAge: 400 }), N("b", { tasks: 1, taskAge: 5 }), N("c", { tasks: 2, cluster: 1, age: 120 }), N("d", { cluster: 1 }), N("p", { tasks: 1, person: true })], links: [], clusters: [{ id: 0, name: "Zero" }, { id: 1, name: "One" }], wanted: [] };
const L = radarLayout(data), by = id => L.blips.find(b => b.n.id === id), away = id => Math.hypot(by(id).x, by(id).z);
same("a blip for each note with open tasks (not a person, not a note without tasks)", L.blips.map(b => b.n.id).sort(), ["a", "b", "c"]);
same("the totals", [L.tasks, L.notes], [6, 3]);
ok(away("a") < away("b"), "the task that has waited longer sits nearer the middle");
same("holding is waiting past the limit (taskAge, else age)", [by("a").holding, by("b").holding, by("c").holding], [true, false, true]);
ok(radiusOf(HOLD_DAYS) > radiusOf(400) && radiusOf(HOLD_DAYS) < radiusOf(5), "the red ring lies between a year and a few days");
same("a slice per topic, biggest first, filling the circle", [L.sectors.map(s => s.cluster), Math.abs(L.sectors[L.sectors.length - 1].a1 - L.sectors[0].a0 - 2 * Math.PI) < 1e-9], [[0, 1], true]);
ok(by("a").h > by("b").h, "more open tasks make a taller column");

const page = await openDev();
if (!page) { done(); skip(NAME); }
const { ev } = page, V = "window.__views", A = `${V}.api`;
const text = sel => ev(`(document.querySelector(${JSON.stringify(sel)}) || {}).innerText || ""`);
try {
  same("Radar mounts with the sample graph", await page.mount("radar"), null);
  await ev(`${A}.hold()`); await page.drawn();
  same("what it asks of the host", await ev(`VaultGraphViews.VIEWS.find(v => v.id === "radar").actions`), ["graph", "triage"]);
  ok((await ev(`${A}.blips()`)) >= 1, "blips are built");
  const pic = await page.pixels();
  ok(pic.lit > 2000 && pic.colours > 3, `the screen is drawn (${pic.lit} pixels, ${pic.colours} colour groups)`);
  ok(/^\d+ open tasks? · \d+ notes?$/.test(await text(".vgv-stat")), `the stat line: ${await text(".vgv-stat")}`);
  ok((await text(".vgv-legend")).includes("oldest task 90+ days"), "the legend explains the red ring");
  await page.shot("radar");

  const note = await page.find("note");
  ok(!!note, "a blip is on screen to click");
  if (note) {
    await page.click(note);
    same("a click opens the note", await ev("window.__opened"), note.id);
    same("and selects it", await ev(`${A}.selected()`), note.id);
    ok(/ · \d+ open tasks? · waiting \d+ days$/.test(await text(".vgv-stat")), `the stat line describes the blip: ${await text(".vgv-stat")}`);
  }
  await ev(`${V}.update({ selected: null }); window.__opened = null`);
  same("the host can clear the selection", await ev(`${A}.selected()`), null);

  // flat to 3D and back
  same("it opens flat", await ev(`${A}.tilted()`), false);
  ok(await page.press("Tilt into 3D: a blip becomes a column as tall as its task count"), "there is a Tilt button");
  same("Tilt lifts it into 3D", await ev(`${A}.tilted()`), true);
  await page.drawn(); await page.shot("radar-tilted");
  ok(await page.press("Look straight down again"), "and a Flat button to come back");
  same("Flat looks straight down again", await ev(`${A}.tilted()`), false);

  // a drag slides the screen and opens nothing
  await ev("window.__opened = null");
  const empty = (await page.grid(20)).find(p => !p.key), before = await ev(`${V}.turn()`);
  ok(!!empty, "there is empty space to drag");
  await page.drag(empty, { x: empty.x + 120, y: empty.y + 40 });
  const after = await ev(`${V}.turn()`);
  ok(after.yaw === before.yaw && !(await ev("window.__opened")), "a drag slides it (the compass stays) and opens nothing");

  // no open tasks: it says so, with a way on
  const all = await ev("window.__DATA");
  same("a vault without open tasks mounts", await page.mount("radar", undefined, { ...all, nodes: all.nodes.map(n => ({ ...n, tasks: 0 })) }), null);
  ok((await text(".vgv-controls")).includes("No note has one."), "it says there is nothing to show");
  ok(await page.press("Open the graph"), "and offers the graph");
  same("which asks the host", await ev("window.__actions"), ["graph"]);
  same("no errors in the page", await page.errors(), []);
} catch (e) { ok(false, `the test itself failed: ${e.message}`); }
finally { await page.close(); }
done();
