import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { en } from "@/i18n/dictionaries/en";
import { id } from "@/i18n/dictionaries/id";
import { SPECIES_AVAILABILITY } from "@/features/exporter-dashboard/data/exporter-dashboard.mock";
import { HorizontalBarChart } from "./horizontal-bar-chart";

const e = en.exporterDashboard;
const items = SPECIES_AVAILABILITY.map((s) => ({ label: e.species[s.species], value: s.value }));

const meta: Meta<typeof HorizontalBarChart> = {
  title: "ExporterDashboard/Molecules/HorizontalBarChart",
  component: HorizontalBarChart,
  decorators: [
    (Story) => (
      <div style={{ width: 460 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HorizontalBarChart>;

export const Default: Story = { args: { items, unit: e.units.fish } };
export const SingleSpecies: Story = { args: { items: items.slice(0, 1), unit: e.units.fish } };
export const Empty: Story = { args: { items: [], unit: e.units.fish } };
export const LongIndonesianText: Story = {
  args: {
    items: SPECIES_AVAILABILITY.map((s) => ({ label: id.exporterDashboard.species[s.species], value: s.value })),
    unit: id.exporterDashboard.units.fish,
  },
};
