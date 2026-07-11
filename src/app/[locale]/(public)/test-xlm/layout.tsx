import { notFound } from "next/navigation";

import { PublicHeader } from "@/components/organisms/public-header";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

/** Test XLM chrome: the single primary navigation header above the page. */
export default async function TestXlmLayout({
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
    <div className="public-shell">
      <PublicHeader locale={locale} dict={dict} />
      {children}
    </div>
  );
}
