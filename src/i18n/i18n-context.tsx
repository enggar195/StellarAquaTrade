"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { Locale } from "./config";
import { formatTemplate, type Dictionary } from "./get-dictionary";

interface I18nValue {
  locale: Locale;
  dict: Dictionary;
  /** Interpolate a "{title}"-style template from the dictionary. */
  t: (template: string, values: Record<string, string>) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ locale, dict, t: formatTemplate }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return value;
}
