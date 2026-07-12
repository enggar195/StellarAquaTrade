export interface ComingSoonActionProps {
  label: string;
  /** Accessible title, e.g. the localized "Coming soon". */
  title: string;
  variant?: "primary" | "secondary";
  block?: boolean;
}

/**
 * A future-feature action: keyboard-focusable (so the state is discoverable)
 * but non-navigating and `aria-disabled`. Never routes anywhere.
 */
export function ComingSoonAction({ label, title, variant = "secondary", block = false }: ComingSoonActionProps) {
  const base = variant === "primary" ? "primary-button" : "secondary-button";
  return (
    <button
      type="button"
      className={`${base} coming-soon-action${block ? " aq-btn-block" : ""}`}
      aria-disabled="true"
      title={title}
      onClick={(event) => event.preventDefault()}
    >
      {label}
    </button>
  );
}
