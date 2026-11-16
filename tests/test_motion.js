// Motion: a view mounted with motion moves on its own (its lights, and a slow turn while the pointer is away), holds still while the
// pointer is over it, and one mounted without motion never moves.
//   node tests/test_motion.js
import { checks, openDev, skip } from "./kit.js";
const NAME = "motion", { ok, done } = checks(NAME);
const page = await openDev();
if (!page) { done(); skip(NAME); }
const { ev } = page;
const sleep = ms => new Promise(r => setTimeout(r, ms));
try {
  await ev(`window.__rig = (view, motion) => { const el = document.createElement("div"); el.style.cssText = "position:fixed;left:0;top:0;width:500px;height:400px"; document.body.appendChild(el);
    window.__m = VaultGraphViews.mountViews(el, { view, data: window.__DATA, inputs: { fold: window.__FOLD }, motion, onOpen() {}, onAction() {} }); window.__el = el; return window.__m.view; }`);
  const still = async (view, motion, hover) => {
    await ev(`window.__rig(${JSON.stringify(view)}, ${motion})`);
    if (hover) await ev(`window.__el.querySelector("canvas").dispatchEvent(new PointerEvent("pointerenter"))`);
    await sleep(300); const a = await ev(`window.__m.turn().yaw + "|" + window.__m.snapshot().length + "|" + window.__m.snapshot().slice(-300)`);
    await sleep(700); const b = await ev(`window.__m.turn().yaw + "|" + window.__m.snapshot().length + "|" + window.__m.snapshot().slice(-300)`);
    await ev(`window.__m.dispose(); window.__el.remove()`);
    return { yaw: a.split("|")[0] !== b.split("|")[0], picture: a !== b };
  };
  for (const v of ["atom", "station"]) {
    const on = await still(v, true, false), off = await still(v, false, false), held = await still(v, true, true);
    ok(on.yaw && on.picture, `${v} with motion turns and changes`);
    ok(!off.yaw && !off.picture, `${v} without motion stays put`);
    ok(!held.yaw, `${v} holds its turn while the pointer is over it`);
  }
  const rx = await still("reactor", true, false);
  ok(!rx.yaw && rx.picture, "the reactor moves its lights but doesn't turn (its cut-away faces the viewer)");
  const gn = await still("genome", true, false), gnOff = await still("genome", false, false);
  ok(gn.picture, "the genome fold's light walks the strand and runs along the loops");
  ok(!gnOff.picture, "the genome fold without motion stays put");
  // slime: with the growth finished and held, the picture still changes, because pulses stream along the links that carry flow
  await ev('window.__rig("slime", true)'); await ev("window.__m.api.setStep(window.__m.api.steps())"); await sleep(400);
  const sa = await ev("window.__m.snapshot().slice(-300)"); await sleep(900); const sb = await ev("window.__m.snapshot().slice(-300)");
  ok(sa !== sb, "the slime mould's finished backbone still moves: light streams along the carrying links");
  await ev("window.__m.dispose(); window.__el.remove()");
} finally { await page.close(); }
done();
