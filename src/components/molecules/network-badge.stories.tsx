import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { NetworkBadge } from "./network-badge";

const meta: Meta<typeof NetworkBadge> = {
  title: "Dashboard/Molecules/NetworkBadge",
  component: NetworkBadge,
};

export default meta;
type Story = StoryObj<typeof NetworkBadge>;

export const Default: Story = {};
export const CustomLabel: Story = { args: { label: "Stellar Testnet" } };
