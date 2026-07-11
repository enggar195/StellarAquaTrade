"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { locales, localeNames, type Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/locale-path";

export interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
  ariaChange: string;
}

/**
 * Reusable language switcher. Preserves the active route (e.g. /test-xlm) when
 * changing language by rewriting only the locale segment of the current path.
 * Language names are shown as endonyms — never flag-only.
 */
export function LanguageSwitcher({ locale, label, ariaChange }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function select(next: Locale) {
    setOpen(false);
    if (next !== locale) {
      router.push(switchLocalePath(pathname, next));
    }
  }

  return (
    <div className="language-switcher" ref={rootRef}>
      <button
        type="button"
        className="ls-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaChange}
        title={label}
        onClick={() => setOpen((value) => !value)}
      >
        <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
          <path
            d="M12 3a9 9 0 100 18 9 9 0 000-18Zm0 0c2.5 2.4 3.8 5.7 3.8 9s-1.3 6.6-3.8 9m0-18c-2.5 2.4-3.8 5.7-3.8 9s1.3 6.6 3.8 9M3.5 9h17M3.5 15h17"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        <span>{localeNames[locale]}</span>
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" className={`ls-caret${open ? " open" : ""}`}>
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul className="ls-menu" role="listbox" aria-label={label}>
          {locales.map((option) => (
            <li key={option} role="none">
              <button
                type="button"
                role="option"
                aria-selected={option === locale}
                aria-current={option === locale}
                className="ls-option"
                lang={option}
                onClick={() => select(option)}
              >
                <span>{localeNames[option]}</span>
                {option === locale && (
                  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
