import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DonutChart } from "@/components/molecules/donut-chart";
import { LineChart } from "@/components/molecules/line-chart";
import { SHIPMENT_STATUS, SHIPMENT_TOTAL, TRADE_ACTIVITY } from "@/features/buyer-dashboard/data/buyer-dashboard.mock";
import { en } from "@/i18n/dictionaries/en";
import { withI18n } from "@/stories/with-i18n";
import { ChartCard, type ChartState } from "./chart-card";

const b = en.buyerDashboard;
const SHIP_COLORS = ["#60a5fa", "#34d3ee", "#2dd4bf", "#fb7185"];

function Swatches({ items }: { items: { label: string; color: string }[] }) {
  return (
    <ul className="legend-list">
      {items.map((i) => (
        <li key={i.label}>
          <span className="legend-swatch" style={{ background: i.color }} />
          <span>{i.label}</span>
        </li>
      ))}
    </ul>
  );
}

const meta: Meta<typeof ChartCard> = {
  title: "BuyerDashboard/Organisms/ChartCard",
  component: ChartCard,
  decorators: [
    withI18n("en"),
    (Story) => (
      <div style={{ width: 460 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ChartCard>;

export const TradeActivity: Story = {
  args: {
    title: b.charts.tradeActivity.title,
    tooltip: b.charts.tradeActivity.tooltip,
    source: b.charts.tradeActivity.source,
    summary: b.charts.tradeActivity.summary,
    legend: <Swatches items={[{ label: b.charts.tradeActivity.seriesRfqs, color: "#34d3ee" }, { label: b.charts.tradeActivity.seriesConfirmed, color: "#8b7cff" }]} />,
    children: (
      <LineChart
        labels={TRADE_ACTIVITY.map((p) => b.months[p.month])}
        series={[
          { label: b.charts.tradeActivity.seriesRfqs, color: "#34d3ee", values: TRADE_ACTIVITY.map((p) => p.rfqs) },
          { label: b.charts.tradeActivity.seriesConfirmed, color: "#8b7cff", values: TRADE_ACTIVITY.map((p) => p.confirmedTrades) },
        ]}
      />
    ),
  },
};

export const ShipmentStatus: Story = {
  args: {
    title: b.charts.shipmentStatus.title,
    tooltip: b.charts.shipmentStatus.tooltip,
    source: b.charts.shipmentStatus.source,
    summary: b.charts.shipmentStatus.summary,
    legend: <Swatches items={SHIPMENT_STATUS.map((s, i) => ({ label: b.shipmentStatuses[s.status], color: SHIP_COLORS[i] }))} />,
    children: (
      <DonutChart
        segments={SHIPMENT_STATUS.map((s, i) => ({ label: b.shipmentStatuses[s.status], value: s.value, color: SHIP_COLORS[i] }))}
        total={SHIPMENT_TOTAL}
        centerLabel={b.charts.shipmentStatus.totalLabel}
      />
    ),
  },
};

export const Loading: Story = { args: { ...TradeActivity.args, state: "loading" as ChartState } };
export const Empty: Story = { args: { ...TradeActivity.args, state: "empty" as ChartState } };
export const Error: Story = { args: { ...TradeActivity.args, state: "error" as ChartState } };
