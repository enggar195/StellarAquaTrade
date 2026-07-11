import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "primary-button",
  secondary: "secondary-button",
  ghost: "ghost-button",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
}

/**
 * Primary/secondary/ghost button. Reuses the existing button surface styles so
 * the design language stays consistent across Test XLM and Login.
 */
export function Button({
  variant = "primary",
  loading = false,
  fullWidth = false,
  leadingIcon,
  children,
  className,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [
    VARIANT_CLASS[variant],
    fullWidth ? "aq-btn-block" : "",
    loading ? "is-loading" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && <span className="aq-spinner" aria-hidden="true" />}
      {!loading && leadingIcon}
      <span>{children}</span>
    </button>
  );
}
