import { GraduationCap } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import type { Dictionary } from "@/lib/i18n/types";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {dict.about.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {dict.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-4 py-2 text-sm font-semibold text-accent">
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
            {dict.about.highlight}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
