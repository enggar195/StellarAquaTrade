import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "AquaTrade Pay — Stellar Level 1",
  description: "A Stellar Testnet payment foundation for ornamental fish buyers and exporters.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
