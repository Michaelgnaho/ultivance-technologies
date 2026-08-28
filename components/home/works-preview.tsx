import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { TextLoop } from "@/components/ui/text-loop";

import AnimatedContent from "@/components/ui/AnimatedContent";
import { WORKS } from "@/components/works/works-data";

const FEATURED_SLUGS: readonly string[] = [
  "lasu-debate-society",
  "gods-favourite-hospital",
  "michael-gnaho-portfolio",
];

const FEATURED_WORKS = FEATURED_SLUGS.map((slug) =>
  WORKS.find((work) => work.slug === slug)
).filter((work): work is (typeof WORKS)[number] => Boolean(work));

export function WorksPreview(): ReactNode {
  return (
    <section id="works" className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <AnimatedContent
          direction="vertical"
          distance={40}
          duration={0.9}
          threshold={0.1}
          className="flex flex-col items-center gap-2 text-center"
        >
          <p className="text-neon-deep dark:text-neon font-mono text-xs font-medium tracking-[0.25em]">
            SELECTED WORK
          </p>
          <h2 className="text-foreground max-w-[28ch] font-serif text-2xl font-bold tracking-tight sm:text-3xl">
            Sites and products we&rsquo;ve shipped
          </h2>
        </AnimatedContent>

        <AnimatedContent
          direction="vertical"
          distance={40}
          duration={0.9}
          threshold={0.1}
          delay={0}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {FEATURED_WORKS.map(({ slug, name, category, image, href }) => (
            <Link
              key={slug}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card focus-ring group border-foreground/8 bg-background flex flex-col overflow-hidden rounded-3xl border"
            >
              <div className="project-card__image bg-muted relative aspect-[16/10] w-full">
                <div className="project-card__image-inner">
                  <Image
                    src={image}
                    alt={`${name} website preview`}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 p-5">
                <span className="text-neon-deep dark:text-neon font-mono text-[10px] font-medium tracking-[0.2em]">
                  {category.toUpperCase()}
                </span>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-foreground font-serif text-[15px] font-bold tracking-tight">
                    {name}
                  </h3>
                  <ArrowUpRight
                    className="text-foreground/40 group-hover:text-foreground/70 size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </AnimatedContent>

        <AnimatedContent
          direction="vertical"
          distance={40}
          duration={0.9}
          threshold={0.15}
          delay={0.14}
          className="mt-8 flex justify-center"
        >
          <Link
            href="/works"
            className="focus-ring group border-foreground/5 bg-background text-foreground hover:bg-foreground/4 inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl border px-5 text-sm font-medium shadow-sm transition-colors"
          >
            See all work
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </AnimatedContent>
      </div>
      <div aria-label="What we build" className="relative w-full p-0">
        <TextLoop
          text="Websites ✦ AI Automation ✦ Apps"
          shape="line"
          speed={80}
          direction="forward"
          curviness={62}
          separator="✦"
          fontSize={20}
          fontWeight={700}
          letterSpacing={1}
          uppercase
          color="#000000"
          ribbon
          ribbonColor="#39ff14"
          ribbonWidth={42}
          pauseOnHover
        />
      </div>
    </section>
  );
}
