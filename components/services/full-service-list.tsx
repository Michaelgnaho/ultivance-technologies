import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

const ALL_SERVICES: readonly string[] = [
  "Artificial Intelligence Solutions",
  "AI Automation",
  "Workflow Automation",
  "Business Process Automation",
  "AI Agents",
  "Chatbots",
  "Custom Software Development",
  "Website Development",
  "Mobile App Development",
  "SaaS Development",
  "CRM Systems",
  "ERP Systems",
  "E-commerce Solutions",
  "School Management Systems",
  "Hospital Management Systems",
  "Inventory Systems",
  "Digital Transformation Consulting",
  "Cloud Solutions",
  "API Development & Integration",
  "UI/UX Design",
  "Branding",
  "Product Strategy & MVP Development",
  "Startup Consulting",
  "Digital Marketing & SEO",
  "Social Media Automation",
  "Data Analytics & Business Intelligence",
  "Cybersecurity Consulting",
  "Technical Documentation",
  "Software Maintenance",
];

export function FullServiceList(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="rounded-4xl border border-foreground/8 bg-background p-6 sm:p-10">
          <p className="font-mono text-xs font-medium tracking-[0.25em] text-neon-deep dark:text-neon">
            THE FULL LIST
          </p>
          <h2 className="mt-2 max-w-[36ch] font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Our complete service portfolio
          </h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {ALL_SERVICES.map((item) => (
              <span
                key={item}
                className="rounded-full border border-foreground/10 bg-foreground/3 px-4 py-2 text-[13px] font-medium tracking-tight text-foreground/70"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
