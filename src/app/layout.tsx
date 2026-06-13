import type { Metadata } from "next";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kishibapp.com"),

  title: "KISHIB | AI Antique & Collectible Evaluation",
  description:
    "KISHIB is an AI-powered platform for evaluating antiques, collectibles, jewelry, artworks, luxury items, and heritage pieces through image analysis and detailed reports.",

  keywords: [
    "KISHIB",
    "Kishib App",
    "AI antique evaluation",
    "antique appraisal",
    "collectibles valuation",
    "jewelry evaluation",
    "artwork evaluation",
    "luxury item appraisal",
    "heritage pieces",
    "antique preservation",
    "تحليل التحف",
    "تقييم التحف",
    "تقييم المقتنيات",
    "تقييم المجوهرات",
    "تقييم القطع التراثية",
    "تطبيق كيشيب",
    "كيشيب",
  ],

  verification: {
    other: {
      "msvalidate.01": "01BBC0FB5BE3F105123681E741F589C8",
    },
  },

  openGraph: {
    title: "KISHIB | AI Antique & Collectible Evaluation",
    description:
      "Evaluate antiques, collectibles, jewelry, artworks, luxury items, and heritage pieces with AI-powered image analysis and detailed reports.",
    url: "https://www.kishibapp.com",
    siteName: "KISHIB",
    images: [
      {
        url: "/kishib-preview.jpg",
        width: 1200,
        height: 630,
        alt: "KISHIB App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KISHIB | AI Antique & Collectible Evaluation",
    description:
      "AI-powered evaluation for antiques, collectibles, jewelry, artworks, luxury items, and heritage pieces.",
    images: ["/kishib-preview.jpg"],
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}