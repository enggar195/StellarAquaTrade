import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CardHeaderWithHelp } from "@/components/molecules/card-header-with-help";
import { LineChart } from "@/components/molecules/line-chart";
import { GlassCard } from "@/components/organisms/glass-card";
import { KpiCard } from "@/components/organisms/kpi-card";
import { en } from "@/i18n/dictionaries/en";
import { withI18n } from "@/stories/with-i18n";
import { OceanAmbienceBackground } from "./ocean-ambience-background";

const meta: Meta<typeof OceanAmbienceBackground> = {
  title: "Dashboard/Organisms/OceanAmbienceBackground",
  component: OceanAmbienceBackground,
  parameters: { layout: "fullscreen" },
  args: { intensity: "balanced", showCaustics: true, showMist: true },
};

export default meta;
type Story = StoryObj<typeof OceanAmbienceBackground>;

export const Balanced: Story = {};
export const Subtle: Story = { args: { intensity: "subtle" } };
export const Immersive: Story = { args: { intensity: "immersive" } };

/** Motion follows the visitor's prefers-reduced-motion setting: with reduce on,
 * bubbles and caustic drift stop and a static, complete ocean composition remains. */
export const ReducedMotion: Story = {};

export const Desktop: Story = { parameters: { viewport: { defaultViewport: "responsive" } } };
export const Mobile: Story = { parameters: { viewport: { defaultViewport: "mobile1" } } };

const k = en.buyerDashboard.kpi;
export const WithGlassCardPreview: Story = {
  decorators: [withI18n("en")],
  render: (args) => (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <OceanAmbienceBackground {...args} />
      <div style={{ position: "relative", zIndex: 10, padding: 32, display: "grid", gap: 16, gridTemplateColumns: "240px 380px", alignItems: "start" }}>
        <KpiCard label={k.tradeSpend.label} tooltip={k.tradeSpend.tooltip} value="12,450" support={k.tradeSpend.support} badge={k.tradeSpend.badge} />
        <GlassCard className="chart-card">
          <CardHeaderWithHelp title={en.buyerDashboard.charts.tradeActivity.title} tooltip={en.buyerDashboard.charts.tradeActivity.tooltip} />
          <div className="chart-body">
            <LineChart
              labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
              series={[
                { label: "RFQs", color: "#34d3ee", values: [3, 5, 4, 7, 6, 8] },
                { label: "Confirmed", color: "#8b7cff", values: [1, 2, 2, 3, 3, 4] },
              ]}
            />
          </div>
        </GlassCard>
      </div>
    </div>
  ),
};
