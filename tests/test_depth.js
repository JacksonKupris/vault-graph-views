// Every view on a phone, dragged as far down as a finger can take it: it still has depth (not a line), the camera
// stays above the scene, and no two labels overlap. The Cas9 model is the one view that may turn all the way under.
//   node tests/test_depth.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";

const NAME = "depth", { ok, same, done } = checks(NAME);
const page = await openDev({ mobile: true });
if (!page) skip(NAME);
const { ev } = page;

const spread = () => ev(`(async () => {
  const img = new Image(); img.src = window.__views.snapshot(); await img.decode();
  const c = document.createElement("canvas"); c.width = img.width; c.height = img.height; const x = c.getContext("2d"); x.drawImage(img, 0, 0);
  const d = x.getImageData(0, 0, c.width, c.height).data, bg = [d[0], d[1], d[2]]; let top = c.height, bot = -1;
  for (let y = 0; y < c.height; y++) for (let i = 0; i < c.width; i++) { const k = (y * c.width + i) * 4; if (Math.abs(d[k] - bg[0]) + Math.abs(d[k + 1] - bg[1]) + Math.abs(d[k + 2] - bg[2]) > 40) { if (y < top) top = y; bot = y; break; } }
  return bot < 0 ? 0 : (bot - top) / c.height; })()`);
const overlaps = () => ev(`(() => { const r = [...document.querySelectorAll(".vgv-labels > *")].filter(n => n.style.display !== "none").map(n => ({ t: n.textContent, b: n.getBoundingClientRect() })), bad = [];
  for (let i = 0; i < r.length; i++) for (let j = i + 1; j < r.length; j++) { const a = r[i].b, b = r[j].b; if (a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top) bad.push(r[i].t + " / " + r[j].t); }
  return bad; })()`);

try {
  const views = await ev("VaultGraphViews.VIEWS.map(v => v.id)");
  for (const view of views) {
    same(`${view} mounts`, await page.mount(view), null);
    await ev("(window.__views.api.hold || (() => {}))(0.25)");
    const t = await ev("window.__views.turn({ pitch: -1.4 })");
    if (view === "cas9") ok(t.pitch < 0, `${view}: the model can be turned under (${t.pitch})`);
    else {
      ok(t.pitch >= 0.25, `${view}: the camera stays above the scene (pitch ${t.pitch.toFixed(2)})`);
      const s = await spread();
      ok(s > 0.12, `${view}: at its lowest angle it still has depth (${Math.round(s * 100)}% of the page tall)`);
    }
    same(`${view}: no labels overlap`, await overlaps(), []);
    await page.shot("depth-" + view);
  }
  same("no errors in the page", await page.errors(), []);
} catch (e) {
  ok(false, "the test itself failed: " + e.message);
} finally {
  await page.close();
}
done();
