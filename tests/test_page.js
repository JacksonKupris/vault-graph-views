// The real dev page (dist/dev.html) in headless Chrome: it draws, a click on a note reaches the host's onOpen,
// a drag and a click on nothing don't, bad data is refused, and the benchmark returns a result.
// Without Chrome on this computer the test is skipped and says so; on CI a missing Chrome is a failure (cdp.cjs).
import fs from "node:fs";
import path from "node:path";
import cdp from "./cdp.cjs";
import { build, GLOBAL } from "../build.js";
import { checks } from "./kit.js";

const { ok, same, done } = checks("dev page");
const built = await build();
const tab = await cdp.open({ html: fs.readFileSync(built.dev, "utf8") });
if (!tab) { console.log("SKIPPED - dev page: no Chrome found (set CHROME_PATH). The drawing and the click are not tested."); process.exit(0); }

try {
  const started = await tab.waitFor("!!(window.__views || window.__error)", 20000);
  ok(started, "the page started within 20 s");
  same("the page started without an error", await tab.ev("window.__error || null"), null);
  const notes = await tab.ev("window.__DATA.nodes.length");
  ok(notes > 10, "the page has the sample data");

  // it draws: the snapshot holds many pixels that are not the background, in more than one colour
  const pic = await tab.ev(`(async () => {
    const img = new Image(); img.src = window.__views.snapshot(); await img.decode();
    const c = document.createElement("canvas"); c.width = img.width; c.height = img.height;
    const x = c.getContext("2d"); x.drawImage(img, 0, 0);
    const d = x.getImageData(0, 0, c.width, c.height).data, bg = [d[0], d[1], d[2]], seen = new Set();
    let lit = 0;
    for (let i = 0; i < d.length; i += 4) if (Math.abs(d[i] - bg[0]) + Math.abs(d[i + 1] - bg[1]) + Math.abs(d[i + 2] - bg[2]) > 40) { lit++; seen.add((d[i] >> 5) + "," + (d[i + 1] >> 5) + "," + (d[i + 2] >> 5)); }
    return { w: c.width, h: c.height, lit, colours: seen.size };
  })()`);
  ok(pic.w > 300 && pic.h > 300, `the canvas fills the page (${pic.w} x ${pic.h})`);
  ok(pic.lit > 2000, `notes are drawn (${pic.lit} pixels differ from the background)`);
  ok(pic.colours > 3, `topics have their own colours (${pic.colours} colour groups)`);

  // find a note and an empty place by asking the scene what is under each point of a grid
  const found = await tab.ev(`(() => {
    const v = window.__views, hits = [], empty = [];
    for (let y = 20; y < innerHeight; y += 12) for (let x = 20; x < innerWidth; x += 12) { const id = v.noteAt(x, y); (id ? hits : empty).push({ x, y, id }); }
    return { hits: hits.length, hit: hits[Math.floor(hits.length / 2)], empty: empty[0], ids: new Set(hits.map(h => h.id)).size };
  })()`);
  ok(found.hits > 20 && found.ids > 5, `notes can be picked (${found.hits} grid points on ${found.ids} notes)`);
  ok(!!found.empty, "there is empty space to click");

  const mouse = (type, p, extra = {}) => tab.send("Input.dispatchMouseEvent", { type, x: p.x, y: p.y, button: "left", clickCount: 1, ...extra });
  const opened = () => tab.ev("window.__opened || null");
  const known = await tab.ev(`window.__DATA.nodes.some(n => n.id === ${JSON.stringify(found.hit.id)})`);
  ok(known, "the picked id is a note in the data");

  await mouse("mousePressed", found.empty); await mouse("mouseReleased", found.empty);
  same("a click on empty space opens nothing", await opened(), null);

  const far = { x: found.hit.x + 120, y: found.hit.y + 40 };
  await mouse("mousePressed", found.hit);
  await mouse("mouseMoved", { x: found.hit.x + 60, y: found.hit.y + 20 }, { buttons: 1 });
  await mouse("mouseMoved", far, { buttons: 1 });
  await mouse("mouseReleased", far);
  same("a drag turns the view and opens nothing", await opened(), null);
  const after = await tab.ev(`window.__views.noteAt(${found.hit.x}, ${found.hit.y})`);
  ok(after !== found.hit.id, "the drag turned the view (another note, or none, is under the same point)");

  // a real click, at a point found again after the turn
  const target = await tab.ev(`(() => { const v = window.__views; for (let y = 20; y < innerHeight; y += 12) for (let x = 20; x < innerWidth; x += 12) { const id = v.noteAt(x, y); if (id) return { x, y, id }; } return null; })()`);
  ok(!!target, "a note is still on screen after the turn");
  if (target) {
    await mouse("mousePressed", target); await mouse("mouseReleased", target);
    same("a click on a note calls onOpen with that note's id", await opened(), target.id);
    same("the page shows what was opened", await tab.ev("document.body.innerText.includes('Open: ' + window.__opened)"), true);
  }

  // refusals: the host is told what is wrong instead of getting a blank canvas
  const refuse = expr => tab.ev(`(() => { try { ${expr}; return "no error"; } catch (e) { return e.message; } })()`);
  const el = "document.createElement('div')";
  ok((await refuse(`${GLOBAL}.mountViews(${el}, { data: {}, onOpen() {} })`)).includes("data.nodes should be array"), "data without notes is refused, and the message says why");
  ok((await refuse(`${GLOBAL}.mountViews(${el}, { data: window.__DATA })`)).includes("onOpen is required"), "a host without onOpen is refused");

  // dispose takes the canvas out again
  same("dispose removes the canvas", await tab.ev(`(() => { const d = document.createElement("div"); document.body.appendChild(d); const v = ${GLOBAL}.mountViews(d, { data: window.__DATA, onOpen() {} }); const had = d.querySelectorAll("canvas").length; v.dispose(); return [had, d.querySelectorAll("canvas").length]; })()`), [1, 0]);

  // the benchmark runs and reports (a short run: this checks it works, not how fast this computer is)
  const b = await tab.ev(`(async () => { const d = document.createElement("div"); d.style.cssText = "position:fixed;inset:0"; document.body.appendChild(d); try { return await ${GLOBAL}.bench({ host: d, detail: "medium", pbr: true, warmup: 300, run: 700 }); } catch (e) { return { error: e.message }; } })()`);
  same("the benchmark ran", b.error || null, null);
  same("the benchmark draws the spike's 906,400 triangles at medium", b.triangles, 906400);
  ok(b.fps > 0 && b.frames > 0 && b.worstMs > 0, `the benchmark measured frames (${b.fps} fps over ${b.frames} frames)`);
  ok(typeof b.gpu === "string" && b.gpu.length > 0, "the benchmark names the GPU");
  ok((await refuse(`${GLOBAL}.bench({ host: ${el}, detail: "ultra" })`)) === "no error", "bench is async, so a bad detail comes back as a rejection");
  same("a bad detail is rejected with the choices", await tab.ev(`${GLOBAL}.bench({ host: ${el}, detail: "ultra" }).then(() => "no error", e => e.message)`), "bench: detail is one of low, medium, high");
} catch (e) {
  ok(false, "the test itself failed: " + e.message);
} finally {
  await tab.close();
}
done();
