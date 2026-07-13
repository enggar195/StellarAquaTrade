"use client";

import { GradeBadge } from "@/components/atoms/grade-badge";
import { SpeciesScientificName } from "@/components/atoms/species-scientific-name";
import { BatchAvailabilityStatus } from "@/components/molecules/batch-availability-status";
import { BatchId } from "@/components/atoms/batch-id";
import { BatchQcStatus } from "@/components/molecules/batch-qc-status";
import { BatchQuantity } from "@/components/molecules/batch-quantity";
import { CardHeaderWithHelp } from "@/components/molecules/card-header-with-help";
import { DataTable, type DataTableColumn } from "@/components/organisms/data-table";
import { GlassCard } from "@/components/organisms/glass-card";
import {
  SPECIES_SCIENTIFIC,
  type FishBatchListItem,
} from "@/features/fish-batches/data/fish-batches.mock";
import type { FishBatchSortKey, FishBatchSortState } from "@/features/fish-batches/fish-batch-logic";
import { formatTemplate } from "@/i18n/get-dictionary";
import { useI18n } from "@/i18n/i18n-context";

export interface FishBatchTableProps {
  rows: FishBatchListItem[];
  sort: FishBatchSortState | null;
  onSort: (key: FishBatchSortKey) => void;
  onPreview: (batch: FishBatchListItem) => void;
}

/** Fish Batch Inventory table: reuses DataTable, adds sorting + preview action. */
export function FishBatchTable({ rows, sort, onSort, onPreview }: FishBatchTableProps) {
  const { dict } = useI18n();
  const f = dict.fishBatches;
  const t = f.table;

  const columns: DataTableColumn<FishBatchListItem>[] = [
    { key: "batchId", header: t.headers.batchId, sortable: true, render: (row) => <BatchId value={row.batchId} /> },
    {
      key: "speciesVariety",
      header: t.headers.speciesVariety,
      render: (row) => (
        <span className="cell-species">
          <SpeciesScientificName name={SPECIES_SCIENTIFIC[row.species]} />
          <span className="batch-variety">{row.variety}</span>
        </span>
      ),
    },
    { key: "grade", header: t.headers.grade, sortable: true, render: (row) => <GradeBadge grade={row.grade} label={f.gradeLabels[row.grade]} /> },
    { key: "size", header: t.headers.size, render: (row) => <span className="cell-size">{row.size}</span> },
    {
      key: "available",
      header: t.headers.quantity,
      sortable: true,
      render: (row) => <BatchQuantity available={row.availableQty} initial={row.initialQty} />,
    },
    { key: "origin", header: t.headers.origin, render: (row) => row.origin },
    { key: "qc", header: t.headers.qc, render: (row) => <BatchQcStatus qc={row.qc} label={f.qcLabels[row.qc]} /> },
    {
      key: "availability",
      header: t.headers.availability,
      render: (row) => <BatchAvailabilityStatus availability={row.availability} label={f.statusLabels[row.availability]} />,
    },
    { key: "updated", header: t.headers.updated, sortable: true, render: (row) => <span className="cell-updated">{row.updated}</span> },
    {
      key: "action",
      header: t.headers.action,
      align: "end",
      render: (row) => (
        <button type="button" className="preview-button" onClick={() => onPreview(row)}>
          {t.viewPreview}
        </button>
      ),
    },
  ];

  return (
    <GlassCard className="table-card">
      <CardHeaderWithHelp title={t.title} tooltip={t.tooltip} />
      <DataTable
        caption={t.title}
        columns={columns}
        rows={rows}
        getRowKey={(row) => row.id}
        empty={t.empty}
        sort={{
          activeKey: sort?.key ?? null,
          direction: sort?.direction ?? "asc",
          onSort: (key) => onSort(key as FishBatchSortKey),
          label: (header) => formatTemplate(t.sortAria, { column: header }),
        }}
      />
    </GlassCard>
  );
}
