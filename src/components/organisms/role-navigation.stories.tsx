import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withI18n } from "@/stories/with-i18n";
import { RoleNavigation } from "./role-navigation";

const meta: Meta<typeof RoleNavigation> = {
  title: "Dashboard/Organisms/RoleNavigation",
  component: RoleNavigation,
  parameters: { nextjs: { navigation: { pathname: "/en/dashboard" } } },
  decorators: [
    withI18n("en"),
    (Story) => (
      <div style={{ width: 248 }}>
        <Story />
      </div>
    ),
  ],
  args: { role: "buyer" },
};

export default meta;
type Story = StoryObj<typeof RoleNavigation>;

export const Buyer: Story = {};
export const Exporter: Story = { args: { role: "exporter" } };
export const Admin: Story = { args: { role: "admin" } };
export const Collapsed: Story = {
  args: { collapsed: true },
  decorators: [(Story) => (<div style={{ width: 76 }}><Story /></div>)],
};
export const BahasaIndonesia: Story = { decorators: [withI18n("id")] };
export const ChineseLabels: Story = { decorators: [withI18n("zh-CN")] };
