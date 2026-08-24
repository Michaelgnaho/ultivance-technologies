import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

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
          <p className="font-mono text-xs font-medium tracking-[0.25em] text-neon-deep dark:text-neon">
            PRICING GUIDELINES
          </p>
          <h2 className="max-w-[36ch] font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Starting estimates, scoped to your project
          </h2>
          <p className="max-w-[52ch] text-[15px] leading-[1.55] tracking-tight text-foreground/60">
            These are starting figures, not fixed quotes \u2014 final pricing
            always depends on your full project requirements. We&rsquo;ll
            confirm scope, budget, and timeline with you before any
            quotation is generated.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-8">
          <div className="overflow-hidden rounded-3xl border border-foreground/8 bg-background">
            {PRICING.map(({ service, price }, index) => (
              <div
                key={service}
                className={`flex items-center justify-between gap-4 px-6 py-4 sm:px-8 sm:py-5 ${
                  index !== PRICING.length - 1 ? "border-b border-foreground/8" : ""
                }`}
              >
                <span className="text-[14.5px] font-medium tracking-tight text-foreground/80">
                  {service}
                </span>
                <span className="text-[14.5px] font-semibold tracking-tight text-neon-deep dark:text-neon">
                  {price}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
