import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { en } from "@/i18n/dictionaries/en";
import { withI18n } from "@/stories/with-i18n";
import { KpiCard } from "./kpi-card";

const k = en.buyerDashboard.kpi;

const meta: Meta<typeof KpiCard> = {
  title: "BuyerDashboard/Organisms/KpiCard",
  component: KpiCard,
  decorators: [
    withI18n("en"),
    (Story) => (
      <div style={{ width: 260 }}>
        <Story />
      </div>
    ),
  ],
  args: { label: k.activeRfqs.label, tooltip: k.activeRfqs.tooltip, value: "4", support: k.activeRfqs.support },
};

export default meta;
type Story = StoryObj<typeof KpiCard>;

export const ActiveRFQs: Story = {};
export const AwaitingFunding: Story = {
  args: { label: k.awaitingFunding.label, tooltip: k.awaitingFunding.tooltip, value: "2", unit: en.buyerDashboard.units.trades, support: k.awaitingFunding.support },
};
export const InspectionDue: Story = {
  args: { label: k.arrivalInspectionDue.label, tooltip: k.arrivalInspectionDue.tooltip, value: "1", support: k.arrivalInspectionDue.support },
};
export const TradeSpendTestnet: Story = {
  args: { label: k.tradeSpend.label, tooltip: k.tradeSpend.tooltip, value: "12,450", support: k.tradeSpend.support, badge: k.tradeSpend.badge },
};
export const Loading: Story = { args: { state: "loading" } };
export const Empty: Story = { args: { state: "empty" } };
