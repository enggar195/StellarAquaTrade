import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { withI18n } from "@/stories/with-i18n";
import { TrustNoteCard } from "./trust-note-card";

const meta: Meta<typeof TrustNoteCard> = {
  title: "Organisms/TrustNoteCard",
  component: TrustNoteCard,
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
type Story = StoryObj<typeof TrustNoteCard>;

export const English: Story = {};
export const BahasaIndonesia: Story = { decorators: [withI18n("id")] };
export const SimplifiedChinese: Story = { decorators: [withI18n("zh-CN")] };
export const LongIndonesianText: Story = { decorators: [withI18n("id")] };
