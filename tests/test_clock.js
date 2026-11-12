// Heat clock: the layout on a hand-built vault (a known answer), then the real dev page in headless Chrome: cells are drawn, a real
// click on a cell picks its topic (and a second click clears it), the host's note opens from the picked ring, Tilt switches to 3D
// and back, a drag slides the screen and opens nothing, and with no rhythm it says so.
//   node tests/test_clock.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";
import { clockLayout, peakOf, RING0, STEP } from "../src/scenes/clock.js";

const NAME = "clock", { ok, same, done } = checks(NAME);
const N = (id, cluster, extra) => ({ id, name: id, cluster, inlinks: 0, outlinks: 0, ...extra });
const data = {
  nodes: [N("a", 0, { inlinks: 5 }), N("b", 0, { inlinks: 9 }), N("c", 1), N("p", 0, { person: true, inlinks: 99 })], links: [], wanted: [],
  clusters: [{ id: 0, name: "Zero" }, { id: 1, name: "One" }, { id: 2, name: "Two" }],
  rhythm: { 0: { wd: [10, 0, 0, 2, 0, 0, 0], mo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0] }, 1: { wd: [0, 0, 4, 0, 0, 1, 0], mo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0] }, 2: { wd: [1, 1, 0, 0, 0, 0, 0], mo: new Array(12).fill(0) }, 9: { wd: [5, 5, 5, 5, 5, 5, 5], mo: new Array(12).fill(1) } },
};
const wed = new Date(2026, 10, 11, 12, 0);   // Wednesday 11 November 2026, noon
const L = clockLayout(data, wed), cell = (d, r, s) => L.cells.find(c => c.dial === d && c.ring === r && c.s === s);
same("a ring for each topic with three or more mentions that the vault knows, the busiest outside", L.rings.map(r => r.cluster), [1, 0]);
same("two dials: the week has 7 cells a ring, the year 12", [L.dials.map(d => d.n), L.cells.length], [[7, 12], (7 + 12) * 2]);
same("a dial's busiest slot is the sum of its rings", [L.dials[0].labels[L.dials[0].peak], L.dials[1].labels[L.dials[1].peak]], ["Mon", "Oct"]);
same("a ring's own busiest weekday and month", [peakOf(L.rings[1], "wd"), peakOf(L.rings[1], "mo")], [0, 9]);
ok(cell(0, 1, 0).t === 1 && cell(0, 1, 3).t === 0.2 && cell(0, 1, 1).t === 0, "heat is a cell's share of its ring's busiest slot");
ok(cell(0, 1, 0).h > cell(0, 1, 3).h && cell(0, 1, 3).h > cell(0, 1, 1).h, "a hotter cell is taller, and an empty one nearly flat");
ok(Math.abs(cell(0, 1, 0).r0 - (RING0 + STEP)) < 1e-9 && L.rOut === RING0 + 2 * STEP, "rings step outwards, the busiest last");
same("now: Wednesday, November", [L.now.wd, L.now.mo], [2, 10]);
ok(Math.abs(L.now.frac.wd - 2.5 / 7) < 1e-9, "the weekday hand is half way through Wednesday at noon");
ok(clockLayout(data, wed, true).dials[1].centre[0] === 0 && L.dials[1].centre[1] === 0, "the dials sit side by side, or one above the other on a tall screen");
same("no rhythm: no rings", clockLayout({ ...data, rhythm: undefined }).rings, []);

const page = await openDev();
if (!page) { done(); skip(NAME); }
const { ev } = page, V = "window.__views", A = `${V}.api`;
const text = sel => ev(`(document.querySelector(${JSON.stringify(sel)}) || {}).innerText || ""`);
try {
  same("Heat clock mounts with the sample graph", await page.mount("clock"), null);
  await page.drawn();
  same("what it asks of the host", await ev(`VaultGraphViews.VIEWS.find(v => v.id === "clock").actions`), ["graph"]);
  ok((await ev(`${A}.rings()`)) >= 2 && (await ev(`${A}.cells()`)) === (await ev(`${A}.rings()`)) * 19, "a ring of cells for each topic on both dials");
  const pic = await page.pixels();
  ok(pic.lit > 2000 && pic.colours > 3, `the dials are drawn (${pic.lit} pixels, ${pic.colours} colour groups)`);
  ok(/^\d+ topics? · busiest [A-Z][a-z]{2} · [A-Z][a-z]{2}$/.test(await text(".vgv-stat")), `the stat line: ${await text(".vgv-stat")}`);
  ok((await text(".vgv-legend")).includes("now"), "the legend names the hand");
  await page.shot("clock");

  const ring = await page.find("ring");
  ok(!!ring, "a cell is on screen to click");
  if (ring) {
    await page.click(ring);
    same("a click picks the cell's topic", await ev(`${A}.focus()`), ring.id);
    const name = (await ev("window.__DATA")).clusters.find(c => c.id === ring.id).name;
    ok((await text(".vgv-stat")).startsWith(name) && / · \d+ mentions?$/.test(await text(".vgv-stat")), `the stat line names the ring (and the cell the pointer is on): ${await text(".vgv-stat")}`);
    await page.shot("clock-picked");
    ok(await page.press("Show every topic again"), "there is a Clear button");
    same("Clear shows every topic again", await ev(`${A}.focus()`), null);
    await page.click(ring);
    await page.click(ring);
    same("a second click on the same ring clears it", await ev(`${A}.focus()`), null);
    await page.click(ring);
    const openTitle = await ev(`[...document.querySelectorAll(".vgv-frame button")].map(b => b.title).find(t => t.endsWith("most linked note"))`);
    ok(!!openTitle && await page.press(openTitle), "a picked ring offers its most linked note");
    ok(!!(await ev("window.__opened")), "which opens that note in the host");
  }
  await ev("window.__opened = null");
  same("it opens flat", await ev(`${A}.tilted()`), false);
  ok(await page.press("Tilt into 3D: a cell is as tall as its heat"), "there is a Tilt button");
  same("Tilt lifts it into 3D", await ev(`${A}.tilted()`), true);
  await page.drawn(); await page.shot("clock-tilted");
  ok(await page.press("Look straight down again"), "and a Flat button to come back");

  await ev("window.__opened = null");
  const empty = (await page.grid(20)).find(p => !p.key), before = await ev(`${V}.turn()`);
  ok(!!empty, "there is empty space to drag");
  await page.drag(empty, { x: empty.x + 120, y: empty.y + 40 });
  const after = await ev(`${V}.turn()`);
  ok(after.yaw === before.yaw && !(await ev("window.__opened")), "a drag slides it (the compass stays) and opens nothing");

  const all = await ev("window.__DATA");
  same("a vault without a rhythm mounts", await page.mount("clock", undefined, { ...all, rhythm: {} }), null);
  ok((await text(".vgv-controls")).includes("There is no pattern to show yet."), "it says there is nothing to show");
  ok(await page.press("Open the graph"), "and offers the graph");
  same("which asks the host", await ev("window.__actions"), ["graph"]);
  same("no errors in the page", await page.errors(), []);
} catch (e) { ok(false, `the test itself failed: ${e.message}`); }
finally { await page.close(); }
done();
