"use client";

import { BatchMedia } from "@/components/atoms/batch-media";
import { GradeBadge } from "@/components/atoms/grade-badge";
import { BatchAvailabilityStatus } from "@/components/molecules/batch-availability-status";
import { BatchIdentity } from "@/components/molecules/batch-identity";
import { BatchQcStatus } from "@/components/molecules/batch-qc-status";
import { BatchQuantity } from "@/components/molecules/batch-quantity";
import { HelpTooltip } from "@/components/molecules/help-tooltip";
import { GlassCard } from "@/components/organisms/glass-card";
import {
  SPECIES_SCIENTIFIC,
  type FishBatchListItem,
} from "@/features/fish-batches/data/fish-batches.mock";
import { useI18n } from "@/i18n/i18n-context";

export interface FishBatchCardGridProps {
  rows: FishBatchListItem[];
  onPreview: (batch: FishBatchListItem) => void;
  empty?: string;
}

/** Card view of the batch inventory (default at small breakpoints). */
export function FishBatchCardGrid({ rows, onPreview, empty }: FishBatchCardGridProps) {
  const { dict } = useI18n();
  const f = dict.fishBatches;

  if (rows.length === 0) {
    return <p className="batch-card-empty">{empty ?? f.table.empty}</p>;
  }

  return (
    <ul className="batch-card-grid">
      {rows.map((row) => (
        <li key={row.id}>
          <GlassCard className="batch-card">
            <BatchMedia species={row.species} alt={f.card.mediaAlt} />
            <div className="batch-card-body">
              <div className="batch-card-head">
                <BatchIdentity batchId={row.batchId} scientificName={SPECIES_SCIENTIFIC[row.species]} variety={row.variety} />
                <HelpTooltip title={row.batchId} content={f.drawer.visibility[row.qc]} />
              </div>

              <div className="batch-card-tags">
                <GradeBadge grade={row.grade} label={f.gradeLabels[row.grade]} />
                <span className="batch-card-size">{row.size}</span>
              </div>

              <BatchQuantity available={row.availableQty} initial={row.initialQty} unit={f.units.fish} />

              <p className="batch-card-origin">{row.origin}</p>

              <div className="batch-card-status">
                <BatchQcStatus qc={row.qc} label={f.qcLabels[row.qc]} />
                <BatchAvailabilityStatus availability={row.availability} label={f.statusLabels[row.availability]} />
              </div>

              <div className="batch-card-foot">
                <span className="batch-card-updated">{row.updated}</span>
                <button type="button" className="preview-button" onClick={() => onPreview(row)}>
                  {f.table.viewPreview}
                </button>
              </div>
            </div>
          </GlassCard>
        </li>
      ))}
    </ul>
  );
}
