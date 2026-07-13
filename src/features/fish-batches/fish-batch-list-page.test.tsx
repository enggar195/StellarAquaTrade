// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";

import "@/test/dom";
import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/i18n-context";
import type { Locale } from "@/i18n/config";

let mockPathname = "/en/exporter/fish-batches";

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

const { FishBatchListPage } = await import("./fish-batch-list-page");

function renderPage(locale: Locale = "en") {
  mockPathname = `/${locale}/exporter/fish-batches`;
  return render(
    <I18nProvider locale={locale} dict={getDictionary(locale)}>
      <FishBatchListPage />
    </I18nProvider>,
  );
}

function bodyRowCount(container: HTMLElement) {
  return container.querySelectorAll("tbody tr").length;
}

afterEach(() => cleanup());

describe("FishBatchListPage", () => {
  it("renders the heading in each locale", () => {
    for (const locale of ["en", "id", "zh-CN"] as const) {
      const { unmount } = renderPage(locale);
      expect(
        screen.getByRole("heading", { name: getDictionary(locale).fishBatches.title }),
      ).toBeInTheDocument();
      unmount();
    }
  });

  it("shows the prototype banner", () => {
    renderPage();
    expect(screen.getByText("Prototype inventory data", { selector: "strong" })).toBeInTheDocument();
  });

  it("renders exactly four KPI cards with the specified values", () => {
    const { container } = renderPage();
    expect(container.querySelectorAll(".kpi-card")).toHaveLength(4);
    expect(screen.getByText("Total Active Batches")).toBeInTheDocument();
    expect(screen.getByText("1,037")).toBeInTheDocument();
  });

  it("renders the batch status composition summary", () => {
    renderPage();
    expect(screen.getByText(getDictionary("en").fishBatches.composition.summary)).toBeInTheDocument();
  });

  it("uses the exact ten table columns", () => {
    renderPage();
    const region = within(screen.getByRole("region", { name: "Fish Batch Inventory" }));
    expect(region.getAllByRole("columnheader").map((h) => h.textContent)).toEqual([
      "Batch ID",
      "Species / Variety",
      "Grade",
      "Size",
      "Available / Initial Qty",
      "Origin",
      "QC",
      "Availability",
      "Updated",
      "Action",
    ]);
  });

  it("renders all eight batch rows by default", () => {
    const { container } = renderPage();
    expect(bodyRowCount(container)).toBe(8);
  });

  it("filters by batch ID search", () => {
    const { container } = renderPage();
    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "260704" } });
    expect(bodyRowCount(container)).toBe(1);
    expect(screen.getByText("BAT-IDN-260704-006")).toBeInTheDocument();
  });

  it("filters by variety search", () => {
    const { container } = renderPage();
    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "mosaic" } });
    expect(bodyRowCount(container)).toBe(1);
  });

  it("filters by availability and QC selects", () => {
    const { container } = renderPage();
    fireEvent.change(screen.getByLabelText("Availability"), { target: { value: "reserved" } });
    expect(bodyRowCount(container)).toBe(2);
    fireEvent.change(screen.getByLabelText("Availability"), { target: { value: "all" } });
    fireEvent.change(screen.getByLabelText("QC status"), { target: { value: "pending" } });
    expect(bodyRowCount(container)).toBe(1);
  });

  it("resets filters", () => {
    const { container } = renderPage();
    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "260704" } });
    expect(bodyRowCount(container)).toBe(1);
    fireEvent.click(screen.getByRole("button", { name: "Reset Filters" }));
    expect(bodyRowCount(container)).toBe(8);
  });

  it("preserves filter state when switching to card view", () => {
    renderPage();
    fireEvent.change(screen.getByLabelText("QC status"), { target: { value: "pending" } });
    fireEvent.click(screen.getByRole("button", { name: "Cards" }));
    // Only the QC-pending arowana batch survives the filter into card view.
    expect(screen.getByText("BAT-IDN-260709-002")).toBeInTheDocument();
    expect(screen.queryByText("BAT-IDN-260704-006")).toBeNull();
  });

  it("opens a read-only preview drawer and explains blocked buyer visibility", () => {
    renderPage();
    // Row 5 (arowana) is QC Pending → never buyer-visible.
    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "260709" } });
    fireEvent.click(screen.getByRole("button", { name: "View Preview" }));
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByText("BAT-IDN-260709-002")).toBeInTheDocument();
    expect(
      within(dialog).getByText("Not buyer-visible until internal QC is completed."),
    ).toBeInTheDocument();
  });

  it("closes the drawer on Escape and restores focus to the trigger", () => {
    const { container } = renderPage();
    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "260701" } });
    const trigger = screen.getByRole("button", { name: "View Preview" });
    trigger.focus();
    fireEvent.click(trigger);
    expect(container.querySelector(".batch-drawer-root")?.classList.contains("open")).toBe(true);

    fireEvent.keyDown(document, { key: "Escape" });
    expect(container.querySelector(".batch-drawer-root")?.classList.contains("open")).toBe(false);
    expect(document.activeElement).toBe(trigger);
  });

  it("never navigates: preview is a button and Create Fish Batch is disabled", () => {
    renderPage();
    expect(screen.queryByRole("link", { name: "View Preview" })).toBeNull();
    for (const preview of screen.getAllByRole("button", { name: "View Preview" })) {
      expect(preview).not.toHaveAttribute("href");
    }
    const create = screen.getByRole("button", { name: "Create Fish Batch" });
    expect(create).toHaveAttribute("aria-disabled", "true");
    expect(create).not.toHaveAttribute("href");
  });

  it("exposes a locale-aware Open Test XLM link", () => {
    renderPage("id");
    const label = getDictionary("id").fishBatches.openTestXlm;
    expect(screen.getByRole("link", { name: label })).toHaveAttribute("href", "/id/test-xlm");
  });

  it("issues no network request", () => {
    const original = globalThis.fetch;
    const fetchSpy = vi.fn();
    globalThis.fetch = fetchSpy as unknown as typeof fetch;
    try {
      renderPage();
      expect(fetchSpy).not.toHaveBeenCalled();
    } finally {
      globalThis.fetch = original;
    }
  });
});
