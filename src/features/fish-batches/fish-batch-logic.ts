import {
  GRADE_ORDER,
  SPECIES_SCIENTIFIC,
  type FishBatchFilterState,
  type FishBatchListItem,
} from "./data/fish-batches.mock";

export type FishBatchSortKey = "batchId" | "grade" | "available" | "updated";
export type SortDirection = "asc" | "desc";

export interface FishBatchSortState {
  key: FishBatchSortKey;
  direction: SortDirection;
}

/** Reserved quantity is always initial − available (never negative). */
export function reservedQty(item: FishBatchListItem): number {
  return Math.max(0, item.initialQty - item.availableQty);
}

/**
 * Whether a batch is a candidate for private buyer visibility. QC gates
 * visibility first (Pending / Revision Required are never buyer-visible), then
 * a batch must still have sellable quantity. Availability and QC are evaluated
 * independently — they are never merged into a single field.
 */
export function isBuyerVisibleCandidate(item: FishBatchListItem): boolean {
  if (item.qc !== "passed") return false;
  return item.availableQty > 0;
}

/** Free-text search haystack: batch ID, scientific name, variety, origin, breeder. */
function searchHaystack(item: FishBatchListItem): string {
  return [item.batchId, SPECIES_SCIENTIFIC[item.species], item.variety, item.origin, item.source]
    .join(" ")
    .toLowerCase();
}

/** Deterministic, client-side-only filtering. Pure — no side effects. */
export function filterFishBatches(
  rows: FishBatchListItem[],
  filters: FishBatchFilterState,
): FishBatchListItem[] {
  const query = filters.search.trim().toLowerCase();
  return rows.filter((row) => {
    if (query && !searchHaystack(row).includes(query)) return false;
    if (filters.availability !== "all" && row.availability !== filters.availability) return false;
    if (filters.qc !== "all" && row.qc !== filters.qc) return false;
    if (filters.species !== "all" && row.species !== filters.species) return false;
    if (filters.origin !== "all" && row.origin !== filters.origin) return false;
    if (filters.grade !== "all" && row.grade !== filters.grade) return false;
    return true;
  });
}

function compare(a: FishBatchListItem, b: FishBatchListItem, key: FishBatchSortKey): number {
  switch (key) {
    case "batchId":
      return a.batchId.localeCompare(b.batchId);
    case "grade":
      return GRADE_ORDER[a.grade] - GRADE_ORDER[b.grade];
    case "available":
      return a.availableQty - b.availableQty;
    case "updated":
      return a.updatedSort.localeCompare(b.updatedSort);
  }
}

/** Stable sort returning a new array. */
export function sortFishBatches(
  rows: FishBatchListItem[],
  sort: FishBatchSortState | null,
): FishBatchListItem[] {
  if (!sort) return rows;
  const sorted = [...rows].sort((a, b) => compare(a, b, sort.key));
  return sort.direction === "desc" ? sorted.reverse() : sorted;
}

export function areFiltersActive(filters: FishBatchFilterState): boolean {
  return (
    filters.search.trim() !== "" ||
    filters.availability !== "all" ||
    filters.qc !== "all" ||
    filters.species !== "all" ||
    filters.origin !== "all" ||
    filters.grade !== "all"
  );
}
