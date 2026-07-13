import type { ReactNode } from "react";

export interface BatchFilterGroupProps {
  label: string;
  children: ReactNode;
  /** Hide the visible label (still read by AT via wrapping). */
  hideLabel?: boolean;
}

/**
 * Labeled filter control. Wraps the control in a `<label>` so the visible text
 * is programmatically associated with the input/select without needing ids.
 */
export function BatchFilterGroup({ label, children, hideLabel = false }: BatchFilterGroupProps) {
  return (
    <label className="filter-group">
      <span className={hideLabel ? "sr-only" : "filter-label"}>{label}</span>
      {children}
    </label>
  );
}
