// npm run can-fail: proof that the tests can fail. Each line below breaks one thing in src/ (a copy of the file is
// kept and put back, whatever happens), runs the test that should notice, and expects it to FAIL. A test that still
// passes with the code broken is reported here, and this exits 1.
// Run it after changing a test or the code it guards; it is not part of npm test (it takes a few minutes).
// If it is stopped half way, `git diff src/` shows the one broken line: `git checkout src/<file>` puts it back.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const BREAKS = [
  { what: "a click on a note of the Notes view doesn't reach the host", file: "src/scenes/bodies.js", from: "click: k => onOpen(k.id)", to: "click: k => {}", test: "test_page.js" },
  { what: "a click on a match doesn't move Cas9 to it", file: "src/scenes/cas9.js", from: `if (L.hits.get(k.id) === "hit") { siteId = k.id; relayout(); } else words(); onOpen(k.id);`, to: "words(); onOpen(k.id);", test: "test_cas9.js" },
  { what: "pressing a note's name on the fold opens it without selecting it", file: "src/scenes/genome.js", from: "function open(id) { selected = id; paint();", to: "function open(id) { paint();", test: "test_genome.js" },
  { what: "the fog doesn't stand back with the camera on a phone", file: "src/stage.js", from: "scene.fog.far = fog[1] * back;", to: "scene.fog.far = fog[1];", test: "test_phone.js" },
  { what: "a fold of other journals is let through", file: "src/contract.js", from: "if (f.n !== s.days.length || f.X.length !== f.n)", to: "if (false)", test: "test_contract.js" },
  { what: "a match on a person's note counts as a site", file: "src/models/cas9.js", from: "!special(n)", to: "true", test: "test_models.js" },
  { what: "a bar's stiffness ignores its length", file: "src/truss.js", from: "s /= L;", to: "s /= 1;", test: "test_truss.js" },
  { what: "a click on a bar opens a note", file: "src/scenes/loadpaths.js", from: `else if (k.kind === "bar") { bar = +k.id;`, to: `else if (k.kind === "bar") { onOpen(T.ids[0]); bar = +k.id;`, test: "test_loadpaths.js" },
  { what: "the Laplacian counts a link once instead of in both notes", file: "src/modes.js", from: "L[i][i]++; L[j][j]++;", to: "L[i][i]++;", test: "test_modes.js" },
  { what: "the still mode is kept among the modes", file: "src/modes.js", from: "if (values[k] < 1e-9) continue;", to: "", test: "test_modes.js" },
  { what: "a click on a note of the sheet doesn't reach the host", file: "src/scenes/modes.js", from: "function open(i) { selected = i; refresh(); shape(); invalidate(); onOpen(V.ids[i]); }", to: "function open(i) { selected = i; refresh(); shape(); invalidate(); }", test: "test_modesview.js" },
  { what: "the sheet keeps ringing under a finger", file: "src/scenes/modes.js", from: "if (playing && !touching) { const now", to: "if (playing) { const now", test: "test_modesview.js" },
  { what: "a tube never grows or thins toward the flow it carried", file: "src/physarum.js", from: "D[e] = Math.max(floor, D[e] + dt * (Math.abs(Q[e]) - D[e]));", to: "D[e] = Math.max(floor, D[e]);", test: "test_physarum.js" },
  { what: "the mould ignores the vault's hub notes and is fed at its most linked notes", file: "src/physarum.js", from: 'fed = maps.length >= 2 ? "hubs" : "top"', to: 'fed = "top"', test: "test_physarum.js" },
  { what: "flow in a tube ignores how long it is", file: "src/physarum.js", from: "(D[e] / L[e]) * (p[i] - p[j])", to: "D[e] * (p[i] - p[j])", test: "test_physarum.js" },
  { what: "a click on a note of the slime mould doesn't reach the host", file: "src/scenes/slime.js", from: "refresh(); invalidate(); onOpen(S.ids[i]); }", to: "refresh(); invalidate(); }", test: "test_slimeview.js" },
  { what: "the mould keeps growing after Hold", file: "src/scenes/slime.js", from: "if (playing && t < T) { const now", to: "if (t < T) { const now", test: "test_slimeview.js" },
  { what: "the Insights button is not added to the controls", file: "src/frame.js", from: 'const buttons = info && at === "bottom" ?', to: 'const buttons = false && at === "bottom" ?', test: "test_explain.js" },
  { what: "a marked note gets no ring", file: "src/run.js", from: 'k.key.kind === "note" && marks.has(k.key.id)', to: "false", test: "test_marks.js" },
  { what: "a link count in an insight is wrong", file: "src/insights.js", from: 'It is held by ${plural(deg[sagging], "link")}', to: 'It is held by ${plural(deg[sagging] + 1, "link")}', test: "test_insights.js" },
  { what: "a click on a ring of the Heat clock doesn't pick its topic", file: "src/scenes/clock.js", from: `click(k) { if (k.kind === "ring") pick(k.id); }`, to: "click(k) {}", test: "test_clock.js" },
  { what: "a declined link comes back when the view is mounted again", file: "src/scenes/slime.js", from: "for (const d of inputs.declined || [])", to: "for (const d of [])", test: "test_slimeview.js" },
  { what: "the Food web calls a note endangered however few notes rest on it", file: "src/scenes/foodweb.js", from: "reliedOn >= RELIED && stale(n)", to: "reliedOn >= 0 && stale(n)", test: "test_foodweb.js" },
  { what: "the Heat clock counts a ring's heat against all topics, not its own busiest slot", file: "src/scenes/clock.js", from: "const v = r[d.key][s], t = v / mx;", to: "const v = r[d.key][s], t = v / 99;", test: "test_clock.js" },
  { what: "a hub pair with no route is scored as if it were reachable", file: "src/simulate.js", from: "comp[hubs[a]] !== comp[hubs[b]] ? n :", to: "false ? n :", test: "test_simulate.js" },
  { what: "the link under test counts as its own rival in the null model", file: "src/simulate.js", from: "others.add(key(link[0], link[1]));", to: "", test: "test_simulate.js" },
  { what: "the null model may draw a link that already exists", file: "src/simulate.js", from: "const free = (i, j) => i !== j && !taken.has(key(i, j)) &&", to: "const free = (i, j) => i !== j &&", test: "test_simulate.js" },
  { what: "a suggested link's rivals may end at a hub, which hides every win in a vault fed at its hubs", file: "src/simulate.js", from: "const r = randomNonEdge(n, others, rand, out);", to: "const r = randomNonEdge(n, others, rand);", test: "test_simulate.js" },
  { what: "a link to a hub (a generated note) is offered", file: "src/simulate.js", from: "if (!out.has(i)) for (let j = i + 1; j < n; j++) if (!out.has(j) && !taken", to: "for (let j = i + 1; j < n; j++) if (!taken", test: "test_simulate.js" },
  { what: "a link to itself is tested", file: "src/simulate.js", from: "if (link[0] === link[1] || taken.has", to: "if (taken.has", test: "test_simulate.js" },
  { what: "the greedy loop doesn't add the chosen link before looking again", file: "src/simulate.js", from: "cur = [...cur, best.link]; out.push(best);", to: "out.push(best);", test: "test_simulate.js" },
  { what: "the sample of candidate links ignores the seed", file: "src/simulate.js", from: "const rand = rng(seed);", to: "const rand = rng(Math.random() * 1e9);", test: "test_simulate.js" },
  { what: "the fast scorer drops the update for the extra link", file: "src/simulate.js", from: "return R(a, b) - (d * d) / (1 + r);", to: "return R(a, b);", test: "test_simulate.js" },
  { what: "the fast scorer takes a vault in two pieces as one", file: "src/simulate.js", from: "new Set(component(n, bars)).size !== 1) return null;", to: "false) return null;", test: "test_simulate.js" },
  { what: "Add link doesn't tell the host", file: "src/scenes/slime.js", from: 'explain(); onAction("add-link", { from: r.from, to: r.to }); }', to: "explain(); }", test: "test_slimeview.js" },
  { what: "a declined link stays in the list", file: "src/scenes/slime.js", from: 'run: () => { gone.add(k); explain(); onAction("decline-link"', to: 'run: () => { explain(); onAction("decline-link"', test: "test_slimeview.js" },
];

const only = process.argv[2];
let bad = 0;
for (const b of BREAKS) {
  if (only && !b.test.includes(only)) continue;
  const file = path.join(root, b.file), was = fs.readFileSync(file, "utf8");
  if (was.split(b.from).length !== 2) { bad++; console.log(`FAIL - can-fail: "${b.from}" should be in ${b.file} exactly once (found ${was.split(b.from).length - 1} times). The code changed: update this line of tests/can_fail.js.`); continue; }
  let r;
  try {
    fs.writeFileSync(file, was.replace(b.from, b.to));
    r = spawnSync(process.execPath, [path.join(root, "tests", b.test)], { encoding: "utf8" });
  } finally {
    fs.writeFileSync(file, was);
  }
  const out = (r.stdout || "") + (r.stderr || "");
  if (/^SKIPPED/m.test(out)) { bad++; console.log(`FAIL - can-fail: ${b.test} was skipped (no Chrome: set CHROME_PATH), so "${b.what}" is not proven.`); }
  else if (r.status === 0) { bad++; console.log(`FAIL - can-fail: with the code broken so that ${b.what}, ${b.test} still passes.`); }
  else console.log(`ok - ${b.test} fails when ${b.what}:\n     ${(out.split("\n").find(l => l.startsWith("  ")) || out.trim().split("\n").pop() || "").trim().slice(0, 200)}`);
}
console.log(bad ? `\n${bad} of the breaks went unnoticed or couldn't be made.` : "\nEvery break was noticed. src/ is as it was.");
process.exit(bad ? 1 : 0);
