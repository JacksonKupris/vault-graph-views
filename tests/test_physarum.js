// Slime mould network, the maths: known answers for the Physarum solver (two routes, a bridge, symmetry, Kirchhoff), and the vault.
//   node tests/test_physarum.js
import { checks } from "./kit.js";
import { pressures, flows, grow, backbone, vaultSlime } from "../src/physarum.js";

const { ok, same, done } = checks("physarum"), near = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));

// Kirchhoff on a square 0-1-2-3-0 with equal tubes, one unit from 0 to 2: half goes each way round, and a note's inflow equals its outflow
const sq = [[0, 1], [1, 2], [2, 3], [3, 0]], Q = flows(4, sq, [1, 1, 1, 1], [1, 1, 1, 1], 0, 2);
ok(near(Q[0], 0.5) && near(Q[1], 0.5) && near(Q[2], -0.5) && near(Q[3], -0.5), `a square splits the unit evenly (got ${Q.map(q => q.toFixed(3))})`);
const net = (n, bars, q) => Array.from({ length: n }, (_, i) => bars.reduce((s, [a, b], e) => s + (a === i ? q[e] : 0) - (b === i ? q[e] : 0), 0));
ok(net(4, sq, Q).every((x, i) => near(x, i === 0 ? 1 : i === 2 ? -1 : 0)), "what comes into a note goes out, except at the two hubs");
// a thicker tube takes more: widths 3 and 1 on two parallel routes of equal length split the unit 3 to 1
const par = [[0, 1], [0, 1]], P = flows(2, par, [3, 1], [1, 1], 0, 1);
ok(near(P[0], 0.75) && near(P[1], 0.25), `flow follows width (got ${P.map(q => q.toFixed(3))})`);
// ... and a longer tube takes less
const Lg = flows(2, par, [1, 1], [1, 3], 0, 1);
ok(near(Lg[0], 0.75) && near(Lg[1], 0.25), "and flow falls with length");
ok(pressures(3, [[0, 1]], [1], 0, 1)[2] === 0, "a note no tube reaches stays at 0 and breaks nothing");

// two routes from 0 to 3, one through 1 (two tubes of length 1) and one through 2 (lengths 1 and 2): the shorter survives
const bars = [[0, 1], [1, 3], [0, 2], [2, 3]], G = grow(4, bars, { lengths: [1, 1, 1, 2], pairs: [[0, 3]], steps: 400 });
ok(G.D[0] > 0.99 && G.D[1] > 0.99, `the short route stays at full width (${G.D[0].toFixed(3)}, ${G.D[1].toFixed(3)})`);
ok(G.D[2] < 0.01 && G.D[3] < 0.01, `the long route thins away (${G.D[2].toFixed(4)}, ${G.D[3].toFixed(4)})`);
// two routes of the same length: neither is better, both keep the same width
const E = grow(4, bars, { lengths: [1, 1, 1, 1], pairs: [[0, 3]], steps: 200 });
ok(near(E.D[0], E.D[2], 1e-9) && near(E.D[1], E.D[3], 1e-9) && E.D[0] > 0.4, `equal routes keep equal widths (${E.D.map(d => d.toFixed(3))})`);
// a bridge is the only way across, so it carries everything and stays; a dead-end tube beside the path carries nothing and goes
const chain = [[0, 1], [1, 2], [1, 3]], C = grow(4, chain, { pairs: [[0, 2]], steps: 200 });
ok(C.D[0] > 0.99 && C.D[1] > 0.99 && C.D[2] < 0.01, `a bridge stays, a dead end goes (${C.D.map(d => d.toFixed(3))})`);
// the history: the first frame is the start (every tube 1), the last is the end
same("the first frame is every tube at width 1", Array.from(G.frames[0]), [1, 1, 1, 1]);
same("and the last is where it ended", Array.from(G.frames[G.frames.length - 1]).map(x => +x.toFixed(4)), Array.from(G.D).map(x => +x.toFixed(4)));
ok(G.frames.length === 40 && G.frames.every(f => f.length === 4), "forty frames");
same("no pairs: nothing happens and nothing fails", Array.from(grow(4, bars, { pairs: [] }).D), [1, 1, 1, 1]);
const B = backbone([2, 1, 0.4, 0.01]);
same("the backbone is the tubes above a tenth of the widest", [B.kept, B.share[0]], [[true, true, true, false], 1]);

// the vault: a ring of ten notes with a chord, hubs at the first notes
const N = (id, extra) => ({ id, name: id, cluster: 0, inlinks: 2, mentions: 1, tasks: 0, ...extra });
const nodes = Array.from({ length: 10 }, (_, i) => N("n" + i, { inlinks: 20 - i })).concat([N("p", { person: true }), N("lone")]);
const link = (source, target, kind = "link") => ({ source, target, kind });
const links = [...Array.from({ length: 9 }, (_, i) => link("n" + i, "n" + (i + 1))), link("n9", "n0"), link("n0", "n5"), link("n0", "p"), link("n2", "lone", "similar")];
const V = vaultSlime(nodes, links, { hubs: 3 });
same("the vault's mould is over the notes the written links join", V.ids.length, 10);
ok(V.bars.length === 11 && V.D.length === 11 && V.share.length === 11 && V.pos.length === 10, "a width for every link, a place for every note");
ok(V.kept.some(k => k) && V.kept.some(k => !k), `some links carry on and some fade (${V.kept.filter(Boolean).length} of ${V.kept.length})`);
same("the hubs are the most important notes", V.hubs, [0, 1, 2]);
ok(JSON.stringify(vaultSlime(nodes, links, { hubs: 3 }).D) === JSON.stringify(V.D), "the same vault grows the same way");
const big = vaultSlime(Array.from({ length: 300 }, (_, i) => N("m" + i, { inlinks: i % 9 })), Array.from({ length: 299 }, (_, i) => link("m" + i, "m" + (i + 1))), { max: 60 });
same("at most `max` notes", big.ids.length, 60);
same("fewer than two notes: no tubes", vaultSlime([N("a")], []).bars.length, 0);
done();
