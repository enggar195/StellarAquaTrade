export interface ComingSoonBadgeProps {
  label: string;
}

/** Small muted badge marking a not-yet-implemented navigation item. */
export function ComingSoonBadge({ label }: ComingSoonBadgeProps) {
  return <span className="coming-soon-badge">{label}</span>;
}
