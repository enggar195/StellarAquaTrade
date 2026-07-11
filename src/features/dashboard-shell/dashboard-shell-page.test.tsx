// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, screen } from "@testing-library/react";

import { getDictionary } from "@/i18n/get-dictionary";
import { renderWithI18n } from "@/test/dom";
import { DashboardShellPage } from "./dashboard-shell-page";

const t = getDictionary("en");

afterEach(() => cleanup());

describe("DashboardShellPage (prototype preview)", () => {
  it("renders the page title and prototype banner", () => {
    renderWithI18n(<DashboardShellPage />);
    expect(screen.getByRole("heading", { name: t.dashboard.pageTitle })).toBeInTheDocument();
    expect(screen.getByText(t.dashboard.bannerTitle)).toBeInTheDocument();
  });

  it("shows the three shell-status cards with help tooltips", () => {
    renderWithI18n(<DashboardShellPage />);
    expect(screen.getByText(t.dashboard.shellStatus.title)).toBeInTheDocument();
    expect(screen.getByText(t.dashboard.availableNow.title)).toBeInTheDocument();
    expect(screen.getByText(t.dashboard.comingNext.title)).toBeInTheDocument();
    // Every card exposes a visible "?" help control.
    expect(screen.getAllByRole("button", { name: /Explain/ }).length).toBe(3);
  });

  it("lists available modules and the coming-next dashboards (no business metrics)", () => {
    renderWithI18n(<DashboardShellPage />);
    expect(screen.getByText("Test XLM")).toBeInTheDocument();
    expect(screen.getByText("Buyer Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Exporter Dashboard")).toBeInTheDocument();
  });
});
