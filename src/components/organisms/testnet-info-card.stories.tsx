import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withI18n } from "@/stories/with-i18n";
import { TestnetInfoCard } from "./testnet-info-card";

const meta: Meta<typeof TestnetInfoCard> = {
  title: "Organisms/TestnetInfoCard",
  component: TestnetInfoCard,
  decorators: [
    withI18n("en"),
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestnetInfoCard>;

export const English: Story = {};
export const BahasaIndonesia: Story = { decorators: [withI18n("id")] };
export const SimplifiedChinese: Story = { decorators: [withI18n("zh-CN")] };
