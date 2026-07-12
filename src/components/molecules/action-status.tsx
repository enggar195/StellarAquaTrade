export type ActionStatusTone = "pending" | "funding" | "info" | "negotiating";

export interface ActionStatusProps {
  label: string;
  tone: ActionStatusTone;
}

/** Status pill: dot + text + semantic color (text always present). */
export function ActionStatus({ label, tone }: ActionStatusProps) {
  return (
    <span className={`action-status tone-${tone}`}>
      <span className="action-status-dot" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}
