import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { BrandVisual } from "./brand-visual";
import { TextLoop } from "@/components/ui/text-loop";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <p className="text-neon-deep dark:text-neon font-mono text-xs font-medium tracking-[0.25em]">
              AI-POWERED DIGITAL TRANSFORMATION
            </p>

            <h1 className="text-foreground text-[2.75rem] leading-[1.05] font-medium tracking-tight md:text-[2.5rem] lg:text-[3.4rem]">
              Advancing ideas into{" "}
              <span className="text-neon-deep dark:text-neon">
                intelligent digital
              </span>{" "}
              solutions.
            </h1>

            <p className="text-foreground/65 max-w-[38ch] text-[19px] leading-[1.4] tracking-tight">
              Ultivance Technologies designs and builds websites, mobile apps,
              custom software, and AI automation for businesses, schools,
              healthcare providers, NGOs, and government agencies.
            </p>

            <HeroCtas />

            <div className="border-foreground/8 mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t pt-6">
              {[
                "Web & Mobile",
                "AI Automation",
                "Custom Software",
                "Digital Consulting",
              ].map((item) => (
                <span
                  key={item}
                  className="text-foreground/40 font-mono text-[10px] font-medium tracking-[0.1em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch md:justify-end">
            <BrandVisual />
          </ScaleUnblur>
        </div>
      </div>
      <div aria-label="What we build" className="relative w-full">
        <TextLoop
          text="Websites ✦ AI Automation ✦ Apps"
          shape="wave"
          speed={80}
          direction="forward"
          separator="✦"
          fontSize={24}
          fontWeight={600}
          letterSpacing={1}
          uppercase
          color="#000000"
          ribbon
          ribbonColor="#39ff14"
          ribbonWidth={52}
          pauseOnHover
        />
      </div>
    </section>
  );
}
