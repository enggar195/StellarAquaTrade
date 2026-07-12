// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";

import "@/test/dom";
import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/i18n-context";
import type { Locale } from "@/i18n/config";

let mockPathname = "/en/exporter/dashboard";

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

const { ExporterDashboardPage } = await import("./exporter-dashboard-page");

function renderPage(locale: Locale = "en") {
  mockPathname = `/${locale}/exporter/dashboard`;
  return render(
    <I18nProvider locale={locale} dict={getDictionary(locale)}>
      <ExporterDashboardPage />
    </I18nProvider>,
  );
}

afterEach(() => cleanup());

describe("ExporterDashboardPage", () => {
  it("renders the exporter dashboard heading in each locale", () => {
    for (const locale of ["en", "id", "zh-CN"] as const) {
      const { unmount } = renderPage(locale);
      expect(
        screen.getByRole("heading", { name: getDictionary(locale).exporterDashboard.title }),
      ).toBeInTheDocument();
      unmount();
    }
  });

  it("shows the prototype-data and operational-alert banners", () => {
    renderPage();
    expect(screen.getByText("Prototype data", { selector: "strong" })).toBeInTheDocument();
    expect(
      screen.getByText("2 required documents are blocking shipment readiness"),
    ).toBeInTheDocument();
  });

  it("renders exactly six KPI cards", () => {
    const { container } = renderPage();
    expect(container.querySelectorAll(".kpi-card")).toHaveLength(6);
  });

  it("marks Funds Secured as a Testnet sample value", () => {
    renderPage();
    expect(screen.getByText("Funds Secured")).toBeInTheDocument();
    expect(screen.getByText("8,500")).toBeInTheDocument();
    expect(screen.getByText("Testnet sample")).toBeInTheDocument();
  });

  it("uses the exact RFQ and Shipment table columns", () => {
    renderPage();
    const rfqRegion = within(screen.getByRole("region", { name: "RFQs Awaiting Response" }));
    expect(rfqRegion.getAllByRole("columnheader").map((h) => h.textContent)).toEqual([
      "RFQ ID",
      "Buyer",
      "Destination",
      "Requested Fish",
      "Quantity",
      "Response Due",
      "Status",
      "Action",
    ]);
    const shipmentRegion = within(screen.getByRole("region", { name: "Upcoming Shipments" }));
    expect(shipmentRegion.getAllByRole("columnheader").map((h) => h.textContent)).toEqual([
      "Trade ID",
      "Buyer",
      "Route",
      "Planned Departure",
      "Readiness",
      "Blocking Item",
      "Status",
      "Action",
    ]);
  });

  it("renders an accessible readiness progressbar per shipment", () => {
    renderPage();
    const shipmentRegion = within(screen.getByRole("region", { name: "Upcoming Shipments" }));
    const bars = shipmentRegion.getAllByRole("progressbar");
    expect(bars).toHaveLength(3);
    expect(bars.map((b) => b.getAttribute("aria-valuenow"))).toEqual(["74", "88", "100"]);
  });

  it("labels blocking items with text, never colour alone", () => {
    renderPage();
    expect(screen.getByText("2 documents")).toBeInTheDocument();
    expect(screen.getByText("Packing QC")).toBeInTheDocument();
    expect(screen.getByText("None")).toBeInTheDocument();
  });

  it("keeps row and header actions non-navigating (aria-disabled, not links)", () => {
    renderPage();
    for (const action of screen.getAllByRole("button", { name: "Review" })) {
      expect(action).toHaveAttribute("aria-disabled", "true");
      expect(action).not.toHaveAttribute("href");
    }
    expect(screen.getByRole("button", { name: "Create Fish Batch" })).toHaveAttribute("aria-disabled", "true");
  });

  it("exposes a locale-aware Open Test XLM link", () => {
    renderPage("id");
    const label = getDictionary("id").exporterDashboard.openTestXlm;
    const link = screen.getByRole("link", { name: label });
    expect(link).toHaveAttribute("href", "/id/test-xlm");
  });

  it("issues no network request and renders no Buyer Dashboard content", () => {
    const original = globalThis.fetch;
    const fetchSpy = vi.fn();
    globalThis.fetch = fetchSpy as unknown as typeof fetch;
    try {
      renderPage();
      expect(screen.queryByText("Buyer Dashboard")).toBeNull();
      expect(fetchSpy).not.toHaveBeenCalled();
    } finally {
      globalThis.fetch = original;
    }
  });
});
