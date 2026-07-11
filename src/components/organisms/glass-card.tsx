import type { ReactNode } from "react";

export interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

/** Oceanic-glass surface. Dark translucent, blurred, thin border, soft shadow. */
export function GlassCard({ children, className }: GlassCardProps) {
  return <section className={`glass-card${className ? ` ${className}` : ""}`}>{children}</section>;
}
