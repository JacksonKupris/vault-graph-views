// Simulated suggestions, the maths: a link that shortens the route between hubs wins, a random link in a random graph does not,
// and a run with the same seed gives the same answer.
//   node tests/test_simulate.js
import { checks } from "./kit.js";
import { rng, score, scorer, testAdd, rank, randomNonEdge, candidates, simulate } from "../src/simulate.js";

const { ok, done } = checks("simulate");
const near = (a, b, t = 1e-6) => Math.abs(a - b) <= t;

// Resistance known by hand: two hubs joined by a path of 4 links = 4; a single link = 1; two routes of 2 = 1
ok(near(score(5, [[0, 1], [1, 2], [2, 3], [3, 4]], [0, 4]), 4), "a path of four links scores 4");
ok(near(score(2, [[0, 1]], [0, 1]), 1), "one link scores 1");
ok(near(score(4, [[0, 1], [1, 3], [0, 2], [2, 3]], [0, 3]), 1), "two routes of two links score 1");
ok(score(4, [[0, 1], [2, 3]], [0, 3]) === 4, "hubs with no route cost the size of the vault");

// Known win: the ends of a long path. Joining them beats nearly every random link.
const N = 12, path = Array.from({ length: N - 1 }, (_, i) => [i, i + 1]), hubs = [0, N - 1];
const win = testAdd(N, path, hubs, [0, N - 1], { shuffles: 99, seed: 7 });
ok(win.valid && win.gain > 5 && win.p <= 0.05, `closing a long path is a win (gain ${win.gain.toFixed(2)}, p ${win.p})`);
ok(rank(N, path, hubs, [[0, N - 1], [3, 4 + 1]], { shuffles: 99 }).map(r => r.link.join("-")).join() === "0-11", "rank keeps the win and drops a link that adds nothing");

// Known nothing: in random graphs a random link between random hubs is rarely 'significant'. Over many seeds the false-positive rate stays near alpha.
let hits = 0, runs = 40;
for (let s = 1; s <= runs; s++) {
  const r = rng(1000 + s), n = 14, bars = [], seen = new Set();
  for (let i = 1; i < n; i++) { const j = Math.floor(r() * i); bars.push([j, i]); seen.add(j + "," + i); }
  for (let k = 0; k < 8; k++) { const e = randomNonEdge(n, seen, r); bars.push(e); seen.add(e[0] < e[1] ? e.join() : e[1] + "," + e[0]); }
  const hs = [0, 1, 2, 3], taken = new Set(bars.map(([i, j]) => (i < j ? i + "," + j : j + "," + i)));
  const link = randomNonEdge(n, taken, r);
  if (testAdd(n, bars, hs, link, { shuffles: 49, seed: s }).p < 0.05) hits++;
}
ok(hits <= runs * 0.15, `random links in random graphs are rarely a win (${hits} of ${runs})`);

// Same seed, same answer; different seed may differ; no self or duplicate links
const a = testAdd(N, path, hubs, [2, 9], { shuffles: 30, seed: 5 }), b = testAdd(N, path, hubs, [2, 9], { shuffles: 30, seed: 5 });
ok(a.p === b.p && a.gain === b.gain, "the same seed gives the same result");
ok(!testAdd(N, path, hubs, [3, 3]).valid && !testAdd(N, path, hubs, [4, 3]).valid, "a link to itself or one that exists is not tested");
const tk = new Set(path.map(([i, j]) => i + "," + j)), rr = rng(3);
ok(Array.from({ length: 200 }, () => randomNonEdge(N, tk, rr)).every(([i, j]) => i !== j && !tk.has(i < j ? i + "," + j : j + "," + i)), "the null model never draws a self link or an existing link");

// The greedy loop: on a path it closes the ends first and the score drops; the same seed repeats; on a complete graph it stops with nothing
const sim = simulate(N, path, hubs, { steps: 3, shuffles: 49, seed: 2 });
ok(sim.added.length >= 1 && sim.added[0].link.join("-") === "0-11" && sim.after < sim.before, `the loop closes the long path first (${sim.before.toFixed(2)} to ${sim.after.toFixed(2)})`);
ok(JSON.stringify(simulate(N, path, hubs, { steps: 3, shuffles: 49, seed: 2 })) === JSON.stringify(sim), "the loop repeats exactly with the same seed");
ok(sim.added.every(a => a.link[0] !== a.link[1]) && new Set(sim.added.map(a => a.link.join())).size === sim.added.length, "the loop never adds a self link or the same link twice");
const full = []; for (let i = 0; i < 6; i++) for (let j = i + 1; j < 6; j++) full.push([i, j]);
ok(simulate(6, full, [0, 5]).added.length === 0 && candidates(6, full).length === 0, "nothing is added when every link exists");
// nodes in `skip` (hubs are generated notes) are never an end of a candidate, nor of a link the loop adds
{ const c = candidates(6, [[0, 1]], { skip: [0, 5] }), s = simulate(N, path, hubs, { steps: 3, shuffles: 49, seed: 2, skip: [10] });
  ok(c.length === 6 && c.every(([i, j]) => i !== 0 && j !== 0 && i !== 5 && j !== 5), `skipped nodes are in no candidate (${c.length} candidates)`);
  ok(sim.added.some(x => x.link.includes(10)) && s.added.length >= 2 && s.added.every(x => !x.link.includes(10)), `the loop leaves a skipped node out of the links it adds (${JSON.stringify(s.added.map(x => x.link))})`); }
// Fed at hubs: five hubs in a row. The end hubs list one note each (5 and 6), the three in the middle list four each, and one link
// joins each group to the next. Linking note 5 to note 6 closes the row: the one clear win between two notes. A random link that
// ends at a hub gains more than any link between two notes, so the rivals must leave hubs out too (the candidates already do):
// drawn from every pair, they hid every win in a vault fed at its hubs (0 links offered on the sample).
{ const H = [0, 1, 2, 3, 4], row = [[0, 5], [4, 6]]; for (let h = 1; h <= 3; h++) for (let k = 0; k < 4; k++) row.push([h, 7 + (h - 1) * 4 + k]);
  row.push([5, 7], [8, 11], [12, 15], [16, 6]);
  const n = 19, far = [5, 6], t = testAdd(n, row, H, far, { shuffles: 199, seed: 3, skip: H }), open = testAdd(n, row, H, far, { shuffles: 199, seed: 3 });
  ok(t.valid && t.p < 0.05, `closing a row of hubs with a link between two notes is a win (gain ${t.gain.toFixed(3)}, p ${t.p.toFixed(3)})`);
  ok(open.p > t.p, `against rivals that may end at a hub the same link looks worse (p ${open.p.toFixed(3)} against ${t.p.toFixed(3)})`);
  ok(!testAdd(n, row, H, [0, 12], { skip: H }).valid, "a link that ends at a skipped node is not tested");
  const rr2 = rng(9), tk2 = new Set(row.map(([i, j]) => (i < j ? i + "," + j : j + "," + i)));
  ok(Array.from({ length: 300 }, () => randomNonEdge(n, tk2, rr2, new Set(H))).every(([i, j]) => i > 4 && j > 4), "a rival never ends at a skipped node");
  const sim2 = simulate(n, row, H, { steps: 3, shuffles: 99, seed: 1, skip: H });
  ok(sim2.added.length >= 1 && sim2.added[0].link.join("-") === "5-6" && sim2.added.every(x => x.link.every(i => i > 4)) && sim2.after < sim2.before, `fed at hubs, the loop offers the closing link first (${JSON.stringify(sim2.added.map(x => x.link))})`); }
ok(candidates(40, path.slice(0, 3), { max: 50, seed: 4 }).length === 50 && JSON.stringify(candidates(40, [], { max: 50, seed: 4 })) === JSON.stringify(candidates(40, [], { max: 50, seed: 4 })), "a large vault is sampled the same way each time");

// The fast scorer gives the same number as solving the whole vault again, for the vault as it is and for each extra link
{
  let worst = 0, r = rng(77);
  for (let t = 0; t < 12; t++) {
    const n = 8 + t, bars = [], seen = new Set();
    for (let i = 1; i < n; i++) { const j = Math.floor(r() * i); bars.push([j, i]); seen.add(j + "," + i); }
    for (let k = 0; k < 4; k++) { const e = randomNonEdge(n, seen, r); bars.push(e); seen.add(e[0] < e[1] ? e.join() : e[1] + "," + e[0]); }
    const hs = [0, 2, 3, n - 1], sc = scorer(n, bars, hs), link = randomNonEdge(n, seen, r);
    worst = Math.max(worst, Math.abs(sc.base - score(n, bars, hs)), Math.abs(sc.after(link) - score(n, [...bars, link], hs)));
  }
  ok(worst < 1e-6, `the fast scorer matches a full solve (worst gap ${worst.toExponential(1)})`);
  ok(scorer(4, [[0, 1], [2, 3]], [0, 3]) === null, "a vault in two pieces is left to the full solve");
}
done();
