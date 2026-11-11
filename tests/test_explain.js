// Legend and Insights on a phone-sized page: each maths view names its colours, the Insights button opens a card that says how the
// notes relate to the formula, every insight has a working action, and the legend and card never lie over the buttons or the pane's edge.
//   node tests/test_explain.js
import { checks, openDev, skip } from "./kit.js";
const NAME = "explain", { ok, same, done } = checks(NAME);
const page = await openDev({ mobile: true });
if (!page) { done(); skip(NAME); }
const { ev } = page, V = "window.__views";
const rect = sel => ev(`(() => { const e = document.querySelector(${JSON.stringify(sel)}); if (!e || !e.offsetParent) return null; const r = e.getBoundingClientRect(); return { l: r.left, t: r.top, r: r.right, b: r.bottom }; })()`);
try {
  for (const view of ["loadpaths", "modes", "slime"]) {
    same(`${view} mounts`, await page.mount(view), null);
    await ev(`${V}.api.hold && ${V}.api.hold(0.25)`); await page.drawn();
    const legend = await ev(`[...document.querySelectorAll(".vgv-legend > span")].map(s => s.innerText)`);
    ok(legend.length >= 3, `${view}: the legend names its colours (${legend.join(" | ")})`);
    const lr = await rect(".vgv-legend"), W = await ev("innerWidth");
    ok(lr && lr.l >= 0 && lr.r <= W, `${view}: the legend fits the pane (${JSON.stringify(lr)})`);
    ok(await page.press("How the notes relate to this view and how to improve them"), `${view}: the Insights button is there to press`);
    await page.shot("explain-" + view);
    const card = await ev(`(document.querySelector(".vgv-insights") || {}).innerText || ""`);
    ok(/^Picture your notes as/.test(card), `${view}: the card starts with a plain-words picture`);
    ok(card.length > 150, `${view}: the card says how the notes relate to the formula (${card.length} characters)`);
    const cr = await rect(".vgv-insights"), bar = await rect(".vgv-controls");
    ok(cr && cr.l >= 0 && cr.r <= W && cr.t >= 0, `${view}: the card fits the pane`);
    ok(cr && bar && cr.b <= bar.t + 1, `${view}: and ends above the buttons (card ${cr && cr.b}, buttons ${bar && bar.t})`);
    const rows = await ev(`[...document.querySelectorAll(".vgv-insights button")].length`);
    ok(rows >= 2, `${view}: its insights carry actions (${rows})`);
    await ev("window.__opened = null");
    const count = await ev(`document.querySelectorAll(".vgv-insights button").length`);
    for (let k = 0; k < count; k++) { await ev(`document.querySelectorAll(".vgv-insights button")[${k}] && document.querySelectorAll(".vgv-insights button")[${k}].click()`); await page.drawn(); }
    const opened = await ev("window.__opened"), ids = await ev(`${V}.api.ids ? ${V}.api.ids() : ${V}.api.notes()`);
    ok(ids.includes(opened), `${view}: an insight opens a real note (${opened})`);
    ok(await page.press("Close the insights") && !(await rect(".vgv-insights")), `${view}: Close puts the card away`);
  }
  same("no errors in the page", await page.errors(), []);
} catch (e) { ok(false, "the test itself failed: " + e.message); } finally { await page.close(); }
done();
