import { notFound } from "next/navigation";

import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/i18n-context";

import { ExporterShell } from "./exporter-shell";

/**
 * Exporter application shell (prototype). Reuses the shared DashboardLayout with
 * the exporter navigation role via ExporterShell, which derives path-aware
 * breadcrumbs. No auth gate — real role-based auth is not implemented; this is a
 * prototype route.
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

  return (
    <I18nProvider locale={locale} dict={dict}>
      <ExporterShell>{children}</ExporterShell>
    </I18nProvider>
  );
}
