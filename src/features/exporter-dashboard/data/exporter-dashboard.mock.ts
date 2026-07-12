/**
 * Centralized, typed, deterministic prototype data for the Exporter Dashboard.
 * No random values, no current-time generation. Business identifiers, company
 * names, routes, product descriptions, amounts, dates and times are
 * locale-neutral; labels/statuses are translation keys resolved by components.
 * Sample data only — never connected to live inventory, trade, logistics, claim,
 * or payment services.
 */

export type ExporterKpiId =
  | "availableBatches"
  | "newRfqs"
  | "ordersInPreparation"
  | "documentsMissing"
  | "fundsSecured"
  | "claimsAwaitingResponse";

export type SpeciesKey = "betta" | "guppy" | "discus" | "koi" | "arowana";
export type StageKey = "allocation" | "healthDocuments" | "packing" | "ready";
export type RfqStatusKey = "new" | "reviewing" | "clarificationNeeded";
export type ShipmentStatusKey = "atRisk" | "preparing" | "ready";
export type ExporterRowAction = "createQuote" | "review";

export interface ExporterDashboardKpi {
  id: ExporterKpiId;
  value: string;
  testnetSample?: boolean;
}

export interface SpeciesAvailabilityItem {
  species: SpeciesKey;
  value: number;
}

export interface PreparationWorkloadItem {
  stage: StageKey;
  value: number;
}

export interface ResponseDue {
  dayKey?: "today" | "tomorrow";
  time?: string;
  date?: string;
}

export interface ExporterRfqItem {
  id: string;
  rfqId: string;
  buyer: string;
  destination: string;
  requestedFish: string;
  quantity: number;
  responseDue: ResponseDue;
  status: RfqStatusKey;
  action: ExporterRowAction;
}

export type ShipmentBlocker =
  | { kind: "documents"; count: number }
  | { kind: "label"; labelKey: "packingQc" }
  | { kind: "none" };

export interface UpcomingShipmentItem {
  id: string;
  tradeId: string;
  buyer: string;
  route: string;
  plannedDeparture: string;
  /** Percentage readiness (0–100). */
  readiness: number;
  blocker: ShipmentBlocker;
  status: ShipmentStatusKey;
  action: ExporterRowAction;
}

export const EXPORTER_KPIS: ExporterDashboardKpi[] = [
  { id: "availableBatches", value: "18" },
  { id: "newRfqs", value: "6" },
  { id: "ordersInPreparation", value: "3" },
  { id: "documentsMissing", value: "2" },
  { id: "fundsSecured", value: "8,500", testnetSample: true },
  { id: "claimsAwaitingResponse", value: "1" },
];

export const SPECIES_AVAILABILITY: SpeciesAvailabilityItem[] = [
  { species: "betta", value: 320 },
  { species: "guppy", value: 480 },
  { species: "discus", value: 85 },
  { species: "koi", value: 140 },
  { species: "arowana", value: 12 },
];

export const PREPARATION_WORKLOAD: PreparationWorkloadItem[] = [
  { stage: "allocation", value: 2 },
  { stage: "healthDocuments", value: 1 },
  { stage: "packing", value: 2 },
  { stage: "ready", value: 1 },
];

export const PREPARATION_TOTAL = PREPARATION_WORKLOAD.reduce((sum, item) => sum + item.value, 0);

export const EXPORTER_RFQS: ExporterRfqItem[] = [
  {
    id: "RFQ-2026-0061",
    rfqId: "RFQ-2026-0061",
    buyer: "Ocean Import Co.",
    destination: "Tokyo · NRT",
    requestedFish: "Betta HMPK Super Red",
    quantity: 120,
    responseDue: { dayKey: "today", time: "17:00 WIB" },
    status: "new",
    action: "createQuote",
  },
  {
    id: "RFQ-2026-0064",
    rfqId: "RFQ-2026-0064",
    buyer: "Pearl Aquatics Pte. Ltd.",
    destination: "Singapore · SIN",
    requestedFish: "Guppy Mosaic Mix",
    quantity: 240,
    responseDue: { dayKey: "tomorrow", time: "12:00 WIB" },
    status: "reviewing",
    action: "review",
  },
  {
    id: "RFQ-2026-0067",
    rfqId: "RFQ-2026-0067",
    buyer: "DragonFish Trading Ltd.",
    destination: "Hong Kong · HKG",
    requestedFish: "Arowana Super Red",
    quantity: 8,
    responseDue: { date: "20 Jul 2026" },
    status: "clarificationNeeded",
    action: "review",
  },
  {
    id: "RFQ-2026-0069",
    rfqId: "RFQ-2026-0069",
    buyer: "BlueWave Ornamental GmbH",
    destination: "Frankfurt · FRA",
    requestedFish: "Discus Assorted Grade A",
    quantity: 60,
    responseDue: { date: "21 Jul 2026" },
    status: "new",
    action: "createQuote",
  },
];

export const UPCOMING_SHIPMENTS: UpcomingShipmentItem[] = [
  {
    id: "TRD-2026-0051",
    tradeId: "TRD-2026-0051",
    buyer: "Ocean Import Co.",
    route: "CGK → HND/NRT",
    plannedDeparture: "22 Jul 2026 · 23:45 WIB",
    readiness: 74,
    blocker: { kind: "documents", count: 2 },
    status: "atRisk",
    action: "review",
  },
  {
    id: "TRD-2026-0053",
    tradeId: "TRD-2026-0053",
    buyer: "Pearl Aquatics Pte. Ltd.",
    route: "SUB → SIN",
    plannedDeparture: "24 Jul 2026 · 09:15 WIB",
    readiness: 88,
    blocker: { kind: "label", labelKey: "packingQc" },
    status: "preparing",
    action: "review",
  },
  {
    id: "TRD-2026-0056",
    tradeId: "TRD-2026-0056",
    buyer: "BlueWave Ornamental GmbH",
    route: "CGK → FRA",
    plannedDeparture: "27 Jul 2026 · 01:20 WIB",
    readiness: 100,
    blocker: { kind: "none" },
    status: "ready",
    action: "review",
  },
];
