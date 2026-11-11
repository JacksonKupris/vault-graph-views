#!/usr/bin/env node
// Writes fixtures/sample-fold.json: the fold of the sample vault's journals, as the plugin hands it to the Genome fold view.
// The maths is the plugin's (VGScience.genomeFold, in its src/science.js); this only runs it on fixtures/sample-graph.json
// so the dev page and the tests have a fold to draw without the plugin. Run it again when the sample data or the fold changes.
//   node scripts/sample_fold.cjs <path to the vault-graph repository>      default: ../vault-graph
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, ".."), plugin = path.resolve(process.argv[2] || path.join(ROOT, "..", "vault-graph"));
const stop = msg => { console.error("sample_fold: " + msg); process.exit(1); };
const science = path.join(plugin, "src", "science.js");
if (!fs.existsSync(science)) stop(`no src/science.js in ${plugin}. Clone https://github.com/JacksonKupris/obsidian-graph and pass its folder.`);
const S = new Function(`${fs.readFileSync(science, "utf8")}; return VGScience;`)();
if (typeof S.genomeFold !== "function" || typeof S.stressGrade !== "function") stop("the plugin's science.js has no genomeFold or stressGrade: the fold moved, bring this script along");
const data = JSON.parse(fs.readFileSync(path.join(ROOT, "fixtures", "sample-graph.json"), "utf8"));
if (!data.strand || !Array.isArray(data.strand.rows)) stop("fixtures/sample-graph.json has no strand.rows");
const f = S.genomeFold(data.strand.rows), r4 = v => +v.toFixed(4);
// exactly what a host passes as inputs.fold (src/contract.js, FOLD_SHAPE)
const fold = { n: f.n, X: f.X.map(p => [0, 1, 2].map(i => r4(p[i] || 0))), stress: r4(f.stress), grade: S.stressGrade(f.stress), domains: f.domains, loops: f.loops.map(l => ({ a: l.a, b: l.b, count: l.count })) };
fs.writeFileSync(path.join(ROOT, "fixtures", "sample-fold.json"), JSON.stringify(fold) + "\n");
console.log(`wrote fixtures/sample-fold.json: ${fold.n} days, ${fold.domains.length} domains, ${fold.loops.length} loops, stress ${fold.stress} (${fold.grade})`);
