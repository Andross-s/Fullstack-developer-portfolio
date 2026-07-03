import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import type { Dictionary } from "@/lib/i18n/types";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 15%, var(--accent-soft) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            {dict.hero.greeting}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {dict.hero.role}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {dict.hero.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {dict.hero.ctaProjects}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {dict.hero.ctaContact}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mx-auto w-56 sm:w-72 md:w-full">
          <div className="relative aspect-square w-full overflow-hidden rounded-full border border-border">
            <Image
              src="/images/avatar-placeholder.svg"
              alt={dict.hero.avatarAlt}
              fill
              priority
              sizes="(min-width: 768px) 320px, 224px"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
