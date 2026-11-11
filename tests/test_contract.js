// The data shape and the pure parts, with no browser.
// The sample data is a copy of fixtures/sample-graph.json in the plugin repository (vault-graph), which owns the shape.
// When the plugin changes the shape, the new copy fails here until contract.js and the views are brought along.
import fs from "node:fs";
import { IcosahedronGeometry } from "three";
import { DATA_SHAPE, FOLD_SHAPE, SCAN_SHAPE, THEME_TOKENS, check, checkInputs, theme } from "../src/contract.js";
import { layout } from "../src/scenes/bodies.js";
import { DETAIL, sphereTriangles } from "../src/bench.js";
import { checks } from "./kit.js";

const { ok, same, done } = checks("contract");
const read = name => JSON.parse(fs.readFileSync(new URL("../fixtures/" + name, import.meta.url), "utf8"));
const load = () => read("sample-graph.json"), loadFold = () => read("sample-fold.json");
const data = load();

same("the sample data fits the contract", check(data), []);
ok(data.nodes.length > 10 && data.links.length > 10 && data.clusters.length > 1, "the sample data has notes, links and topics to draw");

// every field the contract names is checked: taking it away, or changing its type, has to be reported
const PART = { node: d => d.nodes[0], link: d => d.links[0], cluster: d => d.clusters[0], top: d => d };
for (const part of Object.keys(PART)) {
  const shape = DATA_SHAPE[part];
  ok(!!shape && Object.keys(shape).length > 0, `the contract names the fields of ${part}`);
  for (const key of Object.keys(shape || {})) {
    const gone = load(); delete PART[part](gone)[key];
    ok(check(gone).some(p => p.includes("." + key + " ")), `a missing ${part}.${key} is reported`);
    const wrong = load(); PART[part](wrong)[key] = shape[key] === "number" ? "7" : 7;
    ok(check(wrong).some(p => p.includes("." + key + " ")), `a ${part}.${key} of the wrong type is reported`);
  }
}
const dangling = load(); dangling.links[0].target = "no such note.md";
ok(check(dangling).some(p => p.includes("1 links point")), "a link to a note that is not in nodes is reported");
same("data that is not an object", check(null), ["data is not an object"]);
same("no notes at all is still valid", check({ nodes: [], links: [], clusters: [], wanted: [] }), []);
ok(data.links.some(l => l.kind === "wanted"), "the sample data has a link to a note that does not exist yet");
const unlisted = load(); unlisted.wanted = [];
ok(check(unlisted).some(p => p.includes("links point")), "a wanted link whose note is not in data.wanted is reported");

// ---- what one view needs on top: the strand and the fold (Genome fold), the scan (Cas9), the selection (both)
same("every part of the data shape is checked here", Object.keys(DATA_SHAPE).sort(), [...Object.keys(PART), "strand"].sort());
const wrongOf = t => (t === "number" ? "7" : 7);
same("the sample strand and fold fit the contract", checkInputs("genome", data, { fold: loadFold() }), []);
ok(data.strand.days.length >= 20 && loadFold().loops.length > 0, "the sample has journals to fold, and the fold has a loop");
for (const key of Object.keys(DATA_SHAPE.strand)) {
  const gone = load(); delete gone.strand[key];
  ok(checkInputs("genome", gone, { fold: loadFold() }).some(p => p.includes("data.strand." + key + " ")), `a missing strand.${key} is reported`);
  const wrong = load(); wrong.strand[key] = wrongOf(DATA_SHAPE.strand[key]);
  ok(checkInputs("genome", wrong, { fold: loadFold() }).some(p => p.includes("data.strand." + key + " ")), `a strand.${key} of the wrong type is reported`);
}
for (const key of Object.keys(FOLD_SHAPE)) {
  const gone = loadFold(); delete gone[key];
  ok(checkInputs("genome", data, { fold: gone }).some(p => p.includes("inputs.fold." + key + " ")), `a missing fold.${key} is reported`);
  const wrong = loadFold(); wrong[key] = wrongOf(FOLD_SHAPE[key]);
  ok(checkInputs("genome", data, { fold: wrong }).some(p => p.includes("inputs.fold." + key + " ")), `a fold.${key} of the wrong type is reported`);
}
const noStrand = load(); delete noStrand.strand;
same("data without a strand", checkInputs("genome", noStrand, { fold: loadFold() }), ["data.strand should be object, is undefined"]);
same("no fold", checkInputs("genome", data, {}), ["inputs.fold should be object, is undefined"]);
const shorter = load(); for (const k of ["days", "paths", "rows"]) shorter.strand[k].pop();
ok(checkInputs("genome", shorter, { fold: loadFold() }).some(p => p.includes("the fold is from other data")), "a fold of other journals is reported");
const ragged = load(); ragged.strand.rows.pop();
ok(checkInputs("genome", ragged, { fold: loadFold() }).some(p => p.includes("should be the same number")), "a strand whose days and rows differ in number is reported");
const badLoop = loadFold(); badLoop.loops[0].b = badLoop.n;
ok(checkInputs("genome", data, { fold: badLoop }).some(p => p.includes("1 of inputs.fold.loops")), "a loop to a day that is not on the strand is reported");
same("the other views don't need a strand", [checkInputs("bodies", noStrand, {}), checkInputs("cas9", noStrand, {})], [[], []]);

const scan = () => ({ guide: "kiosk", where: "in every note", notes: [{ path: data.nodes[0].id, hits: 2 }] });
same("a scan fits the contract", checkInputs("cas9", data, { scan: scan() }), []);
same("no scan yet is fine", [checkInputs("cas9", data, {}), checkInputs("cas9", data, { scan: null }), checkInputs("cas9", data)], [[], [], []]);
for (const key of Object.keys(SCAN_SHAPE)) {
  const gone = scan(); delete gone[key];
  ok(checkInputs("cas9", data, { scan: gone }).some(p => p.includes("inputs.scan." + key + " ")), `a missing scan.${key} is reported`);
  const wrong = scan(); wrong[key] = wrongOf(SCAN_SHAPE[key]);
  ok(checkInputs("cas9", data, { scan: wrong }).some(p => p.includes("inputs.scan." + key + " ")), `a scan.${key} of the wrong type is reported`);
}
same("a scan that is not an object", checkInputs("cas9", data, { scan: "kiosk" }), ["inputs.scan should be object, is string"]);
ok(checkInputs("cas9", data, { scan: { ...scan(), ids: "all" } }).some(p => p.includes("inputs.scan.ids should be array")), "a scope that is not a list is reported");
same("a scope that is a list is fine", checkInputs("cas9", data, { scan: { ...scan(), ids: [data.nodes[0].id] } }), []);
ok(checkInputs("cas9", data, { scan: { ...scan(), notes: [{ path: data.nodes[0].id }] } }).some(p => p.includes("inputs.scan.notes[0]")), "a scan note without its hits is reported");
for (const view of ["bodies", "cas9"]) ok(checkInputs(view, data, { selected: 7 }).some(p => p.includes("inputs.selected should be string")), `${view}: a selection that is not a note's id is reported`);
same("a selected note is fine", checkInputs("cas9", data, { selected: data.nodes[0].id }), []);

same("the theme has every token", Object.keys(theme()).sort(), [...THEME_TOKENS].sort());
same("a host's colour wins", theme({ accent: "#ff0000" }).accent, "#ff0000");

// layout: one spot a note, all on the shell of radius R, none on top of another
const spots = layout(data.nodes, 18);
same("one spot a note", spots.length, data.nodes.length);
ok(spots.every(p => Math.abs(Math.hypot(p.x, p.y, p.z) - 18) < 1e-9), "every spot is on the shell");
ok(spots.every(p => p.size >= 0.5 && Number.isFinite(p.size)), "every size is a number, 0.5 or more");
let nearest = Infinity;
for (let i = 0; i < spots.length; i++) for (let j = i + 1; j < spots.length; j++) nearest = Math.min(nearest, Math.hypot(spots[i].x - spots[j].x, spots[i].y - spots[j].y, spots[i].z - spots[j].z));
ok(nearest > 1, `no two spots share a place (nearest pair ${nearest.toFixed(2)} apart)`);
same("one note sits on the equator, not NaN", layout([{ inlinks: 0, outlinks: 0 }], 18)[0].y, 0);
same("no notes, no spots", layout([]), []);

// the benchmark's triangle count is three.js's own count, and matches what phase 0 measured (226,600 / 906,400 / 2,039,400)
for (const [name, d] of Object.entries(DETAIL)) {
  const g = new IcosahedronGeometry(1, d);
  same(`triangles in a ${name} sphere`, sphereTriangles(d), g.attributes.position.count / 3);
}
same("triangles at each detail for 11,330 atoms", Object.values(DETAIL).map(d => 11330 * sphereTriangles(d)), [226600, 906400, 2039400]);

done();
