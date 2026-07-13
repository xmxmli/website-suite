import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Email API Dashboard",
  description: "Placeholder dashboard for an email sending API service."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
