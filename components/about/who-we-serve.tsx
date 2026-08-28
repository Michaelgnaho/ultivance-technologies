// WhoWeServe.tsx
import { Calendar, Globe2 } from "lucide-react";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";
import AnimatedContent from "@/components/ui/AnimatedContent";

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
        <AnimatedContent
          distance={50}
          direction="vertical"
          duration={0.85}
          ease="power3.out"
          threshold={0.2}
        >
          <FadeIn className="border-foreground/8 bg-background grid grid-cols-1 gap-8 rounded-4xl border p-6 sm:p-10 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-10">
            <div className="flex flex-col gap-4">
              <AnimatedContent
                distance={16}
                direction="vertical"
                duration={0.6}
                ease="power2.out"
                delay={0.1}
                threshold={0.2}
              >
                <p className="text-neon-deep dark:text-neon font-mono text-xs font-medium tracking-[0.25em]">
                  MARKET FOCUS
                </p>
              </AnimatedContent>

              <AnimatedContent
                distance={24}
                direction="vertical"
                duration={0.75}
                ease="power3.out"
                delay={0.2}
                threshold={0.2}
              >
                <h2 className="text-foreground font-serif text-2xl font-bold tracking-tight sm:text-3xl">
                  Who we serve
                </h2>
              </AnimatedContent>

              <AnimatedContent
                distance={20}
                direction="vertical"
                duration={0.7}
                ease="power3.out"
                delay={0.3}
                threshold={0.2}
              >
                <p className="text-foreground/60 max-w-[46ch] text-[15px] leading-[1.55] tracking-tight">
                  We operate primarily online, serving clients across Nigeria
                  and internationally, with a strategic focus on accelerating
                  digital transformation across Africa through technology
                  that&rsquo;s affordable, practical, and built to scale.
                </p>
              </AnimatedContent>

              <AnimatedContent
                distance={16}
                direction="vertical"
                duration={0.6}
                ease="power2.out"
                delay={0.42}
                threshold={0.2}
              >
                <div className="border-foreground/8 mt-2 flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:gap-6">
                  <span className="text-foreground/55 inline-flex items-center gap-2 text-[13px]">
                    <Globe2
                      className="text-neon-deep dark:text-neon size-4"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    Nigeria &amp; international clients
                  </span>
                  <span className="text-foreground/55 inline-flex items-center gap-2 text-[13px]">
                    <Calendar
                      className="text-neon-deep dark:text-neon size-4"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    Business days: Monday&ndash;Friday
                  </span>
                </div>
              </AnimatedContent>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {AUDIENCES.map((item, index) => (
                <AnimatedContent
                  key={item}
                  distance={12}
                  direction="vertical"
                  duration={0.5}
                  ease="power2.out"
                  delay={0.25 + index * 0.05}
                  threshold={0.15}
                  scale={0.95}
                >
                  <span className="border-foreground/10 bg-foreground/3 text-foreground/70 rounded-full border px-4 py-2 text-[13px] font-medium tracking-tight">
                    {item}
                  </span>
                </AnimatedContent>
              ))}
            </div>
          </FadeIn>
        </AnimatedContent>
      </div>
    </section>
  );
}
