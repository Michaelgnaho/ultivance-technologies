import { AboutPreview } from "@/components/home/about-preview";
import { CapabilitiesMarquee } from "@/components/home/capabilities-marquee";
import { ServicesPreview } from "@/components/home/services-preview";
import { WorksPreview } from "@/components/home/works-preview";
import { ContactPreview } from "@/components/home/contact-preview";
import { Hero } from "@/components/hero/hero";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: `Welcome to ${siteConfig.name}. ${siteConfig.description}`,
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <Hero />
      <CapabilitiesMarquee />
      <AboutPreview />
      <ServicesPreview />
      <WorksPreview />
      <ContactPreview />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
