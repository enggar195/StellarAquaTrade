import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { PasswordField, type PasswordFieldProps } from "./password-field";

type DemoProps = Omit<PasswordFieldProps, "value" | "onChange">;

function PasswordFieldDemo(props: DemoProps) {
  const [value, setValue] = useState("");
  return (
    <div style={{ width: 360 }}>
      <PasswordField {...props} value={value} onChange={setValue} />
    </div>
  );
}

const meta: Meta<typeof PasswordFieldDemo> = {
  title: "Molecules/PasswordField",
  component: PasswordFieldDemo,
  args: {
    id: "pw",
    label: "Password",
    placeholder: "Enter your password",
    showLabel: "Show password",
    hideLabel: "Hide password",
  },
};

export default meta;
type Story = StoryObj<typeof PasswordFieldDemo>;

export const Default: Story = {};
export const Error: Story = { args: { error: "Enter your password." } };
export const Disabled: Story = { args: { disabled: true } };
export const BahasaIndonesia: Story = {
  args: { label: "Kata sandi", placeholder: "Masukkan kata sandi Anda", showLabel: "Tampilkan kata sandi", hideLabel: "Sembunyikan kata sandi" },
};
export const SimplifiedChinese: Story = {
  args: { label: "密码", placeholder: "请输入密码", showLabel: "显示密码", hideLabel: "隐藏密码" },
};
