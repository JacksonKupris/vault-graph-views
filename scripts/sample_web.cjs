#!/usr/bin/env node
// Writes fixtures/sample-web.json: the Food web of the sample vault, as the plugin hands it to the Food web view (inputs.web).
// The maths is the plugin's (VGScience.trophic through VGScience.webForViews, in its src/science.js); this only runs it on
// fixtures/sample-graph.json so the dev page and the tests have a web to draw without the plugin. The sample graph keeps each
// link as written (source links to target), which stands in for the host's written links. Run it again when the sample data or the
// web changes.
//   node scripts/sample_web.cjs <path to the vault-graph repository>      default: ../vault-graph
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, ".."), plugin = path.resolve(process.argv[2] || path.join(ROOT, "..", "vault-graph"));
const stop = msg => { console.error("sample_web: " + msg); process.exit(1); };
const science = path.join(plugin, "src", "science.js");
if (!fs.existsSync(science)) stop(`no src/science.js in ${plugin}. Clone https://github.com/JacksonKupris/obsidian-graph and pass its folder.`);
const S = new Function(`${fs.readFileSync(science, "utf8")}; return VGScience;`)();
if (typeof S.webForViews !== "function" || typeof S.directedGraph !== "function") stop("the plugin's science.js has no webForViews or directedGraph: bring this script and the plugin to the same release");
const data = JSON.parse(fs.readFileSync(path.join(ROOT, "fixtures", "sample-graph.json"), "utf8"));
// the notes the plugin lays out: its own writing, linked to something (a person, a map of content and a ghost are not notes)
const ids = data.nodes.filter(n => !n.person && !n.ghost && !n.moc && !n.isolated).map(n => n.id), own = new Set(ids);
const pairs = data.links.filter(l => l.kind === "link" && own.has(l.source) && own.has(l.target)).map(l => [l.source, l.target]);
const web = S.webForViews(S.directedGraph(ids, pairs));
fs.writeFileSync(path.join(ROOT, "fixtures", "sample-web.json"), JSON.stringify(web) + "\n");
console.log(`wrote fixtures/sample-web.json: ${web.ids.length} notes, ${web.edges.length} links, top level ${web.stats.maxLevel}, incoherence ${web.stats.incoherence}`);
