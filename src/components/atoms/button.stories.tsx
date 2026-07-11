import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  args: { children: "Sign in", variant: "primary" },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const Secondary: Story = { args: { variant: "secondary", children: "Refresh balance" } };
export const Ghost: Story = { args: { variant: "ghost", children: "Disconnect" } };
export const Loading: Story = { args: { loading: true, fullWidth: true, children: "Signing in…" } };
export const Disabled: Story = { args: { disabled: true, children: "Sign in" } };
export const FullWidth: Story = { args: { fullWidth: true, children: "Sign in" } };

export const English: Story = { args: { fullWidth: true, children: "Sign in" } };
export const BahasaIndonesia: Story = { args: { fullWidth: true, children: "Masuk" } };
export const SimplifiedChinese: Story = { args: { fullWidth: true, children: "登录" } };
export const LongIndonesianText: Story = {
  args: { fullWidth: true, children: "Masuk ke ruang kerja perdagangan Anda sekarang" },
};
