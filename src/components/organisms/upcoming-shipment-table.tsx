"use client";

import { ActionStatus, type ActionStatusTone } from "@/components/molecules/action-status";
import { CardHeaderWithHelp } from "@/components/molecules/card-header-with-help";
import { ComingSoonAction } from "@/components/molecules/coming-soon-action";
import { DocumentBlocker } from "@/components/molecules/document-blocker";
import { ShipmentReadiness } from "@/components/molecules/shipment-readiness";
import { DataTable, type DataTableColumn } from "@/components/organisms/data-table";
import { GlassCard } from "@/components/organisms/glass-card";
import {
  UPCOMING_SHIPMENTS,
  type ShipmentBlocker,
  type ShipmentStatusKey,
  type UpcomingShipmentItem,
} from "@/features/exporter-dashboard/data/exporter-dashboard.mock";
import type { Dictionary } from "@/i18n/get-dictionary";
import { useI18n } from "@/i18n/i18n-context";

const SHIP_TONE: Record<ShipmentStatusKey, ActionStatusTone> = {
  atRisk: "risk",
  preparing: "funding",
  ready: "ready",
};

function blockerDisplay(blocker: ShipmentBlocker, e: Dictionary["exporterDashboard"]): { text: string; blocking: boolean } {
  if (blocker.kind === "none") return { text: e.shipmentTable.blockingNone, blocking: false };
  if (blocker.kind === "documents") return { text: `${blocker.count} ${e.shipmentTable.blockingDocuments}`, blocking: true };
  return { text: e.shipmentTable.packingQc, blocking: true };
}

export interface UpcomingShipmentTableProps {
  rows?: UpcomingShipmentItem[];
}

/** "Upcoming Shipments" table with accessible readiness + blocking indicators. */
export function UpcomingShipmentTable({ rows = UPCOMING_SHIPMENTS }: UpcomingShipmentTableProps) {
  const { dict } = useI18n();
  const e = dict.exporterDashboard;
  const t = e.shipmentTable;

  const columns: DataTableColumn<UpcomingShipmentItem>[] = [
    { key: "tradeId", header: t.headers.tradeId, render: (row) => <span className="ref-cell">{row.tradeId}</span> },
    { key: "buyer", header: t.headers.buyer, render: (row) => row.buyer },
    { key: "route", header: t.headers.route, render: (row) => <span className="mono-cell">{row.route}</span> },
    { key: "plannedDeparture", header: t.headers.plannedDeparture, render: (row) => row.plannedDeparture },
    {
      key: "readiness",
      header: t.headers.readiness,
      render: (row) => <ShipmentReadiness value={row.readiness} label={t.readinessLabel} />,
    },
    {
      key: "blockingItem",
      header: t.headers.blockingItem,
      render: (row) => {
        const display = blockerDisplay(row.blocker, e);
        return <DocumentBlocker text={display.text} blocking={display.blocking} />;
      },
    },
    {
      key: "status",
      header: t.headers.status,
      render: (row) => <ActionStatus tone={SHIP_TONE[row.status]} label={e.shipmentStatuses[row.status]} />,
    },
    {
      key: "action",
      header: t.headers.action,
      align: "end",
      render: (row) => <ComingSoonAction label={e.rowActions[row.action]} title={dict.dashboard.comingSoon} />,
    },
  ];

  return (
    <GlassCard className="table-card">
      <CardHeaderWithHelp title={t.title} tooltip={t.tooltip} />
      <DataTable caption={t.title} columns={columns} rows={rows} getRowKey={(row) => row.id} empty={t.empty} />
    </GlassCard>
  );
}
