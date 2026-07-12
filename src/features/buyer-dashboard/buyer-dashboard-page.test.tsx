// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";

import "@/test/dom";
import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/i18n-context";
import type { Locale } from "@/i18n/config";

let mockPathname = "/en/dashboard";

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

const { BuyerDashboardPage } = await import("./buyer-dashboard-page");

function renderPage(locale: Locale = "en") {
  mockPathname = `/${locale}/dashboard`;
  return render(
    <I18nProvider locale={locale} dict={getDictionary(locale)}>
      <BuyerDashboardPage />
    </I18nProvider>,
  );
}

afterEach(() => cleanup());

describe("BuyerDashboardPage", () => {
  it("renders the buyer dashboard heading in each locale", () => {
    for (const locale of ["en", "id", "zh-CN"] as const) {
      const { unmount } = renderPage(locale);
      expect(
        screen.getByRole("heading", { name: getDictionary(locale).buyerDashboard.title }),
      ).toBeInTheDocument();
      unmount();
    }
  });

  it("shows the prototype-data and critical banners", () => {
    renderPage();
    expect(screen.getByText("Prototype data", { selector: "strong" })).toBeInTheDocument();
    expect(screen.getByText("Arrival inspection due in 3 hours")).toBeInTheDocument();
  });

  it("renders exactly six KPI cards", () => {
    const { container } = renderPage();
    expect(container.querySelectorAll(".kpi-card")).toHaveLength(6);
  });

  it("marks Trade Spend as Testnet sample data", () => {
    renderPage();
    expect(screen.getByText("Trade Spend")).toBeInTheDocument();
    expect(screen.getByText("12,450")).toBeInTheDocument();
    expect(screen.getByText("Testnet sample")).toBeInTheDocument();
  });

  it("uses the exact Action Required and Transaction columns", () => {
    renderPage();
    const actionRegion = within(screen.getByRole("region", { name: "Action Required" }));
    expect(actionRegion.getAllByRole("columnheader").map((h) => h.textContent)).toEqual([
      "Priority",
      "Reference",
      "Exporter",
      "Required Action",
      "Deadline",
      "Status",
      "Action",
    ]);
    const txRegion = within(screen.getByRole("region", { name: "Recent Test XLM Transactions" }));
    expect(txRegion.getAllByRole("columnheader").map((h) => h.textContent)).toEqual([
      "Time",
      "Type",
      "Recipient",
      "Amount",
      "Network",
      "Status",
      "Transaction Hash",
    ]);
  });

  it("shows no fabricated hash for the failed transaction", () => {
    renderPage();
    expect(screen.getByText("Not available")).toBeInTheDocument();
  });

  it("keeps row/critical actions non-navigating (aria-disabled, not links)", () => {
    renderPage();
    for (const action of screen.getAllByRole("button", { name: "Review" })) {
      expect(action).toHaveAttribute("aria-disabled", "true");
      expect(action).not.toHaveAttribute("href");
    }
    expect(screen.getByRole("button", { name: "Create RFQ" })).toHaveAttribute("aria-disabled", "true");
  });

  it("exposes a locale-aware Open Test XLM link", () => {
    renderPage("id");
    const link = screen.getByRole("link", { name: "Buka Uji XLM" });
    expect(link).toHaveAttribute("href", "/id/test-xlm");
  });

  it("renders no Exporter Dashboard content and issues no network request", () => {
    const original = globalThis.fetch;
    const fetchSpy = vi.fn();
    globalThis.fetch = fetchSpy as unknown as typeof fetch;
    try {
      renderPage();
      expect(screen.queryByText("Exporter Dashboard")).toBeNull();
      expect(fetchSpy).not.toHaveBeenCalled();
    } finally {
      globalThis.fetch = original;
    }
  });
});
