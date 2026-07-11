import type { ReactNode } from "react";

export type BadgeTone = "info" | "cyan" | "teal" | "violet" | "neutral";

export interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
}

/** Small status badge following the design-system status colors. */
export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return <span className={`aq-badge tone-${tone}`}>{children}</span>;
}
