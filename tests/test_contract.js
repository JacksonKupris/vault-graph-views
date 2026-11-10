// The data shape and the pure parts, with no browser.
// The sample data is a copy of fixtures/sample-graph.json in the plugin repository (vault-graph), which owns the shape.
// When the plugin changes the shape, the new copy fails here until contract.js and the views are brought along.
import fs from "node:fs";
import { IcosahedronGeometry } from "three";
import { DATA_SHAPE, THEME_TOKENS, check, theme } from "../src/contract.js";
import { layout } from "../src/scenes/bodies.js";
import { DETAIL, sphereTriangles } from "../src/bench.js";
import { checks } from "./kit.js";

const { ok, same, done } = checks("contract");
const load = () => JSON.parse(fs.readFileSync(new URL("../fixtures/sample-graph.json", import.meta.url), "utf8"));
const data = load();

same("the sample data fits the contract", check(data), []);
ok(data.nodes.length > 10 && data.links.length > 10 && data.clusters.length > 1, "the sample data has notes, links and topics to draw");

// every field the contract names is checked: taking it away, or changing its type, has to be reported
const PART = { node: d => d.nodes[0], link: d => d.links[0], cluster: d => d.clusters[0], top: d => d };
for (const [part, shape] of Object.entries(DATA_SHAPE)) {
  for (const key of Object.keys(shape)) {
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
