import type { ReactNode } from "react";

export interface InfoLineItemProps {
  label: string;
  /** Plain text value, or a node such as a Badge. */
  value: ReactNode;
}

/** Label/value row used inside informational cards. */
export function InfoLineItem({ label, value }: InfoLineItemProps) {
  return (
    <div className="aq-info-line">
      <span className="aq-info-label">{label}</span>
      <span className="aq-info-value">{value}</span>
    </div>
  );
}
