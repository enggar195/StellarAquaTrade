/**
 * Centralized, typed, deterministic prototype data for the Fish Batch List.
 * No random values, no current-time generation. Batch identifiers, scientific
 * names, varieties, origins, breeder names, sizes, quantities, and timestamps
 * are locale-neutral; statuses and grades are enum keys resolved to localized
 * labels by components. Sample data only — never connected to live stock,
 * breeder, QC, reservation, or trade services.
 */

export type FishBatchQcStatus = "passed" | "pending" | "revisionRequired";
export type FishBatchAvailabilityStatus = "available" | "partiallyReserved" | "reserved";
export type FishBatchGrade = "gradeA" | "gradeB" | "premium" | "showGrade";
export type FishBatchSpecies = "betta" | "guppy" | "discus" | "koi" | "arowana";

/** Locale-neutral scientific names (never translated). */
export const SPECIES_SCIENTIFIC: Record<FishBatchSpecies, string> = {
  betta: "Betta splendens",
  guppy: "Poecilia reticulata",
  discus: "Symphysodon",
  koi: "Cyprinus rubrofuscus",
  arowana: "Scleropages formosus",
};

/** Deterministic origins used both by rows and by the origin filter. */
export const BATCH_ORIGINS = [
  "Kediri, East Java",
  "Blitar, East Java",
  "Tulungagung, East Java",
  "Bogor, West Java",
  "Pontianak, West Kalimantan",
] as const;

export const FISH_BATCH_SPECIES: FishBatchSpecies[] = ["betta", "guppy", "discus", "koi", "arowana"];
export const FISH_BATCH_GRADES: FishBatchGrade[] = ["gradeA", "gradeB", "premium", "showGrade"];
export const FISH_BATCH_QC_STATUSES: FishBatchQcStatus[] = ["passed", "pending", "revisionRequired"];
export const FISH_BATCH_AVAILABILITY_STATUSES: FishBatchAvailabilityStatus[] = [
  "available",
  "partiallyReserved",
  "reserved",
];

/** Deterministic sort weight for grades (Show Grade highest tier). */
export const GRADE_ORDER: Record<FishBatchGrade, number> = {
  gradeB: 0,
  gradeA: 1,
  premium: 2,
  showGrade: 3,
};

export interface FishBatchListItem {
  /** Stable row key === batch identifier. */
  id: string;
  batchId: string;
  species: FishBatchSpecies;
  variety: string;
  grade: FishBatchGrade;
  size: string;
  availableQty: number;
  initialQty: number;
  origin: string;
  source: string;
  qc: FishBatchQcStatus;
  availability: FishBatchAvailabilityStatus;
  /** Human-readable timestamp (locale-neutral, WIB). */
  updated: string;
  /** Sortable ISO-like key (deterministic, not derived from the clock). */
  updatedSort: string;
}

/** The preview drawer renders the same row shape (nothing extra is fetched). */
export type FishBatchPreview = FishBatchListItem;

export interface FishBatchFilterState {
  search: string;
  availability: FishBatchAvailabilityStatus | "all";
  qc: FishBatchQcStatus | "all";
  species: FishBatchSpecies | "all";
  origin: string | "all";
  grade: FishBatchGrade | "all";
}

export const DEFAULT_FISH_BATCH_FILTERS: FishBatchFilterState = {
  search: "",
  availability: "all",
  qc: "all",
  species: "all",
  origin: "all",
  grade: "all",
};

export interface FishBatchStatusComposition {
  status: FishBatchAvailabilityStatus | "qcPending";
  value: number;
}

export interface FishBatchKpi {
  id: "totalActiveBatches" | "availableQuantity" | "qcPending" | "reserved";
  value: string;
  unitKey?: "fish" | "batches";
}

export const FISH_BATCH_KPIS: FishBatchKpi[] = [
  { id: "totalActiveBatches", value: "24" },
  { id: "availableQuantity", value: "1,037", unitKey: "fish" },
  { id: "qcPending", value: "3" },
  { id: "reserved", value: "5", unitKey: "batches" },
];

/** Batch status composition across all 24 active batches (donut, max 4 segments). */
export const BATCH_STATUS_COMPOSITION: FishBatchStatusComposition[] = [
  { status: "available", value: 12 },
  { status: "partiallyReserved", value: 4 },
  { status: "reserved", value: 5 },
  { status: "qcPending", value: 3 },
];

export const BATCH_COMPOSITION_TOTAL = 24;

export const FISH_BATCHES: FishBatchListItem[] = [
  {
    id: "BAT-IDN-260701-014",
    batchId: "BAT-IDN-260701-014",
    species: "betta",
    variety: "HMPK Super Red",
    grade: "gradeA",
    size: "4.5–5 cm",
    availableQty: 88,
    initialQty: 120,
    origin: "Kediri, East Java",
    source: "Nusantara Betta Farm",
    qc: "passed",
    availability: "partiallyReserved",
    updated: "11 Jul 2026 · 14:20 WIB",
    updatedSort: "2026-07-11T14:20",
  },
  {
    id: "BAT-IDN-260704-006",
    batchId: "BAT-IDN-260704-006",
    species: "guppy",
    variety: "Mosaic Mix",
    grade: "premium",
    size: "3–3.5 cm",
    availableQty: 240,
    initialQty: 240,
    origin: "Tulungagung, East Java",
    source: "AquaGuppy Indonesia",
    qc: "passed",
    availability: "available",
    updated: "11 Jul 2026 · 10:05 WIB",
    updatedSort: "2026-07-11T10:05",
  },
  {
    id: "BAT-IDN-260706-003",
    batchId: "BAT-IDN-260706-003",
    species: "discus",
    variety: "Assorted Grade A",
    grade: "gradeA",
    size: "8–10 cm",
    availableQty: 60,
    initialQty: 75,
    origin: "Bogor, West Java",
    source: "BlueDisc Hatchery",
    qc: "passed",
    availability: "partiallyReserved",
    updated: "10 Jul 2026 · 17:45 WIB",
    updatedSort: "2026-07-10T17:45",
  },
  {
    id: "BAT-IDN-260708-011",
    batchId: "BAT-IDN-260708-011",
    species: "koi",
    variety: "Kohaku Mix",
    grade: "showGrade",
    size: "12–15 cm",
    availableQty: 0,
    initialQty: 40,
    origin: "Blitar, East Java",
    source: "Blitar Koi Center",
    qc: "passed",
    availability: "reserved",
    updated: "10 Jul 2026 · 09:30 WIB",
    updatedSort: "2026-07-10T09:30",
  },
  {
    id: "BAT-IDN-260709-002",
    batchId: "BAT-IDN-260709-002",
    species: "arowana",
    variety: "Super Red",
    grade: "premium",
    size: "18–20 cm",
    availableQty: 8,
    initialQty: 12,
    origin: "Pontianak, West Kalimantan",
    source: "Kapuas Arowana Farm",
    qc: "pending",
    availability: "available",
    updated: "9 Jul 2026 · 16:10 WIB",
    updatedSort: "2026-07-09T16:10",
  },
  {
    id: "BAT-IDN-260710-009",
    batchId: "BAT-IDN-260710-009",
    species: "betta",
    variety: "Yellow Fancy HMPK",
    grade: "gradeB",
    size: "4–4.5 cm",
    availableQty: 150,
    initialQty: 150,
    origin: "Kediri, East Java",
    source: "Nusantara Betta Farm",
    qc: "revisionRequired",
    availability: "available",
    updated: "9 Jul 2026 · 11:25 WIB",
    updatedSort: "2026-07-09T11:25",
  },
  {
    id: "BAT-IDN-260711-004",
    batchId: "BAT-IDN-260711-004",
    species: "guppy",
    variety: "Blue Grass",
    grade: "gradeA",
    size: "3.5–4 cm",
    availableQty: 180,
    initialQty: 200,
    origin: "Tulungagung, East Java",
    source: "AquaGuppy Indonesia",
    qc: "passed",
    availability: "partiallyReserved",
    updated: "8 Jul 2026 · 15:40 WIB",
    updatedSort: "2026-07-08T15:40",
  },
  {
    id: "BAT-IDN-260712-001",
    batchId: "BAT-IDN-260712-001",
    species: "betta",
    variety: "Black Samurai HMPK",
    grade: "premium",
    size: "4.5–5 cm",
    availableQty: 0,
    initialQty: 100,
    origin: "Kediri, East Java",
    source: "Dragon Betta House",
    qc: "passed",
    availability: "reserved",
    updated: "8 Jul 2026 · 08:50 WIB",
    updatedSort: "2026-07-08T08:50",
  },
];
