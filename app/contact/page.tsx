// app/contact/page.tsx
import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import { ContactCard } from "@/components/contact/contact-card";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch — reach out for work, collaborations, or a quick hello.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-32 md:px-10"
    >
      <header className="flex flex-col gap-4">
        <p className="text-muted-foreground font-mono text-sm tracking-wide uppercase">
          Contact
        </p>
        <h1 className="text-foreground font-serif text-4xl leading-tight md:text-5xl">
          Let&apos;s build something together
        </h1>
        <p className="text-muted-foreground max-w-xl text-base md:text-lg">
          Open to new projects, collaborations, and conversations. Reach out
          below and I&apos;ll get back to you shortly.
        </p>
      </header>
      <ContactCard />
    </main>
  );
}
