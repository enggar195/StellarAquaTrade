import { redirect } from "next/navigation";

import { rootRedirectPath } from "@/i18n/locale-path";

export default function RootPage() {
  redirect(rootRedirectPath);
}
