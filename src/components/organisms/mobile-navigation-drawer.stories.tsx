import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/i18n-context";
import type { Locale } from "@/i18n/config";
import type { Role } from "@/features/dashboard-shell/navigation";
import { MobileNavigationDrawer } from "./mobile-navigation-drawer";

interface Args {
  locale: Locale;
  role: Role;
  open: boolean;
}

function Framed({ locale, role, open }: Args) {
  return (
    <I18nProvider locale={locale} dict={getDictionary(locale)}>
      <div style={{ position: "relative", height: 640 }}>
        <MobileNavigationDrawer open={open} onClose={() => {}} role={role} />
      </div>
    </I18nProvider>
  );
}

const meta: Meta<typeof Framed> = {
  title: "Dashboard/Organisms/MobileNavigationDrawer",
  component: Framed,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
    nextjs: { navigation: { pathname: "/en/dashboard" } },
  },
  args: { locale: "en", role: "buyer", open: true },
};

export default meta;
type Story = StoryObj<typeof Framed>;

export const Open: Story = {};
export const Exporter: Story = { args: { role: "exporter" } };
export const ChineseLabels: Story = {
  args: { locale: "zh-CN" },
  parameters: { nextjs: { navigation: { pathname: "/zh-CN/dashboard" } } },
};
