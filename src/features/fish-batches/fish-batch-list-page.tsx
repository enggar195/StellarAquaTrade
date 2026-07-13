"use client";

import { useMemo, useState } from "react";

import { NavIcon } from "@/components/atoms/nav-icon";
import { TextLink } from "@/components/atoms/text-link";
import { ComingSoonAction } from "@/components/molecules/coming-soon-action";
import { BatchStatusCompositionCard } from "@/components/organisms/batch-status-composition-card";
import { FishBatchCardGrid } from "@/components/organisms/fish-batch-card-grid";
import { FishBatchFilterToolbar, type FishBatchView } from "@/components/organisms/fish-batch-filter-toolbar";
import { FishBatchPreviewDrawer } from "@/components/organisms/fish-batch-preview-drawer";
import { FishBatchTable } from "@/components/organisms/fish-batch-table";
import { KpiCard } from "@/components/organisms/kpi-card";
import { PrototypeDataBanner } from "@/components/organisms/prototype-data-banner";
import { DashboardContentLayout } from "@/components/templates/dashboard-content-layout";
import type { NavIconName } from "@/features/dashboard-shell/navigation";
import {
  DEFAULT_FISH_BATCH_FILTERS,
  FISH_BATCHES,
  FISH_BATCH_KPIS,
  type FishBatchFilterState,
  type FishBatchKpi,
  type FishBatchListItem,
} from "@/features/fish-batches/data/fish-batches.mock";
import {
  filterFishBatches,
  sortFishBatches,
  type FishBatchSortKey,
  type FishBatchSortState,
} from "@/features/fish-batches/fish-batch-logic";
import { useI18n } from "@/i18n/i18n-context";

const KPI_ICONS: Record<FishBatchKpi["id"], NavIconName> = {
  totalActiveBatches: "batch",
  availableQuantity: "catalog",
  qcPending: "inspection",
  reserved: "order",
};

/** Fish Batch List content, rendered inside the exporter Dashboard Shell. */
export function FishBatchListPage() {
  const { dict, locale } = useI18n();
  const f = dict.fishBatches;

  const [filters, setFilters] = useState<FishBatchFilterState>(DEFAULT_FISH_BATCH_FILTERS);
  const [sort, setSort] = useState<FishBatchSortState | null>(null);
  const [view, setView] = useState<FishBatchView>("table");
  const [previewBatch, setPreviewBatch] = useState<FishBatchListItem | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const visibleRows = useMemo(() => sortFishBatches(filterFishBatches(FISH_BATCHES, filters), sort), [filters, sort]);

  function handleSort(key: FishBatchSortKey) {
    setSort((current) =>
      current && current.key === key
        ? { key, direction: current.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" },
    );
  }

  function handlePreview(batch: FishBatchListItem) {
    setPreviewBatch(batch);
    setDrawerOpen(true);
  }

  return (
    <DashboardContentLayout
      title={f.title}
      description={f.subtitle}
      actions={
        <ComingSoonAction label={f.createFishBatch} title={f.createFishBatchTooltip} variant="primary" />
      }
    >
      <PrototypeDataBanner title={f.prototypeBanner.title} body={f.prototypeBanner.body} />

      <div className="kpi-grid">
        {FISH_BATCH_KPIS.map((kpi) => {
          const meta = f.kpi[kpi.id];
          return (
            <KpiCard
              key={kpi.id}
              label={meta.label}
              tooltip={meta.tooltip}
              value={kpi.value}
              unit={kpi.unitKey ? f.units[kpi.unitKey] : undefined}
              support={meta.support}
              icon={<NavIcon name={KPI_ICONS[kpi.id]} />}
            />
          );
        })}
      </div>

      <div className="batch-analytics">
        <BatchStatusCompositionCard />
      </div>

      <FishBatchFilterToolbar
        filters={filters}
        onChange={(patch) => setFilters((current) => ({ ...current, ...patch }))}
        onReset={() => setFilters(DEFAULT_FISH_BATCH_FILTERS)}
        view={view}
        onViewChange={setView}
        resultCount={visibleRows.length}
        total={FISH_BATCHES.length}
      />

      {view === "table" ? (
        <FishBatchTable rows={visibleRows} sort={sort} onSort={handleSort} onPreview={handlePreview} />
      ) : (
        <FishBatchCardGrid rows={visibleRows} onPreview={handlePreview} empty={f.table.empty} />
      )}

      <p className="exporter-testxlm">
        <TextLink href={`/${locale}/test-xlm`}>{f.openTestXlm}</TextLink>
      </p>

      <FishBatchPreviewDrawer batch={previewBatch} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </DashboardContentLayout>
  );
}
