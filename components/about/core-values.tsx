import {
  Award,
  BadgeCheck,
  BookOpen,
  Heart,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Briefcase,
  Zap,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

type ValueIcon = ComponentType<{ className?: string; strokeWidth?: number }>;

const VALUES: readonly { label: string; icon: ValueIcon }[] = [
  { label: "Innovation", icon: Lightbulb },
  { label: "Integrity", icon: ShieldCheck },
  { label: "Professionalism", icon: Briefcase },
  { label: "Excellence", icon: Award },
  { label: "Creativity", icon: Sparkles },
  { label: "Reliability", icon: BadgeCheck },
  { label: "Customer Success", icon: Heart },
  { label: "Continuous Learning", icon: BookOpen },
  { label: "Efficiency", icon: Zap },
  { label: "Transformation", icon: Rocket },
];

export function CoreValues(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="flex flex-col gap-2">
          <p className="font-mono text-xs font-medium tracking-[0.25em] text-neon-deep dark:text-neon">
            WHAT WE STAND ON
          </p>
          <h2 className="max-w-[32ch] font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Ten core values guide every project we take on.
          </h2>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {VALUES.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-3 rounded-2xl border border-foreground/8 bg-background p-5 transition-colors hover:border-foreground/15"
              >
                <Icon
                  className="size-[18px] text-neon-deep dark:text-neon"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="text-[13.5px] font-medium tracking-tight text-foreground/80">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
