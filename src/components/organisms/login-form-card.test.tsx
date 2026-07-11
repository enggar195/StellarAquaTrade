// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { getDictionary } from "@/i18n/get-dictionary";
import { renderWithI18n } from "@/test/dom";
import { LoginFormCard } from "./login-form-card";

const t = getDictionary("en");

afterEach(() => cleanup());

describe("LoginFormCard (prototype)", () => {
  it("shows validation errors on empty submit", async () => {
    const user = userEvent.setup();
    renderWithI18n(<LoginFormCard />);
    await user.click(screen.getByRole("button", { name: t.auth.form.signIn }));
    expect(await screen.findByText(t.validation.emailRequired)).toBeInTheDocument();
    expect(screen.getByText(t.validation.passwordRequired)).toBeInTheDocument();
  });

  it("rejects an invalid email", async () => {
    const user = userEvent.setup();
    renderWithI18n(<LoginFormCard />);
    await user.type(screen.getByLabelText(t.auth.form.emailLabel), "not-an-email");
    await user.type(screen.getByLabelText(t.auth.form.passwordLabel), "secret123");
    await user.click(screen.getByRole("button", { name: t.auth.form.signIn }));
    expect(await screen.findByText(t.validation.emailInvalid)).toBeInTheDocument();
  });

  it("toggles password visibility", async () => {
    const user = userEvent.setup();
    renderWithI18n(<LoginFormCard />);
    const pw = screen.getByLabelText(t.auth.form.passwordLabel) as HTMLInputElement;
    expect(pw.type).toBe("password");
    await user.click(screen.getByRole("button", { name: t.auth.form.showPassword }));
    expect(pw.type).toBe("text");
    await user.click(screen.getByRole("button", { name: t.auth.form.hidePassword }));
    expect(pw.type).toBe("password");
  });

  it("shows the prototype message and persists no credentials on valid submit", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);
    const user = userEvent.setup();
    renderWithI18n(<LoginFormCard />);
    await user.type(screen.getByLabelText(t.auth.form.emailLabel), "buyer@company.com");
    await user.type(screen.getByLabelText(t.auth.form.passwordLabel), "secret123");
    await user.click(screen.getByRole("button", { name: t.auth.form.signIn }));

    expect(await screen.findByText(t.auth.form.prototypeMessage)).toBeInTheDocument();
    expect(window.localStorage.length).toBe(0);
    expect(window.sessionStorage.length).toBe(0);
    expect(document.cookie).toBe("");
    expect(logSpy).not.toHaveBeenCalled();
    logSpy.mockRestore();
  });
});
