"use client";

import { Languages } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";

export function LocaleToggle() {
  const { locale, setLocale, dict } = useLocale();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "ua" ? "en" : "ua")}
      aria-label={dict.nav.toggleLocale}
      title={dict.nav.toggleLocale}
      className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border px-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      {locale.toUpperCase()}
    </button>
  );
}
