"use client";

import { DonutChart } from "@/components/molecules/donut-chart";
import { ChartCard, type ChartState } from "@/components/organisms/chart-card";
import {
  BATCH_COMPOSITION_TOTAL,
  BATCH_STATUS_COMPOSITION,
  type FishBatchStatusComposition,
} from "@/features/fish-batches/data/fish-batches.mock";
import { useI18n } from "@/i18n/i18n-context";

export const COMPOSITION_COLORS: Record<FishBatchStatusComposition["status"], string> = {
  available: "#2dd4bf",
  partiallyReserved: "#34d3ee",
  reserved: "#8b7cff",
  qcPending: "#fbbf24",
};

export interface BatchStatusCompositionCardProps {
  state?: ChartState;
  segments?: FishBatchStatusComposition[];
  total?: number;
}

/** Donut card: how active batches split across availability + QC-pending states. */
export function BatchStatusCompositionCard({
  state = "ready",
  segments = BATCH_STATUS_COMPOSITION,
  total = BATCH_COMPOSITION_TOTAL,
}: BatchStatusCompositionCardProps) {
  const { dict } = useI18n();
  const f = dict.fishBatches;

  const donutSegments = segments.map((segment) => ({
    label: f.statusLabels[segment.status],
    value: segment.value,
    color: COMPOSITION_COLORS[segment.status],
  }));

  return (
    <ChartCard
      title={f.composition.title}
      tooltip={f.composition.tooltip}
      source={f.composition.source}
      summary={f.composition.summary}
      period={f.composition.period}
      state={state}
      legend={
        <ul className="legend-list">
          {donutSegments.map((segment) => (
            <li key={segment.label}>
              <span className="legend-swatch" style={{ background: segment.color }} />
              <span>{segment.label}</span>
              <strong>{segment.value}</strong>
            </li>
          ))}
        </ul>
      }
    >
      <DonutChart segments={donutSegments} total={total} centerLabel={f.composition.centerLabel} />
    </ChartCard>
  );
}
