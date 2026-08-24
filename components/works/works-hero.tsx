import { ArrowRight, Bot, ServerCog, Smartphone, Workflow } from "lucide-react";
import Link from "next/link";
import type { ComponentType, ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

const CAPABILITIES: readonly {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
}[] = [
  { icon: ServerCog, label: "Websites & E-commerce" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Bot, label: "AI Agents & Chatbots" },
  { icon: Workflow, label: "Workflow Automation" },
];

export function WorksHero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-40 pb-16 sm:px-10 sm:pt-52 sm:pb-20">
        <FadeIn className="flex max-w-[62ch] flex-col gap-4">
          <p className="text-neon-deep dark:text-neon font-mono text-xs font-medium tracking-[0.25em]">
            OUR WORK
          </p>

          <h1 className="text-foreground text-[2.5rem] leading-[1.08] font-medium tracking-tight sm:text-[3rem] lg:text-[3.25rem]">
            Case studies are{" "}
            <span className="text-neon-deep dark:text-neon">on the way</span>.
          </h1>

          <p className="text-foreground/65 max-w-[52ch] text-[18px] leading-[1.5] tracking-tight">
            We&rsquo;re putting together detailed write-ups of recent builds:
            websites, apps, and AI automation systems across the sectors we work
            in. In the meantime, here&rsquo;s what we&rsquo;ve been building.
          </p>

          <div className="mt-2 flex flex-wrap gap-2.5">
            {CAPABILITIES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="border-foreground/10 bg-foreground/3 text-foreground/70 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium tracking-tight"
              >
                <Icon
                  className="text-neon-deep dark:text-neon size-3.5"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="focus-ring group bg-neon hover:bg-core-mint inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl px-5 text-sm font-semibold text-black transition-all duration-200 hover:shadow-[0_0_28px_-2px_rgba(57,255,20,0.55)]"
            >
              Talk to Us About Your Project
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/services"
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
    </section>
  );
}
