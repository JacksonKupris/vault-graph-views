// A host can mark notes (the plugin marks the ones that need attention) and every view rings them, with one legend item,
// because the rings come from the frame and each scene's targets(), not from a scene. Real dev page, every view that lists notes.
//   node tests/test_marks.js
import { checks, openDev, skip } from "./kit.js";

const NAME = "marks", { ok, same, done } = checks(NAME);
const page = await openDev();
if (!page) { done(); skip(NAME); }
const { ev } = page, V = "window.__views";
const rings = () => ev(`[...document.querySelectorAll(".vgv-rings > div")].filter(e => e.style.display !== "none" && e.style.border).length`);
const legend = () => ev(`[...document.querySelectorAll(".vgv-mark")].map(e => e.textContent)`);
try {
  for (const view of ["slime", "loadpaths", "modes", "cones", "bodies"]) {
    if (await page.mount(view) !== null) { ok(false, `${view} mounts`); continue; }
    await page.drawn();
    const ids = [...new Set((await page.grid(16)).filter(p => p.key && p.key.kind === "note").map(p => p.key.id))], pick = ids.length >= 2 ? ids.slice(0, 2) : null;
    if (!pick) { ok(false, `${view} lists its notes to the test`); continue; }
    same(`${view}: nothing is ringed until the host marks notes`, await rings(), 0);
    await ev(`${V}.mark({ ${JSON.stringify(pick[0])}: 1, ${JSON.stringify(pick[1])}: 2 }, "needs attention")`); await page.drawn();
    same(`${view}: the two marked notes are ringed`, await rings(), 2);
    same(`${view}: one legend item says what the ring means`, await legend(), ["needs attention"]);
    await ev(`${V}.mark(null)`); await page.drawn();
    same(`${view}: clearing takes the rings and the legend item away`, [await rings(), (await legend()).length], [0, 0]);
  }
  // a host can lay the overlay out lower than the canvas (the plugin has a toolbar above it): a ring still sits on its note
  if (await page.mount("slime") === null) {
    await page.drawn();
    const note = (await page.grid(16)).find(p => p.key && p.key.kind === "note");
    await ev(`document.querySelector(".vgv-frame").style.top = "52px"; ${V}.mark({ ${JSON.stringify(note.key.id)}: 1 })`); await page.drawn();
    const hit = await ev(`(() => { const e = [...document.querySelectorAll(".vgv-rings > div")].find(x => x.style.display !== "none" && x.style.width); const r = e.getBoundingClientRect(); return ${V}.keyAt(r.left + r.width / 2, r.top + r.height / 2); })()`);
    same("an overlay laid out lower than the canvas: the ring is still centred on its note", hit && hit.id, note.key.id);
  }
  // the animation stopping or restarting rebuilds the labels: the rings must survive it (they were thrown away with the old labels)
  if (await page.mount("slime") === null) {
    await page.drawn();
    const note = (await page.grid(16)).find(p => p.key && p.key.kind === "note");
    await ev(`${V}.mark({ ${JSON.stringify(note.key.id)}: 1 })`); await page.drawn();
    same("slime: the marked note is ringed before the labels are rebuilt", await rings(), 1);
    await ev(`${V}.api.hold(); ${V}.api.setStep(0); ${V}.api.setStep(${V}.api.steps())`); await page.drawn();
    same("slime: the ring is still there after the labels are rebuilt (animation stopped)", await rings(), 1);
  }
} catch (e) { ok(false, "threw: " + (e && e.stack || e)); }
await page.close(); done();
