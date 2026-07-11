import { describe, expect, it } from "vitest";

import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { switchLocalePath } from "@/i18n/locale-path";
import { DEFAULT_ROLE, NAVIGATION, ROLES, navItemHref, type Role } from "./navigation";

function labelKeys(role: Role): string[] {
  return NAVIGATION[role].flatMap((section) => section.items.map((item) => item.labelKey));
}

describe("role-aware navigation config", () => {
  it("defaults to the buyer prototype role", () => {
    expect(DEFAULT_ROLE).toBe("buyer");
    expect(ROLES).toEqual(["buyer", "exporter", "admin"]);
  });

  it("buyer menu matches the specification", () => {
    expect(labelKeys("buyer")).toEqual([
      "dashboard",
      "fishCatalog",
      "rfqs",
      "quotations",
      "tradeOrders",
      "shipments",
      "arrivalInspection",
      "claims",
      "testXlm",
      "notifications",
      "companyProfile",
    ]);
  });

  it("exporter menu matches the specification", () => {
    expect(labelKeys("exporter")).toEqual([
      "dashboard",
      "fishBatches",
      "privateCatalog",
      "rfqs",
      "quotations",
      "tradeOrders",
      "packing",
      "shipments",
      "claims",
      "testXlm",
      "notifications",
      "companyProfile",
    ]);
  });

  it("admin menu matches the specification", () => {
    expect(labelKeys("admin")).toEqual([
      "operationsDashboard",
      "companies",
      "documentVerification",
      "shipments",
      "claims",
      "masterData",
      "systemConfiguration",
      "auditMonitoring",
      "testXlm",
    ]);
  });

  it("keeps Test XLM active and locale-routed for every role", () => {
    for (const role of ROLES) {
      const testXlm = NAVIGATION[role].flatMap((s) => s.items).find((i) => i.labelKey === "testXlm");
      expect(testXlm?.status).toBe("active");
      expect(navItemHref(testXlm!, "en")).toBe("/en/test-xlm");
      expect(navItemHref(testXlm!, "zh-CN")).toBe("/zh-CN/test-xlm");
    }
  });

  it("active items resolve a locale href; coming-soon items never navigate", () => {
    for (const role of ROLES) {
      for (const item of NAVIGATION[role].flatMap((s) => s.items)) {
        const href = navItemHref(item, "id");
        if (item.status === "active") {
          expect(item.route).toBeTruthy();
          expect(href).toMatch(/^\/id\//);
        } else {
          expect(item.route).toBeUndefined();
          expect(href).toBeNull();
        }
      }
    }
  });

  it("does not create separate Wallet/Balance/Payment/Transaction items", () => {
    for (const role of ROLES) {
      expect(labelKeys(role).join(",")).not.toMatch(/wallet|balance|payment|transaction/i);
    }
  });
});

describe("dashboard i18n", () => {
  it("provides prototype + shell keys for every locale", () => {
    for (const locale of locales) {
      const d = getDictionary(locale).dashboard;
      expect(d.prototypeLabel).toBeTruthy();
      expect(d.pageTitle).toBeTruthy();
      expect(d.comingSoon).toBeTruthy();
      expect(d.comingSoonTooltip).toBeTruthy();
      expect(d.shellStatus.title).toBeTruthy();
      expect(d.availableNow.items.length).toBeGreaterThanOrEqual(4);
      expect(d.comingNext.items).toHaveLength(2);
    }
  });

  it("localizes navigation labels", () => {
    expect(getDictionary("en").navigation.dashboard).toBe("Dashboard");
    expect(getDictionary("id").navigation.dashboard).toBe("Dasbor");
    expect(getDictionary("zh-CN").navigation.dashboard).toBe("仪表板");
  });
});

describe("changing language preserves /dashboard", () => {
  it("rewrites only the locale segment", () => {
    expect(switchLocalePath("/en/dashboard", "id")).toBe("/id/dashboard");
    expect(switchLocalePath("/zh-CN/dashboard", "en")).toBe("/en/dashboard");
  });
});
