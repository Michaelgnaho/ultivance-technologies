import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactCardCtas } from "./contact-card-ctas";
import { FadeIn } from "@/components/ui/motion-primitives";
import { ShaderFlow } from "../shaders/shader-flow";
import { InstagramIcon, TikTokIcon } from "@/components/ui/social-icons";

const CARD_FADE_MASK =
  "radial-gradient(ellipse 90% 110% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.15) 100%)";

const BRAND_LOW: [number, number, number] = [0.02, 0.05, 0.02];
const BRAND_HIGH: [number, number, number] = [0.22, 1.0, 0.078];

// const SERVICES = [
//   { label: "Website Development", href: "#services" },
//   { label: "Mobile App Development", href: "#services" },
//   { label: "AI Automation & Agents", href: "#services" },
//   { label: "Custom Software", href: "#services" },
// ];

// const COMPANY = [
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Contact", href: "#contact" },
// ];

// const LEGAL = [
//   { label: "Privacy Policy", href: "#" },
//   { label: "Terms of Service", href: "#" },
// ];

export function ContactCard(): ReactNode {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="mx-auto my-12 w-full max-w-275 px-6 sm:my-20 sm:px-10"
    >
      <FadeIn>
        <div className="border-foreground/8 bg-background relative w-full overflow-hidden rounded-4xl border p-1.5 shadow-sm">
          <div className="relative w-full overflow-hidden rounded-[1.6rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-30"
              style={{
                WebkitMaskImage: CARD_FADE_MASK,
                maskImage: CARD_FADE_MASK,
              }}
            >
              <ShaderFlow
                scale={3}
                brightness={2}
                colorLowA={BRAND_LOW}
                colorHighA={BRAND_HIGH}
              />
            </div>

            <div className="relative grid gap-8 p-6 sm:gap-10 sm:p-7 md:grid-cols-[1.2fr_1fr] md:items-stretch md:gap-6 md:p-6">
              <div className="flex flex-col gap-5">
                <h2 className="text-foreground font-serif text-[2.25rem] leading-[1.05] font-extrabold tracking-tight sm:text-[2.75rem] lg:text-[3.25rem]">
                  Let&rsquo;s build something
                  <br />
                  intelligent, together.
                </h2>
                <p className="text-foreground/65 mb-6 max-w-[36ch] text-[18px] leading-[1.4] tracking-tight sm:text-[22px]">
                  Book a free discovery consultation and we&rsquo;ll help you
                  figure out the right solution for your business.
                </p>
                <ContactCardCtas />
              </div>

              <div className="border-foreground/8 bg-background flex flex-col items-center justify-center gap-6 rounded-[1.1rem] border p-6 sm:p-8">
                <div className="flex items-center gap-3 opacity-75">
                  <SocialIcon
                    href="mailto:ultivancetechnologies@gmail.com"
                    label="Email"
                    lucideIcon={Mail}
                  />
                  <SocialIcon
                    href="https://instagram.com/ultivancetechnologies"
                    label="Instagram"
                    Icon={InstagramIcon}
                  />
                  <SocialIcon
                    href="https://tiktok.com/@ultivancetechnologies"
                    label="TikTok"
                    Icon={TikTokIcon}
                  />
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="text-foreground/70 text-[13px] tracking-tight">
                    +234 814 504 6894
                  </p>
                  <p className="text-foreground/45 text-[12px] tracking-tight">
                    ultivancetechnologies@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  lucideIcon: LucideIcon,
  Icon,
}: {
  href: string;
  label: string;
  lucideIcon?: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
  }>;
  Icon?: React.ComponentType<{ className?: string }>;
}): ReactNode {
  const isExternal = href.startsWith("http");
  const props = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Link
      href={href}
      aria-label={label}
      className="border-foreground/8 hover:border-foreground/15 focus-ring bg-background text-foreground/70 hover:text-foreground inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-colors"
      {...props}
    >
      {LucideIcon ? (
        <LucideIcon className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
      ) : Icon ? (
        <Icon className="h-4 w-4" aria-hidden="true" />
      ) : null}
    </Link>
  );
}
