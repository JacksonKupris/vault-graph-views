// The Cas9 model, unpacked, and which note is which base pair. No drawing in here: the Cas9 scene and the benchmark
// both draw these atoms, and tests check the numbers without a GPU. Lengths are in Å.
// The data is cas9-model.js (made by scripts/cas9_model.cjs from PDB 5F9R and 1BNA). Its axes: x along the DNA, y down,
// z away from the viewer.
import { CAS9_MODEL } from "./cas9-model.js";
import { special } from "../notes.js";

export const C9 = {
  ATOM: 1.8,
  SCALE: 0.16,   // stage units an Å
  PROTEIN: [0.93, 0.93, 0.9], RNA: [0.94, 0.34, 0.15], TARGET: [0.13, 0.31, 0.8], OTHER: [0.38, 0.64, 0.97], HIT: [1, 0.79, 0.2], NEAR: [0.78, 0.62, 0.96],
  // the springs the DNA winds into each side of the enzyme, so a whole vault fits: down from the PAM side, left from the far side
  COIL: { lead: 90, ease: 40, radius: 60, pitch: 34 }, NEAR_AXIS: [0, 1, 0], FAR_AXIS: [-1, 0, 0],
};

// ---- A double helix laid along a path. frame { o, x, y, z, phase }: where the first pair sits, its axes (z along the
// helix) and how far round it starts. step { turn, rise }: one pair to the next. With coil { lead, ease, radius, pitch,
// axis } the path runs straight for lead, then winds into a spring of that radius and pitch whose length runs along
// axis; ease is the length over which the bend comes on. Returns Float64Array rows of 12: o, ex, ey, ez. The frame is
// carried along the path without twisting, so the only turn about the path is the helix's own.
// (The plugin's VGScience.helixArm is the same function; it goes from there when its Cas9 view does.)
export function helixArm(frame, count, step, coil) {
  const out = new Float64Array(count * 12), dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2], cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]], unit = a => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
  const turned = (a, b, t) => { const c = Math.cos(t), s = Math.sin(t); return [a.map((v, i) => c * v + s * b[i]), b.map((v, i) => c * v - s * a[i])]; };   // a toward b by t, and b with it
  let o = frame.o.slice(), T = unit(frame.z), U = unit(frame.x), V = cross(T, U), len = 0, N = null, B = null, k = 0, tau = 0;
  if (coil) { const w = coil.pitch / (2 * Math.PI * coil.radius); k = 1 / (coil.radius * (1 + w * w)); tau = k * w; const ax = coil.axis, d = dot(ax, T); B = unit([ax[0] - d * T[0], ax[1] - d * T[1], ax[2] - d * T[2]]); N = cross(B, T); }
  for (let j = 0; j < count; j++) {
    const a = frame.phase + j * step.turn, c = Math.cos(a), s = Math.sin(a), at = j * 12;
    for (let i = 0; i < 3; i++) { out[at + i] = o[i]; out[at + 3 + i] = c * U[i] + s * V[i]; out[at + 6 + i] = c * V[i] - s * U[i]; out[at + 9 + i] = T[i]; }
    if (coil && len >= coil.lead) {
      const on = Math.min(1, (len - coil.lead) / (coil.ease || 1) + 1e-9), e = on * on * (3 - 2 * on);
      [T, N] = turned(T, N, k * e * step.rise); [N, B] = turned(N, B, tau * e * step.rise); T = unit(T);
      const d = dot(U, T); U = unit([U[0] - d * T[0], U[1] - d * T[1], U[2] - d * T[2]]); V = cross(T, U);
    }
    for (let i = 0; i < 3; i++) o[i] += T[i] * step.rise; len += step.rise;
  }
  return out;
}

// ---- the model, unpacked once: positions, what each atom belongs to, and how deep in a crevice it sits
let made = null;
export function cas9Parts() {
  if (made) return made;
  const M = CAS9_MODEL, raw = atob(M.atoms), n = raw.length / 3, xyz = new Float32Array(n * 3), kind = new Uint8Array(n), res = new Int16Array(n), flank = new Int8Array(n).fill(-1), shade = new Float32Array(n);
  for (let i = 0; i < n * 3; i++) xyz[i] = raw.charCodeAt(i) * M.q + M.lo[i % 3];
  let at = M.protein;   // kind: 0 protein, 1 RNA, 2 the target strand, 3 the other strand
  [M.rna, M.target, M.other].forEach((table, t) => table.forEach(([seq, count]) => { for (let c = 0; c < count; c++, at++) { kind[at] = t + 1; res[at] = seq; } }));
  if (at !== n) throw new Error("the Cas9 model's tables don't add up to its atoms: run scripts/cas9_model.cjs again");
  for (let i = 0; i < n; i++) M.flank.forEach(([t, o], f) => { if ((kind[i] === 2 && res[i] === t) || (kind[i] === 3 && res[i] === o)) flank[i] = f; });
  // shading: an atom with many neighbours sits in a groove or a cleft and gets less light (what makes a printed model read as solid)
  const CELL = 12, cells = new Map(), cellOf = i => `${Math.floor(xyz[i * 3] / CELL)},${Math.floor(xyz[i * 3 + 1] / CELL)},${Math.floor(xyz[i * 3 + 2] / CELL)}`, count = new Uint16Array(n);
  for (let i = 0; i < n; i++) { const k = cellOf(i); if (!cells.has(k)) cells.set(k, []); cells.get(k).push(i); }
  for (let i = 0; i < n; i++) {
    const x = xyz[i * 3], y = xyz[i * 3 + 1], z = xyz[i * 3 + 2], cx = Math.floor(x / CELL), cy = Math.floor(y / CELL), cz = Math.floor(z / CELL); let c = 0;
    for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (let d = -1; d <= 1; d++) for (const j of cells.get(`${cx + a},${cy + b},${cz + d}`) || []) { const dx = xyz[j * 3] - x, dy = xyz[j * 3 + 1] - y, dz = xyz[j * 3 + 2] - z; if (dx * dx + dy * dy + dz * dz < CELL * CELL) c++; }
    count[i] = c;
  }
  const sorted = Array.from(count).sort((p, q) => p - q), lo = sorted[Math.floor(n * 0.08)], hi = sorted[Math.floor(n * 0.97)];
  for (let i = 0; i < n; i++) shade[i] = 1 - 0.72 * Math.max(0, Math.min(1, (count[i] - lo) / Math.max(1, hi - lo)));
  const mid = pick => { const c = [0, 0, 0]; let m = 0; for (let i = 0; i < n; i++) if (pick(i)) { c[0] += xyz[i * 3]; c[1] += xyz[i * 3 + 1]; c[2] += xyz[i * 3 + 2]; m++; } return c.map(v => v / (m || 1)); };
  const farthest = (pick, score) => { let best = -1, bs = -Infinity; for (let i = 0; i < n; i++) if (pick(i)) { const s = score(i); if (s > bs) { bs = s; best = i; } } return [xyz[best * 3], xyz[best * 3 + 1], xyz[best * 3 + 2]]; };
  // one base pair of the arms: every atom, and four beads for the pairs too far along to tell atoms apart
  const pair = M.pair.map(([x, y, z, strand, base]) => ({ x, y, z, strand, base, r: C9.ATOM })), beads = [];
  for (const strand of [0, 1]) for (const base of [0, 1]) { const set = pair.filter(a => a.strand === strand && a.base === base), c = k => set.reduce((s, a) => s + a[k], 0) / set.length; beads.push({ x: c("x"), y: c("y"), z: c("z"), strand, base, r: base ? 3.3 : 3.6 }); }
  return (made = {
    M, n, xyz, kind, res, flank, shade, pair, beads,
    base: [C9.PROTEIN, C9.RNA, C9.TARGET, C9.OTHER],
    flankAt: M.flank.map((_, f) => mid(i => flank[i] === f)),
    held: mid(i => (kind[i] === 1 && res[i] <= M.spacer + 1) || (kind[i] === 2 && res[i] > 30 - M.spacer)),   // where the guide lies on the target strand
    labels: { protein: farthest(i => kind[i] === 0, i => -xyz[i * 3 + 1]), rna: farthest(i => kind[i] === 1, i => Math.hypot(xyz[i * 3], xyz[i * 3 + 1], xyz[i * 3 + 2])) },
  });
}

// ---- which note is which base pair. Every note of the vault's own writing in the scan's scope is one pair, in path
// order. The enzyme sits on a note the guide matched (siteId, or the first); the notes after it run out through the
// crystal's own seven pairs and into the near spring, the notes before it into the far spring, nearest first.
export function cas9Layout(nodes, scan, siteId) {
  const A = cas9Parts(), M = A.M, scope = scan && scan.ids ? new Set(scan.ids) : null, hits = new Map();
  const all = nodes.filter(n => !special(n) && (!scope || scope.has(n.id))).sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
  const inAll = new Set(all.map(n => n.id));
  if (scan) scan.notes.forEach(n => { if (inAll.has(n.path)) hits.set(n.path, n.hits ? "hit" : "near"); });
  const sites = all.filter(n => hits.get(n.id) === "hit"), site = sites.find(n => n.id === siteId) || sites[0] || null, i0 = site ? all.indexOf(site) : all.length >> 1;
  const after = all.slice(site ? i0 + 1 : i0), flankIds = after.slice(0, M.flank.length).map(n => n.id), nearIds = after.slice(M.flank.length).map(n => n.id), farIds = all.slice(0, i0).reverse().map(n => n.id);
  const near = helixArm(M.tails.near, nearIds.length, M.step, { ...C9.COIL, axis: C9.NEAR_AXIS }), far = helixArm(M.tails.far, farIds.length, M.step, { ...C9.COIL, axis: C9.FAR_AXIS });
  const pos = new Map(), where = new Map();
  if (site) { pos.set(site.id, A.held); where.set(site.id, "held"); }
  flankIds.forEach((id, f) => { pos.set(id, A.flankAt[f]); where.set(id, "flank"); });
  [[nearIds, near, "near"], [farIds, far, "far"]].forEach(([ids, arm, name]) => ids.forEach((id, j) => { pos.set(id, [arm[j * 12], arm[j * 12 + 1], arm[j * 12 + 2]]); where.set(id, name); }));
  return { pos, where, all, hits, sites, site: site ? site.id : null, flankIds, nearIds, farIds, near, far, scan: scan || null };
}
