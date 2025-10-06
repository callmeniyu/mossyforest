import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Mossy Forest Eco Park | Official Cameron Highlands Nature Reserve",
  description:
    "Visit the enchanting Mossy Forest Eco Park in Cameron Highlands. Explore ancient moss-covered trees, rare plants, and stunning highland views at 2,000m above sea level. Official entrance fees, opening hours, and visitor information.",
  keywords:
    "Mossy Forest Cameron Highlands, Cameron Highlands Mossy Forest, Mossy Forest tour, Mossy Forest hiking, Mossy Forest trekking, Mossy Forest entrance fee, Mossy Forest ticket price, Mossy Forest admission cost",
  openGraph: {
    title: "Mossy Forest Eco Park | Official Cameron Highlands Nature Reserve",
    description:
      "Explore the magical Mossy Forest Eco Park - Cameron Highlands' premier eco-tourism destination",
    url: "https://mossyforest.my",
    siteName: "Mossy Forest Eco Park",
    images: [
      {
        url: "/images/mossyforest (1).jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${merriweather.variable}`}>
        {children}
      </body>
    </html>
  );
}
