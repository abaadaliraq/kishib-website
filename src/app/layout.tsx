import type { Metadata } from "next";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  title: "KISHIB",
  description: "KISHIB platform for antiques, evaluation, and preservation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
