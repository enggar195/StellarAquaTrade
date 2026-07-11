import { describe, expect, it } from "vitest";

import { defaultLocale, isLocale, locales, localeNames } from "./config";
import { getDictionary } from "./get-dictionary";
import { rootRedirectPath, switchLocalePath } from "./locale-path";

describe("locale config", () => {
  it("supports exactly en, id and zh-CN", () => {
    expect(locales).toEqual(["en", "id", "zh-CN"]);
  });

  it("defaults and falls back to English", () => {
    expect(defaultLocale).toBe("en");
  });

  it("validates supported locales and rejects unknown ones", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("id")).toBe(true);
    expect(isLocale("zh-CN")).toBe(true);
    expect(isLocale("fr")).toBe(false);
    expect(isLocale("EN")).toBe(false);
    expect(isLocale("")).toBe(false);
  });

  it("exposes language endonyms (never flag-only)", () => {
    expect(localeNames).toEqual({
      en: "English",
      id: "Bahasa Indonesia",
      "zh-CN": "简体中文",
    });
  });
});

describe("localized Test XLM navigation labels", () => {
  it("provides the localized menu label for every locale", () => {
    expect(getDictionary("en").navigation.testXlm).toBe("Test XLM");
    expect(getDictionary("id").navigation.testXlm).toBe("Uji XLM");
    expect(getDictionary("zh-CN").navigation.testXlm).toBe("XLM 测试");
  });

  it("keeps XLM in the label (never renamed to XML)", () => {
    for (const locale of locales) {
      expect(getDictionary(locale).navigation.testXlm).toContain("XLM");
    }
  });
});

describe("root redirect", () => {
  it("targets /en/test-xlm", () => {
    expect(rootRedirectPath).toBe("/en/test-xlm");
  });

  it("never targets a login route", () => {
    expect(rootRedirectPath).not.toContain("login");
  });
});

describe("switchLocalePath preserves the active route", () => {
  it("swaps only the locale segment of /test-xlm", () => {
    expect(switchLocalePath("/en/test-xlm", "id")).toBe("/id/test-xlm");
    expect(switchLocalePath("/id/test-xlm", "zh-CN")).toBe("/zh-CN/test-xlm");
    expect(switchLocalePath("/zh-CN/test-xlm", "en")).toBe("/en/test-xlm");
  });

  it("prepends a locale when the path has none", () => {
    expect(switchLocalePath("/test-xlm", "id")).toBe("/id/test-xlm");
  });

  it("handles the bare locale root", () => {
    expect(switchLocalePath("/en", "zh-CN")).toBe("/zh-CN");
  });
});
