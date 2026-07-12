import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { en } from "@/i18n/dictionaries/en";
import { id } from "@/i18n/dictionaries/id";
import { zhCN } from "@/i18n/dictionaries/zh-CN";
import { CriticalActionBanner } from "./critical-action-banner";

const meta: Meta<typeof CriticalActionBanner> = {
  title: "BuyerDashboard/Organisms/CriticalActionBanner",
  component: CriticalActionBanner,
  args: {
    title: en.buyerDashboard.criticalBanner.title,
    body: en.buyerDashboard.criticalBanner.body,
    action: en.buyerDashboard.criticalBanner.action,
    comingSoonLabel: en.dashboard.comingSoon,
  },
};

export default meta;
type Story = StoryObj<typeof CriticalActionBanner>;

export const English: Story = {};
export const BahasaIndonesia: Story = {
  args: { title: id.buyerDashboard.criticalBanner.title, body: id.buyerDashboard.criticalBanner.body, action: id.buyerDashboard.criticalBanner.action, comingSoonLabel: id.dashboard.comingSoon },
};
export const SimplifiedChinese: Story = {
  args: { title: zhCN.buyerDashboard.criticalBanner.title, body: zhCN.buyerDashboard.criticalBanner.body, action: zhCN.buyerDashboard.criticalBanner.action, comingSoonLabel: zhCN.dashboard.comingSoon },
};
