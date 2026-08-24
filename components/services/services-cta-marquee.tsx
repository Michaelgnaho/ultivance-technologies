import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

const ROW_ONE: readonly string[] = [
  "Web Design",
  "App Design",
  "Dashboard",
  "Wireframe",
  "Landing Page",
  "Branding",
];

const ROW_TWO: readonly string[] = [
  "AI Automation",
  "UI/UX Design",
  "E-commerce",
  "Custom Software",
  "Cloud & API",
  "Illustration",
];

const EDGE_FADE_MASK =
  "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)";

export function ServicesCtaMarquee(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="border-foreground/8 overflow-hidden rounded-4xl border bg-[#0a0a0a] py-14 sm:py-16">
          <div className="flex flex-col items-center gap-6 px-6 text-center sm:px-10">
            <p className="text-neon font-mono text-xs font-medium tracking-[0.25em]">
              LET&rsquo;S WORK TOGETHER
            </p>
            <h2 className="max-w-[20ch] font-serif text-[2rem] leading-[1.1] font-bold tracking-tight text-white sm:text-[2.75rem]">
              Let&rsquo;s Create an{" "}
              <span className="text-neon">Amazing Project</span> Together!
            </h2>
            <Link
              href="#contact"
              className="focus-ring group bg-neon mt-2 inline-flex h-12 cursor-pointer items-center gap-2 rounded-full px-6 text-sm font-semibold text-black transition-all duration-200 hover:shadow-[0_0_28px_-2px_rgba(57,255,20,0.55)]"
            >
              Contact Us
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-12 flex flex-col gap-4">
            <MarqueeRow items={ROW_ONE} reverse={false} />
            <MarqueeRow items={ROW_TWO} reverse />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  reverse,
}: {
  items: readonly string[];
  reverse: boolean;
}): ReactNode {
  const doubled = [...items, ...items];

  return (
    <div
      className="marquee-row w-full overflow-hidden"
      style={{ WebkitMaskImage: EDGE_FADE_MASK, maskImage: EDGE_FADE_MASK }}
    >
      <div
        className={`flex w-max shrink-0 items-center gap-3 ${
          reverse ? "marquee-track--reverse" : "marquee-track"
        }`}
      >
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="border-neon-deep/30 bg-neon/10 text-neon shrink-0 rounded-full border px-5 py-2.5 text-[13px] font-medium tracking-tight whitespace-nowrap"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
