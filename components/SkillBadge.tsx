import type { SkillItem } from "@/types";

export function SkillBadge({ skill }: { skill: SkillItem }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">
          {skill.name}
        </span>
        <span className="text-xs font-medium text-muted-foreground">
          {skill.level}%
        </span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-surface-muted"
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={skill.name}
      >
        <div
          className="h-full rounded-full bg-accent"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}
