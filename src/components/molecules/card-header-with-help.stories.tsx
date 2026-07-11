import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withI18n } from "@/stories/with-i18n";
import { CardHeaderWithHelp } from "./card-header-with-help";

const meta: Meta<typeof CardHeaderWithHelp> = {
  title: "Molecules/CardHeaderWithHelp",
  component: CardHeaderWithHelp,
  decorators: [
    withI18n("en"),
    (Story) => (
      <div className="glass-card" style={{ width: 380 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: "Testnet information",
    tooltip: "The active White Belt network is Stellar Testnet. Testnet XLM has no monetary value.",
  },
};

export default meta;
type Story = StoryObj<typeof CardHeaderWithHelp>;

export const English: Story = {};
export const WithSubtitle: Story = { args: { subtitle: "Read-only overview" } };
export const BahasaIndonesia: Story = {
  args: { title: "Informasi Testnet", tooltip: "Jaringan White Belt yang aktif adalah Stellar Testnet." },
  decorators: [withI18n("id")],
};
export const ChineseTooltip: Story = {
  args: { title: "Testnet 信息", tooltip: "当前白带网络为 Stellar Testnet。Testnet XLM 没有货币价值。" },
  decorators: [withI18n("zh-CN")],
};
