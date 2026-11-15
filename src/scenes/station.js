// Station: one topic as a twin-ring space station, a model to turn in the hand. The hub is the topic's map (or, with no map, its
// most relied-on note). A note the hub links with is a module docked on the front ring, with a spoke to the hub. A note that links
// only with other notes of the topic sits on the second ring, with a strut to the docked module it links with. A note that links
// with nothing in its topic is a rock adrift outside.
//   data.nodes[], data.clusters[], data.links (kinds "link" and "moc")
//   inputs.selected  the host's selected note: the station shown is that note's topic
//   onOpen(id) a note · onAction("graph") when the vault has no notes of its own
import { Mesh, Group, BoxGeometry, CylinderGeometry, SphereGeometry, TorusGeometry, IcosahedronGeometry, MeshPhongMaterial, Vector3 } from "three";
import { adjacency } from "../network.js";
import { districtsOf, scatter } from "../districts.js";
import { importanceOf, activityOf, staleOf, hash } from "../notes.js";
import { sparks, copies, span, mix, scrap } from "../models/parts.js";
import { plural, clip } from "../text.js";
import { tooFew } from "./few.js";

export const RING = 9, GAP = 1.8, PER_RING = 48, ROCKS = 40, ACTIVE = "#fbbf24";

// Who is where, for the topic `cluster` (the biggest topic when that one isn't there). Pure (no GPU), so tests check it.
//   topics [{ cluster, name }] · index · name · core { id, name, map }
//   docked, second, adrift: the notes shown, each { id, at: [x, y, z], state: "active" | "steady" | "stale", size }; a docked one has
//   `a` (its angle on the ring), a second-ring one has `anchor` (the docked note it links with, or null) · counts { docked, second, adrift } in all
export function stationLayout(data, cluster) {
  const topics = districtsOf(data, { linkedOnly: false });
  if (!topics.length) return { topics: [], core: null };
  const index = Math.max(0, topics.findIndex(t => t.cluster === cluster)), d = topics[index];
  const { adj } = adjacency(data.nodes, data.links, { hubs: true }), imp = importanceOf(data.nodes), act = activityOf(data.nodes), stale = staleOf(data);
  const core = d.moc || d.notes[0], rest = d.notes.filter(n => n !== core), inTopic = new Set(rest.map(n => n.id)), near = adj.get(core.id) || new Set();
  const part = n => ({ id: n.id, state: stale(n) ? "stale" : act(n) > 0.35 ? "active" : "steady", size: 0.7 + 0.6 * Math.sqrt(Math.max(0, imp(n))) });
  const all = { docked: [], second: [], adrift: [] };
  for (const n of rest) (near.has(n.id) ? all.docked : [...(adj.get(n.id) || [])].some(id => inTopic.has(id)) ? all.second : all.adrift).push(n);
  const docked = all.docked.slice(0, PER_RING).map((n, i, list) => { const a = (i / list.length) * Math.PI * 2 + Math.PI / 2; return { ...part(n), a, at: [RING * Math.cos(a), RING * Math.sin(a), GAP] }; });
  const angle = new Map(docked.map(m => [m.id, m.a]));
  // a second-ring module stands as near its docked neighbour as the ring's order allows, so the struts don't cross
  const second = all.second.slice(0, PER_RING).map(n => ({ ...part(n), anchor: [...adj.get(n.id)].filter(id => angle.has(id)).sort((p, q) => angle.get(p) - angle.get(q))[0] || null }))
    .sort((p, q) => (p.anchor ? angle.get(p.anchor) : 99) - (q.anchor ? angle.get(q.anchor) : 99) || (p.id < q.id ? -1 : 1))
    .map((m, i, list) => { const a = (i / list.length) * Math.PI * 2 + Math.PI / 2; return { ...m, a, at: [RING * Math.cos(a), RING * Math.sin(a), -GAP] }; });
  const adrift = all.adrift.slice(0, ROCKS).map(n => { const [u, v] = scatter(n.id), a = u * Math.PI * 2, r = RING + 4.5 + 4 * v; return { ...part(n), at: [r * Math.cos(a), r * Math.sin(a), ((hash(n.id) % 100) / 100 - 0.5) * 8] }; });
  return { topics: topics.map(t => ({ cluster: t.cluster, name: t.name })), index, cluster: d.cluster, name: d.name, core: { id: core.id, name: core.name, map: !!core.moc },
    docked, second, adrift, counts: { docked: all.docked.length, second: all.second.length, adrift: all.adrift.length } };
}

export const station = {
  id: "station", name: "Station", hint: "One topic as a ring station: notes its map links are docked, the rest ride the second ring or drift outside",
  drift: 0.06, home: { yaw: 0.65, pitch: 0.28, dist: 50, min: 12, max: 170, minPitch: -1.4 }, stage: { light: "camera", fog: [80, 260], ambient: 0.5, glow: { strength: 0.8, radius: 0.6, threshold: 0.55 } },
  actions: ["graph"],
  build({ stage, frame, data, inputs, onOpen, onAction, theme, invalidate }) {
    const byId = new Map(data.nodes.map(n => [n.id, n])), topicOf = id => (byId.has(id) ? byId.get(id).cluster : undefined);
    let L = stationLayout(data, topicOf(inputs.selected)), model = null, fx = null, lit = null;
    if (!L.core) return tooFew(frame, onAction, plural(data.nodes.length, "note"), ["The Station needs notes in a topic.", "No notes yet."]);
    const name = id => byId.get(id).name, shown = (list, n) => (list.length < n ? `${list.length} of ${n}` : `${n}`);
    const stat = () => `${L.name} · ${L.counts.docked} docked · ${L.counts.second} on the second ring · ${L.counts.adrift} adrift`;
    function draw() {
      if (model) scrap(stage.scene, model);
      model = new Group();
      const topic = theme.palette[(L.cluster || 0) % theme.palette.length], grey = mix(theme.muted, theme.bg, 0.25), hull = mix(theme.muted, theme.fg, 0.55);
      const tint = m => (m.state === "stale" ? grey : m.state === "active" ? ACTIVE : topic), metal = c => new MeshPhongMaterial({ color: c, specular: "#888888", shininess: 40 });
      const lay = (geo, mat, at, turn) => { const o = new Mesh(geo, mat); o.position.set(...at); if (turn) o.rotation.set(...turn); model.add(o); return o; };
      // the hub, its mast and the four solar panels
      lay(new CylinderGeometry(1.5, 1.5, 7, 28), metal(hull), [0, 0, 0], [Math.PI / 2, 0, 0]);
      lay(new SphereGeometry(1.5, 28, 16), metal(topic), [0, 0, 3.5]); lay(new SphereGeometry(1.5, 28, 16), metal(hull), [0, 0, -3.5]);
      lay(new CylinderGeometry(0.22, 0.22, 16, 10), metal(hull), [0, 0, 0], [Math.PI / 2, 0, 0]);
      for (const z of [7.2, -7.2]) { lay(new CylinderGeometry(0.12, 0.12, 13, 8), metal(hull), [0, 0, z], [0, 0, Math.PI / 2]); for (const x of [4, -4]) lay(new BoxGeometry(5, 2.6, 0.08), new MeshPhongMaterial({ color: "#1e3a8a", emissive: "#0b1a45", specular: "#93c5fd", shininess: 90 }), [x, 0, z]); }
      // the two rings, their modules, the spokes and the struts
      for (const z of [GAP, -GAP]) lay(new TorusGeometry(RING, 0.16, 8, 96), metal(hull), [0, 0, z]);
      const v = new Vector3(), box = (m, mat) => mat.makeRotationZ(m.a).scale(v.set(0.85 * m.size, 1.15 * m.size, 1.1 * m.size)).setPosition(...m.at);
      model.add(copies(new BoxGeometry(1, 1, 1), metal("#ffffff"), [...L.docked, ...L.second], (m, i, mat) => { box(m, mat); return tint(m); }));
      const at = new Map(L.docked.map(m => [m.id, m.at])), rod = () => new CylinderGeometry(1, 1, 1, 6);
      const faint = () => new MeshPhongMaterial({ color: hull, transparent: true, opacity: 0.35, depthWrite: false });   // links are drawn light so they read behind the model
      model.add(copies(rod(), faint(), L.docked, (m, i, mat) => { span(mat, [0, 0, GAP], m.at, 0.05); }));
      model.add(copies(rod(), faint(), L.second.filter(m => m.anchor), (m, i, mat) => { span(mat, m.at, at.get(m.anchor), 0.05); }));
      model.add(copies(new IcosahedronGeometry(1, 0), new MeshPhongMaterial({ color: "#ffffff", flatShading: true }), L.adrift, (m, i, mat) => { mat.makeRotationZ(i).scale(v.set(0.6 * m.size, 0.45 * m.size, 0.5 * m.size)).setPosition(...m.at); return m.state === "stale" ? grey : mix(topic, grey, 0.6); }));
      // a light travelling along every link, from the hub out to a docked module and from a docked module out to its second-ring neighbours
      const runs = [...L.docked.map(m => [[0, 0, GAP], m.at]), ...L.second.filter(m => m.anchor).map(m => [at.get(m.anchor), m.at])];
      fx = sparks(runs.length, (i, t) => { const [p, q] = runs[i], f = (t * 0.35 + i * 0.618) % 1; return [p[0] + (q[0] - p[0]) * f, p[1] + (q[1] - p[1]) * f, p[2] + (q[2] - p[2]) * f]; }, { size: 4, color: "#ffe9a8" });
      model.add(fx.object);
      // lit windows round both rings, a few flickering
      const WIN = 150; lit = sparks(WIN, (i, t) => { const a = (i / WIN) * Math.PI * 2, z = i % 2 ? GAP : -GAP, r = RING + (i % 3 - 1) * 0.35; return [r * Math.cos(a), r * Math.sin(a), z + 0.45 * (i % 5 === 0 ? 1 : -1) * (0.6 + 0.4 * Math.sin(t * 2.5 + i * 7) * (i % 7 === 0 ? 1 : 0))]; }, { size: 2.4, color: "#ffd98a", opacity: 0.9 });
      model.add(lit.object);
      stage.scene.add(model);
      const open = m => ({ run: () => onOpen(m.id), title: `Open ${name(m.id)}` });
      const labels = [{ text: clip(L.core.name, 34), at: [0, 1.6, 3.5], strong: true, dy: -16, run: () => onOpen(L.core.id), title: `Open ${L.core.name}` }];
      for (const m of L.docked.slice(0, 5)) labels.push({ text: clip(name(m.id), 22), at: m.at, dy: -14, ...open(m) });
      if (L.docked.length) labels.push({ text: `docked (${shown(L.docked, L.counts.docked)})`, at: [0, -RING, GAP], color: theme.muted, dy: 16 });
      if (L.second.length) labels.push({ text: `second ring (${shown(L.second, L.counts.second)})`, at: [RING, 0, -GAP], color: theme.muted, dy: 16 });
      if (L.adrift.length) labels.push({ text: `adrift (${shown(L.adrift, L.counts.adrift)})`, at: L.adrift[0].at, color: theme.muted, dy: 16 });
      frame.labels(labels); frame.stat(stat());
      const out = [], total = L.counts.docked + L.counts.second + L.counts.adrift;
      if (total) out.push({ text: `${L.counts.docked} of ${plural(total, "note")} in ${L.name} link with ${L.core.name}.` + (L.core.map ? "" : ` ${L.name} has no map; ${L.core.name} is its most relied-on note.`), label: `Open ${clip(L.core.name, 18)}`, run: () => onOpen(L.core.id) });
      if (L.second.length) out.push({ text: `${plural(L.counts.second, "note")} link with the topic but not with ${L.core.name}. ${name(L.second[0].id)} is the most relied-on of them; a link from ${L.core.name} docks it.`, label: "Open note", run: () => onOpen(L.second[0].id) });
      if (L.adrift.length) out.push({ text: `${plural(L.counts.adrift, "note")} link with nothing in ${L.name}. ${name(L.adrift[0].id)} is the most relied-on of them.`, label: "Open note", run: () => onOpen(L.adrift[0].id) });
      frame.explain({
        plain: "Picture a topic as a space station. The hub in the middle is the topic's map. Every note the map links with is a module bolted to the front ring. Notes that only link with other notes ride the second ring. Notes that link with nothing here drift outside as rocks.",
        about: `The hub is ${L.core.name}${L.core.map ? ", the topic's map" : ", the topic's most relied-on note (the topic has no map)"}. A spoke is a link between the hub and a note; a strut is a link between a second-ring note and a docked one. A module is bigger the more the vault leans on the note. A ring shows at most ${PER_RING} modules and ${ROCKS} rocks are drawn, the most relied-on first; each label says how many there are in all.`,
        legend: [{ color: ACTIVE, text: "edited lately" }, { color: topic, text: "a note of the topic" }, { color: grey, text: "stale" }, { color: hull, text: "spoke or strut = a link" }], insights: out,
      });
      const step = by => () => { go(L.topics[(L.index + by + L.topics.length) % L.topics.length].cluster); invalidate(); };
      frame.controls({ lines: [`Topic ${L.index + 1} of ${L.topics.length}`], buttons: [
        { label: "‹", title: "The topic before", off: L.topics.length < 2, run: step(-1) },
        { label: L.name, title: `Open ${L.core.name}`, wide: true, run: () => onOpen(L.core.id) },
        { label: "›", title: "The next topic", off: L.topics.length < 2, run: step(1) },
      ] });
    }
    function go(cluster) { if (cluster === undefined || cluster === L.cluster) return; const next = stationLayout(data, cluster); if (next.cluster !== cluster) return; L = next; draw(); }
    stage.sky({ top: "#02050f", haze: "#0b1432", stars: 500, starColor: "#cfe0ff" });   // the station sits in space
    draw();
    const tips = { active: "edited lately", steady: "", stale: "stale" }, tip = (m, where) => [name(m.id), where, tips[m.state]].filter(Boolean).join(" · ");
    return {
      targets: () => [{ at: [0, 0, 0], r: 2.2, key: { kind: "note", id: L.core.id, tip: `${L.core.name} · the hub of ${L.name}` } },
        ...L.docked.map(m => ({ at: m.at, r: 0.9 * m.size, key: { kind: "note", id: m.id, tip: tip(m, "docked") } })),
        ...L.second.map(m => ({ at: m.at, r: 0.9 * m.size, key: { kind: "note", id: m.id, tip: tip(m, "second ring") } })),
        ...L.adrift.map(m => ({ at: m.at, r: 0.8 * m.size, key: { kind: "note", id: m.id, tip: tip(m, "adrift") } }))],
      click(k) { if (k.kind === "note") onOpen(k.id); },
      update(next) { if ("selected" in next && next.selected) go(topicOf(next.selected)); },
      stat,
      today: () => (L.adrift.length ? { text: `${name(L.adrift[0].id)} links with nothing in ${L.name}.`, label: "Open note", run: () => onOpen(L.adrift[0].id) } : null),
      api: { layout: () => L, go: c => { go(c); invalidate(); } },
      tick(t) { if (fx) fx.tick(t); if (lit) lit.tick(t); },
      dispose() { if (model) scrap(stage.scene, model); },
    };
  },
};
