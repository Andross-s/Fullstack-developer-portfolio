import { FadeIn } from "@/components/FadeIn";
import { SkillBadge } from "@/components/SkillBadge";
import { skills } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n/types";

export function Skills({ dict }: { dict: Dictionary }) {
  return (
    <section id="skills" className="scroll-mt-20 bg-surface-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {dict.skills.heading}
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            {dict.skills.subheading}
          </p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <FadeIn key={skill.name} delay={index * 0.05}>
              <SkillBadge skill={skill} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
