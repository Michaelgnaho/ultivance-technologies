// Pricing.tsx
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";
import AnimatedContent from "@/components/ui/AnimatedContent";

const PRICING: readonly { service: string; price: string }[] = [
  { service: "Basic Website", price: "From \u20a6150,000" },
  { service: "Business Website", price: "From \u20a6300,000" },
  { service: "E-commerce Website", price: "From \u20a6600,000" },
  { service: "Mobile App", price: "From \u20a6800,000" },
  { service: "AI Automation", price: "From \u20a6300,000" },
  { service: "AI Agent", price: "From \u20a6500,000" },
  { service: "Custom Software", price: "From \u20a61,500,000" },
  { service: "Enterprise Projects", price: "Custom quotation" },
];

export function Pricing(): ReactNode {
  return (
    <section id="pricing" className="relative w-full scroll-mt-24">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="flex flex-col gap-2">
          <AnimatedContent
            distance={16}
            direction="vertical"
            duration={0.6}
            ease="power2.out"
            delay={0.05}
            threshold={0.2}
          >
            <p className="text-neon-deep dark:text-neon font-mono text-xs font-medium tracking-[0.25em]">
              PRICING GUIDELINES
            </p>
          </AnimatedContent>

          <AnimatedContent
            distance={22}
            direction="vertical"
            duration={0.7}
            ease="power3.out"
            delay={0.15}
            threshold={0.2}
          >
            <h2 className="text-foreground max-w-[36ch] font-serif text-2xl font-bold tracking-tight sm:text-3xl">
              Starting estimates, scoped to your project
            </h2>
          </AnimatedContent>

          <AnimatedContent
            distance={18}
            direction="vertical"
            duration={0.65}
            ease="power3.out"
            delay={0.25}
            threshold={0.2}
          >
            <p className="text-foreground/60 max-w-[52ch] text-[15px] leading-[1.55] tracking-tight">
              These are starting figures, not fixed quotes \u2014 final pricing
              always depends on your full project requirements. We&rsquo;ll
              confirm scope, budget, and timeline with you before any quotation
              is generated.
            </p>
          </AnimatedContent>
        </FadeIn>

        <div className="border-foreground/8 bg-background mt-8 overflow-hidden rounded-3xl border">
          {PRICING.map(({ service, price }, index) => (
            <AnimatedContent
              key={service}
              distance={16}
              direction="vertical"
              duration={0.55}
              ease="power2.out"
              delay={0.35 + index * 0.06}
              threshold={0.1}
            >
              <div
                className={`flex items-center justify-between gap-4 px-6 py-4 sm:px-8 sm:py-5 ${
                  index !== PRICING.length - 1
                    ? "border-foreground/8 border-b"
                    : ""
                }`}
              >
                <span className="text-foreground/80 text-[14.5px] font-medium tracking-tight">
                  {service}
                </span>
                <span className="text-neon-deep dark:text-neon text-[14.5px] font-semibold tracking-tight">
                  {price}
                </span>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
