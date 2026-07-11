import { defaultLocale, isLocale, type Locale } from "./config";

/** The default landing route for a given locale (frontend Login prototype). */
export function localeLandingPath(locale: Locale): string {
  return `/${locale}/login`;
}

/** Where the root path ("/") sends visitors. */
export const rootRedirectPath = localeLandingPath(defaultLocale);

/**
 * Rewrite a pathname to a different locale while preserving the rest of the
 * route (e.g. "/en/test-xlm" -> "/id/test-xlm"). If the path has no locale
 * segment yet, the locale is prepended. This is what keeps the active Test XLM
 * page selected when the language is changed.
 */
export function switchLocalePath(pathname: string, next: Locale): string {
  const segments = pathname.split("/");
  // segments[0] is the empty string before the leading slash.
  if (segments.length > 1 && isLocale(segments[1])) {
    segments[1] = next;
  } else {
    segments.splice(1, 0, next);
  }
  return segments.join("/") || "/";
}
