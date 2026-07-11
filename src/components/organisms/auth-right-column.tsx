"use client";

import { TextLink } from "@/components/atoms/text-link";
import { AuthIntroBlock } from "@/components/organisms/auth-intro-block";
import { LoginFormCard } from "@/components/organisms/login-form-card";
import { TestnetInfoCard } from "@/components/organisms/testnet-info-card";
import { TrustNoteCard } from "@/components/organisms/trust-note-card";
import { useI18n } from "@/i18n/i18n-context";

/**
 * Interactive column content in order: intro (switcher + heading), login form,
 * Testnet info, trust note, and a locale-aware link to the public Test XLM page.
 */
export function AuthRightColumn() {
  const { dict, locale } = useI18n();

  return (
    <div className="auth-right-inner">
      <AuthIntroBlock />
      <LoginFormCard />
      <TestnetInfoCard />
      <TrustNoteCard />
      <p className="auth-testxlm-link">
        <TextLink href={`/${locale}/test-xlm`}>{dict.auth.testXlmLink}</TextLink>
      </p>
    </div>
  );
}
