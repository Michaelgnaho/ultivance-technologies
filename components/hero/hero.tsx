import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { BrandVisual } from "./brand-visual";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <p className="font-mono text-xs font-medium tracking-[0.25em] text-neon-deep dark:text-neon">
              AI-POWERED DIGITAL TRANSFORMATION
            </p>

            <h1 className="text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.5rem] lg:text-[3.4rem]">
              Advancing ideas into{" "}
              <span className="text-neon-deep dark:text-neon">
                intelligent digital
              </span>{" "}
              solutions.
            </h1>

            <p className="max-w-[38ch] text-[19px] leading-[1.4] tracking-tight text-foreground/65">
              Ultivance Technologies designs and builds websites, mobile
              apps, custom software, and AI automation for businesses,
              schools, healthcare providers, NGOs, and government agencies.
            </p>

            <HeroCtas />

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-foreground/8 pt-6">
              {["Web & Mobile", "AI Automation", "Custom Software", "Digital Consulting"].map(
                (item) => (
                  <span
                    key={item}
                    className="font-mono text-[10px] font-medium tracking-[0.1em] text-foreground/40"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch md:justify-end">
            <BrandVisual />
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
