import { WorksGrid } from "@/components/works/works-grid";
import { WorksHero } from "@/components/works/works-hero";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Our Work — Websites, Apps & AI Automation Projects",
  description:
    "A selection of websites, mobile apps, and AI automation platforms Ultivance Technologies has designed and built across healthcare, education, NGOs, consulting, and more.",
  path: "/works",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Works", path: "/works" },
]);

export default function WorksPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <WorksHero />
      <WorksGrid />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
