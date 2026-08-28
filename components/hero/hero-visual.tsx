// HeroVisual.tsx
"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { BriefcaseBusiness, TrendingUp } from "lucide-react";

import AnimatedContent from "@/components/ui/AnimatedContent";

/**
 * Hero's visual focal point — a professional portrait cutout over a soft
 * blob backdrop, in the brand's neon-green palette, with floating stat
 * cards for credibility. Swap PORTRAIT_SRC for a licensed PNG cutout
 * (transparent background) of a professional Black man in a suit.
 */
const PORTRAIT_SRC = "/hero-professional2.png";

export function HeroVisual(): ReactNode {
  return (
    <div className="relative aspect-square w-full md:max-w-105">
      {/* Decorative blobs */}
      <AnimatedContent
        distance={0}
        direction="vertical"
        duration={1}
        ease="power2.out"
        scale={0.8}
        threshold={0.2}
      >
        <div
          aria-hidden="true"
          className="bg-neon/25 absolute -top-6 right-4 size-28 rounded-full blur-2xl"
        />
        <div
          aria-hidden="true"
          className="bg-neon-deep/20 absolute bottom-10 -left-6 size-36 rounded-full blur-2xl"
        />
        <div
          aria-hidden="true"
          className="bg-foreground/5 absolute top-1/3 -right-8 size-20 rounded-full blur-xl"
        />
      </AnimatedContent>

      {/* Portrait */}
      <AnimatedContent
        distance={40}
        direction="vertical"
        duration={0.9}
        ease="power3.out"
        delay={0.15}
        threshold={0.2}
      >
        <div className="border-foreground/8 bg-foreground/3 relative aspect-square w-full overflow-hidden rounded-4xl border shadow-sm">
          <Image
            src={PORTRAIT_SRC}
            alt="Ultivance Technologies team member"
            fill
            sizes="(min-width: 768px) 420px, 100vw"
            className="object-cover object-top"
            priority
          />
        </div>
      </AnimatedContent>

      {/* Floating card — role badge */}
      <AnimatedContent
        distance={20}
        direction="horizontal"
        reverse
        duration={0.7}
        ease="power3.out"
        delay={0.5}
        threshold={0.2}
      >
        <div className="border-foreground/8 bg-background absolute top-6 -left-4 flex items-center gap-2 rounded-2xl border px-4 py-2.5 shadow-lg sm:-left-8">
          <span className="bg-neon/15 text-neon-deep dark:text-neon inline-flex size-8 items-center justify-center rounded-xl">
            <BriefcaseBusiness
              className="size-4"
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>
          <div className="flex flex-col">
            <span className="text-foreground text-[13px] font-semibold tracking-tight">
              50+ Projects
            </span>
            <span className="text-foreground/50 text-[11px] tracking-tight">
              Delivered
            </span>
          </div>
        </div>
      </AnimatedContent>

      {/* Floating card — stat */}
      <AnimatedContent
        distance={20}
        direction="horizontal"
        duration={0.7}
        ease="power3.out"
        delay={0.62}
        threshold={0.2}
      >
        <div className="border-foreground/8 bg-background absolute -right-4 bottom-8 flex items-center gap-2 rounded-2xl border px-4 py-2.5 shadow-lg sm:-right-8">
          <span className="bg-neon/15 text-neon-deep dark:text-neon inline-flex size-8 items-center justify-center rounded-xl">
            <TrendingUp className="size-4" strokeWidth={2} aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <span className="text-foreground text-[13px] font-semibold tracking-tight">
              98% Client
            </span>
            <span className="text-foreground/50 text-[11px] tracking-tight">
              Satisfaction
            </span>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
}
