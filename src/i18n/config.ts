export const locales = ["en", "id", "zh-CN"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Endonym for each language — never translated, never flag-only. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  id: "Bahasa Indonesia",
  "zh-CN": "简体中文",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
