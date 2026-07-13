import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withI18n } from "@/stories/with-i18n";
import { FishBatchListPage } from "./fish-batch-list-page";

const meta: Meta<typeof FishBatchListPage> = {
  title: "FishBatches/Pages/FishBatchListPage",
  component: FishBatchListPage,
  parameters: { layout: "fullscreen" },
  decorators: [withI18n("en")],
};

export default meta;
type Story = StoryObj<typeof FishBatchListPage>;

export const Default: Story = {};
export const LongIndonesianText: Story = { decorators: [withI18n("id")] };
export const SimplifiedChinese: Story = { decorators: [withI18n("zh-CN")] };
export const MobileOverflow: Story = { parameters: { viewport: { defaultViewport: "mobile1" } } };
