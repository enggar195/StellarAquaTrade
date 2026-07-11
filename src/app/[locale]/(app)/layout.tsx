import { notFound } from "next/navigation";

import { DashboardLayout } from "@/components/templates/dashboard-layout";
import { DEFAULT_ROLE } from "@/features/dashboard-shell/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/i18n-context";

/**
 * Authenticated-application shell group. Prototype only — no auth gate. The
 * shell frame (sidebar/topbar/drawer) wraps every (app) page.
 */
export default async function AppGroupLayout({
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
    { label: dict.dashboard.breadcrumbHome, href: `/${locale}/dashboard` },
    { label: dict.dashboard.pageTitle, current: true },
  ];

  return (
    <I18nProvider locale={locale} dict={dict}>
      <DashboardLayout role={DEFAULT_ROLE} breadcrumbs={breadcrumbs}>
        {children}
      </DashboardLayout>
    </I18nProvider>
  );
}
