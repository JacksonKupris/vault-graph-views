// Load paths, the maths: the textbook three-bar truss (a known answer), balance of forces, and the vault turned into a truss.
//   node tests/test_truss.js
import { checks } from "./kit.js";
import { solveTruss, vaultTruss, readTruss } from "../src/truss.js";

const { ok, same, done } = checks("truss"), near = (a, b, tol = 1e-4) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));
// Three bars meet at an apex under a load P: the middle one straight up to the ceiling, two sloping at 45 degrees. All EA equal.
// Textbook: with c = cos(angle to the vertical), the middle bar takes P / (1 + 2 c^3) and each sloping bar P c^2 / (1 + 2 c^3), all in tension.
const c = Math.SQRT1_2, P = 1000;
const pos = [[0, 0, 0], [-1, 1, 0], [0, 1, 0], [1, 1, 0]];   // the apex, then the three ceiling joints
const S = solveTruss({ pos, bars: [[0, 1], [0, 2], [0, 3]], fixed: [1, 2, 3], loads: [[0, -P, 0]] });
const cube = 1 + 2 * c ** 3;
ok(near(S.force[1], P / cube, 1e-5), `the middle bar takes P/(1+2c^3) = ${(P / cube).toFixed(2)} (got ${S.force[1].toFixed(2)})`);
ok(near(S.force[0], P * c * c / cube, 1e-5) && near(S.force[2], P * c * c / cube, 1e-5), `each sloping bar takes P c^2/(1+2c^3) = ${(P * c * c / cube).toFixed(2)} (got ${S.force[0].toFixed(2)}, ${S.force[2].toFixed(2)})`);
ok(S.force.every(f => f > 0), "hanging from the ceiling every bar is in tension");
ok(S.residual < 1e-6, `the answer balances the load (residual ${S.residual.toExponential(1)})`);
const up = solveTruss({ pos: pos.map(p => [p[0], -p[1], p[2]]), bars: [[0, 1], [0, 2], [0, 3]], fixed: [1, 2, 3], loads: [[0, -P, 0]] });
ok(up.force.every(f => f < 0) && near(up.force[1], -P / cube, 1e-5), "standing on the ground the same bars are in compression");
ok(near(S.force[0] * c + S.force[1] + S.force[2] * c, P, 1e-5), "the bars' vertical pull equals the load");
const loose = solveTruss({ pos: [[0, 0, 0], [1, 0, 0], [5, 5, 5]], bars: [[0, 1]], fixed: [0], loads: [null, [0, -1, 0], [0, -1, 0]] });
ok(loose.u.flat().every(Number.isFinite), "a joint tied to nothing doesn't break the solve");

// the vault: five notes joined by written links, one of them with open tasks
const N = (id, extra) => ({ id, name: id, cluster: 0, inlinks: 2, mentions: 1, tasks: 0, ...extra });
const nodes = [N("a", { inlinks: 9 }), N("b", { inlinks: 6 }), N("c"), N("d", { tasks: 5 }), N("e"), N("lone"), N("p", { person: true })];
const link = (source, target, kind = "link") => ({ source, target, kind });
const links = [link("a", "b"), link("b", "c"), link("c", "d"), link("d", "e"), link("e", "a"), link("a", "p"), link("c", "lone", "similar"), link("a", "c")];
const T = vaultTruss(nodes, links);
same("joints are the notes the written links join (not people, not a note nothing links)", [...T.ids].sort(), ["a", "b", "c", "d", "e"]);
same("each link is one bar", T.bars.length, 6);
ok(T.pos.every(p => p.every(Number.isFinite)), "every joint has a place");
ok(T.ids[0] === "a" && T.ground.includes("a"), "the most important note is ground");
ok(near(T.weight[T.ids.indexOf("d")], 5.1), "an open task is a weight on its note");
ok(JSON.stringify(vaultTruss(nodes, links).pos) === JSON.stringify(T.pos), "the same vault gives the same places");
const solved = solveTruss(T, { sway: 0.01 }), read = readTruss(T, solved);
ok(solved.residual < 1e-4 && solved.force.length === T.bars.length, "the vault's truss solves and balances");
ok(read.sagging >= 0 && !T.ground.includes(T.ids[read.sagging]), "a note that is not ground sags most");
const long = vaultTruss(Array.from({ length: 300 }, (_, i) => N("n" + i, { inlinks: i % 7 })), Array.from({ length: 299 }, (_, i) => link("n" + i, "n" + (i + 1))), { max: 80 });
same("at most `max` joints", long.ids.length, 80);
done();
