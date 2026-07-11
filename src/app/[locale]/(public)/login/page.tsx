import { notFound } from "next/navigation";

import { LoginPage } from "@/features/auth/login-page";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return <LoginPage locale={locale} dict={getDictionary(locale)} />;
}
