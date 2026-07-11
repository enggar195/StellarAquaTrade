import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name — required since the button is icon-only. */
  label: string;
  children: ReactNode;
}

/** Icon-only button with an always-present accessible name. */
export function IconButton({ label, children, className, type = "button", ...props }: IconButtonProps) {
  return (
    <button
      type={type}
      className={`icon-button${className ? ` ${className}` : ""}`}
      aria-label={label}
      title={label}
      {...props}
    >
      {children}
    </button>
  );
}
