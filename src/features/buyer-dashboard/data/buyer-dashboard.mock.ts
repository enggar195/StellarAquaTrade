/**
 * Centralized, typed, deterministic prototype data for the Buyer Dashboard.
 * No random values, no current-time generation. Identifiers, references,
 * amounts, addresses and hashes are locale-neutral; every label/status is a
 * translation key resolved by the components. This is sample data only — it is
 * never connected to live trade, shipment, claim, or payment services.
 */

export type Priority = "high" | "medium" | "low";
export type KpiId =
  | "activeRfqs"
  | "awaitingFunding"
  | "shipmentsInTransit"
  | "arrivalInspectionDue"
  | "openClaims"
  | "tradeSpend";
export type MonthKey = "jan" | "feb" | "mar" | "apr" | "may" | "jun";
export type ShipmentStatusKey = "preparing" | "inTransit" | "arrived" | "delayed";
export type ActionStatusKey = "inspectionPending" | "awaitingFunding" | "responses" | "negotiating";
export type RequiredActionKey =
  | "completeArrivalInspection"
  | "completeFundingEvidence"
  | "compareQuotations"
  | "reviewExporterResponse";
export type RowActionKey = "review" | "compare";
export type TxStatus = "successful" | "failed";

export interface BuyerDashboardKpi {
  id: KpiId;
  value: string;
  unitKey?: "trades";
  testnetSample?: boolean;
}

export interface TradeActivityPoint {
  month: MonthKey;
  rfqs: number;
  confirmedTrades: number;
}

export interface ShipmentStatusItem {
  status: ShipmentStatusKey;
  value: number;
}

export interface DeadlineValue {
  dayKey?: "today" | "tomorrow";
  time?: string;
  date?: string;
}

export interface BuyerActionItem {
  id: string;
  priority: Priority;
  reference: string;
  exporter?: string;
  exporterKey?: "invitedExporters";
  requiredActionKey: RequiredActionKey;
  deadline: DeadlineValue;
  status: { key: ActionStatusKey; count?: number };
  action: RowActionKey;
}

export interface TxTimeValue {
  dayKey?: "yesterday";
  date?: string;
  clock: string;
}

export interface RecentTestTransaction {
  id: string;
  time: TxTimeValue;
  typeKey: "testPayment";
  recipient: string;
  amount: string;
  network: "Testnet";
  status: TxStatus;
  /** null for failed transactions — never fabricate a hash. */
  hash: string | null;
}

export const BUYER_KPIS: BuyerDashboardKpi[] = [
  { id: "activeRfqs", value: "4" },
  { id: "awaitingFunding", value: "2", unitKey: "trades" },
  { id: "shipmentsInTransit", value: "3" },
  { id: "arrivalInspectionDue", value: "1" },
  { id: "openClaims", value: "1" },
  { id: "tradeSpend", value: "12,450", testnetSample: true },
];

export const TRADE_ACTIVITY: TradeActivityPoint[] = [
  { month: "jan", rfqs: 3, confirmedTrades: 1 },
  { month: "feb", rfqs: 5, confirmedTrades: 2 },
  { month: "mar", rfqs: 4, confirmedTrades: 2 },
  { month: "apr", rfqs: 7, confirmedTrades: 3 },
  { month: "may", rfqs: 6, confirmedTrades: 3 },
  { month: "jun", rfqs: 8, confirmedTrades: 4 },
];

export const SHIPMENT_STATUS: ShipmentStatusItem[] = [
  { status: "preparing", value: 2 },
  { status: "inTransit", value: 3 },
  { status: "arrived", value: 1 },
  { status: "delayed", value: 1 },
];

export const SHIPMENT_TOTAL = SHIPMENT_STATUS.reduce((sum, item) => sum + item.value, 0);

export const BUYER_ACTIONS: BuyerActionItem[] = [
  {
    id: "TRD-2026-0042",
    priority: "high",
    reference: "TRD-2026-0042",
    exporter: "PT Nusantara Aquatic Export",
    requiredActionKey: "completeArrivalInspection",
    deadline: { dayKey: "today", time: "14:30 JST" },
    status: { key: "inspectionPending" },
    action: "review",
  },
  {
    id: "TRD-2026-0048",
    priority: "medium",
    reference: "TRD-2026-0048",
    exporter: "BlueRiver Ornamental Fish",
    requiredActionKey: "completeFundingEvidence",
    deadline: { dayKey: "tomorrow", time: "10:00 JST" },
    status: { key: "awaitingFunding" },
    action: "review",
  },
  {
    id: "RFQ-2026-0061",
    priority: "medium",
    reference: "RFQ-2026-0061",
    exporterKey: "invitedExporters",
    requiredActionKey: "compareQuotations",
    deadline: { date: "18 Jul 2026" },
    status: { key: "responses", count: 2 },
    action: "compare",
  },
  {
    id: "CLM-2026-0012",
    priority: "low",
    reference: "CLM-2026-0012",
    exporter: "PT Nusantara Aquatic Export",
    requiredActionKey: "reviewExporterResponse",
    deadline: { date: "19 Jul 2026" },
    status: { key: "negotiating" },
    action: "review",
  },
];

export const RECENT_TEST_TRANSACTIONS: RecentTestTransaction[] = [
  {
    id: "tx-1",
    time: { clock: "10:42" },
    typeKey: "testPayment",
    recipient: "GABC…7XQ2",
    amount: "1.2500000",
    network: "Testnet",
    status: "successful",
    hash: "8f31…c9a2",
  },
  {
    id: "tx-2",
    time: { dayKey: "yesterday", clock: "16:05" },
    typeKey: "testPayment",
    recipient: "GB7N…P4K8",
    amount: "0.5000000",
    network: "Testnet",
    status: "successful",
    hash: "3b91…d117",
  },
  {
    id: "tx-3",
    time: { date: "15 Jul", clock: "09:14" },
    typeKey: "testPayment",
    recipient: "GD44…2LM9",
    amount: "2.0000000",
    network: "Testnet",
    status: "failed",
    hash: null,
  },
];
