import type { ButtonHTMLAttributes, Ref } from "react";

export interface TooltipTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name, e.g. "Explain Sign-in form". */
  label: string;
  open?: boolean;
  ref?: Ref<HTMLButtonElement>;
}

/** The always-visible circular "?" help control used in card headers. */
export function TooltipTrigger({ label, open = false, className, ref, ...props }: TooltipTriggerProps) {
  return (
    <button
      ref={ref}
      type="button"
      className={`help-trigger${className ? ` ${className}` : ""}`}
      aria-label={label}
      aria-expanded={open}
      {...props}
    >
      <span aria-hidden="true">?</span>
    </button>
  );
}
