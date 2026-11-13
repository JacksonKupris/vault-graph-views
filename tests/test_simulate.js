// Simulated suggestions, the maths: a link that shortens the route between hubs wins, a random link in a random graph does not,
// and a run with the same seed gives the same answer.
//   node tests/test_simulate.js
import { checks } from "./kit.js";
import { rng, score, testAdd, rank, randomNonEdge, candidates, simulate } from "../src/simulate.js";

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
ok(candidates(40, path.slice(0, 3), { max: 50, seed: 4 }).length === 50 && JSON.stringify(candidates(40, [], { max: 50, seed: 4 })) === JSON.stringify(candidates(40, [], { max: 50, seed: 4 })), "a large vault is sampled the same way each time");
done();
