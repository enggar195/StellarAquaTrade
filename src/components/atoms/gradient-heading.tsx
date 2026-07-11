import type { ReactNode } from "react";

export interface GradientHeadingProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/** White→slate gradient heading used across the auth and Test XLM surfaces. */
export function GradientHeading({ children, as = "h1", className }: GradientHeadingProps) {
  const Tag = as;
  return <Tag className={`aq-gradient-heading${className ? ` ${className}` : ""}`}>{children}</Tag>;
}
