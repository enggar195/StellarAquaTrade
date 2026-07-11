// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

const { DashboardLayout } = await import("./dashboard-layout");

function renderShell(locale: Locale = "en") {
  mockPathname = `/${locale}/dashboard`;
  const dict = getDictionary(locale);
  return render(
    <I18nProvider locale={locale} dict={dict}>
      <DashboardLayout
        role="buyer"
        breadcrumbs={[
          { label: dict.dashboard.breadcrumbHome, href: `/${locale}/dashboard` },
          { label: dict.dashboard.pageTitle, current: true },
        ]}
      >
        <div>content</div>
      </DashboardLayout>
    </I18nProvider>,
  );
}

afterEach(() => cleanup());

describe("DashboardLayout shell", () => {
  it("shows the prototype-state label", () => {
    renderShell();
    expect(screen.getAllByText("Prototype Workspace").length).toBeGreaterThan(0);
  });

  it("marks the active dashboard item with aria-current=page", () => {
    renderShell();
    const dashboardLinks = screen.getAllByRole("link", { name: "Dashboard" });
    expect(dashboardLinks.some((link) => link.getAttribute("aria-current") === "page")).toBe(true);
  });

  it("keeps the Test XLM link locale-aware", () => {
    renderShell("id");
    const link = screen.getAllByRole("link", { name: "Uji XLM" })[0];
    expect(link).toHaveAttribute("href", "/id/test-xlm");
  });

  it("renders coming-soon items as non-navigating and disabled", () => {
    renderShell();
    const rfq = screen.getAllByRole("link", { name: /RFQs/ })[0];
    expect(rfq).toHaveAttribute("aria-disabled", "true");
    expect(rfq).not.toHaveAttribute("href");
  });

  it("collapses the sidebar via the collapse control", async () => {
    const user = userEvent.setup();
    const { container } = renderShell();
    const shell = container.querySelector(".dashboard-shell")!;
    expect(shell.classList.contains("sidebar-collapsed")).toBe(false);
    await user.click(screen.getByRole("button", { name: "Collapse sidebar" }));
    expect(shell.classList.contains("sidebar-collapsed")).toBe(true);
    expect(screen.getByRole("button", { name: "Expand sidebar" })).toBeInTheDocument();
  });

  it("opens the mobile drawer and closes it on Escape", async () => {
    const user = userEvent.setup();
    const { container } = renderShell();
    const drawer = container.querySelector(".mobile-drawer-root")!;
    expect(drawer.classList.contains("open")).toBe(false);
    await user.click(screen.getByRole("button", { name: "Open navigation menu" }));
    expect(drawer.classList.contains("open")).toBe(true);
    await user.keyboard("{Escape}");
    expect(drawer.classList.contains("open")).toBe(false);
  });
});
