// The real dev page (dist/dev.html) in headless Chrome, on the Notes view: it draws, a click on a note reaches the
// host's onOpen, a drag and a click on nothing don't, bad data is refused, dispose cleans up, and the benchmark
// returns a result. Without Chrome on this computer the test is skipped and says so; on CI a missing Chrome is a
// failure (cdp.cjs).
//   node tests/test_page.js [--shots dir]
import { GLOBAL } from "../build.js";
import { checks, openDev, skip } from "./kit.js";

const NAME = "dev page", { ok, same, done } = checks(NAME);
const page = await openDev();
if (!page) skip(NAME);
const { ev } = page, V = "window.__views";

try {
  same("the page started without an error", await ev("window.__error || null"), null);
  ok((await ev("window.__DATA.nodes.length")) > 10, "the page has the sample data");
  same("the Notes view mounts", await page.mount("bodies"), null);
  same("the view says which it is", await ev(`${V}.view`), "bodies");

  // it draws: many pixels that are not the background, in more than one colour
  const pic = await page.pixels();
  ok(pic.w > 300 && pic.h > 300, `the canvas fills the page (${pic.w} x ${pic.h})`);
  ok(pic.lit > 2000, `notes are drawn (${pic.lit} pixels differ from the background)`);
  ok(pic.colours > 3, `topics have their own colours (${pic.colours} colour groups)`);
  await page.shot("notes");

  // what is under each point of a grid
  const grid = await page.grid(12), hits = grid.filter(p => p.key && p.key.kind === "note"), empty = grid.find(p => !p.key);
  ok(hits.length > 20 && new Set(hits.map(h => h.key.id)).size > 5, `notes can be picked (${hits.length} grid points on ${new Set(hits.map(h => h.key.id)).size} notes)`);
  ok(!!empty, "there is empty space to click");
  const hit = hits[hits.length >> 1];
  same("noteAt gives the same note as keyAt", await ev(`${V}.noteAt(${hit.x}, ${hit.y})`), hit.key.id);
  ok(await ev(`window.__DATA.nodes.some(n => n.id === ${JSON.stringify(hit.key.id)})`), "the picked id is a note in the data");

  await page.click(empty);
  same("a click on empty space opens nothing", await ev("window.__opened || null"), null);

  await page.drag(hit, { x: hit.x + 120, y: hit.y + 40 });
  same("a drag turns the view and opens nothing", await ev("window.__opened || null"), null);
  ok((await ev(`${V}.noteAt(${hit.x}, ${hit.y})`)) !== hit.key.id, "the drag turned the view (another note, or none, is under the same point)");

  // a real click, at a point found again after the turn
  const target = await page.find("note");
  ok(!!target, "a note is still on screen after the turn");
  if (target) {
    await page.click(target);
    same("a click on a note calls onOpen with that note's id", await ev("window.__opened"), target.id);
    same("the page shows what was opened", await ev("document.body.innerText.includes('Open: ' + window.__opened)"), true);
  }

  // refusals: the host is told what is wrong instead of getting a blank canvas
  ok((await page.refused("{ data: {}, onOpen() {} }")).includes("data.nodes should be array"), "data without notes is refused, and the message says why");
  ok((await page.refused("{ data: window.__DATA }")).includes("onOpen is required"), "a host without onOpen is refused");

  // dispose takes the canvas and the frame out again
  same("dispose removes the canvas and the frame", await ev(`(() => { const d = document.createElement("div"); document.body.appendChild(d); const v = ${GLOBAL}.mountViews(d, { data: window.__DATA, onOpen() {} }); const had = [d.querySelectorAll("canvas").length, d.querySelectorAll(".vgv-frame").length]; v.dispose(); return [had, d.querySelectorAll("canvas").length, d.querySelectorAll(".vgv-frame").length, d.childNodes.length]; })()`), [[1, 1], 0, 0, 0]);

  // the benchmark runs and reports (a short run: this checks it works, not how fast this computer is)
  const el = "document.createElement('div')";
  const b = await ev(`(async () => { const d = document.createElement("div"); d.style.cssText = "position:fixed;inset:0"; document.body.appendChild(d); try { return await ${GLOBAL}.bench({ host: d, detail: "medium", pbr: true, warmup: 300, run: 700 }); } catch (e) { return { error: e.message }; } })()`);
  same("the benchmark ran", b.error || null, null);
  ok(b.atoms > 11000, `the benchmark draws the Cas9 model (${b.atoms} atoms)`);
  same("a sphere an atom: 80 triangles each at medium", b.triangles, b.atoms * 80);
  ok(b.fps > 0 && b.frames > 0 && b.worstMs > 0, `the benchmark measured frames (${b.fps} fps over ${b.frames} frames)`);
  ok(typeof b.gpu === "string" && b.gpu.length > 0, "the benchmark names the GPU");
  same("a bad detail is rejected with the choices", await ev(`${GLOBAL}.bench({ host: ${el}, detail: "ultra" }).then(() => "no error", e => e.message)`), "bench: detail is one of low, medium, high");
  same("no errors in the page", await page.errors(), []);
} catch (e) {
  ok(false, "the test itself failed: " + e.message);
} finally {
  await page.close();
}
done();
