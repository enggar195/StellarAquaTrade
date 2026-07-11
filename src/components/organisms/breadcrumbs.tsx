"use client";

import { BreadcrumbItem } from "@/components/molecules/breadcrumb-item";
import { useI18n } from "@/i18n/i18n-context";

export interface Crumb {
  label: string;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbsProps {
  items: Crumb[];
}

/** Breadcrumb trail shown in the topbar. */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { dict } = useI18n();
  return (
    <nav className="breadcrumbs" aria-label={dict.accessibility.breadcrumb}>
      <ol>
        {items.map((crumb) => (
          <BreadcrumbItem key={crumb.label} label={crumb.label} href={crumb.href} current={crumb.current} />
        ))}
      </ol>
    </nav>
  );
}
