import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { en } from "@/i18n/dictionaries/en";
import { id } from "@/i18n/dictionaries/id";
import { zhCN } from "@/i18n/dictionaries/zh-CN";
import { withI18n } from "@/stories/with-i18n";
import { PrototypeDataBanner } from "./prototype-data-banner";

const meta: Meta<typeof PrototypeDataBanner> = {
  title: "BuyerDashboard/Organisms/PrototypeDataBanner",
  component: PrototypeDataBanner,
  decorators: [withI18n("en")],
  args: { title: en.buyerDashboard.prototypeBanner.title, body: en.buyerDashboard.prototypeBanner.body },
};

export default meta;
type Story = StoryObj<typeof PrototypeDataBanner>;

export const English: Story = {};
export const BahasaIndonesia: Story = {
  decorators: [withI18n("id")],
  args: { title: id.buyerDashboard.prototypeBanner.title, body: id.buyerDashboard.prototypeBanner.body },
};
export const SimplifiedChinese: Story = {
  decorators: [withI18n("zh-CN")],
  args: { title: zhCN.buyerDashboard.prototypeBanner.title, body: zhCN.buyerDashboard.prototypeBanner.body },
};
