import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { TextLoop } from "@/components/ui/text-loop";

const PILLARS: readonly string[] = [
  "Mission-driven",
  "Africa-built",
  "AI-first",
];

export function AboutPreview(): ReactNode {
  return (
    <section id="about" className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <div className="flex max-w-[52ch] flex-col gap-4">
          <p className="text-neon-deep dark:text-neon font-mono text-xs font-medium tracking-[0.25em]">
            ABOUT US
          </p>

          <h2 className="text-foreground text-[1.75rem] leading-[1.15] font-medium tracking-tight sm:text-[2.25rem]">
            A registered digital transformation company, built for Africa.
          </h2>

          <p className="text-foreground/60 text-[16px] leading-[1.55] tracking-tight sm:text-[17px]">
            Ultivance Technologies helps businesses, schools, healthcare
            providers, NGOs, and government agencies leverage the power of
            technology to boost work efficiency — turning repetitive tasks into
            intelligent digital ecosystems.
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2">
            {PILLARS.map((item) => (
              <span
                key={item}
                className="text-foreground/40 font-mono text-[10px] font-medium tracking-[0.1em]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <Link
          href="/about"
          className="focus-ring group border-foreground/5 bg-foreground/3 text-foreground hover:bg-foreground/6 inline-flex h-11 shrink-0 cursor-pointer items-center gap-2 rounded-xl border px-5 text-sm font-medium shadow-sm transition-colors"
        >
          More about us
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
      <div aria-label="What we build" className="relative m-0 w-full p-0">
        <TextLoop
          text="Websites ✦ AI Automation ✦ Apps"
          shape="line"
          speed={80}
          curviness={52}
          direction="forward"
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
