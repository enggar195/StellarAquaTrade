import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TransactionStatus } from "./transaction-status";

const meta: Meta<typeof TransactionStatus> = {
  title: "BuyerDashboard/Molecules/TransactionStatus",
  component: TransactionStatus,
  args: { status: "successful", label: "Successful" },
};

export default meta;
type Story = StoryObj<typeof TransactionStatus>;

export const Successful: Story = {};
export const Failed: Story = { args: { status: "failed", label: "Failed" } };
export const SimplifiedChinese: Story = { args: { status: "failed", label: "失败" } };
