"use client";

import { ComingSoonAction } from "@/components/molecules/coming-soon-action";
import { DonutChart } from "@/components/molecules/donut-chart";
import { LineChart } from "@/components/molecules/line-chart";
import { BuyerActionTable } from "@/components/organisms/buyer-action-table";
import { ChartCard } from "@/components/organisms/chart-card";
import { CriticalActionBanner } from "@/components/organisms/critical-action-banner";
import { KpiCard } from "@/components/organisms/kpi-card";
import { PrototypeDataBanner } from "@/components/organisms/prototype-data-banner";
import { RecentTransactionTable } from "@/components/organisms/recent-transaction-table";
import { DashboardContentLayout } from "@/components/templates/dashboard-content-layout";
import {
  BUYER_KPIS,
  SHIPMENT_STATUS,
  SHIPMENT_TOTAL,
  TRADE_ACTIVITY,
  type ShipmentStatusKey,
} from "@/features/buyer-dashboard/data/buyer-dashboard.mock";
import { useI18n } from "@/i18n/i18n-context";

const SERIES_COLORS = { rfqs: "#34d3ee", confirmed: "#8b7cff" };
const SHIPMENT_COLORS: Record<ShipmentStatusKey, string> = {
  preparing: "#60a5fa",
  inTransit: "#34d3ee",
  arrived: "#2dd4bf",
  delayed: "#fb7185",
};

interface LegendEntry {
  label: string;
  color: string;
}

function ChartLegend({ items }: { items: LegendEntry[] }) {
  return (
    <ul className="legend-list">
      {items.map((item) => (
        <li key={item.label}>
          <span className="legend-swatch" style={{ background: item.color }} aria-hidden="true" />
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

/** Buyer Dashboard content, rendered inside the existing Dashboard Shell. */
export function BuyerDashboardPage() {
  const { dict } = useI18n();
  const b = dict.buyerDashboard;

  const tradeSeries = [
    { label: b.charts.tradeActivity.seriesRfqs, color: SERIES_COLORS.rfqs, values: TRADE_ACTIVITY.map((p) => p.rfqs) },
    { label: b.charts.tradeActivity.seriesConfirmed, color: SERIES_COLORS.confirmed, values: TRADE_ACTIVITY.map((p) => p.confirmedTrades) },
  ];
  const shipmentSegments = SHIPMENT_STATUS.map((item) => ({
    label: b.shipmentStatuses[item.status],
    value: item.value,
    color: SHIPMENT_COLORS[item.status],
  }));

  return (
    <DashboardContentLayout
      title={b.title}
      description={b.subtitle}
      actions={<ComingSoonAction label={b.createRfq} title={dict.dashboard.comingSoon} variant="primary" />}
    >
      <PrototypeDataBanner title={b.prototypeBanner.title} body={b.prototypeBanner.body} />

      <CriticalActionBanner
        title={b.criticalBanner.title}
        body={b.criticalBanner.body}
        action={b.criticalBanner.action}
        comingSoonLabel={dict.dashboard.comingSoon}
      />

      <div className="kpi-grid">
        {BUYER_KPIS.map((kpi) => {
          const meta = b.kpi[kpi.id];
          return (
            <KpiCard
              key={kpi.id}
              label={meta.label}
              tooltip={meta.tooltip}
              value={kpi.value}
              unit={kpi.unitKey ? b.units[kpi.unitKey] : undefined}
              support={meta.support}
              badge={kpi.id === "tradeSpend" ? b.kpi.tradeSpend.badge : undefined}
            />
          );
        })}
      </div>

      <div className="analytics-row">
        <div className="analytics-primary">
          <ChartCard
            title={b.charts.tradeActivity.title}
            tooltip={b.charts.tradeActivity.tooltip}
            source={b.charts.tradeActivity.source}
            summary={b.charts.tradeActivity.summary}
            legend={<ChartLegend items={tradeSeries.map((s) => ({ label: s.label, color: s.color }))} />}
          >
            <LineChart labels={TRADE_ACTIVITY.map((p) => b.months[p.month])} series={tradeSeries} />
          </ChartCard>
        </div>
        <div className="analytics-secondary">
          <ChartCard
            title={b.charts.shipmentStatus.title}
            tooltip={b.charts.shipmentStatus.tooltip}
            source={b.charts.shipmentStatus.source}
            summary={b.charts.shipmentStatus.summary}
            legend={<ChartLegend items={shipmentSegments.map((s) => ({ label: `${s.label} · ${s.value}`, color: s.color }))} />}
          >
            <DonutChart segments={shipmentSegments} total={SHIPMENT_TOTAL} centerLabel={b.charts.shipmentStatus.totalLabel} />
          </ChartCard>
        </div>
      </div>

      <BuyerActionTable />
      <RecentTransactionTable />
    </DashboardContentLayout>
  );
}
