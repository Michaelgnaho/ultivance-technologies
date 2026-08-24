import { Bot, Clock, Database, ServerCog, Smartphone, Workflow } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

type Category = {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  examples: readonly string[];
  turnaround?: string;
};

const CATEGORIES: readonly Category[] = [
  {
    icon: ServerCog,
    title: "Website Development",
    description:
      "Company, school, church, NGO, and portfolio sites, hotel and hospital websites, e-commerce builds, and landing pages — with payments, booking, blog, or CMS wired in where you need it.",
    examples: ["Business sites", "E-commerce", "Booking systems", "CMS & blogs"],
    turnaround: "Typical turnaround: 2\u20136 weeks",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Android, iOS, and cross-platform apps with login, push notifications, admin dashboards, and payment integration built around your existing backend or a new one.",
    examples: ["Android & iOS", "Cross-platform", "Admin dashboards", "Push notifications"],
  },
  {
    icon: Bot,
    title: "AI Automation & AI Agents",
    description:
      "AI customer support, receptionists, appointment booking, sales assistants, email and WhatsApp bots, document generators, and lead qualification \u2014 built around your real workflow, not a generic template.",
    examples: ["AI customer support", "WhatsApp bots", "Lead qualification", "Document generation"],
  },
  {
    icon: Workflow,
    title: "Business & Workflow Automation",
    description:
      "CRM, HR, finance, customer support, and inventory automation that removes repetitive manual work from your team's day-to-day operations.",
    examples: ["CRM automation", "HR & finance", "Inventory automation", "Customer support"],
  },
  {
    icon: Database,
    title: "Custom Software",
    description:
      "School, hospital, and hotel management systems, POS, payroll, ERP, and inventory systems, built around your actual user roles and workflows.",
    examples: ["Management systems", "POS & payroll", "ERP", "Multi-role access"],
  },
];

export function ServiceDetails(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="flex flex-col gap-2">
          <p className="font-mono text-xs font-medium tracking-[0.25em] text-neon-deep dark:text-neon">
            CORE OFFERINGS
          </p>
          <h2 className="max-w-[32ch] font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Five ways we help you go digital
          </h2>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {CATEGORIES.map(({ icon: Icon, title, description, examples, turnaround }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-6 shadow-sm sm:p-7"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-neon/10 text-neon-deep dark:text-neon">
                <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="font-serif text-lg font-bold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="text-[14.5px] leading-[1.55] tracking-tight text-foreground/60">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 border-t border-foreground/8 pt-4">
                {examples.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-foreground/10 bg-foreground/3 px-3 py-1 text-[12px] font-medium tracking-tight text-foreground/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {turnaround ? (
                <p className="inline-flex items-center gap-1.5 text-[12.5px] font-medium tracking-tight text-foreground/45">
                  <Clock className="size-3.5" strokeWidth={2} aria-hidden="true" />
                  {turnaround}
                </p>
              ) : null}
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
