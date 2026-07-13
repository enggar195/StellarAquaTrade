import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FISH_BATCHES } from "@/features/fish-batches/data/fish-batches.mock";
import { sortFishBatches } from "@/features/fish-batches/fish-batch-logic";
import { withI18n } from "@/stories/with-i18n";
import { FishBatchTable } from "./fish-batch-table";

const noop = () => {};

const meta: Meta<typeof FishBatchTable> = {
  title: "FishBatches/Organisms/FishBatchTable",
  component: FishBatchTable,
  parameters: { layout: "fullscreen" },
  args: { rows: FISH_BATCHES, sort: null, onSort: noop, onPreview: noop },
  decorators: [withI18n("en")],
};

export default meta;
type Story = StoryObj<typeof FishBatchTable>;

export const Default: Story = {};
export const SortedByAvailable: Story = {
  args: {
    rows: sortFishBatches(FISH_BATCHES, { key: "available", direction: "desc" }),
    sort: { key: "available", direction: "desc" },
  },
};
export const Empty: Story = { args: { rows: [] } };
export const MobileOverflow: Story = { parameters: { viewport: { defaultViewport: "mobile1" } } };
export const LongIndonesianText: Story = { decorators: [withI18n("id")] };
export const SimplifiedChinese: Story = { decorators: [withI18n("zh-CN")] };
