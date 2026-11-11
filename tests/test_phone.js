// Every view on a phone-sized touch page (420 x 900 in Chrome's device mode): it mounts and draws, its stat line and
// its buttons stay inside the page, a finger on a note opens it, and Cas9's site buttons are big enough to press.
//   node tests/test_phone.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";

const NAME = "phone", { ok, same, done } = checks(NAME);
const page = await openDev({ mobile: true });
if (!page) skip(NAME);
const { ev } = page, V = "window.__views";

try {
  same("the page is phone sized", await ev("[innerWidth, innerHeight]"), [420, 900]);
  const views = await ev("VaultGraphViews.VIEWS.map(v => v.id)");
  same("the views", views, ["bodies", "cas9", "genome", "cones", "loadpaths", "modes"]);
  const L = await ev("window.__DATA.nodes.filter(n => !n.ghost && !n.person && !n.moc).map(n => n.id).sort()");
  const scan = { guide: "kiosk", where: "in every note", notes: L.filter((_, i) => i % 9 === 4).map(path => ({ path, hits: 1 })) };
  for (const view of views) {
    same(`${view} mounts`, await page.mount(view, view === "cas9" ? { scan } : undefined), null);
    const pic = await page.pixels();
    // not faded into the fog: a faded scene keeps a few thousand dim pixels in a few colours
    ok(pic.lit > 20000 && pic.colours > 40, `${view} is drawn in full colour (${pic.lit} pixels, ${pic.colours} colour groups)`);
    same(`${view}: the page doesn't scroll sideways`, await ev("document.documentElement.scrollWidth <= innerWidth"), true);
    same(`${view}: its stat line and buttons are inside the page`, await page.outside(), []);
    const stat = await ev(`(() => { const s = document.querySelector(".vgv-stat"); return s && s.innerText; })()`);
    ok(!!stat && stat === await ev(`${V}.stat()`), `${view}: the stat line is shown (${stat})`);
    await ev(`(${V}.api.hold || (() => {}))(0.25)`);   // a view that rings is held for the tap (the view itself holds while a finger is down: test_modesview.js)
    await page.shot("phone-" + view);
    // a finger on a note opens it
    await ev("window.__opened = null");
    const note = await page.find("note");
    ok(!!note, `${view}: a note is on screen to tap`);
    if (note) { await page.tap(note); same(`${view}: a tap on a note opens it`, await ev("window.__opened"), note.id); }
    // a finger on nothing opens nothing
    await ev("window.__opened = null");
    const empty = (await page.grid(20)).find(p => !p.key);
    if (empty) { await page.tap(empty); same(`${view}: a tap on nothing opens nothing`, await ev("window.__opened"), null); }
  }
  // Cas9's controls: big enough for a finger (at least 32 px each way)
  await page.mount("cas9", { scan });
  const small = await ev(`[...document.querySelectorAll(".vgv-controls button")].filter(b => b.offsetParent).map(b => { const r = b.getBoundingClientRect(); return { title: b.title, w: Math.round(r.width), h: Math.round(r.height) }; })`);
  ok(small.length >= 3, `Cas9's controls are shown (${small.length} buttons)`);
  same("each is at least 32 px each way", small.filter(b => b.w < 32 || b.h < 32), []);
  same("no errors in the page", await page.errors(), []);
} catch (e) {
  ok(false, "the test itself failed: " + e.message);
} finally {
  await page.close();
}
done();
