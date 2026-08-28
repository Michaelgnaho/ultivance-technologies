// MissionVision.tsx
import { Eye, Sparkles, Target } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import AnimatedContent from "@/components/ui/AnimatedContent";

type Card = {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  body: string;
};

const CARDS: readonly Card[] = [
  {
    icon: Target,
    label: "Mission",
    body: "To empower businesses and organizations with innovative, intelligent, and scalable technology solutions that accelerate digital transformation, improve efficiency, and create lasting value.",
  },
  {
    icon: Eye,
    label: "Vision",
    body: "To become Africa\u2019s leading AI-powered digital transformation company \u2014 recognized for building world-class software, intelligent automation systems, and digital products that shape the future of business.",
  },
  {
    icon: Sparkles,
    label: "Core Promise",
    body: "We don\u2019t just build technology \u2014 we build intelligent digital ecosystems that help organizations work smarter, grow faster, and thrive in a rapidly evolving digital world.",
  },
];

export function MissionVision(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CARDS.map(({ icon: Icon, label, body }, index) => (
            <AnimatedContent
              key={label}
              distance={40}
              direction="vertical"
              duration={0.75}
              ease="power3.out"
              delay={0.1 + index * 0.12}
              threshold={0.2}
            >
              <div className="border-foreground/8 bg-background flex h-full flex-col gap-4 rounded-3xl border p-6 shadow-sm sm:p-7">
                <span className="bg-neon/10 text-neon-deep dark:text-neon inline-flex size-10 items-center justify-center rounded-xl">
                  <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <h2 className="text-foreground font-serif text-lg font-bold tracking-tight">
                  {label}
                </h2>
                <p className="text-foreground/60 text-[14.5px] leading-[1.55] tracking-tight">
                  {body}
                </p>
              </div>
            </AnimatedContent>
          ))}
        </div>

        <AnimatedContent
          distance={20}
          direction="vertical"
          duration={0.7}
          ease="power2.out"
          delay={0.1 + CARDS.length * 0.12 + 0.1}
          threshold={0.2}
        >
          <div className="border-foreground/12 mt-6 flex flex-col items-center gap-2 rounded-2xl border border-dashed px-6 py-8 text-center">
            <p className="text-foreground/40 font-mono text-[11px] font-medium tracking-[0.2em]">
              OUR MOTTO
            </p>
            <p className="text-foreground font-serif text-xl font-bold tracking-tight sm:text-2xl">
              &ldquo;Advancing Ideas into Intelligent Digital Solutions.&rdquo;
            </p>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
