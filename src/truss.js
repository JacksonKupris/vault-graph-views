// The direct stiffness method for a pin-jointed space truss, and the vault turned into one. Pure (no screen), so tests check it.
// A note is a joint, a written link is a bar of the same stiffness, an open task is a weight on its note, and the vault's most
// important notes are the ground. The solve says which links carry the weight (axial force) and which note sags most.
import { joinedNotes, springLayout } from "./network.js";

// Bars [i, j] between joints at pos[i], pos[j] (EA = 1 for every bar), joints in `fixed` held in place, loads[i] = [fx, fy, fz].
// Returns u (displacement of each joint), force (per bar; positive pulls the joints together = tension, negative pushes = compression),
// and residual (how far the answer is from balancing the loads, as a share of the loads).
// Solved by conjugate gradient on the sparse stiffness; `sway` is that small stiffness at every free joint (tiny by default so the textbook answers hold; a vault passes more because
// many of its notes hang on one link and would otherwise sag without limit).
export function solveTruss({ pos, bars, fixed, loads }, { iterations = 2000, tolerance = 1e-10, sway = 1e-9 } = {}) {
  const n = pos.length, free = new Uint8Array(n).fill(1);
  for (const i of fixed) free[i] = 0;
  const dir = bars.map(([i, j]) => { const d = [0, 1, 2].map(k => pos[j][k] - pos[i][k]), L = Math.hypot(...d) || 1e-9; return { L, c: d.map(x => x / L) }; });
  const eps = sway;   // a free joint resists a little in every direction, so a joint no bar can hold in place sags a bounded amount
  const apply = x => {   // y = K x on the free joints
    const y = new Float64Array(3 * n);
    bars.forEach(([i, j], b) => {
      const { L, c } = dir[b];
      let s = 0; for (let k = 0; k < 3; k++) s += c[k] * (x[3 * j + k] - x[3 * i + k]);
      s /= L;
      for (let k = 0; k < 3; k++) { y[3 * j + k] += c[k] * s; y[3 * i + k] -= c[k] * s; }
    });
    for (let i = 0; i < n; i++) for (let k = 0; k < 3; k++) y[3 * i + k] = free[i] ? y[3 * i + k] + eps * x[3 * i + k] : 0;
    return y;
  };
  const f = new Float64Array(3 * n); let fn = 0;
  for (let i = 0; i < n; i++) if (free[i] && loads[i]) for (let k = 0; k < 3; k++) { f[3 * i + k] = loads[i][k]; fn += f[3 * i + k] ** 2; }
  const x = new Float64Array(3 * n), r = Float64Array.from(f), p = Float64Array.from(f);
  let rr = r.reduce((a, v) => a + v * v, 0);
  for (let it = 0; it < iterations && rr > tolerance * Math.max(fn, 1e-30); it++) {
    const Ap = apply(p); let pAp = 0; for (let t = 0; t < p.length; t++) pAp += p[t] * Ap[t];
    if (pAp <= 0) break;
    const a = rr / pAp; let nr = 0;
    for (let t = 0; t < x.length; t++) { x[t] += a * p[t]; r[t] -= a * Ap[t]; nr += r[t] * r[t]; }
    const beta = nr / rr; rr = nr;
    for (let t = 0; t < p.length; t++) p[t] = r[t] + beta * p[t];
  }
  const u = Array.from({ length: n }, (_, i) => [x[3 * i], x[3 * i + 1], x[3 * i + 2]]);
  const force = bars.map(([i, j], b) => { const { L, c } = dir[b]; let s = 0; for (let k = 0; k < 3; k++) s += c[k] * (u[j][k] - u[i][k]); return s / L; });
  return { u, force, residual: fn ? Math.sqrt(rr / fn) : 0 };
}

// The vault as a truss. Joints are the vault's own notes that the largest connected set of written links joins, at most `max` of the
// most important ones. Along the vertical a note sits higher the less important it is (the ground is at the bottom), and around it
// by a short spring layout of the links.
//   returns { ids, pos, bars (pairs of indexes), fixed (indexes), loads, weight (per joint), ground (ids) }
export function vaultTruss(nodes, links, { max = 120, ground = 0.1 } = {}) {
  const { ids, bars, own, imp } = joinedNotes(nodes, links, { max }), n = ids.length, P = springLayout(ids, bars);
  const top = Math.max(1e-9, ...ids.map(id => imp(own.get(id)))), H = 10;
  const pos = ids.map((id, i) => [P[i][0], (0.5 - imp(own.get(id)) / top) * 2 * H, P[i][1]]);
  const groundN = Math.min(n, Math.max(3, Math.round(n * ground))), fixed = [...Array(groundN).keys()];
  const weight = ids.map(id => (own.get(id).tasks || 0) + 0.1);
  return { ids, pos, bars, fixed, loads: weight.map(w => [0, -w, 0]), weight, ground: fixed.map(i => ids[i]) };
}

// What the solve says about the vault: the bar that carries most, the one closest to buckling (a pushed bar fails at a force
// that falls with the square of its length, so push x length^2), and the note that sags most.
export function readTruss(T, S) {
  const len = T.bars.map(([i, j]) => Math.hypot(...[0, 1, 2].map(k => T.pos[j][k] - T.pos[i][k])));
  const carry = S.force.map(Math.abs), buckle = S.force.map((f, b) => (f < 0 ? -f * len[b] * len[b] : 0));
  const arg = a => a.reduce((m, v, i) => (v > a[m] ? i : m), 0);
  const sag = S.u.map((u, i) => (T.fixed.includes(i) ? 0 : Math.hypot(...u)));
  return { len, carry, buckle, sag, busiest: carry.length ? arg(carry) : -1, weakest: buckle.length && Math.max(...buckle) > 0 ? arg(buckle) : -1, sagging: sag.length ? arg(sag) : -1 };
}
