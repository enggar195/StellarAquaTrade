import type { FishBatchQcStatus } from "@/features/fish-batches/data/fish-batches.mock";

export interface BatchVisibilityNoteProps {
  qc: FishBatchQcStatus;
  note: string;
}

/**
 * Buyer-visibility explanation for a batch. QC gates visibility, so a "passed"
 * batch reads as eligible (ok) while Pending / Revision Required read as blocked.
 * Icon + text — never colour alone.
 */
export function BatchVisibilityNote({ qc, note }: BatchVisibilityNoteProps) {
  const eligible = qc === "passed";
  return (
    <p className={`visibility-note ${eligible ? "is-eligible" : "is-blocked"}`}>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {eligible ? (
          <>
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
            <circle cx="12" cy="12" r="3" />
          </>
        ) : (
          <>
            <path d="M2 12s3.5-7 10-7c2 0 3.8.6 5.3 1.5M22 12s-3.5 7-10 7c-2 0-3.8-.6-5.3-1.5" />
            <path d="M4 4l16 16" />
          </>
        )}
      </svg>
      <span>{note}</span>
    </p>
  );
}
