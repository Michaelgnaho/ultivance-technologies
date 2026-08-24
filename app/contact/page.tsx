import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Book a free discovery consultation with Ultivance Technologies, or reach us directly by email, phone, or WhatsApp.",
  path: "/contact",
});

export default function ContactPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <section className="relative w-full">
        <div className="mx-auto w-full max-w-275 px-6 pt-40 pb-4 sm:px-10 sm:pt-52">
          <FadeIn className="flex max-w-[62ch] flex-col gap-4">
            <p className="font-mono text-xs font-medium tracking-[0.25em] text-neon-deep dark:text-neon">
              CONTACT
            </p>
            <h1 className="text-[2.5rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-[3rem] lg:text-[3.25rem]">
              Let&rsquo;s talk about{" "}
              <span className="text-neon-deep dark:text-neon">
                your project
              </span>
              .
            </h1>
            <p className="max-w-[52ch] text-[18px] leading-[1.5] tracking-tight text-foreground/65">
              Book a free discovery consultation and we&rsquo;ll help you
              figure out the right solution for your business \u2014 or
              reach us directly below. We reply within one business day,
              Monday to Friday.
            </p>
          </FadeIn>
        </div>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
