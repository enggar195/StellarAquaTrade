import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ShipmentReadiness } from "./shipment-readiness";

const meta: Meta<typeof ShipmentReadiness> = {
  title: "ExporterDashboard/Molecules/ShipmentReadiness",
  component: ShipmentReadiness,
  args: { label: "Readiness" },
};

export default meta;
type Story = StoryObj<typeof ShipmentReadiness>;

export const Ready: Story = { args: { value: 100 } };
export const OnTrack: Story = { args: { value: 88 } };
export const AtRisk: Story = { args: { value: 74 } };
