import type { FishBatchAvailabilityStatus } from "@/features/fish-batches/data/fish-batches.mock";

export interface BatchAvailabilityStatusProps {
  availability: FishBatchAvailabilityStatus;
  label: string;
}

/** Availability status pill: dot + text + semantic colour (text always present). */
export function BatchAvailabilityStatus({ availability, label }: BatchAvailabilityStatusProps) {
  return (
    <span className={`avail-status avail-${availability}`}>
      <span className="avail-dot" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}
