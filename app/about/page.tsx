import { AboutHero } from "@/components/about/about-hero";
import { CoreValues } from "@/components/about/core-values";
import { MissionVision } from "@/components/about/mission-vision";
import { UltivanceAiSection } from "@/components/about/ultivance-ai";
import { WhoWeServe } from "@/components/about/who-we-serve";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Ultivance Technologies is a CAC-registered, AI-powered digital transformation company helping businesses, schools, healthcare providers, NGOs, and government agencies across Africa build smarter, faster, and more resilient technology.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <WhoWeServe />
      <UltivanceAiSection />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
