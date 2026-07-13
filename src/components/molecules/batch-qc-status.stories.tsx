import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { en } from "@/i18n/dictionaries/en";
import { BatchQcStatus } from "./batch-qc-status";

const qc = en.fishBatches.qcLabels;

const meta: Meta<typeof BatchQcStatus> = {
  title: "FishBatches/Molecules/BatchQcStatus",
  component: BatchQcStatus,
};

export default meta;
type Story = StoryObj<typeof BatchQcStatus>;

export const Passed: Story = { args: { qc: "passed", label: qc.passed } };
export const Pending: Story = { args: { qc: "pending", label: qc.pending } };
export const RevisionRequired: Story = { args: { qc: "revisionRequired", label: qc.revisionRequired } };
