import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/i18n-context";
import type { Locale } from "@/i18n/config";
import type { Role } from "@/features/dashboard-shell/navigation";
import { AppSidebar } from "./app-sidebar";

interface Args {
  locale: Locale;
  role: Role;
  collapsed: boolean;
}

function Framed({ locale, role, collapsed }: Args) {
  return (
    <I18nProvider locale={locale} dict={getDictionary(locale)}>
      <div className={`dashboard-shell${collapsed ? " sidebar-collapsed" : ""}`} style={{ height: 640, minHeight: 0 }}>
        <AppSidebar role={role} collapsed={collapsed} onToggleCollapse={() => {}} />
        <div />
      </div>
    </I18nProvider>
  );
}

const meta: Meta<typeof Framed> = {
  title: "Dashboard/Organisms/AppSidebar",
  component: Framed,
  parameters: { layout: "fullscreen", nextjs: { navigation: { pathname: "/en/dashboard" } } },
  args: { locale: "en", role: "buyer", collapsed: false },
};

export default meta;
type Story = StoryObj<typeof Framed>;

export const Expanded: Story = {};
export const Collapsed: Story = { args: { collapsed: true } };
export const Exporter: Story = { args: { role: "exporter" } };
export const Admin: Story = { args: { role: "admin" } };
export const BahasaIndonesia: Story = {
  args: { locale: "id" },
  parameters: { nextjs: { navigation: { pathname: "/id/dashboard" } } },
};
export const ChineseLabels: Story = {
  args: { locale: "zh-CN" },
  parameters: { nextjs: { navigation: { pathname: "/zh-CN/dashboard" } } },
};
