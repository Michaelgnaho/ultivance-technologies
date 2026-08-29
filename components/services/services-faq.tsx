import type { ReactNode } from "react";

import { SERVICES_FAQ } from "@/lib/json-ld";
import { FadeIn } from "@/components/ui/motion-primitives";
import AnimatedContent from "@/components/ui/AnimatedContent";

export function ServicesFaq(): ReactNode {
  return (
    <section id="faq" className="relative w-full scroll-mt-24">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="flex flex-col items-center gap-2 text-center">
          <p className="text-neon-deep dark:text-neon font-mono text-xs font-medium tracking-[0.25em]">
            FAQ
          </p>
          <h2 className="text-foreground max-w-[30ch] font-serif text-2xl font-bold tracking-tight sm:text-3xl">
            Common questions
          </h2>
        </FadeIn>

        <div className="mx-auto mt-10 flex max-w-[68ch] flex-col divide-y divide-foreground/8 rounded-3xl border border-foreground/8">
          {SERVICES_FAQ.map((faq, index) => (
            <AnimatedContent
              key={faq.question}
              distance={16}
              direction="vertical"
              duration={0.55}
              ease="power2.out"
              delay={0.1 + index * 0.05}
              threshold={0.1}
            >
              <div className="px-6 py-5 sm:px-8">
                <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
                  {faq.question}
                </h3>
                <p className="text-foreground/60 mt-2 text-[14px] leading-[1.6] tracking-tight">
                  {faq.answer}
                </p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
