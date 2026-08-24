import { ContactCard } from "@/components/contact/contact-card";
import { WorksHero } from "@/components/works/works-hero";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Works",
  description:
    "Case studies from Ultivance Technologies\u2019 recent websites, mobile apps, and AI automation projects \u2014 coming soon.",
  path: "/works",
});

export default function WorksPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <WorksHero />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
