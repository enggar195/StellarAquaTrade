import { NavigationItem } from "@/components/molecules/navigation-item";
import { LanguageSwitcher } from "@/components/molecules/language-switcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

export interface PublicHeaderProps {
  locale: Locale;
  dict: Dictionary;
}

/**
 * Public shell header for White Belt review: the single primary "Test XLM"
 * navigation entry plus the reusable language switcher. No auth, no gating.
 */
export function PublicHeader({ locale, dict }: PublicHeaderProps) {
  return (
    <header className="public-header">
      <nav className="public-nav" aria-label="Primary">
        <NavigationItem
          href={`/${locale}/test-xlm`}
          label={dict.navigation.testXlm}
          active
        />
      </nav>
      <LanguageSwitcher
        locale={locale}
        label={dict.languageSwitcher.label}
        ariaChange={dict.languageSwitcher.ariaChange}
      />
    </header>
  );
}
