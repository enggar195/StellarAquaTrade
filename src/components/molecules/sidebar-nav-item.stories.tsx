import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SidebarNavItem } from "./sidebar-nav-item";

const meta: Meta<typeof SidebarNavItem> = {
  title: "Dashboard/Molecules/SidebarNavItem",
  component: SidebarNavItem,
  parameters: { nextjs: { navigation: { pathname: "/en/dashboard" } } },
  decorators: [
    (Story) => (
      <ul style={{ width: 240, listStyle: "none", margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ],
  args: { label: "Dashboard", icon: "dashboard", href: "/en/dashboard" },
};

export default meta;
type Story = StoryObj<typeof SidebarNavItem>;

export const Default: Story = {};
export const Active: Story = { args: { active: true } };
export const ComingSoon: Story = {
  args: { label: "RFQs", icon: "rfq", href: undefined, comingSoon: true, comingSoonTooltip: "This module belongs to a future implementation phase." },
};
export const Collapsed: Story = { args: { active: true, collapsed: true, tip: "Dashboard" } };
export const BahasaIndonesia: Story = { args: { label: "Dasbor" } };
export const ChineseLabels: Story = { args: { label: "仪表板" } };
export const LongIndonesianText: Story = { args: { label: "Inspeksi Kedatangan Barang" } };
