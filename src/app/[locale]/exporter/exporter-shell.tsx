"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import type { Crumb } from "@/components/organisms/breadcrumbs";
import { DashboardLayout } from "@/components/templates/dashboard-layout";
import { useI18n } from "@/i18n/i18n-context";

/**
 * Exporter application frame. Reuses the shared DashboardLayout with the
 * exporter role and derives breadcrumbs from the current path so every exporter
 * page (Dashboard, Fish Batches, …) gets the correct trail without a per-route
 * layout. No auth gate — prototype routing only.
 */
export function ExporterShell({ children }: { children: ReactNode }) {
  const { dict, locale } = useI18n();
  const pathname = usePathname() ?? "";

  const home: Crumb = { label: dict.dashboard.breadcrumbHome, href: `/${locale}/exporter/dashboard` };
  const current: Crumb = pathname.includes("/exporter/fish-batches")
    ? { label: dict.fishBatches.title, current: true }
    : { label: dict.exporterDashboard.title, current: true };

  return (
    <DashboardLayout role="exporter" breadcrumbs={[home, current]}>
      {children}
    </DashboardLayout>
  );
}
