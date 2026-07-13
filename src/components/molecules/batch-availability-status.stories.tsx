import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { en } from "@/i18n/dictionaries/en";
import { BatchAvailabilityStatus } from "./batch-availability-status";

const s = en.fishBatches.statusLabels;

const meta: Meta<typeof BatchAvailabilityStatus> = {
  title: "FishBatches/Molecules/BatchAvailabilityStatus",
  component: BatchAvailabilityStatus,
};

export default meta;
type Story = StoryObj<typeof BatchAvailabilityStatus>;

export const Available: Story = { args: { availability: "available", label: s.available } };
export const PartiallyReserved: Story = { args: { availability: "partiallyReserved", label: s.partiallyReserved } };
export const Reserved: Story = { args: { availability: "reserved", label: s.reserved } };
