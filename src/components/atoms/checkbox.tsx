import type { InputHTMLAttributes } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

/** Accessible checkbox with an inline label. */
export function Checkbox({ label, className, id, ...props }: CheckboxProps) {
  return (
    <label className={`aq-checkbox${className ? ` ${className}` : ""}`} htmlFor={id}>
      <input id={id} type="checkbox" {...props} />
      <span className="aq-checkbox-box" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="12" height="12">
          <path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="aq-checkbox-label">{label}</span>
    </label>
  );
}
