import type { FishBatchQcStatus } from "@/features/fish-batches/data/fish-batches.mock";

export interface BatchQcStatusProps {
  qc: FishBatchQcStatus;
  label: string;
}

const ICON: Record<FishBatchQcStatus, string> = {
  passed: "M5 12.5l4.5 4.5L19 7",
  pending: "M12 7v5l3 2M12 21a9 9 0 100-18 9 9 0 000 18z",
  revisionRequired: "M12 3l9 16H3zM12 10v4M12 17h.01",
};

/** QC status pill: icon + text + semantic colour (text always present). */
export function BatchQcStatus({ qc, label }: BatchQcStatusProps) {
  return (
    <span className={`qc-status qc-${qc}`}>
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={ICON[qc]} />
      </svg>
      <span>{label}</span>
    </span>
  );
}
