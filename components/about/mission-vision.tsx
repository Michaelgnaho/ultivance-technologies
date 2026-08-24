import { Eye, Sparkles, Target } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

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
        <FadeIn className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CARDS.map(({ icon: Icon, label, body }) => (
            <div
              key={label}
              className="flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-6 shadow-sm sm:p-7"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-neon/10 text-neon-deep dark:text-neon">
                <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <h2 className="font-serif text-lg font-bold tracking-tight text-foreground">
                {label}
              </h2>
              <p className="text-[14.5px] leading-[1.55] tracking-tight text-foreground/60">
                {body}
              </p>
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={0.1} className="mt-6">
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-foreground/12 px-6 py-8 text-center">
            <p className="font-mono text-[11px] font-medium tracking-[0.2em] text-foreground/40">
              OUR MOTTO
            </p>
            <p className="font-serif text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              &ldquo;Advancing Ideas into Intelligent Digital Solutions.&rdquo;
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
