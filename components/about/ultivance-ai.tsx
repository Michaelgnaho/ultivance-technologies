// UltivanceAiSection.tsx
import {
  Bot,
  Calendar1,
  MessagesSquare,
  ReceiptText,
  Users,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import AnimatedContent from "@/components/ui/AnimatedContent";

const CAPABILITIES: readonly {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
}[] = [
  { icon: MessagesSquare, label: "Answers questions & handles FAQs" },
  { icon: Users, label: "Qualifies leads, 24/7" },
  { icon: Calendar1, label: "Books discovery consultations" },
  { icon: ReceiptText, label: "Guides pricing & project scope" },
];

export function UltivanceAiSection(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">
          <FadeIn className="flex flex-col gap-4">
            <AnimatedContent
              distance={16}
              direction="vertical"
              duration={0.6}
              ease="power2.out"
              delay={0.1}
              threshold={0.2}
            >
              <p className="text-neon-deep dark:text-neon font-mono text-xs font-medium tracking-[0.25em]">
                OUR OWN TECHNOLOGY, AT WORK
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
                Meet Ultivance AI
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
                Every visitor is greeted by our own branded conversational
                assistant, built end-to-end on our automation stack. It acts as
                a 24/7 sales representative, support agent, appointment setter,
                and project consultant &mdash; understanding a visitor&rsquo;s
                goals before recommending a solution, never inventing pricing,
                policies, or availability.
              </p>
            </AnimatedContent>

            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CAPABILITIES.map(({ icon: Icon, label }, index) => (
                <AnimatedContent
                  key={label}
                  distance={14}
                  direction="vertical"
                  duration={0.55}
                  ease="power2.out"
                  delay={0.42 + index * 0.06}
                  threshold={0.2}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon
                      className="text-neon-deep dark:text-neon size-4 shrink-0"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span className="text-foreground/70 text-[13.5px] tracking-tight">
                      {label}
                    </span>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </FadeIn>

          <AnimatedContent
            distance={40}
            direction="horizontal"
            duration={0.9}
            ease="power3.out"
            delay={0.25}
            scale={0.92}
            threshold={0.2}
          >
            <ScaleUnblur className="flex justify-center md:justify-end">
              <div className="border-foreground/8 relative flex aspect-square w-full max-w-80 items-center justify-center overflow-hidden rounded-4xl border bg-black p-1.5 shadow-sm">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.6rem]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 50% 45%, rgba(57,255,20,0.35), transparent 65%)",
                    }}
                  />
                  <Bot
                    className="text-neon relative size-20 drop-shadow-[0_0_40px_rgba(57,255,20,0.45)]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </ScaleUnblur>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
