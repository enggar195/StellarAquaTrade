// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import "@/test/dom";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

let mockPathname = "/en/login";

vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

// Imported after the mocks so the module graph picks them up.
const { LoginPage } = await import("./login-page");

afterEach(() => cleanup());

describe("Login page renders publicly for every locale", () => {
  for (const locale of locales) {
    it(`renders ${locale} with a locale-aware Test XLM link and no login gating`, () => {
      mockPathname = `/${locale}/login`;
      const dict = getDictionary(locale);
      render(<LoginPage locale={locale} dict={dict} />);

      expect(screen.getByRole("heading", { name: dict.auth.heading })).toBeInTheDocument();

      const link = screen.getByRole("link", { name: dict.auth.testXlmLink });
      expect(link).toHaveAttribute("href", `/${locale}/test-xlm`);
    });
  }
});
