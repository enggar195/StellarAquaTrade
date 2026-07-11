export type StatusTone = "online" | "prototype" | "muted";

export interface StatusDotProps {
  tone?: StatusTone;
  pulse?: boolean;
}

/** Small status indicator dot (color is never the only signal — pair with text). */
export function StatusDot({ tone = "muted", pulse = false }: StatusDotProps) {
  return <span className={`status-indicator tone-${tone}${pulse ? " pulse" : ""}`} aria-hidden="true" />;
}
