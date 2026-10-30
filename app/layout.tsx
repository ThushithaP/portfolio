import type { Metadata } from "next";

import "@fontsource/kalam/400.css";
import "@fontsource/kalam/700.css";
import "@fontsource/yellowtail/400.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thushitha Senarath | Creative Designer",
  description:
    "Portfolio of Thushitha Senarath — a creative designer crafting beautifully simple things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}