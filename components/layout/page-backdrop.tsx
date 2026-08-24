import type { ReactNode } from "react";

import { ShaderFlow } from "../shaders/shader-flow";

// Ultivance brand: deep near-black-green base flowing into neon green (#39FF14)
const BRAND_LOW: [number, number, number] = [0.02, 0.05, 0.02];
const BRAND_HIGH: [number, number, number] = [0.22, 1.0, 0.078];

export function PageBackdrop(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-225 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40 md:opacity-70">
        <ShaderFlow
          brightness={1.6}
          iterations={10}
          flowSpeed={[0, 0.1]}
          colorLowA={BRAND_LOW}
          colorHighA={BRAND_HIGH}
        />
      </div>
    </div>
  );
}
