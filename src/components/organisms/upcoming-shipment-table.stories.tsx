import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withI18n } from "@/stories/with-i18n";
import { UpcomingShipmentTable } from "./upcoming-shipment-table";

const meta: Meta<typeof UpcomingShipmentTable> = {
  title: "ExporterDashboard/Organisms/UpcomingShipmentTable",
  component: UpcomingShipmentTable,
  parameters: { layout: "fullscreen" },
  decorators: [withI18n("en")],
};

export default meta;
type Story = StoryObj<typeof UpcomingShipmentTable>;

export const Default: Story = {};
export const Empty: Story = { args: { rows: [] } };
export const MobileOverflow: Story = { parameters: { viewport: { defaultViewport: "mobile1" } } };
export const LongIndonesianText: Story = { decorators: [withI18n("id")] };
export const SimplifiedChinese: Story = { decorators: [withI18n("zh-CN")] };
