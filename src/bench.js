// The phone check: draws the Cas9 model's atoms (the heaviest thing any view draws) on the shared stage, turning,
// and measures the frame rate. Phase 0's numbers were measured the same way, on the same atoms.
//   bench({ host, detail: "low"|"medium"|"high", pbr, warmup, run }) -> { atoms, detail, triangles, light, fps, worstMs, frames, gpu }
import { IcosahedronGeometry, MeshStandardMaterial, MeshLambertMaterial } from "three";
import { makeStage } from "./stage.js";
import { theme } from "./contract.js";
import { cas9Parts } from "./models/cas9.js";
import { cas9Body } from "./scenes/cas9.js";

export const DETAIL = { low: 0, medium: 1, high: 2 };
// triangles in three.js's IcosahedronGeometry(1, d)
export const sphereTriangles = d => 20 * (d + 1) ** 2;

export async function bench({ host, detail = "medium", pbr = false, warmup = 3000, run = 5000 } = {}) {
  if (!(detail in DETAIL)) throw new Error(`bench: detail is one of ${Object.keys(DETAIL).join(", ")}`);
  if (!host) throw new Error("bench: host (an element to draw in) is required");
  const A = cas9Parts(), stage = makeStage(host, theme(), { fog: false });
  try {
    stage.scene.add(cas9Body(A, new IcosahedronGeometry(1, DETAIL[detail]), pbr ? new MeshStandardMaterial({ roughness: 0.6 }) : new MeshLambertMaterial()).root);
    const gl = stage.renderer.getContext(), info = gl.getExtension("WEBGL_debug_renderer_info");
    const gpu = String((info && gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) || gl.getParameter(gl.RENDERER) || "unknown");
    const frame = () => new Promise(r => requestAnimationFrame(r));
    const start = performance.now();
    let now = start, last = start, frames = 0, worst = 0, measured = 0;
    while (now - start < warmup + run) {
      now = await frame();
      stage.orbit(now / 2000, 0.3, 42);
      stage.render();
      if (now - start >= warmup) { if (measured) { frames++; worst = Math.max(worst, now - last); } else measured = now; }
      last = now;
    }
    const span = now - measured;
    return { atoms: A.n, detail, triangles: A.n * sphereTriangles(DETAIL[detail]), light: pbr ? "pbr" : "basic", fps: span > 0 ? Math.round((frames * 1000) / span * 10) / 10 : 0, worstMs: Math.round(worst * 10) / 10, frames, gpu };
  } finally {
    stage.dispose();
  }
}
