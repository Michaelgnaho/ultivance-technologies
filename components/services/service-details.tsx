// ServiceDetails.tsx
import {
  ArrowUpRight,
  Bot,
  Cloud,
  Database,
  Fingerprint,
  PenTool,
  ServerCog,
  Smartphone,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import type { ComponentType, ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";
import AnimatedContent from "@/components/ui/AnimatedContent";

type Service = {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  href: string;
};

const SERVICES: readonly Service[] = [
  {
    icon: ServerCog,
    title: "Website Development",
    description: "Business, e-commerce, and CMS-driven sites built to convert.",
    href: "#pricing",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Android, iOS, and cross-platform apps for your users.",
    href: "#pricing",
  },
  {
    icon: Bot,
    title: "AI Automation & Agents",
    description:
      "Support, sales, and booking agents that work while you sleep.",
    href: "#pricing",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "CRM, HR, and ops workflows with the busywork removed.",
    href: "#pricing",
  },
  {
    icon: Database,
    title: "Custom Software",
    description: "Management systems and ERPs built around your roles.",
    href: "#pricing",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Interfaces that are clear, fast, and on-brand.",
    href: "#pricing",
  },
  {
    icon: Fingerprint,
    title: "Branding & Identity",
    description: "Logo systems, guidelines, and a look that scales.",
    href: "#pricing",
  },
  {
    icon: Cloud,
    title: "Cloud & API Integration",
    description: "Payments, data, and third-party services wired in cleanly.",
    href: "#pricing",
  },
  {
    icon: ArrowUpRight,
    title: "Digital Transformation",
    description: "Consulting to map your organization's path to digital.",
    href: "#pricing",
  },
] as const;

export function ServiceDetails(): ReactNode {
  return (
    <section id="service-details" className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="flex flex-col items-center gap-2 text-center">
          <p className="text-neon-deep dark:text-neon font-mono text-xs font-medium tracking-[0.25em]">
            Our SPECIALIZATION
          </p>
          <h2 className="text-foreground max-w-[26ch] font-serif text-2xl font-bold tracking-tight sm:text-3xl">
            Services We Provide
          </h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description, href }, index) => (
            <AnimatedContent
              key={title}
              distance={30}
              direction="vertical"
              duration={0.65}
              ease="power3.out"
              delay={0.1 + (index % 3) * 0.08 + Math.floor(index / 3) * 0.1}
              threshold={0.15}
            >
              <Link
                href={href}
                className="focus-ring group border-foreground/8 bg-background hover:border-neon-deep/40 dark:hover:border-neon/40 flex h-full flex-col gap-4 rounded-3xl border p-6 shadow-sm transition-colors duration-200"
              >
                <span className="border-neon-deep/25 bg-neon/10 text-neon-deep dark:border-neon/25 dark:text-neon inline-flex size-10 items-center justify-center rounded-xl border">
                  <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                </span>

                <h3 className="text-foreground font-serif text-lg font-bold tracking-tight">
                  {title}
                </h3>

                <p className="text-foreground/55 text-[14px] leading-[1.5] tracking-tight">
                  {description}
                </p>

                <span className="text-neon-deep dark:text-neon mt-auto inline-flex items-center gap-1 pt-2 text-[13px] font-medium tracking-tight">
                  Learn more
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
