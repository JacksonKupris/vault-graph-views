// Every view mounted with a vault's own graph data (not the test page's invented notes), at desktop and phone size.
// The invented data is sized to suit each camera; a real vault is not, and a view can draw outside the camera or place
// its labels nowhere. For each view this measures how much of the page is drawn, whether the drawing is in the middle,
// and whether every label that exists was placed. Run it after any change to a scene, the stage or the frame.
//   node tests/test_real_data.js [path-to-vault-graph.json] [--shots dir]
//   VAULT_DATA=path also works; with neither, it looks for ~/Documents/Main/_scripts/out/vault-graph.json.
// Without a data file it skips and says so (nothing is tested then).
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { checks, openDev, skip } from "./kit.js";

const NAME = "real data", { ok, same, done } = checks(NAME);
const file = process.argv.slice(2).find(a => a.endsWith(".json")) || process.env.VAULT_DATA || path.join(os.homedir(), "Documents", "Main", "_scripts", "out", "vault-graph.json");
if (!fs.existsSync(file)) { console.log(`SKIPPED - ${NAME}: no graph data at ${file}. Pass one: node tests/test_real_data.js <vault-graph.json>`); process.exit(0); }
const data = JSON.parse(fs.readFileSync(file, "utf8"));

// the lit share of the page, and where the middle of what is lit sits (0..1 across and down)
const MEASURE = `(async () => {
  const img = new Image(); img.src = window.__views.snapshot(); await img.decode();
  const c = document.createElement("canvas"); c.width = img.width; c.height = img.height; const x = c.getContext("2d"); x.drawImage(img, 0, 0);
  const d = x.getImageData(0, 0, c.width, c.height).data, bg = [d[0], d[1], d[2]]; let n = 0, sx = 0, sy = 0;
  for (let y = 0; y < c.height; y += 2) for (let i = 0; i < c.width; i += 2) { const k = (y * c.width + i) * 4;
    if (Math.abs(d[k] - bg[0]) + Math.abs(d[k + 1] - bg[1]) + Math.abs(d[k + 2] - bg[2]) > 40) { n++; sx += i; sy += y; } }
  const labels = [...document.querySelectorAll(".vgv-labels > *")];
  return { lit: n / (c.width * c.height / 4), cx: n ? sx / n / c.width : -1, cy: n ? sy / n / c.height : -1,
    labels: labels.length, placed: labels.filter(l => l.style.display !== "none" && l.style.transform).length, unplaced: labels.filter(l => l.style.display !== "none" && !l.style.transform).length };
})()`;

for (const mobile of [false, true]) {
  const page = await openDev({ mobile });
  if (!page) skip(NAME);
  const size = mobile ? "phone" : "desktop";
  try {
    for (const view of await page.ev("VaultGraphViews.VIEWS.map(v => v.id)")) {
      const err = await page.mount(view, undefined, data);
      // Genome draws a fold the host computes from the journals; without it the view refuses the data, which is not a defect
      if (err && err.includes("inputs.fold")) { console.log(`SKIPPED ${size} ${view}: needs the host's fold`); continue; }
      if (err) { ok(false, `${size} ${view}: did not mount: ${err}`); continue; }
      await page.ev("(window.__views.api.hold || (() => {}))(0.25)");
      await page.drawn();
      const m = await page.ev(MEASURE);
      const say = `${size} ${view}: ${Math.round(m.lit * 1000) / 10}% drawn, centre ${m.cx.toFixed(2)},${m.cy.toFixed(2)}, ${m.placed}/${m.labels} labels placed`;
      ok(m.lit > 0.004, `${say} (something is drawn)`);
      ok(m.cx > 0.2 && m.cx < 0.8 && m.cy > 0.15 && m.cy < 0.85, `${say} (it is in the middle)`);
      same(`${size} ${view}: no label left unplaced`, m.unplaced, 0);
      await page.shot(`real-${size}-${view}`);
    }
    same(`${size}: no errors in the page`, await page.errors(), []);
  } catch (e) { ok(false, `the test itself failed: ${e.message}`); }
  finally { await page.close(); }
}
done();
