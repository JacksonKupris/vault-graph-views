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
