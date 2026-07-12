"use client";

import { NavIcon } from "@/components/atoms/nav-icon";
import { TextLink } from "@/components/atoms/text-link";
import { ComingSoonAction } from "@/components/molecules/coming-soon-action";
import { HorizontalBarChart } from "@/components/molecules/horizontal-bar-chart";
import { StackedBarChart } from "@/components/molecules/stacked-bar-chart";
import { ChartCard } from "@/components/organisms/chart-card";
import { CriticalActionBanner } from "@/components/organisms/critical-action-banner";
import { ExporterRfqTable } from "@/components/organisms/exporter-rfq-table";
import { KpiCard } from "@/components/organisms/kpi-card";
import { PrototypeDataBanner } from "@/components/organisms/prototype-data-banner";
import { UpcomingShipmentTable } from "@/components/organisms/upcoming-shipment-table";
import { DashboardContentLayout } from "@/components/templates/dashboard-content-layout";
import type { NavIconName } from "@/features/dashboard-shell/navigation";
import {
  EXPORTER_KPIS,
  PREPARATION_TOTAL,
  PREPARATION_WORKLOAD,
  SPECIES_AVAILABILITY,
  type ExporterKpiId,
  type StageKey,
} from "@/features/exporter-dashboard/data/exporter-dashboard.mock";
import { useI18n } from "@/i18n/i18n-context";

const KPI_ICONS: Record<ExporterKpiId, NavIconName> = {
  availableBatches: "batch",
  newRfqs: "rfq",
  ordersInPreparation: "order",
  documentsMissing: "document",
  fundsSecured: "xlm",
  claimsAwaitingResponse: "claim",
};

const STAGE_COLORS: Record<StageKey, string> = {
  allocation: "#60a5fa",
  healthDocuments: "#fbbf24",
  packing: "#34d3ee",
  ready: "#2dd4bf",
};

/** Exporter Dashboard content, rendered inside the existing Dashboard Shell. */
export function ExporterDashboardPage() {
  const { dict, locale } = useI18n();
  const e = dict.exporterDashboard;

  const speciesItems = SPECIES_AVAILABILITY.map((item) => ({ label: e.species[item.species], value: item.value }));
  const workloadSegments = PREPARATION_WORKLOAD.map((item) => ({
    label: e.stages[item.stage],
    value: item.value,
    color: STAGE_COLORS[item.stage],
  }));

  return (
    <DashboardContentLayout
      title={e.title}
      description={e.subtitle}
      actions={<ComingSoonAction label={e.createFishBatch} title={dict.dashboard.comingSoon} variant="primary" />}
    >
      <PrototypeDataBanner title={e.prototypeBanner.title} body={e.prototypeBanner.body} />

      <CriticalActionBanner
        title={e.operationalAlert.title}
        body={e.operationalAlert.body}
        action={e.operationalAlert.action}
        comingSoonLabel={dict.dashboard.comingSoon}
      />

      <div className="kpi-grid">
        {EXPORTER_KPIS.map((kpi) => {
          const meta = e.kpi[kpi.id];
          return (
            <KpiCard
              key={kpi.id}
              label={meta.label}
              tooltip={meta.tooltip}
              value={kpi.value}
              unit={kpi.id === "fundsSecured" ? e.units.xlm : undefined}
              support={meta.support}
              badge={kpi.id === "fundsSecured" ? e.kpi.fundsSecured.badge : undefined}
              icon={<NavIcon name={KPI_ICONS[kpi.id]} />}
            />
          );
        })}
      </div>

      <div className="analytics-row">
        <div className="analytics-primary">
          <ChartCard
            title={e.charts.availableQuantity.title}
            tooltip={e.charts.availableQuantity.tooltip}
            source={e.charts.availableQuantity.source}
            summary={e.charts.availableQuantity.summary}
            period={e.charts.availableQuantity.period}
            legend={null}
          >
            <HorizontalBarChart items={speciesItems} unit={e.units.fish} />
          </ChartCard>
        </div>
        <div className="analytics-secondary">
          <ChartCard
            title={e.charts.preparationWorkload.title}
            tooltip={e.charts.preparationWorkload.tooltip}
            source={e.charts.preparationWorkload.source}
            summary={e.charts.preparationWorkload.summary}
            period={e.charts.preparationWorkload.period}
            legend={<p className="sbar-total">{e.charts.preparationWorkload.total}</p>}
          >
            <StackedBarChart segments={workloadSegments} total={PREPARATION_TOTAL} />
          </ChartCard>
        </div>
      </div>

      <ExporterRfqTable />
      <UpcomingShipmentTable />

      <p className="exporter-testxlm">
        <TextLink href={`/${locale}/test-xlm`}>{e.openTestXlm}</TextLink>
      </p>
    </DashboardContentLayout>
  );
}
