import Image from "next/image";
import type { ReactNode } from "react";

import { ShaderFlow } from "@/components/shaders/shader-flow";

const BRAND_LOW: [number, number, number] = [0.02, 0.05, 0.02];
const BRAND_HIGH: [number, number, number] = [0.22, 1.0, 0.078];

/**
 * Hero's visual focal point — the real brand mark over a live version of the
 * same flowing shader used site-wide, rather than a stock photo or a static
 * placeholder box. Keeps the template's "framed portrait" visual language,
 * substituted with an asset the company actually owns.
 */
export function BrandVisual(): ReactNode {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm md:max-w-105">
      <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-black">
        <div className="absolute inset-0 opacity-80">
          <ShaderFlow
            brightness={1.4}
            iterations={12}
            scale={4}
            flowSpeed={[0.05, 0.12]}
            colorLowA={BRAND_LOW}
            colorHighA={BRAND_HIGH}
            fadeRx={0.9}
            fadeRy={0.9}
            fadeCy={0.5}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[42%]">
            <Image
              src="/logo/ultivance-icon-neon.png"
              alt="Ultivance Technologies"
              width={600}
              height={600}
              className="h-auto w-full drop-shadow-[0_0_50px_rgba(57,255,20,0.45)]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
