import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withI18n } from "@/stories/with-i18n";
import { Breadcrumbs } from "./breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Dashboard/Organisms/Breadcrumbs",
  component: Breadcrumbs,
  parameters: { nextjs: { navigation: { pathname: "/en/dashboard" } } },
  decorators: [withI18n("en")],
  args: {
    items: [
      { label: "Home", href: "/en/dashboard" },
      { label: "Dashboard", current: true },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const English: Story = {};
export const BahasaIndonesia: Story = {
  decorators: [withI18n("id")],
  args: { items: [{ label: "Beranda", href: "/id/dashboard" }, { label: "Dasbor", current: true }] },
};
export const ChineseLabels: Story = {
  decorators: [withI18n("zh-CN")],
  args: { items: [{ label: "主页", href: "/zh-CN/dashboard" }, { label: "仪表板", current: true }] },
};
