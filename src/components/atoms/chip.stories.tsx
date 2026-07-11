import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Chip } from "./chip";

const meta: Meta<typeof Chip> = {
  title: "Atoms/Chip",
  component: Chip,
  decorators: [
    (Story) => (
      <ul style={{ display: "flex", gap: 8, listStyle: "none", padding: 0, margin: 0 }}>
        <Story />
      </ul>
    ),
  ],
  args: { children: "Testnet Payment" },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {};
export const NoDot: Story = { args: { dot: false } };
export const BahasaIndonesia: Story = { args: { children: "Pembayaran Testnet" } };
export const SimplifiedChinese: Story = { args: { children: "Testnet 支付" } };
export const LongIndonesianText: Story = { args: { children: "Inspeksi Kedatangan & Klaim DOA" } };
