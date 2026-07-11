import { notFound } from "next/navigation";

import { PublicHeader } from "@/components/organisms/public-header";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function PublicLayout({
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
