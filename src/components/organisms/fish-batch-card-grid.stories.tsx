import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FISH_BATCHES } from "@/features/fish-batches/data/fish-batches.mock";
import { withI18n } from "@/stories/with-i18n";
import { FishBatchCardGrid } from "./fish-batch-card-grid";

const noop = () => {};

const meta: Meta<typeof FishBatchCardGrid> = {
  title: "FishBatches/Organisms/FishBatchCardGrid",
  component: FishBatchCardGrid,
  parameters: { layout: "fullscreen" },
  args: { rows: FISH_BATCHES, onPreview: noop },
  decorators: [withI18n("en")],
};

export default meta;
type Story = StoryObj<typeof FishBatchCardGrid>;

export const Default: Story = {};
export const Empty: Story = { args: { rows: [] } };
export const MobileOverflow: Story = { parameters: { viewport: { defaultViewport: "mobile1" } } };
export const LongIndonesianText: Story = { decorators: [withI18n("id")] };
export const SimplifiedChinese: Story = { decorators: [withI18n("zh-CN")] };
