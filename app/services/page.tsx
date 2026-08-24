import { ContactCard } from "@/components/contact/contact-card";
import { FullServiceList } from "@/components/services/full-service-list";
import { Pricing } from "@/components/services/pricing";
import { ServiceDetails } from "@/components/services/service-details";
import { ServicesHero } from "@/components/services/services-hero";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Website development, mobile apps, custom software, and AI automation from Ultivance Technologies \u2014 with starting price guidance for every service.",
  path: "/services",
});

export default function ServicesPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <ServicesHero />
      <ServiceDetails />
      <FullServiceList />
      <Pricing />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
