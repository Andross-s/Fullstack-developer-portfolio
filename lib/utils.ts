import { clsx, type ClassValue } from "clsx";
import type { Locale } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function localeToHtmlLang(locale: Locale): string {
  return locale === "ua" ? "uk" : "en";
}

export function isGitHubUrl(href: string): boolean {
  try {
    const host = new URL(href).hostname.replace(/^www\./, "");
    return host === "github.com";
  } catch {
    return /github\.com/i.test(href);
  }
}
