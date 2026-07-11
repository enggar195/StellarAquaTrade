import type { LabelHTMLAttributes, ReactNode } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  /** Localized "Required" text (word, never only "*"). */
  requiredText?: string;
}

export function Label({ children, requiredText, className, ...props }: LabelProps) {
  return (
    <label className={`aq-label${className ? ` ${className}` : ""}`} {...props}>
      <span>{children}</span>
      {requiredText && <em className="aq-label-required">{requiredText}</em>}
    </label>
  );
}
