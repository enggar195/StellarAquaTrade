import { describe, expect, it } from "vitest";

import { DEFAULT_FISH_BATCH_FILTERS, FISH_BATCHES, type FishBatchFilterState } from "./data/fish-batches.mock";
import {
  areFiltersActive,
  filterFishBatches,
  isBuyerVisibleCandidate,
  reservedQty,
  sortFishBatches,
} from "./fish-batch-logic";

const f = (patch: Partial<FishBatchFilterState>): FishBatchFilterState => ({ ...DEFAULT_FISH_BATCH_FILTERS, ...patch });
const ids = (rows: typeof FISH_BATCHES) => rows.map((r) => r.batchId);

describe("filterFishBatches", () => {
  it("returns all rows for the default (empty) filter", () => {
    expect(filterFishBatches(FISH_BATCHES, DEFAULT_FISH_BATCH_FILTERS)).toHaveLength(8);
  });

  it("searches by batch ID", () => {
    expect(ids(filterFishBatches(FISH_BATCHES, f({ search: "260704" })))).toEqual(["BAT-IDN-260704-006"]);
  });

  it("searches by variety", () => {
    const rows = filterFishBatches(FISH_BATCHES, f({ search: "mosaic" }));
    expect(rows).toHaveLength(1);
    expect(rows[0].variety).toBe("Mosaic Mix");
  });

  it("searches by origin and scientific name", () => {
    expect(filterFishBatches(FISH_BATCHES, f({ search: "pontianak" }))).toHaveLength(1);
    expect(filterFishBatches(FISH_BATCHES, f({ search: "Scleropages" }))).toHaveLength(1);
  });

  it("filters by availability, QC, species and grade", () => {
    expect(filterFishBatches(FISH_BATCHES, f({ availability: "reserved" }))).toHaveLength(2);
    expect(filterFishBatches(FISH_BATCHES, f({ qc: "pending" }))).toHaveLength(1);
    expect(filterFishBatches(FISH_BATCHES, f({ species: "betta" }))).toHaveLength(3);
    expect(filterFishBatches(FISH_BATCHES, f({ grade: "premium" }))).toHaveLength(3);
  });

  it("combines filters (AND semantics)", () => {
    expect(filterFishBatches(FISH_BATCHES, f({ species: "betta", grade: "premium" }))).toHaveLength(1);
  });
});

describe("sortFishBatches", () => {
  it("returns the same order when unsorted", () => {
    expect(sortFishBatches(FISH_BATCHES, null)).toBe(FISH_BATCHES);
  });

  it("sorts by available quantity", () => {
    expect(sortFishBatches(FISH_BATCHES, { key: "available", direction: "desc" })[0].availableQty).toBe(240);
    expect(sortFishBatches(FISH_BATCHES, { key: "available", direction: "asc" })[0].availableQty).toBe(0);
  });

  it("sorts by batch ID and updated timestamp", () => {
    expect(sortFishBatches(FISH_BATCHES, { key: "batchId", direction: "asc" })[0].batchId).toBe("BAT-IDN-260701-014");
    expect(sortFishBatches(FISH_BATCHES, { key: "updated", direction: "desc" })[0].updatedSort).toBe("2026-07-11T14:20");
  });

  it("does not mutate the input", () => {
    const before = ids(FISH_BATCHES);
    sortFishBatches(FISH_BATCHES, { key: "available", direction: "asc" });
    expect(ids(FISH_BATCHES)).toEqual(before);
  });
});

describe("derived helpers", () => {
  it("computes reserved as initial − available", () => {
    const byId = Object.fromEntries(FISH_BATCHES.map((b) => [b.batchId, b]));
    expect(reservedQty(byId["BAT-IDN-260701-014"])).toBe(32);
    expect(reservedQty(byId["BAT-IDN-260704-006"])).toBe(0);
    expect(reservedQty(byId["BAT-IDN-260708-011"])).toBe(40);
  });

  it("gates buyer visibility on QC first, then sellable quantity", () => {
    const byId = Object.fromEntries(FISH_BATCHES.map((b) => [b.batchId, b]));
    expect(isBuyerVisibleCandidate(byId["BAT-IDN-260701-014"])).toBe(true); // passed + stock
    expect(isBuyerVisibleCandidate(byId["BAT-IDN-260709-002"])).toBe(false); // QC pending
    expect(isBuyerVisibleCandidate(byId["BAT-IDN-260710-009"])).toBe(false); // revision required
    expect(isBuyerVisibleCandidate(byId["BAT-IDN-260708-011"])).toBe(false); // passed but 0 available
  });

  it("reports whether any filter is active", () => {
    expect(areFiltersActive(DEFAULT_FISH_BATCH_FILTERS)).toBe(false);
    expect(areFiltersActive(f({ search: "betta" }))).toBe(true);
    expect(areFiltersActive(f({ grade: "premium" }))).toBe(true);
  });
});
