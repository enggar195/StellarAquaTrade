"use client";

import { TextLink } from "@/components/atoms/text-link";
import { HelpTooltip } from "@/components/molecules/help-tooltip";
import { TransactionStatus } from "@/components/molecules/transaction-status";
import { DataTable, type DataTableColumn } from "@/components/organisms/data-table";
import { GlassCard } from "@/components/organisms/glass-card";
import {
  RECENT_TEST_TRANSACTIONS,
  type RecentTestTransaction,
  type TxTimeValue,
} from "@/features/buyer-dashboard/data/buyer-dashboard.mock";
import { useI18n } from "@/i18n/i18n-context";

/**
 * Read-only sample of recent Testnet activity. Not real wallet history; failed
 * transactions never show a fabricated hash; there is no Send form here — actual
 * wallet actions live on the public Test XLM page.
 */
export interface RecentTransactionTableProps {
  rows?: RecentTestTransaction[];
}

export function RecentTransactionTable({ rows = RECENT_TEST_TRANSACTIONS }: RecentTransactionTableProps) {
  const { dict, locale } = useI18n();
  const b = dict.buyerDashboard;
  const t = b.txTable;

  function formatTime(time: TxTimeValue): string {
    if (time.dayKey) return `${b.relative[time.dayKey]}, ${time.clock}`;
    if (time.date) return `${time.date}, ${time.clock}`;
    return time.clock;
  }

  const columns: DataTableColumn<RecentTestTransaction>[] = [
    { key: "time", header: t.headers.time, render: (row) => formatTime(row.time) },
    { key: "type", header: t.headers.type, render: () => b.txType.testPayment },
    { key: "recipient", header: t.headers.recipient, render: (row) => <span className="mono-cell">{row.recipient}</span> },
    { key: "amount", header: t.headers.amount, align: "end", render: (row) => <span className="mono-cell">{`${row.amount} ${b.units.xlm}`}</span> },
    { key: "network", header: t.headers.network, render: () => t.network },
    {
      key: "status",
      header: t.headers.status,
      render: (row) => <TransactionStatus status={row.status} label={b.txStatus[row.status]} />,
    },
    {
      key: "hash",
      header: t.headers.hash,
      render: (row) =>
        row.hash ? <span className="mono-cell">{row.hash}</span> : <span className="muted-cell">{t.notAvailable}</span>,
    },
  ];

  return (
    <GlassCard className="table-card">
      <div className="table-card-head">
        <h3 className="aq-card-title">{t.title}</h3>
        <div className="table-card-actions">
          <TextLink href={`/${locale}/test-xlm`}>{t.openTestXlm}</TextLink>
          <HelpTooltip title={t.title} content={t.tooltip} />
        </div>
      </div>
      <DataTable caption={t.title} columns={columns} rows={rows} getRowKey={(row) => row.id} empty={t.empty} />
    </GlassCard>
  );
}
