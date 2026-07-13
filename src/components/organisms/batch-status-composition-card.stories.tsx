import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withI18n } from "@/stories/with-i18n";
import { BatchStatusCompositionCard } from "./batch-status-composition-card";

const meta: Meta<typeof BatchStatusCompositionCard> = {
  title: "FishBatches/Organisms/BatchStatusCompositionCard",
  component: BatchStatusCompositionCard,
  decorators: [
    withI18n("en"),
    (Story) => (
      <div style={{ width: 480 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BatchStatusCompositionCard>;

export const Default: Story = {};
export const Loading: Story = { args: { state: "loading" } };
export const Empty: Story = { args: { state: "empty" } };
export const Error: Story = { args: { state: "error" } };
export const LongIndonesianText: Story = { decorators: [withI18n("id")] };
export const SimplifiedChinese: Story = { decorators: [withI18n("zh-CN")] };
