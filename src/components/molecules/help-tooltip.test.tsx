// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithI18n } from "@/test/dom";
import { HelpTooltip } from "./help-tooltip";

afterEach(() => cleanup());

describe("HelpTooltip keyboard interaction", () => {
  it("opens on activation and closes on Escape", async () => {
    const user = userEvent.setup();
    renderWithI18n(<HelpTooltip title="Sign in" content="Prototype only — no real auth." />);

    const trigger = screen.getByRole("button", { name: "Explain Sign in" });
    await user.click(trigger);

    const tooltip = await screen.findByRole("tooltip");
    expect(tooltip).toHaveTextContent("Prototype only — no real auth.");

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("tooltip")).toBeNull();
  });

  it("exposes a keyboard-focusable help control", async () => {
    const user = userEvent.setup();
    renderWithI18n(<HelpTooltip title="Sign in" content="Prototype only." />);
    await user.tab();
    expect(screen.getByRole("button", { name: "Explain Sign in" })).toHaveFocus();
  });
});
