import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FISH_BATCHES } from "@/features/fish-batches/data/fish-batches.mock";
import { withI18n } from "@/stories/with-i18n";
import { FishBatchPreviewDrawer } from "./fish-batch-preview-drawer";

const noop = () => {};
const partiallyReserved = FISH_BATCHES[0];
const qcPending = FISH_BATCHES[4];
const reserved = FISH_BATCHES[3];

const meta: Meta<typeof FishBatchPreviewDrawer> = {
  title: "FishBatches/Organisms/FishBatchPreviewDrawer",
  component: FishBatchPreviewDrawer,
  parameters: { layout: "fullscreen" },
  args: { open: true, onClose: noop },
  decorators: [withI18n("en")],
};

export default meta;
type Story = StoryObj<typeof FishBatchPreviewDrawer>;

export const PartiallyReserved: Story = { args: { batch: partiallyReserved } };
export const QcPending: Story = { args: { batch: qcPending } };
export const Reserved: Story = { args: { batch: reserved } };
export const MobileFullScreen: Story = {
  args: { batch: partiallyReserved },
  parameters: { viewport: { defaultViewport: "mobile1" } },
};
export const LongIndonesianText: Story = { args: { batch: partiallyReserved }, decorators: [withI18n("id")] };
export const SimplifiedChinese: Story = { args: { batch: partiallyReserved }, decorators: [withI18n("zh-CN")] };
