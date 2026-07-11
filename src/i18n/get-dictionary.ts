import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { id } from "./dictionaries/id";
import { zhCN } from "./dictionaries/zh-CN";

/**
 * Shape of the localized copy introduced by this migration. Only shell,
 * navigation and language-switcher text is translated here — the stable
 * Stellar White Belt components keep their existing copy on purpose.
 */
export interface Dictionary {
  navigation: {
    testXlm: string;
  };
  languageSwitcher: {
    label: string;
    ariaChange: string;
  };
}

const dictionaries: Record<Locale, Dictionary> = {
  en,
  id,
  "zh-CN": zhCN,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
