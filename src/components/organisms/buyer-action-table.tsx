"use client";

import { PriorityIndicator } from "@/components/atoms/priority-indicator";
import { ActionStatus, type ActionStatusTone } from "@/components/molecules/action-status";
import { CardHeaderWithHelp } from "@/components/molecules/card-header-with-help";
import { ComingSoonAction } from "@/components/molecules/coming-soon-action";
import { DataTable, type DataTableColumn } from "@/components/organisms/data-table";
import { GlassCard } from "@/components/organisms/glass-card";
import {
  BUYER_ACTIONS,
  type ActionStatusKey,
  type BuyerActionItem,
  type DeadlineValue,
} from "@/features/buyer-dashboard/data/buyer-dashboard.mock";
import { useI18n } from "@/i18n/i18n-context";

const STATUS_TONE: Record<ActionStatusKey, ActionStatusTone> = {
  inspectionPending: "pending",
  awaitingFunding: "funding",
  responses: "info",
  negotiating: "negotiating",
};

export interface BuyerActionTableProps {
  rows?: BuyerActionItem[];
}

/** "Action Required" table — prototype sample rows, non-navigating row actions. */
export function BuyerActionTable({ rows = BUYER_ACTIONS }: BuyerActionTableProps) {
  const { dict } = useI18n();
  const b = dict.buyerDashboard;
  const t = b.actionTable;

  function formatDeadline(deadline: DeadlineValue): string {
    if (deadline.dayKey) {
      return deadline.time ? `${b.relative[deadline.dayKey]}, ${deadline.time}` : b.relative[deadline.dayKey];
    }
    return deadline.date ?? "";
  }

  const columns: DataTableColumn<BuyerActionItem>[] = [
    {
      key: "priority",
      header: t.headers.priority,
      render: (row) => <PriorityIndicator priority={row.priority} label={b.priorities[row.priority]} />,
    },
    { key: "reference", header: t.headers.reference, render: (row) => <span className="mono-cell">{row.reference}</span> },
    {
      key: "exporter",
      header: t.headers.exporter,
      render: (row) => (row.exporterKey ? t.invitedExporters : row.exporter),
    },
    {
      key: "requiredAction",
      header: t.headers.requiredAction,
      render: (row) => b.requiredActions[row.requiredActionKey],
    },
    { key: "deadline", header: t.headers.deadline, render: (row) => formatDeadline(row.deadline) },
    {
      key: "status",
      header: t.headers.status,
      render: (row) => {
        const base = b.actionStatuses[row.status.key];
        const label = row.status.count != null ? `${row.status.count} ${base}` : base;
        return <ActionStatus tone={STATUS_TONE[row.status.key]} label={label} />;
      },
    },
    {
      key: "action",
      header: t.headers.action,
      align: "end",
      render: (row) => <ComingSoonAction label={b.rowActions[row.action]} title={dict.dashboard.comingSoon} />,
    },
  ];

  return (
    <GlassCard className="table-card">
      <CardHeaderWithHelp title={t.title} tooltip={t.tooltip} />
      <DataTable caption={t.title} columns={columns} rows={rows} getRowKey={(row) => row.id} empty={t.empty} />
    </GlassCard>
  );
}
