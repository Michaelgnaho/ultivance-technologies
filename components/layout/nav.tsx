"use client";

import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

function useIsMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

function NavThemeToggle(): ReactNode {
  const mounted = useIsMounted();
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const next = isDark ? "light" : "dark";

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const supportsViewTransitions =
      typeof document !== "undefined" &&
      typeof document.startViewTransition === "function";

    if (!supportsViewTransitions || prefersReducedMotion) {
      setTheme(next);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy)
    );

    const root = document.documentElement;
    root.style.setProperty("--theme-cx", `${cx}px`);
    root.style.setProperty("--theme-cy", `${cy}px`);
    root.style.setProperty("--theme-r", `${radius}px`);
    root.dataset.themeAnim = "1";

    const transition = document.startViewTransition(() => {
      setTheme(next);
    });

    transition.finished.finally(() => {
      delete root.dataset.themeAnim;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted
          ? isDark
            ? "Switch to light theme"
            : "Switch to dark theme"
          : "Toggle theme"
      }
      aria-pressed={mounted ? isDark : undefined}
      className="focus-ring bg-background ring-foreground/8 relative inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full ring-1 transition-colors"
    >
      <span aria-hidden="true" className="relative h-4 w-4">
        <Sun
          className={`text-foreground absolute inset-0 h-4 w-4 transition-all duration-300 ${
            mounted && isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 -rotate-90 opacity-0"
          }`}
        />
        <Moon
          className={`text-foreground absolute inset-0 h-4 w-4 transition-all duration-300 ${
            mounted && !isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 rotate-90 opacity-0"
          }`}
        />
      </span>
    </button>
  );
}

export function Nav(): ReactNode {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-275 items-center justify-between gap-3">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Ultivance Technologies home"
          className="focus-ring flex shrink-0 items-center gap-2"
        >
          <Image
            src="/logo/ultivance-icon-badge.png"
            alt=""
            width={32}
            height={32}
            className="size-8"
            priority
          />
          <span className="text-foreground hidden font-serif text-[15px] font-bold tracking-tight sm:inline">
            ULTIVANCE
          </span>
        </Link>

        {/* Center pill nav — hidden below sm, replaced by hamburger */}
        <nav aria-label="Primary" className="hidden justify-center sm:flex">
          <div className="border-foreground/8 bg-background flex items-center gap-1 rounded-full border p-1.5 shadow-sm">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring text-foreground/60 hover:text-foreground relative inline-flex cursor-pointer items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <NavThemeToggle />
          </div>
        </nav>

        {/* Right side: CTA (always) + hamburger (mobile only) */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/contact"
            className="group focus-ring bg-neon hover:bg-core-mint inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:shadow-[0_0_24px_-2px_rgba(57,255,20,0.6)] sm:px-5"
          >
            <span className="hidden sm:inline">Book a Consultation</span>
            <span className="sm:hidden">Book</span>
            <ArrowUpRight
              className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.5}
            />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="focus-ring border-foreground/8 bg-background text-foreground inline-flex size-10 items-center justify-center rounded-full border sm:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`mx-auto mt-2 max-w-275 overflow-hidden transition-[max-height,opacity] duration-300 ease-out sm:hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-foreground/8 bg-background flex flex-col gap-1 rounded-2xl border p-3 shadow-sm">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="focus-ring text-foreground/70 hover:bg-foreground/5 hover:text-foreground rounded-xl px-4 py-3 text-base font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-foreground/50 text-sm">Theme</span>
            <NavThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
