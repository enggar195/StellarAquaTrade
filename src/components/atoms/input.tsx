import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

/** Glass text input. Pairs with Label/FormField via a shared id. */
export function Input({ invalid = false, className, ...props }: InputProps) {
  return (
    <input
      className={`aq-input${invalid ? " is-invalid" : ""}${className ? ` ${className}` : ""}`}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}
