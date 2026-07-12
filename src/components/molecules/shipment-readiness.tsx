import type { CSSProperties } from "react";

export interface ShipmentReadinessProps {
  value: number;
  /** Localized accessible label, e.g. "Readiness". */
  label: string;
}

/** Readiness shown as an accessible progress bar + percentage text. */
export function ShipmentReadiness({ value, label }: ShipmentReadinessProps) {
  const tone = value >= 100 ? "ready" : value >= 85 ? "ok" : "risk";
  return (
    <span
      className={`readiness tone-${tone}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${label}: ${value}%`}
    >
      <span className="readiness-bar" aria-hidden="true">
        <span className="readiness-fill" style={{ width: `${value}%` } as CSSProperties} />
      </span>
      <span className="readiness-value">{value}%</span>
    </span>
  );
}
