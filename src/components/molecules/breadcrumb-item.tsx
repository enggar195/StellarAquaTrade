import Link from "next/link";

export interface BreadcrumbItemProps {
  label: string;
  href?: string;
  current?: boolean;
}

/** One breadcrumb segment — a link, or the current (non-link) page. */
export function BreadcrumbItem({ label, href, current = false }: BreadcrumbItemProps) {
  return (
    <li className="breadcrumb-item">
      {href && !current ? (
        <Link href={href}>{label}</Link>
      ) : (
        <span aria-current={current ? "page" : undefined}>{label}</span>
      )}
    </li>
  );
}
