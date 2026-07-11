"use client";

import { useState } from "react";

import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { CardHeaderWithHelp } from "@/components/molecules/card-header-with-help";
import { FormField } from "@/components/molecules/form-field";
import { LoginHelperNote } from "@/components/molecules/login-helper-note";
import { PasswordField } from "@/components/molecules/password-field";
import { RememberForgotRow } from "@/components/molecules/remember-forgot-row";
import { GlassCard } from "@/components/organisms/glass-card";
import { useI18n } from "@/i18n/i18n-context";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

/**
 * AquaTrade account sign-in form — a UI prototype only. It never calls an
 * authentication API, never fakes a session/token, never persists credentials,
 * and never logs form values. The entered password lives only in component
 * state until unmount.
 */
export function LoginFormCard() {
  const { dict } = useI18n();
  const f = dict.auth.form;
  const v = dict.validation;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<string | null>(null);

  function validate() {
    const next: { email?: string; password?: string } = {};
    if (!email.trim()) {
      next.email = v.emailRequired;
    } else if (!EMAIL_PATTERN.test(email)) {
      next.email = v.emailInvalid;
    }
    if (!password) {
      next.password = v.passwordRequired;
    }
    return next;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setInfo(null);
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Prototype only: brief loading visual, then a neutral informational note.
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setInfo(f.prototypeMessage);
    }, 400);
  }

  return (
    <GlassCard className="login-form-card">
      <CardHeaderWithHelp title={f.title} tooltip={dict.auth.tooltips.loginForm} icon={<LockIcon />} />

      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <FormField id="login-email" label={f.emailLabel} error={errors.email}>
          {({ id, invalid, describedBy }) => (
            <Input
              id={id}
              type="email"
              inputMode="email"
              autoComplete="username"
              placeholder={f.emailPlaceholder}
              value={email}
              invalid={invalid}
              aria-describedby={describedBy}
              disabled={loading}
              onChange={(event) => setEmail(event.target.value)}
            />
          )}
        </FormField>

        <PasswordField
          id="login-password"
          label={f.passwordLabel}
          placeholder={f.passwordPlaceholder}
          value={password}
          onChange={setPassword}
          error={errors.password}
          showLabel={f.showPassword}
          hideLabel={f.hidePassword}
          disabled={loading}
        />

        <RememberForgotRow
          rememberLabel={f.rememberMe}
          forgotLabel={f.forgotPassword}
          checked={remember}
          onCheckedChange={setRemember}
          disabled={loading}
        />

        <Button type="submit" variant="primary" fullWidth loading={loading}>
          {loading ? f.signingIn : f.signIn}
        </Button>

        {info && <LoginHelperNote message={info} />}

        <p className="login-create">
          <span>{f.noAccount}</span>{" "}
          <a className="aq-textlink" href="#" onClick={(event) => event.preventDefault()}>
            {f.createAccount}
          </a>
        </p>
      </form>
    </GlassCard>
  );
}
