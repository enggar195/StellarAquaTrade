import type { ReactNode } from "react";

import { Label } from "@/components/atoms/label";

export interface FieldRenderProps {
  id: string;
  invalid: boolean;
  describedBy?: string;
}

export interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  requiredText?: string;
  children: (props: FieldRenderProps) => ReactNode;
}

/**
 * Label + control + validation message, wired together with matching id and
 * aria-describedby. The control is provided via a render prop so any input can
 * receive the correct accessibility bindings.
 */
export function FormField({ id, label, error, requiredText, children }: FormFieldProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="aq-field">
      <Label htmlFor={id} requiredText={requiredText}>
        {label}
      </Label>
      {children({ id, invalid: Boolean(error), describedBy: errorId })}
      {error && (
        <small id={errorId} className="aq-field-error" role="alert">
          {error}
        </small>
      )}
    </div>
  );
}
