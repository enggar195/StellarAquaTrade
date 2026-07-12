import { describe, expect, it } from "vitest";

import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  EXPORTER_KPIS,
  EXPORTER_RFQS,
  PREPARATION_TOTAL,
  PREPARATION_WORKLOAD,
  SPECIES_AVAILABILITY,
  UPCOMING_SHIPMENTS,
} from "./exporter-dashboard.mock";

describe("exporter dashboard mock data (deterministic)", () => {
  it("has exactly six KPIs with the specified values", () => {
    expect(EXPORTER_KPIS).toHaveLength(6);
    const byId = Object.fromEntries(EXPORTER_KPIS.map((kpi) => [kpi.id, kpi]));
    expect(byId.availableBatches.value).toBe("18");
    expect(byId.newRfqs.value).toBe("6");
    expect(byId.ordersInPreparation.value).toBe("3");
    expect(byId.documentsMissing.value).toBe("2");
    expect(byId.fundsSecured.value).toBe("8,500");
    expect(byId.fundsSecured.testnetSample).toBe(true);
    expect(byId.claimsAwaitingResponse.value).toBe("1");
  });

  it("keeps the exact species availability series", () => {
    expect(SPECIES_AVAILABILITY).toEqual([
      { species: "betta", value: 320 },
      { species: "guppy", value: 480 },
      { species: "discus", value: 85 },
      { species: "koi", value: 140 },
      { species: "arowana", value: 12 },
    ]);
  });

  it("keeps the exact preparation workload and totals to six", () => {
    expect(PREPARATION_WORKLOAD).toEqual([
      { stage: "allocation", value: 2 },
      { stage: "healthDocuments", value: 1 },
      { stage: "packing", value: 2 },
      { stage: "ready", value: 1 },
    ]);
    expect(PREPARATION_TOTAL).toBe(6);
    expect(PREPARATION_WORKLOAD.reduce((sum, s) => sum + s.value, 0)).toBe(6);
  });

  it("has four RFQ rows awaiting response", () => {
    expect(EXPORTER_RFQS).toHaveLength(4);
  });

  it("has three upcoming shipments with the specified readiness values", () => {
    expect(UPCOMING_SHIPMENTS).toHaveLength(3);
    expect(UPCOMING_SHIPMENTS.map((s) => s.readiness)).toEqual([74, 88, 100]);
  });

  it("only marks a shipment ready when nothing is blocking it", () => {
    for (const shipment of UPCOMING_SHIPMENTS) {
      if (shipment.status === "ready") {
        expect(shipment.blocker.kind).toBe("none");
        expect(shipment.readiness).toBe(100);
      }
    }
  });
});

describe("exporter dashboard i18n", () => {
  it("provides title, banners, KPI and table copy for every locale", () => {
    for (const locale of locales) {
      const e = getDictionary(locale).exporterDashboard;
      expect(e.title).toBeTruthy();
      expect(e.subtitle).toBeTruthy();
      expect(e.prototypeBanner.title).toBeTruthy();
      expect(e.operationalAlert.title).toBeTruthy();
      expect(e.kpi.fundsSecured.badge).toBeTruthy();
      expect(e.charts.availableQuantity.summary).toBeTruthy();
      expect(e.charts.preparationWorkload.summary).toBeTruthy();
      expect(Object.keys(e.rfqTable.headers)).toHaveLength(8);
      expect(Object.keys(e.shipmentTable.headers)).toHaveLength(8);
    }
  });

  it("localizes the exporter dashboard title", () => {
    expect(getDictionary("en").exporterDashboard.title).toBe("Exporter Dashboard");
    expect(getDictionary("id").exporterDashboard.title).toBe("Dasbor Eksportir");
    expect(getDictionary("zh-CN").exporterDashboard.title).toBe("出口商仪表板");
  });
});
