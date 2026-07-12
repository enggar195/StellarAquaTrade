import type { Priority } from "@/features/buyer-dashboard/data/buyer-dashboard.mock";

export interface PriorityIndicatorProps {
  priority: Priority;
  label: string;
}

/** Priority shown as icon + text + semantic color (never color alone). */
export function PriorityIndicator({ priority, label }: PriorityIndicatorProps) {
  return (
    <span className={`priority-indicator tone-${priority}`}>
      <span className="priority-bars" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>{label}</span>
    </span>
  );
}
