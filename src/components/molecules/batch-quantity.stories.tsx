import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { BatchQuantity } from "./batch-quantity";

const meta: Meta<typeof BatchQuantity> = {
  title: "FishBatches/Molecules/BatchQuantity",
  component: BatchQuantity,
  args: { unit: "fish" },
  decorators: [
    (Story) => (
      <div style={{ width: 160 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BatchQuantity>;

export const PartiallyReserved: Story = { args: { available: 88, initial: 120 } };
export const Available: Story = { args: { available: 240, initial: 240 } };
export const Reserved: Story = { args: { available: 0, initial: 100 } };
