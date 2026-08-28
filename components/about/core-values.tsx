// CoreValues.tsx
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
import AnimatedContent from "@/components/ui/AnimatedContent";

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
          <p className="text-neon-deep dark:text-neon font-mono text-xs font-medium tracking-[0.25em]">
            WHAT WE STAND ON
          </p>
          <h2 className="text-foreground max-w-[32ch] font-serif text-2xl font-bold tracking-tight sm:text-3xl">
            Ten core values guide every project we take on.
          </h2>
        </FadeIn>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {VALUES.map(({ label, icon: Icon }, index) => (
            <AnimatedContent
              key={label}
              distance={24}
              direction="vertical"
              duration={0.6}
              ease="power2.out"
              delay={0.1 + (index % 5) * 0.06 + Math.floor(index / 5) * 0.1}
              threshold={0.15}
              scale={0.96}
            >
              <div className="border-foreground/8 bg-background hover:border-foreground/15 flex h-full flex-col items-start gap-3 rounded-2xl border p-5 transition-colors">
                <Icon
                  className="text-neon-deep dark:text-neon size-[18px]"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="text-foreground/80 text-[13.5px] font-medium tracking-tight">
                  {label}
                </span>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
