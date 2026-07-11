import Link from "next/link";

export interface NavigationItemProps {
  href: string;
  label: string;
  active?: boolean;
  disabled?: boolean;
}

/**
 * A single primary-navigation entry. Renders an accessible link, or a
 * non-interactive element when disabled.
 */
export function NavigationItem({
  href,
  label,
  active = false,
  disabled = false,
}: NavigationItemProps) {
  if (disabled) {
    return (
      <span className="nav-item disabled" aria-disabled="true">
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`nav-item${active ? " active" : ""}`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
