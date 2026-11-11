// Normal modes: the vault as a drum skin. Notes are equal masses, written links are equal springs, so the ways the whole
// thing can ring are the eigenvectors of the graph Laplacian L = D - A, and a mode's frequency is the square root of its
// eigenvalue. The slowest mode (the Fiedler vector) is the cleanest cut into two halves; the next ones cut the halves again.
// Pure (no screen), so tests check it.
import { joinedNotes, springLayout } from "./network.js";

// All eigenvalues and eigenvectors of a symmetric matrix (cyclic Jacobi). Returns { values ascending, vectors[k] = unit vector of values[k] }.
export function jacobiEigen(A, { sweeps = 60, tolerance = 1e-12 } = {}) {
  const n = A.length, a = A.map(r => Float64Array.from(r)), V = Array.from({ length: n }, (_, i) => { const r = new Float64Array(n); r[i] = 1; return r; });
  for (let s = 0; s < sweeps; s++) {
    let off = 0; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) off += a[i][j] * a[i][j];
    if (off < tolerance * tolerance) break;
    for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) {
      if (Math.abs(a[p][q]) < 1e-300) continue;
      const th = (a[q][q] - a[p][p]) / (2 * a[p][q]), t = Math.sign(th || 1) / (Math.abs(th) + Math.sqrt(th * th + 1)), c = 1 / Math.sqrt(t * t + 1), sn = t * c;
      for (let k = 0; k < n; k++) { const kp = a[k][p], kq = a[k][q]; a[k][p] = c * kp - sn * kq; a[k][q] = sn * kp + c * kq; }
      for (let k = 0; k < n; k++) { const pk = a[p][k], qk = a[q][k]; a[p][k] = c * pk - sn * qk; a[q][k] = sn * pk + c * qk; }
      for (let k = 0; k < n; k++) { const kp = V[k][p], kq = V[k][q]; V[k][p] = c * kp - sn * kq; V[k][q] = sn * kp + c * kq; }
    }
  }
  const order = [...Array(n).keys()].sort((x, y) => a[x][x] - a[y][y]);
  return { values: order.map(i => a[i][i]), vectors: order.map(i => Array.from({ length: n }, (_, k) => V[k][i])) };
}

// The Laplacian of n notes joined by bars [i, j].
export function laplacian(n, bars) {
  const L = Array.from({ length: n }, () => new Array(n).fill(0));
  for (const [i, j] of bars) { if (i === j) continue; L[i][i]++; L[j][j]++; L[i][j]--; L[j][i]--; }
  return L;
}

// The modes of a set of notes joined by bars. modes[0] is the slowest that moves (the Fiedler vector); the still mode (value 0,
// every note moving together) is left out. Each mode is { value, freq, vector } with the vector scaled so its largest swing is 1
// and its sign fixed so the first note that moves swings up, so the same vault always rings the same way.
export function modesOf(n, bars) {
  const { values, vectors } = jacobiEigen(laplacian(n, bars));
  const out = [];
  for (let k = 0; k < n; k++) {
    if (values[k] < 1e-9) continue;
    const v = vectors[k], peak = Math.max(...v.map(Math.abs)) || 1, flip = v.find(x => Math.abs(x) > 1e-9 * peak) < 0 ? -1 : 1;
    out.push({ value: values[k], freq: Math.sqrt(values[k]), vector: v.map(x => (flip * x) / peak) });
  }
  return out;
}

// How the notes of a mode fall into two halves: the ones that swing up and the ones that swing down (a note near the still line between them is on neither).
export function halves(vector, still = 0.05) {
  const up = [], down = [], rest = [];
  vector.forEach((x, i) => (x > still ? up : x < -still ? down : rest).push(i));
  return { up, down, rest };
}

// The vault's own notes that the links join (at most `max`), where they sit on a plane, and their modes.
//   returns { ids, bars, pos ([x, z] each), modes }
export function vaultModes(nodes, links, { max = 100 } = {}) {
  const { ids, bars } = joinedNotes(nodes, links, { max });
  return { ids, bars, pos: springLayout(ids, bars), modes: ids.length >= 3 ? modesOf(ids.length, bars) : [] };
}
