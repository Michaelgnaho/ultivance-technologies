"use client";

import { ArrowRight } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroCtas(): ReactNode {
  return (
    <LayoutGroup>
      <motion.div
        layout
        transition={{ layout: { duration: 0.55, ease: EASE } }}
        className="mt-2 flex flex-wrap items-center gap-3"
      >
        <motion.div layout transition={{ layout: { duration: 0.55, ease: EASE } }}>
          <Link
            href="#contact"
            className="focus-ring group inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-neon px-5 text-sm font-semibold text-black transition-all duration-200 hover:bg-core-mint hover:shadow-[0_0_28px_-2px_rgba(57,255,20,0.55)]"
          >
            Book a Consultation
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        <motion.div layout transition={{ layout: { duration: 0.55, ease: EASE } }}>
          <Link
            href="#services"
            className="border border-foreground/5 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-2xl transition-colors hover:bg-foreground/4"
          >
            View Our Services
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
}
