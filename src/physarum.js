// Slime mould network (the Physarum solver, Tero et al. 2010): tubes between notes carry flow from one hub to another; a tube
// that carries a lot grows thicker, one that carries little thins and dies. What is left is the efficient backbone of the links.
// Every tube starts the same. Each step: flow is solved for a unit going from one hub to another (Kirchhoff: what comes into a
// note goes out), then each tube's width moves toward the flow it carried, dD/dt = |Q| - D. Pure (no screen), so tests check it.
import { joinedNotes, springLayout } from "./network.js";

// Pressure at every note for a unit of flow entering at src and leaving at sink, tubes with conductance cond[e] between the
// notes of bars[e]. The sink is held at 0 and the rest solved directly (Gaussian elimination, partial pivoting): vaults here are
// a few hundred notes at most. Notes that no tube reaches stay at 0.
export function pressures(n, bars, cond, src, sink) {
  const idx = [], at = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) if (i !== sink) { at[i] = idx.length; idx.push(i); }
  const m = idx.length, A = Array.from({ length: m }, () => new Float64Array(m + 1));
  bars.forEach(([i, j], e) => {
    const c = cond[e];
    for (const [a, b] of [[i, j], [j, i]]) if (at[a] >= 0) { A[at[a]][at[a]] += c; if (at[b] >= 0) A[at[a]][at[b]] -= c; }
  });
  if (at[src] >= 0) A[at[src]][m] = 1;
  for (let c = 0; c < m; c++) if (A[c][c] < 1e-300) A[c][c] = 1;   // a note nothing reaches has an empty row: pin it
  for (let c = 0; c < m; c++) {
    let p = c; for (let r = c + 1; r < m; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r;
    [A[c], A[p]] = [A[p], A[c]];
    const d = A[c][c]; if (Math.abs(d) < 1e-300) continue;
    for (let r = c + 1; r < m; r++) { const f = A[r][c] / d; if (!f) continue; for (let k = c; k <= m; k++) A[r][k] -= f * A[c][k]; }
  }
  const x = new Float64Array(m);
  for (let c = m - 1; c >= 0; c--) { let s = A[c][m]; for (let k = c + 1; k < m; k++) s -= A[c][k] * x[k]; x[c] = Math.abs(A[c][c]) < 1e-300 ? 0 : s / A[c][c]; }
  return Array.from({ length: n }, (_, i) => (at[i] >= 0 ? x[at[i]] : 0));
}

// The flow through each tube (signed, from the first note of the bar to the second) for the widths D and lengths L.
export function flows(n, bars, D, L, src, sink) {
  const p = pressures(n, bars, bars.map((_, e) => D[e] / L[e]), src, sink);
  return bars.map(([i, j], e) => (D[e] / L[e]) * (p[i] - p[j]));
}

// Run the mould. pairs are [from, to] hubs taken in turn, one pair a step. Returns { D (final widths), frames (the widths at
// `keep` evenly spaced steps, the first the start), steps }. Widths never fall below `floor`, so no tube is lost for good and
// the system stays solvable.
export function grow(n, bars, { lengths, pairs, steps = 200, dt = 0.5, floor = 1e-6, keep = 40 } = {}) {
  const L = lengths || bars.map(() => 1), D = bars.map(() => 1), frames = [Float32Array.from(D)];
  const every = Math.max(1, Math.floor(steps / (keep - 1)));
  for (let s = 0; s < steps && pairs.length; s++) {
    const [a, b] = pairs[s % pairs.length], Q = flows(n, bars, D, L, a, b);
    for (let e = 0; e < D.length; e++) D[e] = Math.max(floor, D[e] + dt * (Math.abs(Q[e]) - D[e]));
    if ((s + 1) % every === 0 && frames.length < keep) frames.push(Float32Array.from(D));
  }
  while (frames.length < keep) frames.push(Float32Array.from(D));
  frames[frames.length - 1] = Float32Array.from(D);
  return { D, frames, steps };
}

// Tubes that carry on: the widths as a share of the widest, and the ones above `cut` of it.
export function backbone(D, cut = 0.1) {
  const peak = Math.max(...D, 1e-12), share = Array.from(D, x => x / peak);
  return { share, kept: share.map(s => s >= cut) };
}

// The vault's own notes that the links join (at most `max`), the `hubs` most important of them taken as the food (the mould
// is fed between every pair in turn), and the mould grown. returns { ids, bars, pos, hubs, D, frames, kept, share }
export function vaultSlime(nodes, links, { max = 80, hubs = 6, steps = 200 } = {}) {
  const { ids, bars } = joinedNotes(nodes, links, { max }), food = Array.from({ length: Math.min(hubs, ids.length) }, (_, i) => i), pairs = [];
  for (let a = 0; a < food.length; a++) for (let b = a + 1; b < food.length; b++) pairs.push([food[a], food[b]]);
  const g = pairs.length ? grow(ids.length, bars, { pairs, steps }) : { D: bars.map(() => 1), frames: [Float32Array.from(bars.map(() => 1))] };
  const { share, kept } = backbone(g.D);
  return { ids, bars, pos: springLayout(ids, bars), hubs: food, D: g.D, frames: g.frames, share, kept };
}
