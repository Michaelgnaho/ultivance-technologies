import { ContactCard } from "@/components/contact/contact-card";
import { WorksGrid } from "@/components/works/works-grid";
import { WorksHero } from "@/components/works/works-hero";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Works",
  description:
    "A selection of websites, apps, and platforms Ultivance Technologies has designed and built across healthcare, NGOs, consulting, and more.",
  path: "/works",
});

export default function WorksPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <WorksHero />
      <WorksGrid />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
