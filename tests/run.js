// npm test: every tests/test_*.js, one after another. Exits 1 if any fails. A skipped test is listed at the end.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
if (Number(process.versions.node.split(".")[0]) < 22) { console.error(`Node 22 or newer is needed (this is ${process.versions.node}).`); process.exit(1); }
if (!fs.existsSync(path.join(here, "..", "node_modules", "three"))) { console.error("Dependencies are missing: run `npm install` first."); process.exit(1); }

const files = fs.readdirSync(here).filter(f => /^test_.*\.js$/.test(f)).sort();
if (!files.length) { console.error("No tests found in tests/."); process.exit(1); }
let failed = 0;
const skipped = [];
for (const f of files) {
  const r = spawnSync(process.execPath, [path.join(here, f)], { encoding: "utf8" });
  const out = (r.stdout || "") + (r.stderr || "");
  process.stdout.write(out);
  if (r.status !== 0) { failed++; if (!/^FAIL/m.test(out)) console.log(`FAIL - ${f} ended with code ${r.status}${r.error ? ": " + r.error.message : ""}`); }
  else if (/^SKIPPED/m.test(out)) skipped.push(f);
  else if (!/^ok - /m.test(out)) { failed++; console.log(`FAIL - ${f} printed no result`); }
}
console.log(failed ? `\n${failed} of ${files.length} test files failed.` : `\n${files.length - skipped.length} of ${files.length} test files passed${skipped.length ? `, ${skipped.length} skipped (${skipped.join(", ")})` : ""}.`);
process.exit(failed ? 1 : 0);
