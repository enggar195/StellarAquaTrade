export interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

/** Subtle glass divider. */
export function Separator({ orientation = "horizontal", className }: SeparatorProps) {
  return (
    <span
      role="separator"
      aria-orientation={orientation}
      className={`aq-separator ${orientation}${className ? ` ${className}` : ""}`}
    />
  );
}
