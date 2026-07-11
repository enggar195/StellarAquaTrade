import "@testing-library/jest-dom/vitest";

import { render } from "@testing-library/react";
import type { ReactElement } from "react";

import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/i18n-context";

const noop = () => undefined;

// jsdom does not implement matchMedia — used by useReducedMotion.
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: noop,
    removeEventListener: noop,
    addListener: noop,
    removeListener: noop,
    dispatchEvent: () => false,
  })) as typeof window.matchMedia;
}

/** Render a component tree wrapped in the real i18n provider for a locale. */
export function renderWithI18n(ui: ReactElement, locale: Locale = "en") {
  return render(<I18nProvider locale={locale} dict={getDictionary(locale)}>{ui}</I18nProvider>);
}
