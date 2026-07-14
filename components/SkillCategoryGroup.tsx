"use client";

import type { SkillCategory } from "@/types";
import { useLocale } from "@/lib/i18n/context";

export function SkillCategoryGroup({ category }: { category: SkillCategory }) {
  const { locale } = useLocale();

  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <h3 className="mb-3 text-sm font-semibold text-foreground">
        {category.category[locale]}
      </h3>
      <ul className="flex flex-wrap gap-2" aria-label={category.category[locale]}>
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
