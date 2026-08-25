import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { InstagramIcon, TikTokIcon } from "@/components/ui/social-icons";

type FooterLink = {
  label: string;
  href: string;
};

const COMPANY: readonly FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

const SERVICES: readonly FooterLink[] = [
  { label: "Website Development", href: "/services" },
  { label: "Mobile App Development", href: "/services" },
  { label: "AI Automation & Agents", href: "/services" },
  { label: "Custom Software", href: "/services" },
];

const LEGAL: readonly FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export function Footer(): ReactNode {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-foreground/8">
      <div className="mx-auto w-full max-w-275 px-6 py-10 sm:px-10 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              aria-label="Ultivance Technologies home"
              className="focus-ring flex w-fit items-center gap-2"
            >
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
            </Link>

            <p className="max-w-[30ch] text-[13px] leading-[1.5] tracking-tight text-foreground/45">
              AI-powered digital transformation for businesses, schools,
              healthcare providers, NGOs, and government agencies.
            </p>

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
          </div>

          <nav
            aria-label="Company"
            className="flex flex-col gap-2.5"
          >
            <p className="font-mono text-[11px] font-medium tracking-[0.15em] text-foreground/35">
              COMPANY
            </p>
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
            className="hidden flex-col gap-2.5 lg:flex"
          >
            <p className="font-mono text-[11px] font-medium tracking-[0.15em] text-foreground/35">
              SERVICES
            </p>
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

          <div className="flex flex-col gap-2.5">
            <p className="font-mono text-[11px] font-medium tracking-[0.15em] text-foreground/35">
              CONTACT
            </p>
            <p className="text-[13px] tracking-tight text-foreground/55">
              +234 814 504 6894
            </p>
            <p className="text-[13px] tracking-tight text-foreground/55">
              ultivancetechnologies@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-foreground/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] tracking-tight text-foreground/40">
            © {year} Ultivance Technologies. CAC-registered.
          </p>

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
        </div>
      </div>
    </footer>
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
