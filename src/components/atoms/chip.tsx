import type { ReactNode } from "react";

export interface ChipProps {
  children: ReactNode;
  /** Show the leading dot marker (default true). */
  dot?: boolean;
}

/** Pill-shaped feature chip. */
export function Chip({ children, dot = true }: ChipProps) {
  return <li className={`aq-chip${dot ? " has-dot" : ""}`}>{children}</li>;
}
