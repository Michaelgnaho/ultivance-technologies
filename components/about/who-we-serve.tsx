import { Calendar, Globe2 } from "lucide-react";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

const AUDIENCES: readonly string[] = [
  "Businesses",
  "Startups",
  "Schools",
  "Healthcare Providers",
  "NGOs",
  "Churches",
  "Government Agencies",
];

export function WhoWeServe(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="grid grid-cols-1 gap-8 rounded-4xl border border-foreground/8 bg-background p-6 sm:p-10 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-10">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs font-medium tracking-[0.25em] text-neon-deep dark:text-neon">
              MARKET FOCUS
            </p>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Who we serve
            </h2>
            <p className="max-w-[46ch] text-[15px] leading-[1.55] tracking-tight text-foreground/60">
              We operate primarily online, serving clients across Nigeria
              and internationally, with a strategic focus on accelerating
              digital transformation across Africa through technology
              that&rsquo;s affordable, practical, and built to scale.
            </p>

            <div className="mt-2 flex flex-col gap-3 border-t border-foreground/8 pt-5 sm:flex-row sm:items-center sm:gap-6">
              <span className="inline-flex items-center gap-2 text-[13px] text-foreground/55">
                <Globe2 className="size-4 text-neon-deep dark:text-neon" strokeWidth={2} aria-hidden="true" />
                Nigeria &amp; international clients
              </span>
              <span className="inline-flex items-center gap-2 text-[13px] text-foreground/55">
                <Calendar className="size-4 text-neon-deep dark:text-neon" strokeWidth={2} aria-hidden="true" />
                Business days: Monday&ndash;Friday
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {AUDIENCES.map((item) => (
              <span
                key={item}
                className="rounded-full border border-foreground/10 bg-foreground/3 px-4 py-2 text-[13px] font-medium tracking-tight text-foreground/70"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
