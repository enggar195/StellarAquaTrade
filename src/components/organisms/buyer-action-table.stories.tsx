import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withI18n } from "@/stories/with-i18n";
import { BuyerActionTable } from "./buyer-action-table";

const meta: Meta<typeof BuyerActionTable> = {
  title: "BuyerDashboard/Organisms/BuyerActionTable",
  component: BuyerActionTable,
  parameters: { layout: "fullscreen" },
  decorators: [withI18n("en")],
};

export default meta;
type Story = StoryObj<typeof BuyerActionTable>;

export const Default: Story = {};
export const Empty: Story = { args: { rows: [] } };
export const MobileOverflow: Story = { parameters: { viewport: { defaultViewport: "mobile1" } } };
export const LongIndonesianText: Story = { decorators: [withI18n("id")] };
export const SimplifiedChinese: Story = { decorators: [withI18n("zh-CN")] };
