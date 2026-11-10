// The phone benchmark: one InstancedMesh of `count` spheres on the shared stage, timed frame by frame.
// The cloud is generated (same every run); the Cas9 model's atoms replace it when that view moves in.
import { InstancedMesh, IcosahedronGeometry, MeshStandardMaterial, MeshBasicMaterial, Matrix4, Color } from "three";
import { makeStage } from "./stage.js";
import { theme } from "./contract.js";

// Icosphere subdivisions, the same three levels the phase 0 spike measured (20, 80 and 180 triangles a sphere).
export const DETAIL = { low: 0, medium: 1, high: 2 };
export const sphereTriangles = d => 20 * (d + 1) ** 2;

export async function bench({ host, count = 11330, detail = "medium", pbr = false, warmup = 3000, run = 5000 }) {
  const seg = DETAIL[detail];
  if (seg === undefined) throw new Error(`bench: detail is one of ${Object.keys(DETAIL).join(", ")}`);
  const stage = makeStage(host, theme(), { fog: false });
  const mesh = new InstancedMesh(new IcosahedronGeometry(1, seg), pbr ? new MeshStandardMaterial({ roughness: 0.5 }) : new MeshBasicMaterial(), count);
  const m = new Matrix4(), c = new Color();
  let seed = 1;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < count; i++) {
    const u = rnd() * 2 - 1, a = rnd() * Math.PI * 2, rad = 14 * Math.cbrt(rnd()), s = Math.sqrt(1 - u * u);
    m.makeScale(0.5, 0.5, 0.5).setPosition(rad * s * Math.cos(a), rad * u, rad * s * Math.sin(a));
    mesh.setMatrixAt(i, m);
    mesh.setColorAt(i, c.setHSL(rnd(), 0.5, 0.55));
  }
  stage.scene.add(mesh);
  const gl = stage.renderer.getContext();
  const dbg = gl.getExtension("WEBGL_debug_renderer_info");
  const gpu = String(gl.getParameter(dbg ? dbg.UNMASKED_RENDERER_WEBGL : gl.RENDERER));
  const times = [];
  let last = 0, t0 = 0;
  await new Promise(done => {
    requestAnimationFrame(function tick(now) {
      t0 = t0 || now;
      stage.orbit(now / 2000, 0.3, 42);
      stage.render();
      if (now - t0 > warmup && last) times.push(now - last);
      last = now;
      if (now - t0 < warmup + run) requestAnimationFrame(tick); else done();
    });
  });
  stage.dispose();
  if (!times.length) throw new Error("bench: no frames were drawn (is the tab in the background?)");
  const total = times.reduce((a, b) => a + b, 0);
  return {
    atoms: count, detail, triangles: count * sphereTriangles(seg), light: pbr ? "pbr" : "basic",
    fps: +(times.length / (total / 1000)).toFixed(1), worstMs: +Math.max(...times).toFixed(1), frames: times.length, gpu,
  };
}
