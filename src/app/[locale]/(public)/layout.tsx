import { notFound } from "next/navigation";

import { isLocale } from "@/i18n/config";

/**
 * Public route group. Locale validation only — individual public pages own
 * their chrome (e.g. Test XLM renders the navigation header; Login is a
 * full-bleed split with its own in-page language switcher).
 */
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
  return children;
}
