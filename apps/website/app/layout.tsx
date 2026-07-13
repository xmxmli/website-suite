import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Resend - Email for developers",
  description:
    "The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
