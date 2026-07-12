import { StatusDot } from "@/components/atoms/status-dot";

export interface PrototypeDataNoteProps {
  label: string;
}

/** Small inline "prototype data" marker for chart/table sources. */
export function PrototypeDataNote({ label }: PrototypeDataNoteProps) {
  return (
    <span className="prototype-data-note">
      <StatusDot tone="prototype" />
      <span>{label}</span>
    </span>
  );
}
