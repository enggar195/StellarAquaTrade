import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { en } from "@/i18n/dictionaries/en";
import { BatchVisibilityNote } from "./batch-visibility-note";

const v = en.fishBatches.drawer.visibility;

const meta: Meta<typeof BatchVisibilityNote> = {
  title: "FishBatches/Molecules/BatchVisibilityNote",
  component: BatchVisibilityNote,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BatchVisibilityNote>;

export const Passed: Story = { args: { qc: "passed", note: v.passed } };
export const Pending: Story = { args: { qc: "pending", note: v.pending } };
export const RevisionRequired: Story = { args: { qc: "revisionRequired", note: v.revisionRequired } };
