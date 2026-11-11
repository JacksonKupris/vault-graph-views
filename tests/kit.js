// kit.js - what the tests share: the checks, and (further down) the dev page in headless Chrome.
//   const { ok, same, done } = checks("name")   ok(pass, what) · same(what, got, want) compares as JSON · done() prints and exits (1 on a failure)
export function checks(name) {
  const fails = [];
  let count = 0;
  return {
    ok(pass, what) { count++; if (!pass) fails.push(what); },
    same(what, got, want) { count++; if (JSON.stringify(got) !== JSON.stringify(want)) fails.push(`${what}: got ${JSON.stringify(got)}, want ${JSON.stringify(want)}`); },
    done() {
      if (!count) fails.push("no checks ran");
      console.log(fails.length ? `FAIL - ${name}:\n  ${fails.join("\n  ")}` : `ok - ${name} (${count} checks)`);
      process.exit(fails.length ? 1 : 0);
    },
  };
}

// ---- the dev page (dist/dev.html) in headless Chrome, for every test that needs a real page.
//   const page = await openDev({ mobile })   builds first. null when this computer has no Chrome: the test calls skip(name).
//   page.ev · send · waitFor · close         cdp.cjs's own
//   page.mount(view, inputs, data)           mounts again; returns the error message, or null
//   page.click(p) · drag(a, b) · tap(p)      a real mouse press at { x, y } (client pixels), a real drag, a real finger
//   page.press(title)                        a real click on the frame's button with that title; false when it isn't there or is covered
//   page.find(kind, id)                      a point of the canvas where that thing is what a click would get, or null
//   page.grid()                              what is under each point of a grid: [{ x, y, key }] (key null on empty canvas)
//   page.pixels()                            what is drawn: { w, h, lit, colours, white, orange, blue, gold }
//   page.shot(name)                          with --shots <dir> on the command line, a screenshot there (to look at by eye)
//   page.refused(options)                    what mountViews says to options it refuses, or "no error"
//   page.outside()                           the frame's text and buttons that reach past the edge of the page ([] when all fit)
//   page.errors()                            uncaught errors in the page so far
import fs from "node:fs";
import path from "node:path";
import cdp from "./cdp.cjs";
import { build } from "../build.js";

const shotsAt = process.argv.indexOf("--shots"), SHOTS = shotsAt > 0 ? process.argv[shotsAt + 1] : null;
export const skip = name => { console.log(`SKIPPED - ${name}: no Chrome found (set CHROME_PATH). Nothing on the page is tested.`); process.exit(0); };

export async function openDev(o = {}) {
  const built = await build();
  const tab = await cdp.open({ html: fs.readFileSync(built.dev, "utf8"), mobile: !!o.mobile });
  if (!tab) return null;
  const { ev, send } = tab;
  if (!await tab.waitFor("!!(window.__views || window.__error)", 20000)) { await tab.close(); throw new Error("the dev page didn't start within 20 s"); }
  await ev(`window.__errs = []; addEventListener("error", e => window.__errs.push(String(e.message)))`);
  const drawn = () => ev("new Promise(r => requestAnimationFrame(() => requestAnimationFrame(() => r(1))))");
  const mouse = (type, p, extra = {}) => send("Input.dispatchMouseEvent", { type, x: p.x, y: p.y, button: "left", clickCount: 1, ...extra });
  const page = {
    ...tab, drawn,
    async mount(view, inputs, data) {
      const err = await ev(`(() => { window.__mount(${JSON.stringify(view)}, ${JSON.stringify(inputs === undefined ? null : inputs)} || undefined, ${JSON.stringify(data === undefined ? null : data)} || undefined); return window.__error; })()`);
      await drawn();
      return err || null;
    },
    async click(p) { await mouse("mouseMoved", p, { button: "none" }); await mouse("mousePressed", p); await mouse("mouseReleased", p); await drawn(); },
    async drag(a, b) {
      await mouse("mouseMoved", a, { button: "none" }); await mouse("mousePressed", a);
      for (let i = 1; i <= 6; i++) await mouse("mouseMoved", { x: a.x + ((b.x - a.x) * i) / 6, y: a.y + ((b.y - a.y) * i) / 6 }, { buttons: 1 });
      await mouse("mouseReleased", b); await drawn();
    },
    async tap(p) {
      await send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: p.x, y: p.y }] });
      await send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
      await drawn();
    },
    async press(title) {
      const at = await ev(`(() => { const b = [...document.querySelectorAll(".vgv-frame button")].find(b => b.title === ${JSON.stringify(title)} && !b.disabled); if (!b) return null;
        const r = b.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2; return document.elementFromPoint(x, y) === b ? { x, y } : null; })()`);
      if (!at) return false;
      await page.click(at);
      return true;
    },
    // only points where a press lands on the canvas (not on a button or a label over it), a little in from the edges
    grid: (step = 12) => ev(`(() => { const v = window.__views, cv = document.querySelector("#host canvas"), out = [];
      for (let y = 40; y < innerHeight - 20; y += ${step}) for (let x = 20; x < innerWidth - 20; x += ${step}) if (document.elementFromPoint(x, y) === cv) out.push({ x, y, key: v.keyAt(x, y) });
      return out; })()`),
    find: (kind, id) => ev(`(() => { const v = window.__views, cv = document.querySelector("#host canvas"), want = ${JSON.stringify(id === undefined ? null : id)};
      for (let y = 40; y < innerHeight - 20; y += 3) for (let x = 20; x < innerWidth - 20; x += 3) { const k = v.keyAt(x, y);
        if (k && k.kind === ${JSON.stringify(kind)} && (want === null || k.id === want) && document.elementFromPoint(x, y) === cv) return { x, y, id: k.id }; }
      return null; })()`),
    // the canvas as drawn now, counted by colour: white protein, orange-red RNA, blue DNA, gold matches
    pixels: () => ev(`(async () => {
      const img = new Image(); img.src = window.__views.snapshot(); await img.decode();
      const c = document.createElement("canvas"); c.width = img.width; c.height = img.height;
      const x = c.getContext("2d"); x.drawImage(img, 0, 0);
      const d = x.getImageData(0, 0, c.width, c.height).data, bg = [d[0], d[1], d[2]], seen = new Set(), out = { w: c.width, h: c.height, lit: 0, white: 0, orange: 0, blue: 0, gold: 0 };
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i], g = d[i + 1], b = d[i + 2];
        if (Math.abs(r - bg[0]) + Math.abs(g - bg[1]) + Math.abs(b - bg[2]) <= 40) continue;
        out.lit++; seen.add((r >> 5) + "," + (g >> 5) + "," + (b >> 5));
        const hi = Math.max(r, g, b), lo = Math.min(r, g, b);
        if (r > 120 && hi - lo < hi * 0.18 + 12) out.white++; else if (r > 150 && g > 110 && b < g * 0.6 && r - g < 90) out.gold++; else if (r > 110 && r > b * 2 && r > g * 1.5) out.orange++; else if (b > 70 && b > r * 1.4) out.blue++;
      }
      out.colours = seen.size;
      return out; })()`),
    async shot(name) {
      if (!SHOTS) return;
      await drawn(); fs.mkdirSync(SHOTS, { recursive: true });
      const r = await send("Page.captureScreenshot", { format: "png" });
      fs.writeFileSync(path.join(SHOTS, name + ".png"), Buffer.from(r.result.data, "base64"));
    },
    // what mountViews says to options it refuses (an expression for the options object), or "no error"
    refused: options => ev(`(() => { try { VaultGraphViews.mountViews(document.createElement("div"), ${options}); return "no error"; } catch (e) { return e.message; } })()`),
    // everything of the frame that is shown, and whether it is inside the page: [{ what, left, right, top, bottom }] of what is not
    outside: () => ev(`[...document.querySelectorAll(".vgv-stat, .vgv-controls, .vgv-controls button, .vgv-frame button")].filter(n => n.offsetParent && getComputedStyle(n).visibility !== "hidden").map(n => { const r = n.getBoundingClientRect(); return { what: n.title || n.className || n.textContent.slice(0, 30), left: Math.round(r.left), right: Math.round(r.right), top: Math.round(r.top), bottom: Math.round(r.bottom) }; }).filter(r => r.left < 0 || r.top < 0 || r.right > innerWidth || r.bottom > innerHeight)`),
    errors: () => ev("window.__errs"),
  };
  return page;
}
