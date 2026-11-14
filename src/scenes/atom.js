// Atom: one note as an atom, a model to turn in the hand. The nucleus is the note: a red ball for every note that links to it and
// a blue ball for every note it links to. Round it, each shell holds the notes that many links away (one, two, three), the most
// relied-on first, as many as an atom's second, third and fourth shells hold (8, 18, 32). Pick an electron and it becomes the nucleus.
//   data.nodes[]     cluster, and what importance needs · data.links  the written links (kind "link")
//   inputs.selected  the host's selected note: the nucleus, when it has links
//   onOpen(id) a note · onAction("graph") when no notes link to one another
import { Mesh, Group, SphereGeometry, TorusGeometry, MeshPhongMaterial, MeshBasicMaterial, Vector3, Euler } from "three";
import { adjacency } from "../network.js";
import { importanceOf } from "../notes.js";
import { copies, mix, scrap } from "../models/parts.js";
import { plural, clip } from "../text.js";
import { tooFew } from "./few.js";

export const SHELLS = [8, 18, 32], RADII = [6, 9, 12], NUCLEONS = 40, PROTON = "#ef4444", NEUTRON = "#60a5fa";
// each ring leans 1.15 from facing the home view, the three turned a third of a half-turn apart: the atom of the textbook picture
const TILT = [[1.15, 0, 0.3, "ZXY"], [1.15, 0, 0.3 + Math.PI / 3, "ZXY"], [1.15, 0, 0.3 + (2 * Math.PI) / 3, "ZXY"]], GOLDEN = 2.399963, BALL = 0.95;

// Who is where. Pure (no GPU), so tests check it.
//   centre (id, or null when nothing links) · protons (notes linking to it) · neutrons (notes it links to)
//   shells [{ all (how many notes are that many links away), ids (the ones shown) }] · dist(id) links from the centre
//   within (notes within three links) · linked (notes with any link) · unreached [ids no chain of links reaches] · far { id, d }
//   electrons [{ id, shell, at: [x, y, z], r }] · nucleus [{ at, proton }] · nucleusR
export function atomLayout(data, want) {
  const { own, adj } = adjacency(data.nodes, data.links), imp = importanceOf(data.nodes);
  const rank = (p, q) => imp(own.get(q)) - imp(own.get(p)) || (p < q ? -1 : 1);
  const linked = [...own.keys()].filter(id => adj.get(id).size).sort(rank);
  if (!linked.length) return { centre: null, linked: 0 };
  const centre = want && own.has(want) && adj.get(want).size ? want : linked[0];
  const dist = new Map([[centre, 0]]), reach = [centre];
  for (let i = 0; i < reach.length; i++) for (const nb of adj.get(reach[i])) if (!dist.has(nb)) { dist.set(nb, dist.get(reach[i]) + 1); reach.push(nb); }
  const shells = SHELLS.map((cap, k) => { const all = reach.filter(id => dist.get(id) === k + 1).sort(rank); return { all: all.length, ids: all.slice(0, cap) }; });
  const ins = new Set(), outs = new Set();
  for (const l of data.links) if (l.kind === "link" && l.source !== l.target && own.has(l.source) && own.has(l.target)) { if (l.target === centre) ins.add(l.source); if (l.source === centre) outs.add(l.target); }
  const protons = ins.size, neutrons = outs.size, total = protons + neutrons, shown = Math.min(total, NUCLEONS);
  // the balls of the nucleus, packed from the middle out; red and blue are dealt evenly, in the share the note has of each
  const redShown = total ? Math.max(protons ? 1 : 0, Math.min(shown - (neutrons ? 1 : 0), Math.round((shown * protons) / total))) : 0, nucleus = [];
  for (let i = 0, red = 0; i < shown; i++) {
    const rho = shown > 1 ? BALL * 0.92 * Math.cbrt(i + 0.35) : 0, y = 1 - 2 * ((i * 0.618034 + 0.5) % 1), flat = Math.sqrt(1 - y * y), a = i * GOLDEN;
    const proton = Math.floor(((i + 1) * redShown) / shown) > red;
    if (proton) red++;
    nucleus.push({ at: [rho * flat * Math.cos(a), rho * y, rho * flat * Math.sin(a)], proton });
  }
  const v = new Vector3(), electrons = [];
  shells.forEach((s, k) => {
    const e = new Euler(...TILT[k]);
    s.ids.forEach((id, j) => {
      const a = (j / s.ids.length) * Math.PI * 2 + k * 0.7; v.set(RADII[k] * Math.cos(a), RADII[k] * Math.sin(a), 0).applyEuler(e);
      electrons.push({ id, shell: k, at: [v.x, v.y, v.z], r: 0.5 + 0.5 * Math.sqrt(Math.max(0, imp(own.get(id)))) });
    });
  });
  // a place on each ring between two electrons, for the ring's label
  const gaps = shells.map((s, k) => { const a = (0.5 / Math.max(1, s.ids.length)) * Math.PI * 2 + k * 0.7 + Math.PI; v.set(RADII[k] * Math.cos(a), RADII[k] * Math.sin(a), 0).applyEuler(new Euler(...TILT[k])); return [v.x, v.y, v.z]; });
  const far = reach[reach.length - 1];
  return { centre, own, protons, neutrons, shells, electrons, gaps, nucleus, nucleusR: BALL * (1 + 0.92 * Math.cbrt(Math.max(shown, 1))), dist: id => (dist.has(id) ? dist.get(id) : null),
    within: reach.filter(id => dist.get(id) >= 1 && dist.get(id) <= SHELLS.length).length, linked: linked.length, unreached: linked.filter(id => !dist.has(id)), far: { id: far, d: dist.get(far) } };
}

const AWAY = ["one link away", "two links away", "three links away"];

export const atom = {
  id: "atom", name: "Atom", hint: "One note as an atom: its links are the nucleus, the notes one, two and three links away its shells",
  home: { yaw: 0.25, pitch: 0.2, dist: 46, min: 12, max: 160, minPitch: -1.4 }, stage: { light: "camera", fog: [70, 240], ambient: 0.55 },
  actions: ["graph"],
  build({ stage, frame, data, inputs, onOpen, onAction, theme, invalidate }) {
    let L = atomLayout(data, inputs.selected), model = null;
    if (!L.centre) return tooFew(frame, onAction, plural(data.nodes.length, "note"), ["The Atom needs notes that link to one another.", "No written links yet."]);
    const name = id => L.own.get(id).name, colour = id => theme.palette[(L.own.get(id).cluster || 0) % theme.palette.length], back = [];
    const shiny = () => new MeshPhongMaterial({ color: "#ffffff", specular: "#777777", shininess: 55 });
    const stat = () => `${name(L.centre)} · ${plural(L.protons, "link")} in · ${L.neutrons} out · ${L.shells.map(s => s.all).join(", ")} notes one, two and three links away`;
    function draw() {
      if (model) scrap(stage.scene, model);
      model = new Group();
      const ball = () => new SphereGeometry(1, 24, 16);
      model.add(copies(ball(), shiny(), L.nucleus, (p, i, m) => { m.makeScale(BALL, BALL, BALL).setPosition(...p.at); return p.proton ? PROTON : NEUTRON; }));
      L.shells.forEach((s, k) => {
        const ring = new Mesh(new TorusGeometry(RADII[k], 0.1, 8, 120), new MeshBasicMaterial({ color: mix(theme.muted, theme.fg, 0.3), transparent: true, opacity: s.ids.length ? 0.75 : 0.3 }));
        ring.rotation.set(...TILT[k]); model.add(ring);
      });
      model.add(copies(ball(), shiny(), L.electrons, (e, i, m) => { m.makeScale(e.r, e.r, e.r).setPosition(...e.at); return colour(e.id); }));
      stage.scene.add(model);
      const labels = [{ text: clip(name(L.centre), 34), at: [0, L.nucleusR, 0], strong: true, dy: -18, run: () => onOpen(L.centre), title: `Open ${name(L.centre)}` }];
      L.shells.forEach((s, k) => { if (s.ids.length) labels.push({ text: `${AWAY[k]} (${s.ids.length < s.all ? `${s.ids.length} of ${s.all}` : s.all})`, at: L.gaps[k], color: theme.muted, dy: 14 }); });
      for (const e of L.electrons) if (e.shell === 0) labels.push({ text: clip(name(e.id), 22), at: e.at, dy: -16, run: () => pick(e.id), title: `Open ${name(e.id)}` });
      frame.labels(labels); frame.stat(stat());
      const loose = L.unreached[0], out = [];
      out.push({ text: `${L.within} of ${plural(L.linked - 1, "other linked note")} are within three links of ${name(L.centre)}.${L.far.d > 3 ? ` The farthest, ${name(L.far.id)}, is ${L.far.d} links away.` : ""}`, ...(L.far.d > 3 ? { label: "Open farthest", run: () => pick(L.far.id) } : {}) });
      if (L.shells[0].all === 1) out.push({ text: `One link holds ${name(L.centre)} to the rest of the vault. A second link from a related note keeps it reachable if that one goes.`, label: "Open its neighbour", run: () => pick(L.shells[0].ids[0]) });
      if (loose) out.push({ text: `${plural(L.unreached.length, "linked note")} can't be reached from here by any chain of links. ${name(loose)} is the most relied-on of them.`, label: "Open note", run: () => pick(loose) });
      frame.explain({
        plain: "Picture one note as an atom. Its own links are packed in the middle. The notes one link away circle closest, the notes two links away further out, and so on. A full, close shell means the note is well tied in.",
        about: `The nucleus is ${name(L.centre)}: a red ball for each note that links to it and a blue ball for each note it links to (at most ${NUCLEONS} are drawn, in the same share). Each shell holds the notes that many written links away, the most relied-on first; a shell shows at most ${SHELLS.join(", ")} of them, as an atom's shells do, and its label says how many there are in all. An electron takes its topic's colour and is bigger the more the vault leans on it.`,
        legend: [{ color: PROTON, text: "a note that links to it" }, { color: NEUTRON, text: "a note it links to" }, { color: theme.palette[0], text: "electron = a note, shell = links away, colour = topic" }], insights: out,
      });
      frame.controls({ lines: ["Pick an electron to make it the nucleus"], buttons: [
        { label: "‹ Back", title: "Back to the note before", off: !back.length, run: () => { L = atomLayout(data, back.pop()); draw(); invalidate(); } },
        { label: name(L.centre), title: `Open ${name(L.centre)}`, wide: true, run: () => onOpen(L.centre) },
      ] });
    }
    // an electron (or any linked note the host selects) becomes the nucleus
    function centreOn(id) { if (id === L.centre || !L.own.has(id)) return; const next = atomLayout(data, id); if (next.centre !== id) return; back.push(L.centre); L = next; draw(); }
    function pick(id) { centreOn(id); invalidate(); onOpen(id); }
    draw();
    return {
      targets: () => [{ at: [0, 0, 0], r: L.nucleusR, key: { kind: "note", id: L.centre, tip: `${name(L.centre)} · ${plural(L.protons, "link")} in, ${L.neutrons} out` } },
        ...L.electrons.map(e => ({ at: e.at, r: Math.max(e.r * 1.3, 0.9), key: { kind: "note", id: e.id, tip: `${name(e.id)} · ${AWAY[e.shell]}` } }))],
      click(k) { if (k.kind === "note") pick(k.id); },
      update(next) { if ("selected" in next && next.selected) centreOn(next.selected); },
      stat, today: () => null,
      api: { layout: () => L, centre: () => L.centre, back: () => back.length },
      dispose() { if (model) scrap(stage.scene, model); },
    };
  },
};
