import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { UserIdentity } from "./user-identity";

const meta: Meta<typeof UserIdentity> = {
  title: "Dashboard/Molecules/UserIdentity",
  component: UserIdentity,
  args: { name: "Demo User", role: "Buyer · Prototype" },
};

export default meta;
type Story = StoryObj<typeof UserIdentity>;

export const English: Story = {};
export const Compact: Story = { args: { compact: true } };
export const ChineseLabels: Story = { args: { name: "演示用户", role: "买家 · 原型" } };
