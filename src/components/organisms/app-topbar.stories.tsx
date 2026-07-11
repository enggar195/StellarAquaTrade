import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withI18n } from "@/stories/with-i18n";
import { AppTopbar } from "./app-topbar";

const meta: Meta<typeof AppTopbar> = {
  title: "Dashboard/Organisms/AppTopbar",
  component: AppTopbar,
  parameters: { layout: "fullscreen", nextjs: { navigation: { pathname: "/en/dashboard" } } },
  decorators: [withI18n("en")],
  args: {
    breadcrumbs: [
      { label: "Home", href: "/en/dashboard" },
      { label: "Dashboard", current: true },
    ],
    onOpenDrawer: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof AppTopbar>;

export const English: Story = {};
export const ChineseLabels: Story = {
  decorators: [withI18n("zh-CN")],
  parameters: { nextjs: { navigation: { pathname: "/zh-CN/dashboard" } } },
  args: { breadcrumbs: [{ label: "主页", href: "/zh-CN/dashboard" }, { label: "仪表板", current: true }] },
};
export const Mobile: Story = { parameters: { viewport: { defaultViewport: "mobile1" } } };
