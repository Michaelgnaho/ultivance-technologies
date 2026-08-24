import { Bot, Calendar1, MessagesSquare, ReceiptText, Users } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";

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
            <p className="font-mono text-xs font-medium tracking-[0.25em] text-neon-deep dark:text-neon">
              OUR OWN TECHNOLOGY, AT WORK
            </p>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Meet Ultivance AI
            </h2>
            <p className="max-w-[46ch] text-[15px] leading-[1.55] tracking-tight text-foreground/60">
              Every visitor is greeted by our own branded conversational
              assistant, built end-to-end on our automation stack. It acts
              as a 24/7 sales representative, support agent, appointment
              setter, and project consultant &mdash; understanding a
              visitor&rsquo;s goals before recommending a solution, never
              inventing pricing, policies, or availability.
            </p>
            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CAPABILITIES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon
                    className="size-4 shrink-0 text-neon-deep dark:text-neon"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span className="text-[13.5px] tracking-tight text-foreground/70">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <ScaleUnblur className="flex justify-center md:justify-end">
            <div className="relative flex aspect-square w-full max-w-80 items-center justify-center overflow-hidden rounded-4xl border border-foreground/8 bg-black p-1.5 shadow-sm">
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
                  className="relative size-20 text-neon drop-shadow-[0_0_40px_rgba(57,255,20,0.45)]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
