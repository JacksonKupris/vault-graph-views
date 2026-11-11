// The first body scene: every note as one instanced sphere, sized by its links, coloured by topic, on a golden-spiral
// shell. A click on a sphere calls the host's onOpen(noteId).
// It proves the contract end to end (data in, canvas out, a click reaches the host); it is not one of the real graphs.
import { InstancedMesh, SphereGeometry, MeshStandardMaterial, Matrix4, Color } from "three";
import { plural } from "../text.js";

// Where each note sits and how big it is. Pure, so tests can check it without a GPU.
export function layout(nodes, R = 18) {
  const n = nodes.length, golden = Math.PI * (3 - Math.sqrt(5));
  return nodes.map((node, i) => {
    const y = n > 1 ? 1 - (i / (n - 1)) * 2 : 0, r = Math.sqrt(1 - y * y), a = i * golden;
    return { x: Math.cos(a) * r * R, y: y * R, z: Math.sin(a) * r * R, size: 0.5 + Math.sqrt((node.inlinks || 0) + (node.outlinks || 0)) * 0.35 };
  });
}

export const bodies = {
  id: "bodies", name: "Notes", hint: "Every note as a sphere", home: { yaw: 0.6, pitch: 0.3, dist: 48, min: 15, max: 110 },
  build({ stage, frame, data, onOpen }) {
    const nodes = data.nodes, spots = layout(nodes);
    const mesh = new InstancedMesh(new SphereGeometry(1, 20, 14), new MeshStandardMaterial({ roughness: 0.5 }), Math.max(nodes.length, 1));
    mesh.count = nodes.length;
    const m = new Matrix4(), col = new Color();
    spots.forEach((p, i) => {
      m.makeScale(p.size, p.size, p.size).setPosition(p.x, p.y, p.z);
      mesh.setMatrixAt(i, m);
      mesh.setColorAt(i, col.setHSL(((nodes[i].cluster || 0) * 0.137) % 1, 0.6, 0.55));
    });
    stage.scene.add(mesh);
    const targets = spots.map((p, i) => ({ at: [p.x, p.y, p.z], r: p.size, key: { kind: "note", id: nodes[i].id, tip: nodes[i].name } }));
    const stat = () => plural(nodes.length, "note");
    frame.stat(stat());
    return { targets: () => targets, click: k => onOpen(k.id), update() {}, stat };
  },
};
