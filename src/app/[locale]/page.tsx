import { notFound, redirect } from "next/navigation";

import { isLocale } from "@/i18n/config";
import { localeLandingPath } from "@/i18n/locale-path";

/** Bare "/{locale}" lands on the Login page (the default entry point). */
export default async function LocaleIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  redirect(localeLandingPath(locale));
}
