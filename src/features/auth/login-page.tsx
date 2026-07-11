"use client";

import { AquaBackground } from "@/components/aqua-background";
import { AuthRightColumn } from "@/components/organisms/auth-right-column";
import { ShowcasePanel } from "@/components/organisms/showcase-panel";
import { AuthSplitLayout } from "@/components/templates/auth-split-layout";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/i18n-context";

export interface LoginPageProps {
  locale: Locale;
  dict: Dictionary;
}

/** Login page composition — a frontend UI prototype (no real authentication). */
export function LoginPage({ locale, dict }: LoginPageProps) {
  return (
    <I18nProvider locale={locale} dict={dict}>
      <main className="auth-page">
        <AquaBackground />
        <AuthSplitLayout showcase={<ShowcasePanel />} panel={<AuthRightColumn />} />
      </main>
    </I18nProvider>
  );
}
