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

const key = (i, j) => (i < j ? i + "," + j : j + "," + i);

// A random link between two notes that are not linked yet (null when the vault is complete).
export function randomNonEdge(n, taken, rand) {
  for (let t = 0; t < 200; t++) { const i = Math.floor(rand() * n), j = Math.floor(rand() * n); if (i !== j && !taken.has(key(i, j))) return [i, j]; }
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (!taken.has(key(i, j))) return [i, j];
  return null;
}

// Gain of adding `link`, and how often a random link does at least as well (p, with the +1 so it is never 0).
export function testAdd(n, bars, hubs, link, { shuffles = 50, seed = 1 } = {}) {
  const taken = new Set(bars.map(([i, j]) => key(i, j)));
  if (link[0] === link[1] || taken.has(key(link[0], link[1]))) return { gain: 0, p: 1, valid: false };
  const base = score(n, bars, hubs), gain = base - score(n, [...bars, link], hubs), rand = rng(seed);
  let count = 0;
  const others = new Set(taken); others.add(key(link[0], link[1]));   // the link under test is not its own rival
  for (let s = 0; s < shuffles; s++) {
    const r = randomNonEdge(n, others, rand); if (!r) break;
    if (base - score(n, [...bars, r], hubs) >= gain) count++;
  }
  return { gain, p: (1 + count) / (1 + shuffles), valid: true };
}

// Candidate links, best first: only those that beat the null model (p < alpha) and gain at least minGain.
export function rank(n, bars, hubs, candidates, { shuffles = 50, seed = 1, alpha = 0.05, minGain = 1e-3 } = {}) {
  return candidates.map(link => ({ link, ...testAdd(n, bars, hubs, link, { shuffles, seed }) }))
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
