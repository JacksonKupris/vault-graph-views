// Would one more link help? The score is how easily the main notes reach each other: the mean
// effective resistance between every pair of hubs (1 for a single link, lower is better connected).
// A pair with no route costs the size of the vault. A gain only counts when it beats a null model:
// the same number of links added between random unlinked notes.
import { pressures } from "./physarum.js";

// A small seeded random generator (mulberry32): the same seed gives the same run on any computer.
export function rng(seed = 1) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

function component(n, bars) {
  const adj = Array.from({ length: n }, () => []);
  for (const [i, j] of bars) { adj[i].push(j); adj[j].push(i); }
  const comp = new Array(n).fill(-1); let c = 0;
  for (let s = 0; s < n; s++) { if (comp[s] >= 0) continue; const q = [s]; comp[s] = c; while (q.length) for (const w of adj[q.pop()]) if (comp[w] < 0) { comp[w] = c; q.push(w); } c++; }
  return comp;
}

// Mean effective resistance over hub pairs. Lower is better.
export function score(n, bars, hubs) {
  if (hubs.length < 2) return 0;
  const comp = component(n, bars), cond = bars.map(() => 1);
  let sum = 0, pairs = 0;
  for (let a = 0; a < hubs.length; a++) for (let b = a + 1; b < hubs.length; b++) {
    pairs++;
    sum += comp[hubs[a]] !== comp[hubs[b]] ? n : pressures(n, bars, cond, hubs[a], hubs[b])[hubs[a]];
  }
  return sum / pairs;
}

// The same score without a solve for every candidate: invert the grounded Laplacian once (G), then the resistance between two notes is
// G[a][a] + G[b][b] - 2 G[a][b], and one more link (i, j) lowers it by d^2 / (1 + R(i, j)), d = G[a][i] - G[a][j] - G[b][i] + G[b][j]
// (the Sherman-Morrison update). Only for a vault that is one piece; otherwise null and the caller scores each candidate in full.
export function scorer(n, bars, hubs) {
  if (n < 2 || new Set(component(n, bars)).size !== 1) return null;
  const m = n - 1, A = Array.from({ length: m }, (_, r) => { const row = new Float64Array(2 * m); row[m + r] = 1; return row; });
  for (const [i, j] of bars) { const a = i - 1, b = j - 1; if (a >= 0) A[a][a]++; if (b >= 0) A[b][b]++; if (a >= 0 && b >= 0) { A[a][b]--; A[b][a]--; } }
  for (let c = 0; c < m; c++) {
    let p = c; for (let r = c + 1; r < m; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r;
    [A[c], A[p]] = [A[p], A[c]]; const d = A[c][c];
    for (let k = 0; k < 2 * m; k++) A[c][k] /= d;
    for (let r = 0; r < m; r++) { if (r === c || !A[r][c]) continue; const f = A[r][c]; for (let k = 0; k < 2 * m; k++) A[r][k] -= f * A[c][k]; }
  }
  const G = (a, b) => (a === 0 || b === 0 ? 0 : A[a - 1][m + b - 1]), R = (a, b) => G(a, a) + G(b, b) - 2 * G(a, b);
  const pairs = []; for (let a = 0; a < hubs.length; a++) for (let b = a + 1; b < hubs.length; b++) pairs.push([hubs[a], hubs[b]]);
  const mean = f => (pairs.length ? pairs.reduce((s, [a, b]) => s + f(a, b), 0) / pairs.length : 0);
  return { base: mean(R), after: ([i, j]) => { const r = R(i, j); return mean((a, b) => { const d = G(a, i) - G(a, j) - G(b, i) + G(b, j); return R(a, b) - (d * d) / (1 + r); }); } };
}

const key = (i, j) => (i < j ? i + "," + j : j + "," + i);

// A random link between two notes that are not linked yet (null when the vault is complete).
export function randomNonEdge(n, taken, rand) {
  for (let t = 0; t < 200; t++) { const i = Math.floor(rand() * n), j = Math.floor(rand() * n); if (i !== j && !taken.has(key(i, j))) return [i, j]; }
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (!taken.has(key(i, j))) return [i, j];
  return null;
}

// Gain of adding `link`, and how often a random link does at least as well (p, with the +1 so it is never 0).
export function testAdd(n, bars, hubs, link, { shuffles = 50, seed = 1, fast } = {}) {
  const sc = fast === undefined ? scorer(n, bars, hubs) : fast;
  const base = sc ? sc.base : score(n, bars, hubs), after = l => (sc ? sc.after(l) : score(n, [...bars, l], hubs));
  const taken = new Set(bars.map(([i, j]) => key(i, j)));
  if (link[0] === link[1] || taken.has(key(link[0], link[1]))) return { gain: 0, p: 1, valid: false };
  const gain = base - after(link), rand = rng(seed);
  let count = 0;
  const others = new Set(taken); others.add(key(link[0], link[1]));   // the link under test is not its own rival
  for (let s = 0; s < shuffles; s++) {
    const r = randomNonEdge(n, others, rand); if (!r) break;
    if (base - after(r) >= gain) count++;
  }
  return { gain, p: (1 + count) / (1 + shuffles), valid: true };
}

// Candidate links, best first: only those that beat the null model (p < alpha) and gain at least minGain.
export function rank(n, bars, hubs, candidates, { shuffles = 50, seed = 1, alpha = 0.05, minGain = 1e-3 } = {}) {
  const fast = scorer(n, bars, hubs);
  return candidates.map(link => ({ link, ...testAdd(n, bars, hubs, link, { shuffles, seed, fast }) }))
    .filter(r => r.valid && r.p < alpha && r.gain >= minGain).sort((a, b) => b.gain - a.gain || a.p - b.p);
}

// Candidate links to try: every unlinked pair, or a seeded sample of `max` of them when there are more.
export function candidates(n, bars, { max = 200, seed = 1 } = {}) {
  const taken = new Set(bars.map(([i, j]) => key(i, j))), all = [];
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (!taken.has(key(i, j))) all.push([i, j]);
  if (all.length <= max) return all;
  const rand = rng(seed);
  for (let i = all.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [all[i], all[j]] = [all[j], all[i]]; }
  return all.slice(0, max).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}

// The greedy loop: take the best link that beats the null model, add it, and look again, up to `steps` links.
// It stops early when nothing left beats the null model (the honest answer is then "no more links help").
export function simulate(n, bars, hubs, { steps = 5, max = 200, shuffles = 50, seed = 1, alpha = 0.05, minGain = 1e-3 } = {}) {
  let cur = bars.map(([i, j]) => [i, j]); const out = [], start = score(n, cur, hubs);
  for (let s = 0; s < steps; s++) {
    const best = rank(n, cur, hubs, candidates(n, cur, { max, seed: seed + s }), { shuffles, seed: seed + s, alpha, minGain })[0];
    if (!best) break;
    cur = [...cur, best.link]; out.push(best);
  }
  return { added: out, before: start, after: score(n, cur, hubs) };
}
