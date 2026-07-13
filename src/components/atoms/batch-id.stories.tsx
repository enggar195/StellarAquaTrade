import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { BatchId } from "./batch-id";

const meta: Meta<typeof BatchId> = {
  title: "FishBatches/Atoms/BatchId",
  component: BatchId,
};

export default meta;
type Story = StoryObj<typeof BatchId>;

export const Default: Story = { args: { value: "BAT-IDN-260701-014" } };
