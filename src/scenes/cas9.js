// Cas9: the enzyme (PDB 5F9R) holding the vault's notes as DNA. Every note is one base pair, in path order; the
// guide is the Guide scan's text, its exact matches are gold pairs and its look-alikes lilac. The enzyme sits on one
// exact match; ‹ › walk it along the others.
// The numbers (which note is which pair, where each atom is) are models/cas9.js; this file only draws them.
//   inputs.scan      the Guide scan's result (contract.js, SCAN_SHAPE), or none yet
//   inputs.selected  the host's selected note: when the guide matched it, the enzyme sits on it
//   onAction("guide-scan")   the host opens its Guide scan
import { InstancedMesh, IcosahedronGeometry, MeshLambertMaterial, Matrix4, Color, Group, SRGBColorSpace } from "three";
import { C9, cas9Parts, cas9Layout } from "../models/cas9.js";
import { plural, clip } from "../text.js";

const S = C9.SCALE;
const FINE = 28;       // pairs of each arm drawn atom by atom; the rest are four beads a pair
const DIM = 0.3;       // a note outside the highlighted set
// the model's axes are y down, z away; the stage's are y up, z toward the viewer. A half turn about x maps one to the
// other and keeps the helix right-handed (a mirror would not).
const world = p => [p[0] * S, -p[1] * S, -p[2] * S];

// The crystal's atoms as one mesh on the stage, in their own colours. The scene and the benchmark both draw this.
export function cas9Body(A, geometry, material) {
  const root = new Group(), mesh = new InstancedMesh(geometry, material, A.n), m = new Matrix4(), col = new Color();
  for (let i = 0; i < A.n; i++) {
    m.makeScale(C9.ATOM, C9.ATOM, C9.ATOM).setPosition(A.xyz[i * 3], A.xyz[i * 3 + 1], A.xyz[i * 3 + 2]);
    mesh.setMatrixAt(i, m);
    const c = A.base[A.kind[i]];
    mesh.setColorAt(i, col.setRGB(c[0], c[1], c[2], SRGBColorSpace).multiplyScalar(A.shade[i]));
  }
  root.rotation.x = Math.PI; root.scale.setScalar(S); root.add(mesh);
  return { root, mesh };
}

export const cas9 = {
  id: "cas9", name: "Cas9", hint: "Notes as DNA, the Guide scan's matches as cut sites",
  // opens on the side where the guide RNA and both DNA arms show (checked by eye on the dev page)
  home: { yaw: 0, pitch: 0.2, dist: 44, min: 14, max: 240 }, stage: { light: "camera", fog: [70, 260], ambient: 0.5 },
  actions: ["guide-scan"],
  build({ stage, frame, data, inputs, onOpen, onAction, invalidate }) {
    const A = cas9Parts(), byId = new Map(data.nodes.map(n => [n.id, n])), name = id => (byId.get(id) ? byId.get(id).name : id);
    const ball = new IcosahedronGeometry(1, 1), matte = new MeshLambertMaterial();
    const { root, mesh: complex } = cas9Body(A, ball, matte);
    stage.scene.add(root);
    const m = new Matrix4(), col = new Color(), rgb = (c, k) => col.setRGB(c[0], c[1], c[2], SRGBColorSpace).multiplyScalar(k);
    let arms = null, L = null, targets = [], drew = { atoms: 0, pairs: 0, fine: 0, beads: 0 };
    let scan = inputs.scan || null, selected = inputs.selected || null, siteId = null, highlight = null;

    const tintOf = id => { const h = L.hits.get(id); return h === "hit" ? C9.HIT : h === "near" ? C9.NEAR : null; };
    const dimOf = id => (highlight && !highlight.has(id) ? DIM : 1);

    function paintComplex() {
      for (let i = 0; i < A.n; i++) {
        const id = A.flank[i] >= 0 ? L.flankIds[A.flank[i]] : null, tint = id ? tintOf(id) : null;
        complex.setColorAt(i, rgb(tint || A.base[A.kind[i]], A.shade[i] * (id ? dimOf(id) : 1)));
      }
      complex.instanceColor.needsUpdate = true;
    }
    function drawArms() {
      if (arms) { root.remove(arms); arms.dispose(); }
      const count = [L.nearIds, L.farIds].reduce((s, ids) => s + Math.min(ids.length, FINE) * A.pair.length + Math.max(0, ids.length - FINE) * A.beads.length, 0);
      arms = new InstancedMesh(ball, matte, Math.max(count, 1));
      arms.count = count;
      let at = 0;
      drew = { atoms: A.n, pairs: L.nearIds.length + L.farIds.length, fine: 0, beads: 0 };
      [[L.nearIds, L.near, true], [L.farIds, L.far, false]].forEach(([ids, arm, firstIsOther]) => ids.forEach((id, j) => {
        const detail = j < FINE, o = j * 12, tint = tintOf(id), dim = dimOf(id);
        if (detail) drew.fine++; else drew.beads++;
        for (const a of detail ? A.pair : A.beads) {
          m.makeScale(a.r, a.r, a.r).setPosition(
            arm[o] + arm[o + 3] * a.x + arm[o + 6] * a.y + arm[o + 9] * a.z,
            arm[o + 1] + arm[o + 4] * a.x + arm[o + 7] * a.y + arm[o + 10] * a.z,
            arm[o + 2] + arm[o + 5] * a.x + arm[o + 8] * a.y + arm[o + 11] * a.z);
          arms.setMatrixAt(at, m);
          // a matched note is its colour on the bases (on the whole pair once it is beads); the backbone keeps its strand's
          const strand = (a.strand === 0) === firstIsOther ? C9.OTHER : C9.TARGET;
          arms.setColorAt(at++, rgb(tint && (a.base || !detail) ? tint : strand, (a.base ? 0.78 : 1) * dim));
        }
      }));
      drew.atoms += at;
      root.add(arms);
    }
    const stat = () => {
      if (!scan) return `${plural(L.all.length, "note")} · no guide`;
      const head = `“${scan.guide}”${scan.where ? " " + scan.where : ""}`, near = [...L.hits.values()].filter(h => h === "near").length;
      return L.sites.length ? `${head}: exact in ${plural(L.sites.length, "note")} of ${L.all.length}${near ? ` · look-alikes in ${near}` : ""}` : `${head}: no match in ${plural(L.all.length, "note")}`;
    };
    const scanButton = { label: "Open Guide scan", title: "Open Guide scan", run: () => onAction("guide-scan") };
    const siteIndex = () => L.sites.findIndex(n => n.id === L.site);
    function step(d) { const n = L.sites.length; if (!n) return; siteId = L.sites[(siteIndex() + d + n) % n].id; relayout(); invalidate(); }
    function go(id) { if (L.hits.get(id) === "hit") { siteId = id; relayout(); invalidate(); } }
    function words() {
      frame.stat(stat());
      const labels = [
        { text: "Cas9 protein", at: world(A.labels.protein), dy: -16, run: () => onAction("guide-scan"), title: "Cas9 protein. Open Guide scan" },
        { text: scan ? `RNA · ${clip(scan.guide, 24)}` : "RNA", at: world(A.labels.rna), color: "#f2764a", dy: -14, run: () => onAction("guide-scan"), title: "The guide. Open Guide scan" },
        { text: "DNA", at: world(A.M.tails.near.o), color: "#8fbcfb", dy: 16, title: L.sites.length ? "DNA. Show the exact matches" : "DNA. Open Guide scan",
          run: () => { if (!L.sites.length) return onAction("guide-scan"); highlight = new Set(L.sites.map(n => n.id)); repaint(); invalidate(); } },
      ];
      const focus = L.site || (selected && L.pos.has(selected) ? selected : null);
      if (focus) labels.unshift({ text: clip(name(focus), 34), at: world(L.pos.get(focus)), strong: true, dy: 30, run: () => onOpen(focus), title: `Open ${name(focus)}` });
      frame.labels(labels);
      frame.chip(highlight ? `Exact matches of “${clip(scan.guide, 24)}”` : null, () => { highlight = null; repaint(); invalidate(); });
      if (!scan) frame.controls({ lines: [`${plural(L.all.length, "note")}, a base pair each. No guide yet.`], buttons: [scanButton] });
      else if (!L.sites.length) frame.controls({ lines: [`No “${clip(scan.guide, 24)}” in these ${plural(L.all.length, "note")}.`], buttons: [scanButton] });
      else {
        const one = L.sites.length === 1;
        frame.controls({ lines: [`Site ${siteIndex() + 1} of ${L.sites.length}`], buttons: [
          { label: "‹", title: "Previous site", off: one, run: () => step(-1) },
          { label: name(L.site), title: `Open ${name(L.site)}`, wide: true, run: () => onOpen(L.site) },
          { label: "›", title: "Next site", off: one, run: () => step(1) },
        ] });
      }
    }
    function repaint() { paintComplex(); drawArms(); words(); }
    function relayout() {
      L = cas9Layout(data.nodes, scan, siteId);
      if (highlight && !L.sites.length) highlight = null;
      targets = [];
      for (const [id, p] of L.pos) { const w = L.where.get(id); targets.push({ at: world(p), r: (w === "held" ? 14 : w === "flank" ? 6 : 7) * S, key: { kind: "note", id, tip: name(id) } }); }
      repaint();
    }
    // the enzyme stays where it is unless the selected note is one the guide matched
    function seat() { if (selected && L.hits.get(selected) === "hit" && L.site !== selected) { siteId = selected; relayout(); } else siteId = L.site; }
    relayout();
    seat();
    return {
      targets: () => targets,
      click(k) { selected = k.id; if (L.hits.get(k.id) === "hit") { siteId = k.id; relayout(); } else words(); onOpen(k.id); },
      update(next) {
        if ("scan" in next) { scan = next.scan || null; highlight = null; }
        if ("selected" in next) selected = next.selected || null;
        relayout();
        seat();
      },
      stat,
      today() {
        if (!L.site) return null;
        const n = L.sites.length;
        return { text: `Cas9 is on ${name(L.site)}: site ${siteIndex() + 1} of ${n} for “${scan.guide}”`, label: n > 1 ? "Next site" : "Open it", run: () => (n > 1 ? step(1) : onOpen(L.site)) };
      },
      api: { layout: () => L, drew: () => drew, at: id => (L.pos.has(id) ? world(L.pos.get(id)) : null), step, go, highlighted: () => (highlight ? [...highlight] : null) },
    };
  },
};
