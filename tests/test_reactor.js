// Reactor: the layout on a hand-built vault (a known answer), then the real dev page in headless Chrome: the model is drawn, a
// real click on a rod opens its note, a loop shows only its topic and the chip clears it, the today strip offers the most linked
// stale note, and a vault with nothing edited or stale says what it needs.
//   node tests/test_reactor.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";
import { reactorLayout, WINDOW, FUEL, PITCH } from "../src/scenes/reactor.js";

const NAME = "reactor", { ok, same, done } = checks(NAME);

// Five notes edited in the 30 days (three in topic 0, two in topic 1). s1 and s3 went stale in them (190 and 200 days, the limit is 180);
// s2 went stale long ago. s2 has 5 notes linking to it, s1 has 3, s3 none. old is neither edited nor stale. A dated log never goes stale.
const N = (id, extra) => ({ id, name: id, cluster: 0, folder: "", outlinks: 0, inlinks: 0, mentions: 0, bc: 0, recent: 0, words: 100, age: 1, tasks: 0, isolated: false, ...extra });
const nodes = [N("e1", { age: 0, recent: 9 }), N("e2", { age: 2 }), N("e3", { age: 30 }), N("e4", { age: 5, cluster: 1 }), N("e5", { age: 20, cluster: 1 }),
  N("s1", { age: 190, inlinks: 3 }), N("s2", { age: 400, inlinks: 5 }), N("s3", { age: 200 }), N("old", { age: 90 }), N("Log 2025-01-01", { age: 500, inlinks: 9 }), N("p", { person: true, age: 1 })];
const data = { nodes, links: [], clusters: [{ id: 0, name: "Zero", label: "Zero", size: 8 }, { id: 1, name: "One", label: "One", size: 2 }], wanted: [], quality: { stale_days: 180 } };

const L = reactorLayout(data);
same("edited in the window, went stale in it, stale at all", [L.edited, L.wentStale, L.stale], [5, 2, 3]);
same("k is the notes edited for each that went stale", L.k, 2.5);
same("a fuel rod for each edited note, the liveliest first and in the middle", [L.fuel.map(f => f.id), L.fuel[0].at], [["e1", "e2", "e4", "e5", "e3"], [0, 0]]);
ok(L.fuel.every((f, i) => !i || f.h <= L.fuel[i - 1].h), "a livelier note is a taller rod");
same("a control rod for each stale note others link to, the most linked first and deepest", L.control.map(c => [c.id, c.links, +c.depth.toFixed(2)]), [["s2", 5, 1], ["s1", 3, 0.7]]);
same("a loop for each topic with edited notes, the busiest first", L.loops.map(l => [l.name, l.edited, l.share]), [["Zero", 3, 0.6], ["One", 2, 0.4]]);
same("nothing went stale: no k", reactorLayout({ ...data, nodes: nodes.filter(n => !/^s[13]$/.test(n.id)) }).k, null);
const crowd = Array.from({ length: 50 }, (_, i) => N("n" + i, { age: i % 30 })), full = reactorLayout({ ...data, nodes: crowd });
same("the core holds at most its limit and counts every edited note", [full.fuel.length, full.edited], [FUEL, 50]);
const far = Math.max(...full.fuel.map(f => Math.hypot(...f.at))), near = new Set(full.fuel.map(f => f.at.map(v => v.toFixed(3)).join()));
ok(near.size === FUEL && far <= 3 * PITCH + 1e-6, `no two rods share a place, and all stand within three rings (${far.toFixed(2)})`);
ok(WINDOW === 30, "the window is 30 days");

const page = await openDev();
if (!page) { done(); skip(NAME); }
const { ev } = page, V = "window.__views", A = `${V}.api`;
const text = sel => ev(`(document.querySelector(${JSON.stringify(sel)}) || {}).innerText || ""`);
try {
  // the sample vault, with its most linked old note made stale so there is a control rod
  const d = await ev("window.__DATA"), own = d.nodes.filter(n => !n.person && !n.moc && !n.ghost), pickStale = own.filter(n => n.age > 30).sort((a, b) => b.inlinks - a.inlinks)[0];
  ok(!!pickStale && pickStale.inlinks > 0, "the sample vault has an old note others link to");
  const aged = { ...d, nodes: d.nodes.map(n => (n.id === pickStale.id ? { ...n, age: 190 } : n)) };
  same("the Reactor mounts", await page.mount("reactor", undefined, aged), null);
  await page.drawn();
  same("the view says which it is, and what it asks of the host", await ev(`[${V}.view, VaultGraphViews.VIEWS.find(v => v.id === "reactor").actions]`), ["reactor", ["graph"]]);
  const pic = await page.pixels();
  ok(pic.lit > 20000 && pic.colours > 10, `the reactor is drawn (${pic.lit} pixels, ${pic.colours} colour groups)`);
  ok(/^k \d+\.\d\d · \d+ notes? edited in 30 days · \d+ went stale · \d+ control rods?$/.test(await text(".vgv-stat")), `the stat line: ${await text(".vgv-stat")}`);
  ok((await text(".vgv-legend")).includes("control rod = a stale note others link to"), "the legend explains the control rods");
  await page.shot("reactor");
  const lay = await ev(`(() => { const l = ${A}.layout(); return { fuel: l.fuel.map(f => f.id), control: l.control.map(c => c.id), loops: l.loops.map(x => x.cluster) }; })()`);
  same("the aged note is the control rod", lay.control[0], pickStale.id);
  let note = null;
  for (const id of [...lay.control, ...lay.fuel]) { note = await page.find("note", id); if (note) break; }
  ok(!!note, "a rod is on screen to click");
  if (note) { await page.click(note); same("a click opens the note", await ev("window.__opened"), note.id); }
  let loop = null;
  for (const c of lay.loops) { loop = await page.find("loop", c); if (loop) break; }
  ok(!!loop, "a coolant loop is on screen to click");
  if (loop) {
    await page.click(loop);
    same("a click on a loop shows only its topic", await ev(`${A}.only()`), loop.id);
    ok((await text(".vgv-frame")).includes("Only "), "and a chip says so");
    await page.shot("reactor-loop");
    await ev(`[...document.querySelectorAll(".vgv-frame button")].find(b => b.title.endsWith(". Clear")).click()`);
    same("the chip clears it", await ev(`${A}.only()`), null);
  }
  const today = await ev(`(() => { const t = ${V}.today(); return t && { text: t.text, label: t.label }; })()`);
  ok(!!today && /is stale and \d+ notes? link to it\.$/.test(today.text) && today.label === "Open note", `the today strip offers the stale note others link to: ${JSON.stringify(today)}`);
  await ev(`${V}.today().run()`);
  same("which opens it", await ev("window.__opened"), pickStale.id);
  same("a vault with nothing edited or stale mounts", await page.mount("reactor", undefined, { ...d, nodes: d.nodes.map(n => ({ ...n, age: 90 })) }), null);
  ok((await text(".vgv-controls")).includes("The Reactor needs notes edited in the last 30 days"), "it says what it needs");
  ok(await page.press("Open the graph"), "and offers the graph");
  same("which asks the host", await ev("window.__actions"), ["graph"]);
  same("no errors in the page", await page.errors(), []);
} catch (e) { ok(false, `the test itself failed: ${e.message}`); }
finally { await page.close(); }
done();
