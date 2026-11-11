// The words each view says about the vault, from known small cases. A quoted number has to be the real one.
//   node tests/test_insights.js
import { checks } from "./kit.js";
import { loadInsights, modeInsights, slimeInsights } from "../src/insights.js";
const { ok, same, done } = checks("insights"), name = i => "N" + i;
const L = loadInsights({ n: 4, bars: [[0, 1], [1, 2], [2, 3]], ground: [0], sag: [0, 0.2, 0.5, 0.9], sagging: 3, weakest: 1, busiest: 0, carry: [3, 2, 1] }, name);
ok(L.insights[0].note === 3 && /N3 sags most \(0\.90\)/.test(L.insights[0].text) && /1 link/.test(L.insights[0].text), `the sagging note and its link count: ${L.insights[0].text}`);
same("a weakest link, a busiest link and a single-link note each carry an action", L.insights.filter(i => i.bar != null || i.note != null).length, L.insights.length);
ok(/1 note hang from a single link|1 note hangs/.test(L.insights.map(i => i.text).join(" ")) || /hang from a single link/.test(L.insights.map(i => i.text).join(" ")), "notes hanging from one link are counted");
const M = modeInsights({ bars: [[0, 1], [1, 2], [2, 3], [3, 4]], vector: [0.8, 0.6, 0, -0.6, -0.8], freq: 0.3, k: 0, count: 5 }, name);
ok(/2 notes against 2; 0 links cross/.test(M.insights[0].text) || /2 notes against 2; 0 link/.test(M.insights[0].text), `the cut is counted: ${M.insights[0].text}`);
ok(M.insights.some(i => i.note === 0) && M.insights.some(i => /nodal line/.test(i.text)), "the furthest note and the nodal line are named");
const S = slimeInsights({ n: 4, bars: [[0, 1], [1, 2], [2, 3]], kept: [true, true, false], hubs: [0, 1], order: [0, 1, 2, 3] }, name);
ok(/2 of 3 links carry the vault between its 2 hubs/.test(S.insights[0].text), S.insights[0].text);
ok(S.insights.some(i => i.note === 3 && /off the backbone/.test(i.text)), "a note off the backbone is named with an action");
ok([L, M, S].every(v => /^Picture your notes as/.test(v.plain)), "each view has a plain-words picture first");
ok([L, M, S].every(v => v.about.length > 60), "each view says how the notes relate to its formula");
done();
