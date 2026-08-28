import {
  ArrowRight,
  Bot,
  Fingerprint,
  ServerCog,
  Smartphone,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import type { ComponentType, ReactNode } from "react";

import AnimatedContent from "@/components/ui/AnimatedContent";

type ServiceChip = {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
};

const SERVICE_CHIPS: readonly ServiceChip[] = [
  { icon: ServerCog, label: "Website Development" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Bot, label: "AI Automation & Agents" },
  { icon: Workflow, label: "Workflow Automation" },
  { icon: Fingerprint, label: "Branding & Identity" },
];

export function ServicesPreview(): ReactNode {
  return (
    <section id="services" className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <AnimatedContent
          direction="vertical"
          distance={40}
          duration={0.9}
          threshold={0.1}
          className="flex flex-col items-center gap-2 text-center"
        >
          <p className="text-neon-deep dark:text-neon font-mono text-xs font-medium tracking-[0.25em]">
            WHAT WE DO
          </p>
          <h2 className="text-foreground max-w-[28ch] font-serif text-2xl font-bold tracking-tight sm:text-3xl">
            Services built to move your business forward.
          </h2>
        </AnimatedContent>

        <AnimatedContent
          direction="vertical"
          distance={40}
          duration={0.9}
          threshold={0.1}
          delay={0}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {SERVICE_CHIPS.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="border-foreground/8 bg-foreground/3 text-foreground/70 inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-medium tracking-tight"
            >
              <Icon
                className="text-neon-deep dark:text-neon size-4"
                strokeWidth={2}
                aria-hidden="true"
              />
              {label}
            </span>
          ))}
        </AnimatedContent>

        <AnimatedContent
          direction="vertical"
          distance={40}
          duration={0.9}
          threshold={0.1}
          delay={0}
          className="mt-8 flex justify-center"
        >
          <Link
            href="/services"
            className="focus-ring group border-foreground/5 bg-background text-foreground hover:bg-foreground/4 inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl border px-5 text-sm font-medium shadow-sm transition-colors"
          >
            See all services
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </AnimatedContent>
      </div>
    </section>
  );
}
