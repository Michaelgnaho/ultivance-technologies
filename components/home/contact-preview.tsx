// ContactPreview.tsx
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";
import AnimatedContent from "@/components/ui/AnimatedContent";

export function ContactPreview(): ReactNode {
  return (
    <section id="contact" className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <AnimatedContent
          distance={50}
          direction="vertical"
          duration={0.85}
          ease="power3.out"
          threshold={0.2}
        >
          <FadeIn className="border-foreground/8 bg-background flex flex-col items-start gap-6 rounded-4xl border p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="flex max-w-[46ch] flex-col gap-3">
              <AnimatedContent
                distance={16}
                direction="vertical"
                duration={0.6}
                ease="power2.out"
                delay={0.1}
                threshold={0.2}
              >
                <p className="text-neon-deep dark:text-neon font-mono text-xs font-medium tracking-[0.25em]">
                  GET IN TOUCH
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
                <h2 className="text-foreground font-serif text-2xl leading-[1.15] font-extrabold tracking-tight sm:text-3xl">
                  Let&rsquo;s build something intelligent, together.
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
                <p className="text-foreground/60 text-[15.5px] leading-[1.55] tracking-tight">
                  Book a free discovery consultation and we&rsquo;ll help you
                  figure out the right solution for your business.
                </p>
              </AnimatedContent>
            </div>

            <AnimatedContent
              distance={30}
              direction="horizontal"
              reverse
              duration={0.7}
              ease="power3.out"
              delay={0.42}
              threshold={0.2}
            >
              <div className="flex shrink-0 flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="focus-ring group bg-neon hover:bg-core-mint inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl px-5 text-sm font-semibold text-black transition-all duration-200 hover:shadow-[0_0_28px_-2px_rgba(57,255,20,0.55)]"
                >
                  Get in Touch
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="mailto:ultivancetechnologies@gmail.com"
                  className="focus-ring group border-foreground/5 bg-background text-foreground hover:bg-foreground/4 inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl border px-5 text-sm font-medium shadow-sm transition-colors"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email Us
                </Link>
              </div>
            </AnimatedContent>
          </FadeIn>
        </AnimatedContent>
      </div>
    </section>
  );
}
