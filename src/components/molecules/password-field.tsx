"use client";

import { useState } from "react";

import { IconButton } from "@/components/atoms/icon-button";
import { Input } from "@/components/atoms/input";
import { FormField } from "@/components/molecules/form-field";

export interface PasswordFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  requiredText?: string;
  showLabel: string;
  hideLabel: string;
  disabled?: boolean;
  autoComplete?: string;
}

/** Password input with an accessible show/hide toggle. */
export function PasswordField({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  requiredText,
  showLabel,
  hideLabel,
  disabled,
  autoComplete = "current-password",
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <FormField id={id} label={label} error={error} requiredText={requiredText}>
      {({ id: fieldId, invalid, describedBy }) => (
        <div className="aq-password">
          <Input
            id={fieldId}
            type={visible ? "text" : "password"}
            value={value}
            placeholder={placeholder}
            invalid={invalid}
            aria-describedby={describedBy}
            autoComplete={autoComplete}
            disabled={disabled}
            onChange={(event) => onChange(event.target.value)}
          />
          <IconButton
            className="aq-password-toggle"
            label={visible ? hideLabel : showLabel}
            aria-pressed={visible}
            disabled={disabled}
            onClick={() => setVisible((current) => !current)}
          >
            {visible ? (
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M3 3l18 18M10.6 10.7a2 2 0 002.7 2.8M9.9 5.1A9.8 9.8 0 0112 5c5 0 9 4.5 10 7-0.4 1-1.3 2.5-2.8 3.8M6.1 6.2C3.9 7.6 2.5 9.7 2 12c1 2.5 5 7 10 7 1.6 0 3-.4 4.3-1"
                  fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M2 12c1-2.5 5-7 10-7s9 4.5 10 7c-1 2.5-5 7-10 7s-9-4.5-10-7Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
              </svg>
            )}
          </IconButton>
        </div>
      )}
    </FormField>
  );
}
