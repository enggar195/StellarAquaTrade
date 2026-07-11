import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PageHeader } from "./page-header";

const meta: Meta<typeof PageHeader> = {
  title: "Dashboard/Organisms/PageHeader",
  component: PageHeader,
  args: { title: "Dashboard" },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {};
export const WithDescription: Story = {
  args: { description: "Reusable application frame — no live data yet." },
};
export const ChineseLabels: Story = { args: { title: "仪表板", description: "可复用的应用框架——尚未连接实时数据。" } };
export const LongIndonesianText: Story = {
  args: { title: "Dasbor", description: "Kerangka aplikasi yang dapat dipakai ulang — belum ada data langsung yang terhubung." },
};
