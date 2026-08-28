// FullServiceList.tsx
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";
import AnimatedContent from "@/components/ui/AnimatedContent";

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
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={0.8}
          ease="power3.out"
          threshold={0.15}
        >
          <div className="border-foreground/8 bg-background rounded-4xl border p-6 sm:p-10">
            <AnimatedContent
              distance={16}
              direction="vertical"
              duration={0.6}
              ease="power2.out"
              delay={0.1}
              threshold={0.15}
            >
              <p className="text-neon-deep dark:text-neon font-mono text-xs font-medium tracking-[0.25em]">
                THE FULL LIST
              </p>
            </AnimatedContent>

            <AnimatedContent
              distance={22}
              direction="vertical"
              duration={0.7}
              ease="power3.out"
              delay={0.2}
              threshold={0.15}
            >
              <h2 className="text-foreground mt-2 max-w-[36ch] font-serif text-2xl font-bold tracking-tight sm:text-3xl">
                Our complete service portfolio
              </h2>
            </AnimatedContent>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {ALL_SERVICES.map((item, index) => (
                <AnimatedContent
                  key={item}
                  distance={10}
                  direction="vertical"
                  duration={0.45}
                  ease="power2.out"
                  delay={0.3 + Math.min(index, 20) * 0.025}
                  threshold={0.1}
                  scale={0.96}
                >
                  <span className="border-foreground/10 bg-foreground/3 text-foreground/70 rounded-full border px-4 py-2 text-[13px] font-medium tracking-tight">
                    {item}
                  </span>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
