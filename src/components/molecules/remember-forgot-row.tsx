import { Checkbox } from "@/components/atoms/checkbox";

export interface RememberForgotRowProps {
  rememberLabel: string;
  forgotLabel: string;
  rememberId?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
}

/** "Remember me" checkbox paired with a "Forgot password?" prototype action. */
export function RememberForgotRow({
  rememberLabel,
  forgotLabel,
  rememberId = "remember-me",
  checked,
  onCheckedChange,
  disabled,
}: RememberForgotRowProps) {
  return (
    <div className="aq-remember-row">
      <Checkbox
        id={rememberId}
        name="remember"
        label={rememberLabel}
        checked={checked}
        disabled={disabled}
        onChange={(event) => onCheckedChange(event.target.checked)}
      />
      {/* Prototype: no destination yet — non-submitting anchor. */}
      <a className="aq-textlink" href="#" onClick={(event) => event.preventDefault()}>
        {forgotLabel}
      </a>
    </div>
  );
}
