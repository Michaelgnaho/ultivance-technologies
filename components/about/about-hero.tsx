import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { TextLoop } from "@/components/ui/text-loop";

import { FadeIn } from "@/components/ui/motion-primitives";

export function AboutHero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-40 pb-16 sm:px-10 sm:pt-52 sm:pb-20">
        <FadeIn className="flex max-w-[62ch] flex-col gap-4">
          <p className="text-neon-deep dark:text-neon font-mono text-xs font-medium tracking-[0.25em]">
            ABOUT ULTIVANCE TECHNOLOGIES
          </p>

          <h1 className="text-foreground text-[2.5rem] leading-[1.08] font-medium tracking-tight sm:text-[3rem] lg:text-[3.25rem]">
            A registered{" "}
            <span className="text-neon-deep dark:text-neon">
              AI-powered digital transformation
            </span>{" "}
            company, built for Africa.
          </h1>

          <p className="text-foreground/65 max-w-[52ch] text-[18px] leading-[1.5] tracking-tight">
            We help businesses, schools, healthcare providers, NGOs, churches,
            and government agencies leverage technology to boost work efficiency
            — designing websites, mobile apps, AI agents, and automation systems
            that turn repetitive work into scalable digital ecosystems.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/#contact"
              className="focus-ring group bg-neon hover:bg-core-mint inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl px-5 text-sm font-semibold text-black transition-all duration-200 hover:shadow-[0_0_28px_-2px_rgba(57,255,20,0.55)]"
            >
              Book a Consultation
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/#services"
              className="border-foreground/5 focus-ring group bg-background text-foreground hover:bg-foreground/4 inline-flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium shadow-2xl transition-colors"
            >
              View Our Services
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </FadeIn>
      </div>
      <div aria-label="What we build" className="relative mt-8 w-full p-0">
        <TextLoop
          text="Websites ✦ AI Automation ✦ Apps"
          shape="wave"
          speed={80}
          direction="forward"
          curviness={62}
          separator="✦"
          fontSize={20}
          fontWeight={700}
          letterSpacing={1}
          uppercase
          color="#000000"
          ribbon
          ribbonColor="#39ff14"
          ribbonWidth={42}
          pauseOnHover
        />
      </div>
    </section>
  );
}
