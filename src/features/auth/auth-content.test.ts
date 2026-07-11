import { describe, expect, it } from "vitest";

import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { switchLocalePath } from "@/i18n/locale-path";

describe("auth translation keys exist for every locale", () => {
  it("covers heading, form, testnet, trust and tooltips", () => {
    for (const locale of locales) {
      const a = getDictionary(locale).auth;
      expect(a.eyebrow).toBeTruthy();
      expect(a.heading).toBeTruthy();
      expect(a.subtitle).toBeTruthy();
      expect(a.form.signIn).toBeTruthy();
      expect(a.form.emailLabel).toBeTruthy();
      expect(a.form.passwordLabel).toBeTruthy();
      expect(a.form.showPassword).toBeTruthy();
      expect(a.form.prototypeMessage).toBeTruthy();
      expect(a.testnet.networkValue).toBe("Stellar Testnet");
      expect(a.trust.items).toHaveLength(3);
      expect(a.showcase.chips.length).toBeGreaterThanOrEqual(6);
      expect(a.tooltips.loginForm).toBeTruthy();
      expect(a.tooltips.testnetInfo).toBeTruthy();
      expect(a.tooltips.trustNote).toBeTruthy();
    }
  });
});

describe("changing language preserves the /login route", () => {
  it("rewrites only the locale segment", () => {
    expect(switchLocalePath("/en/login", "id")).toBe("/id/login");
    expect(switchLocalePath("/id/login", "zh-CN")).toBe("/zh-CN/login");
    expect(switchLocalePath("/zh-CN/login", "en")).toBe("/en/login");
  });
});
