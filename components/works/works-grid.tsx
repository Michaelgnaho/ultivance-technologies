import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";
import { WORKS } from "@/components/works/works-data";

export function WorksGrid(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="flex flex-col gap-2">
          <p className="text-neon-deep dark:text-neon font-mono text-xs font-medium tracking-[0.25em]">
            SELECTED WORK
          </p>
          <h2 className="text-foreground max-w-[30ch] font-serif text-2xl font-bold tracking-tight sm:text-3xl">
            Sites and products we&rsquo;ve shipped
          </h2>
        </FadeIn>

        <FadeIn
          delay={0.08}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {WORKS.map(
            ({ slug, name, category, description, tags, image, href }) => (
              <Link
                key={slug}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card focus-ring group border-foreground/8 bg-background flex flex-col overflow-hidden rounded-3xl border"
              >
                {/* Image slot \u2014 swap `image` in works-data.ts for a dedicated case-study cover any time */}
                <div className="project-card__image bg-muted relative aspect-[16/9] w-full">
                  <div className="project-card__image-inner">
                    <Image
                      src={image}
                      alt={`${name} website preview`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-neon-deep dark:text-neon font-mono text-[11px] font-medium tracking-[0.2em]">
                      {category.toUpperCase()}
                    </span>
                    <ArrowUpRight
                      className="text-foreground/40 group-hover:text-foreground/70 size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-foreground font-serif text-lg font-bold tracking-tight">
                    {name}
                  </h3>

                  <p className="text-foreground/55 text-[14px] leading-[1.5] tracking-tight">
                    {description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-3">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-foreground/10 bg-foreground/3 text-foreground/60 rounded-full border px-3 py-1 text-[12px] font-medium tracking-tight"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )
          )}
        </FadeIn>
      </div>
    </section>
  );
}
