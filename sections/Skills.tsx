import { FadeIn } from "@/components/FadeIn";
import { SkillCategoryGroup } from "@/components/SkillCategoryGroup";
import { skillCategories } from "@/lib/data";
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
          {skillCategories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 0.08}>
              <SkillCategoryGroup category={category} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
