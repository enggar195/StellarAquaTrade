import { notFound } from "next/navigation";

import { DashboardLayout } from "@/components/templates/dashboard-layout";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/i18n-context";

/**
 * Exporter application shell (prototype). Reuses the shared DashboardLayout with
 * the exporter navigation role. No auth gate — real role-based auth is not
 * implemented; this is a prototype route.
 */
export default async function ExporterLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const dict = getDictionary(locale);
  const breadcrumbs = [
    { label: dict.dashboard.breadcrumbHome, href: `/${locale}/exporter/dashboard` },
    { label: dict.exporterDashboard.title, current: true },
  ];

  return (
    <I18nProvider locale={locale} dict={dict}>
      <DashboardLayout role="exporter" breadcrumbs={breadcrumbs}>
        {children}
      </DashboardLayout>
    </I18nProvider>
  );
}
