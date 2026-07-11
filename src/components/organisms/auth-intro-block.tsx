"use client";

import { GradientHeading } from "@/components/atoms/gradient-heading";
import { LanguageSwitcher } from "@/components/molecules/language-switcher";
import { useI18n } from "@/i18n/i18n-context";

/** Top of the interactive panel: language switcher, eyebrow, heading, subtitle. */
export function AuthIntroBlock() {
  const { dict, locale } = useI18n();

  return (
    <div className="auth-intro">
      <div className="auth-intro-top">
        <LanguageSwitcher
          locale={locale}
          label={dict.languageSwitcher.label}
          ariaChange={dict.languageSwitcher.ariaChange}
        />
      </div>
      <p className="eyebrow">{dict.auth.eyebrow}</p>
      <GradientHeading as="h1" className="auth-heading">
        {dict.auth.heading}
      </GradientHeading>
      <p className="auth-subtitle">{dict.auth.subtitle}</p>
    </div>
  );
}
