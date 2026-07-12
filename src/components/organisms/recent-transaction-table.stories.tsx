import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withI18n } from "@/stories/with-i18n";
import { RecentTransactionTable } from "./recent-transaction-table";

const meta: Meta<typeof RecentTransactionTable> = {
  title: "BuyerDashboard/Organisms/RecentTransactionTable",
  component: RecentTransactionTable,
  parameters: { layout: "fullscreen", nextjs: { navigation: { pathname: "/en/dashboard" } } },
  decorators: [withI18n("en")],
};

export default meta;
type Story = StoryObj<typeof RecentTransactionTable>;

export const Default: Story = {};
export const SuccessAndFailure: Story = {};
export const Empty: Story = { args: { rows: [] } };
export const SimplifiedChinese: Story = {
  decorators: [withI18n("zh-CN")],
  parameters: { nextjs: { navigation: { pathname: "/zh-CN/dashboard" } } },
};
