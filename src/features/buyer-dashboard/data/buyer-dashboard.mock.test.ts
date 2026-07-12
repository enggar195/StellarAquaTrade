import { describe, expect, it } from "vitest";

import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  BUYER_ACTIONS,
  BUYER_KPIS,
  RECENT_TEST_TRANSACTIONS,
  SHIPMENT_STATUS,
  SHIPMENT_TOTAL,
  TRADE_ACTIVITY,
} from "./buyer-dashboard.mock";

describe("buyer dashboard mock data (deterministic)", () => {
  it("has exactly six KPIs with the specified values", () => {
    expect(BUYER_KPIS).toHaveLength(6);
    const byId = Object.fromEntries(BUYER_KPIS.map((kpi) => [kpi.id, kpi]));
    expect(byId.activeRfqs.value).toBe("4");
    expect(byId.awaitingFunding.value).toBe("2");
    expect(byId.awaitingFunding.unitKey).toBe("trades");
    expect(byId.shipmentsInTransit.value).toBe("3");
    expect(byId.arrivalInspectionDue.value).toBe("1");
    expect(byId.openClaims.value).toBe("1");
    expect(byId.tradeSpend.value).toBe("12,450");
    expect(byId.tradeSpend.testnetSample).toBe(true);
  });

  it("totals shipments to 7", () => {
    expect(SHIPMENT_TOTAL).toBe(7);
    expect(SHIPMENT_STATUS.reduce((sum, s) => sum + s.value, 0)).toBe(7);
  });

  it("keeps the six-month trade activity series", () => {
    expect(TRADE_ACTIVITY.map((p) => p.rfqs)).toEqual([3, 5, 4, 7, 6, 8]);
    expect(TRADE_ACTIVITY.map((p) => p.confirmedTrades)).toEqual([1, 2, 2, 3, 3, 4]);
  });

  it("never fabricates a hash for a failed transaction", () => {
    const failed = RECENT_TEST_TRANSACTIONS.filter((tx) => tx.status === "failed");
    expect(failed.length).toBeGreaterThan(0);
    for (const tx of failed) {
      expect(tx.hash).toBeNull();
    }
  });

  it("marks every sample transaction as Testnet", () => {
    for (const tx of RECENT_TEST_TRANSACTIONS) {
      expect(tx.network).toBe("Testnet");
    }
  });

  it("has four prototype action rows", () => {
    expect(BUYER_ACTIONS).toHaveLength(4);
  });
});

describe("buyer dashboard i18n", () => {
  it("provides title, banners and KPI copy for every locale", () => {
    for (const locale of locales) {
      const b = getDictionary(locale).buyerDashboard;
      expect(b.title).toBeTruthy();
      expect(b.subtitle).toBeTruthy();
      expect(b.prototypeBanner.title).toBeTruthy();
      expect(b.criticalBanner.title).toBeTruthy();
      expect(b.kpi.tradeSpend.badge).toBeTruthy();
      expect(b.charts.tradeActivity.summary).toBeTruthy();
      expect(b.charts.shipmentStatus.summary).toBeTruthy();
      expect(Object.keys(b.actionTable.headers)).toHaveLength(7);
      expect(Object.keys(b.txTable.headers)).toHaveLength(7);
    }
  });

  it("localizes the buyer dashboard title", () => {
    expect(getDictionary("en").buyerDashboard.title).toBe("Buyer Dashboard");
    expect(getDictionary("id").buyerDashboard.title).toBe("Dasbor Pembeli");
    expect(getDictionary("zh-CN").buyerDashboard.title).toBe("买家仪表板");
  });
});
