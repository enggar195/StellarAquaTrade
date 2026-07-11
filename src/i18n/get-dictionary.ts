import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { id } from "./dictionaries/id";
import { zhCN } from "./dictionaries/zh-CN";

/**
 * Localized copy for the shell, the Test XLM navigation, and the Login page
 * slice. The stable Stellar White Belt components keep their existing copy on
 * purpose — only newly introduced UI is translated here.
 */
export interface Dictionary {
  navigation: {
    testXlm: string;
  };
  languageSwitcher: {
    label: string;
    ariaChange: string;
  };
  common: {
    /** aria template, "{title}" is replaced with the card title. */
    explain: string;
  };
  auth: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    brand: {
      name: string;
      subtitle: string;
    };
    showcase: {
      tagline: string;
      description: string;
      chips: string[];
    };
    form: {
      title: string;
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      showPassword: string;
      hidePassword: string;
      rememberMe: string;
      forgotPassword: string;
      signIn: string;
      signingIn: string;
      noAccount: string;
      createAccount: string;
      prototypeMessage: string;
    };
    testnet: {
      title: string;
      networkLabel: string;
      networkValue: string;
      stageLabel: string;
      stageValue: string;
      scopeLabel: string;
      scopeValue: string;
      futureLabel: string;
      futureValue: string;
    };
    trust: {
      title: string;
      items: string[];
    };
    testXlmLink: string;
    tooltips: {
      loginForm: string;
      testnetInfo: string;
      trustNote: string;
    };
  };
  validation: {
    emailRequired: string;
    emailInvalid: string;
    passwordRequired: string;
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

/** Interpolate a "{title}"-style template (used for tooltip aria labels). */
export function formatTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? `{${key}}`);
}
