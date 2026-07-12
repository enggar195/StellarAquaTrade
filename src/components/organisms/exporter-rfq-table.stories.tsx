import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withI18n } from "@/stories/with-i18n";
import { ExporterRfqTable } from "./exporter-rfq-table";

const meta: Meta<typeof ExporterRfqTable> = {
  title: "ExporterDashboard/Organisms/ExporterRfqTable",
  component: ExporterRfqTable,
  parameters: { layout: "fullscreen" },
  decorators: [withI18n("en")],
};

export default meta;
type Story = StoryObj<typeof ExporterRfqTable>;

export const Default: Story = {};
export const Empty: Story = { args: { rows: [] } };
export const MobileOverflow: Story = { parameters: { viewport: { defaultViewport: "mobile1" } } };
export const LongIndonesianText: Story = { decorators: [withI18n("id")] };
export const SimplifiedChinese: Story = { decorators: [withI18n("zh-CN")] };
