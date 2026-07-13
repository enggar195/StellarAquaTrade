import { describe, expect, it } from "vitest";

import { NAVIGATION, navItemHref } from "@/features/dashboard-shell/navigation";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  BATCH_COMPOSITION_TOTAL,
  BATCH_STATUS_COMPOSITION,
  FISH_BATCHES,
  FISH_BATCH_KPIS,
} from "./fish-batches.mock";

describe("fish batch mock data (deterministic)", () => {
  it("has exactly eight prototype batches", () => {
    expect(FISH_BATCHES).toHaveLength(8);
  });

  it("has exactly four KPIs with the specified values and units", () => {
    expect(FISH_BATCH_KPIS).toHaveLength(4);
    const byId = Object.fromEntries(FISH_BATCH_KPIS.map((k) => [k.id, k]));
    expect(byId.totalActiveBatches.value).toBe("24");
    expect(byId.availableQuantity.value).toBe("1,037");
    expect(byId.availableQuantity.unitKey).toBe("fish");
    expect(byId.qcPending.value).toBe("3");
    expect(byId.reserved.value).toBe("5");
    expect(byId.reserved.unitKey).toBe("batches");
  });

  it("keeps the exact donut composition totalling 24", () => {
    expect(BATCH_STATUS_COMPOSITION).toEqual([
      { status: "available", value: 12 },
      { status: "partiallyReserved", value: 4 },
      { status: "reserved", value: 5 },
      { status: "qcPending", value: 3 },
    ]);
    expect(BATCH_COMPOSITION_TOTAL).toBe(24);
    expect(BATCH_STATUS_COMPOSITION.reduce((sum, s) => sum + s.value, 0)).toBe(24);
  });

  it("treats QC and availability as independent fields", () => {
    const arowana = FISH_BATCHES.find((b) => b.species === "arowana")!;
    expect(arowana.availability).toBe("available");
    expect(arowana.qc).toBe("pending");
  });

  it("gives every fully reserved batch zero available quantity", () => {
    for (const batch of FISH_BATCHES.filter((b) => b.availability === "reserved")) {
      expect(batch.availableQty).toBe(0);
    }
  });
});

describe("fish batch navigation", () => {
  it("exposes Fish Batches as an active, locale-aware exporter link", () => {
    const item = NAVIGATION.exporter.flatMap((s) => s.items).find((i) => i.labelKey === "fishBatches")!;
    expect(item.status).toBe("active");
    expect(navItemHref(item, "en")).toBe("/en/exporter/fish-batches");
    expect(navItemHref(item, "id")).toBe("/id/exporter/fish-batches");
    expect(navItemHref(item, "zh-CN")).toBe("/zh-CN/exporter/fish-batches");
  });
});

describe("fish batch i18n", () => {
  it("provides copy for every locale", () => {
    for (const locale of locales) {
      const f = getDictionary(locale).fishBatches;
      expect(f.title).toBeTruthy();
      expect(f.subtitle).toBeTruthy();
      expect(f.prototypeBanner.title).toBeTruthy();
      expect(f.createFishBatchTooltip).toBeTruthy();
      expect(Object.keys(f.table.headers)).toHaveLength(10);
      expect(f.kpi.reserved.tooltip).toBeTruthy();
      expect(f.drawer.visibility.pending).toBeTruthy();
    }
  });

  it("localizes the page title", () => {
    expect(getDictionary("en").fishBatches.title).toBe("Fish Batches");
    expect(getDictionary("id").fishBatches.title).toBe("Batch Ikan");
    expect(getDictionary("zh-CN").fishBatches.title).toBe("鱼批次");
  });
});
