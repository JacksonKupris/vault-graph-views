// Normal modes, the maths: known answers for the graph Laplacian (a path, a cycle, a star, two cliques and a bridge), and the vault.
//   node tests/test_modes.js
import { checks } from "./kit.js";
import { jacobiEigen, laplacian, modesOf, halves, vaultModes } from "../src/modes.js";

const { ok, same, done } = checks("modes"), near = (a, b, tol = 1e-8) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));
const path = n => Array.from({ length: n - 1 }, (_, i) => [i, i + 1]), cycle = n => [...path(n), [n - 1, 0]];

// a path of n notes: the eigenvalues are 2 - 2 cos(k pi / n), k = 0..n-1 (the textbook answer), and the slowest mode runs along it
const n = 9, P = jacobiEigen(laplacian(n, path(n)));
ok(P.values.every((v, k) => near(v, 2 - 2 * Math.cos((k * Math.PI) / n), 1e-7)), `a path of ${n}: eigenvalues are 2 - 2cos(k pi/n) (got ${P.values.slice(0, 3).map(v => v.toFixed(4))}...)`);
const M = modesOf(n, path(n)), f = M[0].vector;
ok(M.length === n - 1 && near(M[0].value, 2 - 2 * Math.cos(Math.PI / n), 1e-7), "the still mode is left out");
ok(f.every((x, i) => i === 0 || x < f[i - 1]), "the slowest mode of a path falls steadily from one end to the other");
ok(near(f[0], 1, 1e-7) && f[0] > 0, "scaled so the biggest swing is 1, and the first note swings up");
ok(Math.abs(f.reduce((a, b) => a + b, 0)) < 1e-7 * n, "a mode moves as much up as down (it is orthogonal to the still mode)");
// a cycle of 8: eigenvalues 2 - 2 cos(2 pi k / 8); each but the first and the last comes twice
const C = jacobiEigen(laplacian(8, cycle(8)));
ok(C.values.every((v, k) => near(v, 2 - 2 * Math.cos((2 * Math.PI * Math.ceil(k / 2)) / 8), 1e-7)), `a cycle of 8: eigenvalues come in pairs (got ${C.values.map(v => v.toFixed(3))})`);
// eigenvectors really are eigenvectors: L v = value v, and they are unit and orthogonal
const L = laplacian(n, path(n)), mul = v => L.map(r => r.reduce((s, x, i) => s + x * v[i], 0));
ok(P.vectors.every((v, k) => mul(v).every((x, i) => near(x, P.values[k] * v[i], 1e-7))), "L v = value v for every mode");
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
ok(near(dot(P.vectors[2], P.vectors[3]), 0, 1e-7) && near(dot(P.vectors[2], P.vectors[2]), 1, 1e-7), "modes are orthogonal and unit");
// two cliques of five joined by one bridge: the slowest mode splits them, one clique up and one down
const clique = a => { const b = []; for (let i = 0; i < 5; i++) for (let j = i + 1; j < 5; j++) b.push([a + i, a + j]); return b; };
const two = modesOf(10, [...clique(0), ...clique(5), [4, 5]]), h = halves(two[0].vector);
same("two cliques and a bridge: the first mode splits them", [h.up.length === 5 && h.up.every(i => i < 5), h.down.length === 5 && h.down.every(i => i >= 5)], [true, true]);
ok(two[0].value < 0.5 * two[1].value, "and it is much slower than the next, which is why it is the clean cut");
ok(Math.abs(two[0].vector[0] - two[0].vector[3]) < 1e-6, "notes of one clique swing together");
// a star (one hub, six notes): eigenvalues 0, 1 (five times), 7
const star = jacobiEigen(laplacian(7, Array.from({ length: 6 }, (_, i) => [0, i + 1])));
ok(near(star.values[1], 1, 1e-7) && near(star.values[5], 1, 1e-7) && near(star.values[6], 7, 1e-7), `a star of 7: 0, 1 x5, 7 (got ${star.values.map(v => v.toFixed(3))})`);

// the vault: notes joined by links
const N = (id, extra) => ({ id, name: id, cluster: 0, inlinks: 2, mentions: 1, tasks: 0, ...extra });
const nodes = Array.from({ length: 12 }, (_, i) => N("n" + i, { inlinks: 12 - i })).concat([N("p", { person: true }), N("lone")]);
const link = (source, target, kind = "link") => ({ source, target, kind });
const links = [...Array.from({ length: 11 }, (_, i) => link("n" + i, "n" + (i + 1))), link("n0", "p"), link("n3", "lone", "similar")];
const V = vaultModes(nodes, links);
same("the vault's modes are over the notes the written links join", V.ids.length, 12);
ok(V.modes.length === 11 && V.pos.length === 12 && V.pos.every(p => p.every(Number.isFinite)), "eleven modes, every note placed");
ok(JSON.stringify(vaultModes(nodes, links).modes[0].vector) === JSON.stringify(V.modes[0].vector), "the same vault rings the same way");
same("fewer than three notes: no modes", vaultModes([N("a"), N("b")], [link("a", "b")]).modes.length, 0);
const big = vaultModes(Array.from({ length: 300 }, (_, i) => N("m" + i, { inlinks: i % 9 })), Array.from({ length: 299 }, (_, i) => link("m" + i, "m" + (i + 1))), { max: 60 });
same("at most `max` notes", big.ids.length, 60);
done();
