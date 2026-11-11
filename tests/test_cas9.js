// Cas9 on the real dev page in headless Chrome: the model is drawn in its colours, every note is a base pair, with no
// guide and with a guide that matches nothing it says so and its button reaches the host's Guide scan; with a scan the
// matches are gold, a real click on one moves the enzyme there and opens the note, the site buttons step and open, a
// drag turns it without opening anything, and the host's selection moves the enzyme.
//   node tests/test_cas9.js [--shots dir]
import { checks, openDev, skip } from "./kit.js";

const NAME = "cas9", { ok, same, done } = checks(NAME);
const page = await openDev();
if (!page) skip(NAME);
const { ev } = page, V = "window.__views", A = `${V}.api`;
const layout = () => ev(`(() => { const L = ${A}.layout(); return { all: L.all.map(n => n.id), placed: L.pos.size, sites: L.sites.map(n => n.id), site: L.site, flank: L.flankIds, near: L.nearIds, far: L.farIds }; })()`);
const text = sel => ev(`(document.querySelector(${JSON.stringify(sel)}) || {}).innerText || ""`);
const nameOf = id => ev(`window.__DATA.nodes.find(n => n.id === ${JSON.stringify(id)}).name`);

try {
  // ---- no guide yet
  same("Cas9 mounts with no scan", await page.mount("cas9", {}), null);
  same("the view says which it is, and what it asks of the host", await ev(`[${V}.view, VaultGraphViews.VIEWS.find(v => v.id === "cas9").actions]`), ["cas9", ["guide-scan"]]);
  let L = await layout();
  const plain = await ev("window.__DATA.nodes.filter(n => !n.ghost && !n.person && !n.moc).length");
  ok(L.all.length > 20 && L.all.length === plain, `every note of the vault's own writing is on the strand (${L.all.length} of ${plain})`);
  same("each has a base pair", [L.placed, L.flank.length + L.near.length + L.far.length], [L.all.length, L.all.length]);
  same("the stat line", await ev(`${V}.stat()`), `${L.all.length} notes · no guide`);
  same("the stat line is on the page", await text(".vgv-stat"), `${L.all.length} notes · no guide`);
  ok((await text(".vgv-controls")).includes("No guide yet."), "the controls say there is no guide");
  same("nothing to offer on the today strip", await ev(`${V}.today()`), null);
  const drew = await ev(`${A}.drew()`);
  ok(drew.atoms > 11330 && drew.pairs === L.near.length + L.far.length && drew.fine > 0, `the model and the arms are drawn (${drew.atoms} spheres, ${drew.pairs} pairs on the arms)`);
  let pic = await page.pixels();
  ok(pic.lit > 20000, `the model fills a good part of the canvas (${pic.lit} pixels)`);
  ok(pic.white > 5000 && pic.orange > 300 && pic.blue > 1000, `white protein, orange RNA and blue DNA are on screen: ${JSON.stringify(pic)}`);
  same("no gold with no guide", pic.gold, 0);
  same("the three parts are named on the page", await ev(`["Cas9 protein", "RNA", "DNA"].map(t => [...document.querySelectorAll(".vgv-frame button")].some(b => b.textContent === t && b.style.display !== "none"))`), [true, true, true]);
  await page.shot("cas9-no-guide");
  ok(await page.press("Open Guide scan"), "the Open Guide scan button is there to press");
  same("it asks the host for Guide scan", await ev("window.__actions"), ["guide-scan"]);
  ok(await page.press("Cas9 protein. Open Guide scan"), "the protein's name can be pressed");
  same("it asks for Guide scan too", await ev("window.__actions"), ["guide-scan", "guide-scan"]);
  same("nothing was opened", await ev("window.__opened"), null);

  // ---- a scan: every ninth note is a match, two are look-alikes
  const want = L.all.filter((_, i) => i % 9 === 4), nearly = [L.all[7], L.all[30]];
  const scan = { guide: "kiosk", where: "in every note", notes: [...want.map(path => ({ path, hits: 1 })), ...nearly.map(path => ({ path, hits: 0 }))] };
  await ev(`${V}.update(${JSON.stringify({ scan })})`); await page.drawn();
  L = await layout();
  same("the sites are the notes the guide matched", L.sites, want);
  same("Cas9 is on the first", L.site, want[0]);
  same("the stat line gives the guide, the matches and the look-alikes", await text(".vgv-stat"), `“kiosk” in every note: exact in ${want.length} notes of ${L.all.length} · look-alikes in 2`);
  ok((await text(".vgv-controls")).includes(`Site 1 of ${want.length}`), "the controls say which site this is");
  pic = await page.pixels();
  ok(pic.gold > 30, `the matches are gold (${pic.gold} pixels)`);
  await page.shot("cas9-site");

  // a real click on a gold pair of the arms
  let target = null;
  for (const id of want) { if (id === L.site || L.flank.includes(id)) continue; target = await page.find("note", id); if (target) break; }
  ok(!!target, "a gold base pair of the arms is on screen to click");
  if (target) {
    await page.click(target);
    same("the click opened that note", await ev("window.__opened"), target.id);
    same("and moved Cas9 to it", (await layout()).site, target.id);
    ok((await text(".vgv-controls")).includes(`Site ${want.indexOf(target.id) + 1} of ${want.length}`), "the controls follow");
    await page.shot("cas9-clicked");
  }
  // a click on a note the guide didn't match opens it and leaves the enzyme where it is
  L = await layout();
  const other = (await page.grid(6)).find(p => p.key && p.key.kind === "note" && !want.includes(p.key.id) && !nearly.includes(p.key.id));
  ok(!!other, "a base pair the guide didn't match is on screen");
  if (other) {
    await page.click(other);
    same("a click on an unmatched pair opens its note", await ev("window.__opened"), other.key.id);
    same("and leaves Cas9 on its site", (await layout()).site, L.site);
  }

  // ---- stepping
  const at0 = (await layout()).site, i0 = want.indexOf(at0);
  ok(await page.press("Next site"), "› is there to press");
  same("› goes to the next match", (await layout()).site, want[(i0 + 1) % want.length]);
  ok(await page.press("Previous site"), "‹ is there to press");
  same("‹ comes back", (await layout()).site, at0);
  for (let i = 0; i < want.length; i++) await ev(`${A}.step(1)`);
  same("stepping all the way round ends where it began", (await layout()).site, at0);
  const today = await ev(`(() => { const t = ${V}.today(); return t && { text: t.text, label: t.label }; })()`);
  same("the today strip", today, { text: `Cas9 is on ${await nameOf(at0)}: site ${i0 + 1} of ${want.length} for “kiosk”`, label: "Next site" });
  await ev(`${V}.today().run()`);
  same("its button steps", (await layout()).site, want[(i0 + 1) % want.length]);
  await ev(`${A}.go(${JSON.stringify(at0)})`); await page.drawn();
  await ev("window.__opened = null");
  ok(await page.press(`Open ${await nameOf(at0)}`), "the site's own button is there to press");
  same("it opens the site's note", await ev("window.__opened"), at0);

  // ---- the DNA label picks out the matches, and the chip clears it
  ok(await page.press("DNA. Show the exact matches"), "the DNA label can be pressed");
  same("the matches are picked out", ((await ev(`${A}.highlighted()`)) || []).sort(), [...want].sort());
  ok(await page.press("Exact matches of “kiosk”. Clear"), "the chip says what is picked out, and can be pressed");
  same("the chip clears it", await ev(`${A}.highlighted()`), null);

  // ---- a drag turns the model and opens nothing
  await ev("window.__opened = null");
  const before = await ev(`${V}.turn()`);
  await page.drag({ x: 80, y: 260 }, { x: 260, y: 300 });
  const after = await ev(`${V}.turn()`);
  ok(Math.abs(after.yaw - before.yaw) > 0.5 && Math.abs(after.pitch - before.pitch) > 0.1, `a drag turned the model (${JSON.stringify(after)})`);
  same("and opened nothing", await ev("window.__opened"), null);
  same("the enzyme stays put", (await layout()).site, at0);
  await page.shot("cas9-turned");

  // ---- the host's selection: a match seats the enzyme there, another note leaves it
  await ev(`${V}.update({ selected: ${JSON.stringify(want[3])} })`);
  same("selecting a match moves Cas9 to it", (await layout()).site, want[3]);
  await ev(`${V}.update({ selected: ${JSON.stringify(L.all[0])} })`);
  same("selecting a note that is no match leaves it", (await layout()).site, want[3]);

  // ---- a scan of one folder: the strand is that folder's notes
  const scope = L.all.slice(10, 40);
  await ev(`${V}.update(${JSON.stringify({ scan: { ...scan, where: "in one folder", ids: scope } })})`);
  same("a scoped scan shows only its notes", (await layout()).all, scope);
  ok((await text(".vgv-stat")).includes(`of ${scope.length}`), "and counts them");

  // ---- a guide that matches nothing
  await ev(`${V}.update({ scan: { guide: "zzqqxx", where: "in every note", notes: [] } })`); await page.drawn();
  same("no match: the stat line", await text(".vgv-stat"), `“zzqqxx” in every note: no match in ${L.all.length} notes`);
  same("no site", (await layout()).site, null);
  ok((await text(".vgv-controls")).includes("No “zzqqxx”"), "the controls say there is no match");
  await ev("window.__actions.length = 0");
  ok(await page.press("Open Guide scan"), "the way back to Guide scan is offered");
  same("and reaches the host", await ev("window.__actions"), ["guide-scan"]);
  await page.shot("cas9-no-match");

  // ---- refusals
  ok(((await page.mount("cas9", { scan: { guide: "kiosk" } })) || "").includes("inputs.scan.notes should be array"), "a scan without its notes is refused, and the message says why");
  ok((await page.refused(`{ view: "cas9", data: window.__DATA, onOpen() {} }`)).includes("onAction"), "a host that can't open Guide scan is refused");
  ok((await page.refused(`{ view: "crispr", data: window.__DATA, onOpen() {} }`)).includes("crispr"), "a view that doesn't exist is refused by name");
  same("no errors in the page", await page.errors(), []);
} catch (e) {
  ok(false, "the test itself failed: " + e.message);
} finally {
  await page.close();
}
done();
