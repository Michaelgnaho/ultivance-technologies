import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

export function AboutHero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-40 pb-16 sm:px-10 sm:pt-52 sm:pb-20">
        <FadeIn className="flex max-w-[62ch] flex-col gap-4">
          <p className="font-mono text-xs font-medium tracking-[0.25em] text-neon-deep dark:text-neon">
            ABOUT ULTIVANCE TECHNOLOGIES
          </p>

          <h1 className="text-[2.5rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-[3rem] lg:text-[3.25rem]">
            A CAC-registered{" "}
            <span className="text-neon-deep dark:text-neon">
              AI-powered digital transformation
            </span>{" "}
            company, built for Africa.
          </h1>

          <p className="max-w-[52ch] text-[18px] leading-[1.5] tracking-tight text-foreground/65">
            We help businesses, schools, healthcare providers, NGOs,
            churches, and government agencies put technology to work —
            designing websites, mobile apps, AI agents, and automation
            systems that turn repetitive work into scalable digital
            ecosystems.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/#contact"
              className="focus-ring group inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-neon px-5 text-sm font-semibold text-black transition-all duration-200 hover:bg-core-mint hover:shadow-[0_0_28px_-2px_rgba(57,255,20,0.55)]"
            >
              Book a Consultation
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/#services"
              className="border border-foreground/5 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-2xl transition-colors hover:bg-foreground/4"
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
    </section>
  );
}
