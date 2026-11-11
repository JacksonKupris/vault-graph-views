// The numbers behind Cas9 and Genome fold, with no browser: the Cas9 model's tables add up and its DNA arms keep clear
// of each other and of the protein; every note of the vault's own writing is one base pair, the enzyme sits on a match
// and steps to the others; every day of the fold is a bead with depth, and a note sits among the days that name it.
import fs from "node:fs";
import { C9, helixArm, cas9Parts, cas9Layout } from "../src/models/cas9.js";
import { SIZE, genomeLayout } from "../src/scenes/genome.js";
import { special } from "../src/notes.js";
import { checks } from "./kit.js";

const { ok, same, done } = checks("models");
const read = name => JSON.parse(fs.readFileSync(new URL("../fixtures/" + name, import.meta.url), "utf8"));
const data = read("sample-graph.json"), fold = read("sample-fold.json");
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

// ---- the Cas9 model
const A = cas9Parts(), M = A.M, sum = t => t.reduce((s, r) => s + r[1], 0);
ok(A.n > 5000, `the model holds ${A.n} atoms`);
same("the model's tables add up to its atoms", M.protein + sum(M.rna) + sum(M.target) + sum(M.other), A.n);
ok(M.protein > sum(M.rna) && sum(M.rna) > sum(M.other), "the protein is the biggest part, then the RNA");
same("the flank, the PAM and the base pair template are there", [M.flank.length, M.pam.length, M.pair.length > 30], [7, 3, true]);
ok(Math.abs(M.step.rise - 3.3) < 0.3 && Math.abs((M.step.turn * 180) / Math.PI - 35) < 3, `the helix step is B-DNA's: ${JSON.stringify(M.step)}`);
const kinds = [0, 0, 0, 0]; for (let i = 0; i < A.n; i++) kinds[A.kind[i]]++;
same("every atom is protein, RNA or one of the two strands", kinds, [M.protein, sum(M.rna), sum(M.target), sum(M.other)]);
ok(A.shade.every(s => s >= 0.27 && s <= 1), "every atom's shade is between deep in a cleft and fully lit");
same("each of the crystal's seven pairs has atoms, and a place", [new Set(Array.from(A.flank).filter(f => f >= 0)).size, A.flankAt.length], [7, 7]);
same("four beads stand in for a pair too far along to see atoms", A.beads.length, 4);
ok(cas9Parts() === A, "the parts are unpacked once");

// the arms, far longer than any vault here needs, keep 24 Å clear (a helix is 20 Å across)
const COUNT = 1200, atoms = []; for (let i = 0; i < A.n; i += 2) atoms.push([A.xyz[i * 3], A.xyz[i * 3 + 1], A.xyz[i * 3 + 2]]);
const N = helixArm(M.tails.near, COUNT, M.step, { ...C9.COIL, axis: C9.NEAR_AXIS }), F = helixArm(M.tails.far, COUNT, M.step, { ...C9.COIL, axis: C9.FAR_AXIS });
const pt = (X, j) => [X[j * 12], X[j * 12 + 1], X[j * 12 + 2]];
let ab = Infinity, self = Infinity, clear = Infinity;
for (let i = 0; i < COUNT; i += 3) {
  const a = pt(N, i), b = pt(F, i);
  for (let j = 0; j < COUNT; j += 3) { ab = Math.min(ab, dist(a, pt(F, j))); if (Math.abs(i - j) > 60) self = Math.min(self, dist(a, pt(N, j)), dist(b, pt(F, j))); }
  if (i >= 40) for (const at of atoms) clear = Math.min(clear, dist(a, at), dist(b, at));
}
ok(ab > 24, `the two DNA arms keep clear of each other (nearest ${ab.toFixed(1)} Å)`);
ok(self > 24, `a DNA arm keeps clear of itself (nearest ${self.toFixed(1)} Å)`);
ok(clear > 24, `the DNA arms keep clear of the complex (nearest ${clear.toFixed(1)} Å)`);
ok(dist(pt(N, 0), M.tails.near.o) < 1e-9 && dist(pt(F, 0), M.tails.far.o) < 1e-9, "each arm starts where the crystal's DNA ends");
let stepOff = 0; for (let j = 1; j < COUNT; j++) stepOff = Math.max(stepOff, Math.abs(dist(pt(N, j), pt(N, j - 1)) - M.step.rise));
ok(stepOff < 1e-6, "every pair of an arm is one rise from the last, round the spring too");
same("an arm of no notes is empty", helixArm(M.tails.near, 0, M.step).length, 0);

// ---- which note is which base pair
const plain = data.nodes.filter(n => !special(n)).map(n => n.id).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
ok(plain.length > 20 && plain.length < data.nodes.length, `the sample has notes of its own writing (${plain.length}) and others (${data.nodes.length - plain.length})`);
let L = cas9Layout(data.nodes);
same("with no scan every note of the vault's own writing is a base pair, in path order", L.all.map(n => n.id), plain);
same("each has a place", [L.pos.size, L.flankIds.length + L.nearIds.length + L.farIds.length], [plain.length, plain.length]);
same("with no scan there is no site", [L.site, L.sites.length, L.hits.size, L.scan], [null, 0, 0, null]);
same("the strand is split in the middle, the crystal's seven pairs first", [L.farIds.length, L.flankIds.length], [plain.length >> 1, 7]);

const hits = plain.filter((_, i) => i % 9 === 4), nearly = [plain[7], plain[30]], other = data.nodes.find(special).id;
const scan = { guide: "kiosk", where: "in every note", notes: [...hits.map(path => ({ path, hits: 2 })), ...nearly.map(path => ({ path, hits: 0 })), { path: other, hits: 3 }, { path: "not in the vault.md", hits: 1 }] };
L = cas9Layout(data.nodes, scan);
same("the sites are the notes the guide matched, in path order", L.sites.map(n => n.id), hits);
same("a match on a person, a missing note or a note that is not in the data is no site", [L.hits.has(other), L.hits.has("not in the vault.md")], [false, false]);
same("look-alikes are counted apart", [...L.hits].filter(h => h[1] === "near").map(h => h[0]).sort(), [...nearly].sort());
same("the enzyme sits on the first match", [L.site, L.where.get(L.site), L.pos.get(L.site)], [hits[0], "held", A.held]);
same("every note still has one place", [L.pos.size, 1 + L.flankIds.length + L.nearIds.length + L.farIds.length], [plain.length, plain.length]);
const i0 = plain.indexOf(hits[0]);
same("the notes after the site run out through the crystal's pairs into the near arm", [...L.flankIds, ...L.nearIds], plain.slice(i0 + 1));
same("the notes before it run into the far arm, nearest first", L.farIds, plain.slice(0, i0).reverse());
ok(new Set([...L.pos.values()].map(p => p.map(v => v.toFixed(3)).join())).size === plain.length, "no two notes share a place");
same("it sits on the site it is asked for", cas9Layout(data.nodes, scan, hits[3]).site, hits[3]);
same("asked for a note that is no match, it stays on the first", cas9Layout(data.nodes, scan, plain[0]).site, hits[0]);
const scope = plain.slice(10, 40), S = cas9Layout(data.nodes, { ...scan, ids: scope });
same("a scan of one folder is a strand of that folder's notes", S.all.map(n => n.id), scope);
same("and its sites are the matches inside it", S.sites.map(n => n.id), hits.filter(id => scope.includes(id)));
const none = cas9Layout(data.nodes, { guide: "zzqqxx", where: "", notes: [] });
same("a guide that matches nothing: no site, every note still placed", [none.site, none.pos.size], [null, plain.length]);

// ---- the fold
const G = genomeLayout(data.strand, fold), n = data.strand.days.length;
same("a bead a day", [G.beads.length, G.domainOf.length], [n, n]);
ok(G.beads.every(b => b.length === 3 && b.every(Number.isFinite)), "every bead is a point in space");
const deep = G.beads.filter(b => Math.abs(b[2]) > 0.2 * SIZE).length;
ok(deep > n / 4, `the fold has depth (${deep} of ${n} days are well off the page)`);
same("every day is in the domain that covers it", fold.domains.every(([a, b], d) => G.domainOf.slice(a, b + 1).every(x => x === d)), true);
const named = new Set(data.strand.rows.flat().map(j => data.strand.ids[j]));
same("every note a day names is placed", [...G.notes.keys()].sort(), [...named].sort());
ok(named.size >= 10, `the sample's journals name notes (${named.size})`);
let wrongDays = 0, far = 0;
for (const [id, days] of G.daysOf) {
  const j = data.strand.ids.indexOf(id);
  if (JSON.stringify(days) !== JSON.stringify(data.strand.rows.map((row, i) => (row.includes(j) ? i : -1)).filter(i => i >= 0))) wrongDays++;
  const c = [0, 1, 2].map(k => days.reduce((s, i) => s + G.beads[i][k], 0) / days.length);
  if (dist(c, G.notes.get(id)) > SIZE * 0.03 + 1e-9) far++;
}
same("a note's days are the days that name it, each once", wrongDays, 0);
same("a note sits at the middle of its days (within its own small nudge)", far, 0);
ok(new Set([...G.notes.values()].map(p => p.map(v => v.toFixed(4)).join())).size === G.notes.size, "no two notes share a place");
same("no journals: nothing to place", genomeLayout({ days: [], paths: [], ids: [], rows: [] }, { n: 0, X: [], stress: 0, grade: "", domains: [], loops: [] }), { beads: [], domainOf: [], daysOf: {}, notes: {} });

done();
