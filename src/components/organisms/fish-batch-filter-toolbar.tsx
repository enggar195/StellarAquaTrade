"use client";

import { BatchFilterGroup } from "@/components/molecules/batch-filter-group";
import {
  BATCH_ORIGINS,
  FISH_BATCH_AVAILABILITY_STATUSES,
  FISH_BATCH_GRADES,
  FISH_BATCH_QC_STATUSES,
  FISH_BATCH_SPECIES,
  SPECIES_SCIENTIFIC,
  type FishBatchFilterState,
} from "@/features/fish-batches/data/fish-batches.mock";
import { formatTemplate } from "@/i18n/get-dictionary";
import { useI18n } from "@/i18n/i18n-context";

export type FishBatchView = "table" | "cards";

export interface FishBatchFilterToolbarProps {
  filters: FishBatchFilterState;
  onChange: (patch: Partial<FishBatchFilterState>) => void;
  onReset: () => void;
  view: FishBatchView;
  onViewChange: (view: FishBatchView) => void;
  resultCount: number;
  total: number;
}

/** Search + faceted filters + result count + table/card view toggle. */
export function FishBatchFilterToolbar({
  filters,
  onChange,
  onReset,
  view,
  onViewChange,
  resultCount,
  total,
}: FishBatchFilterToolbarProps) {
  const { dict } = useI18n();
  const t = dict.fishBatches.toolbar;

  return (
    <section className="batch-toolbar glass-card" aria-label={t.filtersHeading}>
      <div className="batch-toolbar-search">
        <BatchFilterGroup label={t.searchLabel} hideLabel>
          <span className="search-field">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              type="search"
              className="aq-input search-input"
              placeholder={t.searchPlaceholder}
              value={filters.search}
              onChange={(event) => onChange({ search: event.target.value })}
            />
          </span>
        </BatchFilterGroup>
      </div>

      <div className="batch-toolbar-filters">
        <BatchFilterGroup label={t.availabilityLabel}>
          <select
            className="aq-select"
            value={filters.availability}
            onChange={(event) => onChange({ availability: event.target.value as FishBatchFilterState["availability"] })}
          >
            <option value="all">{t.allAvailability}</option>
            {FISH_BATCH_AVAILABILITY_STATUSES.map((status) => (
              <option key={status} value={status}>
                {dict.fishBatches.statusLabels[status]}
              </option>
            ))}
          </select>
        </BatchFilterGroup>

        <BatchFilterGroup label={t.qcLabel}>
          <select
            className="aq-select"
            value={filters.qc}
            onChange={(event) => onChange({ qc: event.target.value as FishBatchFilterState["qc"] })}
          >
            <option value="all">{t.allQc}</option>
            {FISH_BATCH_QC_STATUSES.map((status) => (
              <option key={status} value={status}>
                {dict.fishBatches.qcLabels[status]}
              </option>
            ))}
          </select>
        </BatchFilterGroup>

        <BatchFilterGroup label={t.speciesLabel}>
          <select
            className="aq-select"
            value={filters.species}
            onChange={(event) => onChange({ species: event.target.value as FishBatchFilterState["species"] })}
          >
            <option value="all">{t.allSpecies}</option>
            {FISH_BATCH_SPECIES.map((species) => (
              <option key={species} value={species}>
                {SPECIES_SCIENTIFIC[species]}
              </option>
            ))}
          </select>
        </BatchFilterGroup>

        <BatchFilterGroup label={t.originLabel}>
          <select
            className="aq-select"
            value={filters.origin}
            onChange={(event) => onChange({ origin: event.target.value })}
          >
            <option value="all">{t.allOrigins}</option>
            {BATCH_ORIGINS.map((origin) => (
              <option key={origin} value={origin}>
                {origin}
              </option>
            ))}
          </select>
        </BatchFilterGroup>

        <BatchFilterGroup label={t.gradeLabel}>
          <select
            className="aq-select"
            value={filters.grade}
            onChange={(event) => onChange({ grade: event.target.value as FishBatchFilterState["grade"] })}
          >
            <option value="all">{t.allGrades}</option>
            {FISH_BATCH_GRADES.map((grade) => (
              <option key={grade} value={grade}>
                {dict.fishBatches.gradeLabels[grade]}
              </option>
            ))}
          </select>
        </BatchFilterGroup>

        <button type="button" className="secondary-button reset-filters" onClick={onReset}>
          {t.reset}
        </button>
      </div>

      <div className="batch-toolbar-meta">
        <p className="result-count" role="status" aria-live="polite">
          {formatTemplate(t.resultCount, { count: String(resultCount), total: String(total) })}
        </p>
        <div className="view-toggle" role="group" aria-label={dict.fishBatches.viewToggle.label}>
          <button
            type="button"
            className={`seg-btn${view === "table" ? " is-active" : ""}`}
            aria-pressed={view === "table"}
            onClick={() => onViewChange("table")}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M3 5h18v14H3zM3 10h18M9 10v9" />
            </svg>
            {dict.fishBatches.viewToggle.table}
          </button>
          <button
            type="button"
            className={`seg-btn${view === "cards" ? " is-active" : ""}`}
            aria-pressed={view === "cards"}
            onClick={() => onViewChange("cards")}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
            </svg>
            {dict.fishBatches.viewToggle.cards}
          </button>
        </div>
      </div>
    </section>
  );
}
