import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withI18n } from "@/stories/with-i18n";
import { ExporterDashboardPage } from "./exporter-dashboard-page";

const meta: Meta<typeof ExporterDashboardPage> = {
  title: "ExporterDashboard/Pages/ExporterDashboardPage",
  component: ExporterDashboardPage,
  parameters: { layout: "fullscreen" },
  decorators: [withI18n("en")],
};

export default meta;
type Story = StoryObj<typeof ExporterDashboardPage>;

export const Default: Story = {};
export const LongIndonesianText: Story = { decorators: [withI18n("id")] };
export const SimplifiedChinese: Story = { decorators: [withI18n("zh-CN")] };
export const MobileOverflow: Story = { parameters: { viewport: { defaultViewport: "mobile1" } } };
