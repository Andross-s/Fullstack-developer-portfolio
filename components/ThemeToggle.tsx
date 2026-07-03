"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { useLocale } from "@/lib/i18n/context";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { dict } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dict.nav.toggleTheme}
      title={dict.nav.toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
