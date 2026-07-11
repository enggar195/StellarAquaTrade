"use client";

import { useEffect } from "react";

import type { Locale } from "./config";

/**
 * Keeps <html lang> in sync with the active locale. The root layout renders a
 * default `lang`, and this corrects it for id / zh-CN (and on client-side
 * locale switches). Renders nothing.
 */
export function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
