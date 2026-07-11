import type { Decorator } from "@storybook/nextjs-vite";

import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/i18n-context";

/** Wrap a story in the real i18n provider for a given locale. */
export function withI18n(locale: Locale): Decorator {
  const dict = getDictionary(locale);
  const Wrapped: Decorator = (Story) => (
    <I18nProvider locale={locale} dict={dict}>
      <div style={{ padding: 24 }}>
        <Story />
      </div>
    </I18nProvider>
  );
  return Wrapped;
}
