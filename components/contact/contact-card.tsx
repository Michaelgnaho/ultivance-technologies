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

const SERVICES = [
  { label: "Website Development", href: "#services" },
  { label: "Mobile App Development", href: "#services" },
  { label: "AI Automation & Agents", href: "#services" },
  { label: "Custom Software", href: "#services" },
];

const COMPANY = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export function ContactCard(): ReactNode {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="mx-auto my-12 w-full max-w-275 px-6 sm:my-20 sm:px-10"
    >
      <FadeIn>
        <div className="relative w-full overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
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
                <h2 className="font-serif text-[2.25rem] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-[2.75rem] lg:text-[3.25rem]">
                  Let&rsquo;s build something
                  <br />
                  intelligent, together.
                </h2>
                <p className="mb-6 max-w-[36ch] text-[18px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px]">
                  Book a free discovery consultation and we&rsquo;ll help
                  you figure out the right solution for your business.
                </p>
                <ContactCardCtas />
              </div>

              <div className="flex flex-col items-center justify-center gap-6 rounded-[1.1rem] border border-foreground/8 bg-background p-6 sm:p-8">
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
                  <p className="text-[13px] tracking-tight text-foreground/70">
                    +234 814 504 6894
                  </p>
                  <p className="text-[12px] tracking-tight text-foreground/45">
                    ultivancetechnologies@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Slim link bar beneath the card — brief, matches the template's restrained type scale */}
      <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo/ultivance-icon-badge.png"
            alt=""
            width={22}
            height={22}
            className="size-[22px]"
          />
          <span className="font-serif text-[13px] font-bold tracking-tight text-foreground/70">
            ULTIVANCE
          </span>
        </div>

        <nav
          aria-label="Company"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {COMPANY.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] text-foreground/55 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <nav
          aria-label="Services"
          className="hidden flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:flex"
        >
          {SERVICES.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] text-foreground/55 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-2 sm:items-end">
          <nav aria-label="Legal" className="flex items-center gap-4">
            {LEGAL.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[12px] text-foreground/40 transition-colors hover:text-foreground/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-[12px] tracking-tight text-foreground/40">
            © {year} Ultivance Technologies. CAC-registered.
          </p>
        </div>
      </div>
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
  lucideIcon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
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
      className="border-foreground/8 hover:border-foreground/15 focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-background text-foreground/70 transition-colors hover:text-foreground"
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
