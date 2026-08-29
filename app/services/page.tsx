import { FullServiceList } from "@/components/services/full-service-list";
import { Pricing } from "@/components/services/pricing";
import { ServiceDetails } from "@/components/services/service-details";
import { ServicesCtaMarquee } from "@/components/services/services-cta-marquee";
import { ServicesFaq } from "@/components/services/services-faq";
import { ServicesHero } from "@/components/services/services-hero";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, faqJsonLd, servicesJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Website Development, AI Automation & App Development Services",
  description:
    "Website development, AI automation, and app development from Ultivance Technologies in Lagos, Nigeria \u2014 plus mobile apps, custom software, and AI agents, with starting price guidance for every service.",
  path: "/services",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export default function ServicesPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ServicesHero />
      <ServiceDetails />
      <ServicesCtaMarquee />
      <FullServiceList />
      <Pricing />
      <ServicesFaq />

      <div className="h-12 sm:h-16" />
    </main>
  );
}
