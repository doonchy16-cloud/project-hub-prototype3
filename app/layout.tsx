import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prototype 3",
  description: "Prototype 3 project matching app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
