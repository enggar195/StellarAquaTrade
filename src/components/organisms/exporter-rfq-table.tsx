"use client";

import { ActionStatus, type ActionStatusTone } from "@/components/molecules/action-status";
import { CardHeaderWithHelp } from "@/components/molecules/card-header-with-help";
import { ComingSoonAction } from "@/components/molecules/coming-soon-action";
import { DataTable, type DataTableColumn } from "@/components/organisms/data-table";
import { GlassCard } from "@/components/organisms/glass-card";
import {
  EXPORTER_RFQS,
  type ExporterRfqItem,
  type ResponseDue,
  type RfqStatusKey,
} from "@/features/exporter-dashboard/data/exporter-dashboard.mock";
import { useI18n } from "@/i18n/i18n-context";

const RFQ_TONE: Record<RfqStatusKey, ActionStatusTone> = {
  new: "info",
  reviewing: "negotiating",
  clarificationNeeded: "pending",
};

export interface ExporterRfqTableProps {
  rows?: ExporterRfqItem[];
}

/** "RFQs Awaiting Response" table — prototype sample rows, non-navigating actions. */
export function ExporterRfqTable({ rows = EXPORTER_RFQS }: ExporterRfqTableProps) {
  const { dict } = useI18n();
  const e = dict.exporterDashboard;
  const t = e.rfqTable;

  function formatDue(due: ResponseDue): string {
    if (due.dayKey) return due.time ? `${e.relative[due.dayKey]}, ${due.time}` : e.relative[due.dayKey];
    return due.date ?? "";
  }

  const columns: DataTableColumn<ExporterRfqItem>[] = [
    { key: "rfqId", header: t.headers.rfqId, render: (row) => <span className="ref-cell">{row.rfqId}</span> },
    { key: "buyer", header: t.headers.buyer, render: (row) => row.buyer },
    { key: "destination", header: t.headers.destination, render: (row) => row.destination },
    { key: "requestedFish", header: t.headers.requestedFish, render: (row) => row.requestedFish },
    { key: "quantity", header: t.headers.quantity, align: "end", render: (row) => row.quantity },
    { key: "responseDue", header: t.headers.responseDue, render: (row) => formatDue(row.responseDue) },
    {
      key: "status",
      header: t.headers.status,
      render: (row) => <ActionStatus tone={RFQ_TONE[row.status]} label={e.rfqStatuses[row.status]} />,
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
