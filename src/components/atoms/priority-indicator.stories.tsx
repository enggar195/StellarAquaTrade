import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PriorityIndicator } from "./priority-indicator";

const meta: Meta<typeof PriorityIndicator> = {
  title: "BuyerDashboard/Atoms/PriorityIndicator",
  component: PriorityIndicator,
  args: { priority: "high", label: "High" },
};

export default meta;
type Story = StoryObj<typeof PriorityIndicator>;

export const High: Story = {};
export const Medium: Story = { args: { priority: "medium", label: "Medium" } };
export const Low: Story = { args: { priority: "low", label: "Low" } };
export const SimplifiedChinese: Story = { args: { priority: "high", label: "高" } };
