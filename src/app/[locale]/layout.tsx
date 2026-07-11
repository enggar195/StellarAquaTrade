import { notFound } from "next/navigation";

import { isLocale, locales } from "@/i18n/config";
import { HtmlLang } from "@/i18n/html-lang";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
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

  return (
    <>
      <HtmlLang locale={locale} />
      {children}
    </>
  );
}
