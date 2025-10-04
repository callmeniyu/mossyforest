import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Mossy Forest Cameron Highlands | Official Guide & Tours",
  description:
    "Discover the mystical Mossy Forest in Cameron Highlands. Expert-guided Land Rover tours to Malaysia's most enchanting cloud forest at 2000m altitude. Book your budget-friendly adventure today!",
  keywords:
    "mossy forest, cameron highlands, mossy forest tour, cameron highlands tour, mossy forest malaysia, land rover tour, budget tour cameron highlands, cloud forest malaysia",
  authors: [{ name: "Mossy Forest Tours" }],
  openGraph: {
    title: "Mossy Forest Cameron Highlands | Official Tours",
    description:
      "Experience the magical Mossy Forest with expert guides. Budget-friendly Land Rover tours to Cameron Highlands' most mystical destination.",
    url: "https://mossyforest.my",
    siteName: "Mossy Forest Cameron Highlands",
    images: [
      {
        url: "/images/mossyforest (1).jpg",
        width: 1200,
        height: 630,
        alt: "Mossy Forest Cameron Highlands",
      },
    ],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mossy Forest Cameron Highlands | Official Tours",
    description:
      "Experience the magical Mossy Forest with expert guides. Budget-friendly Land Rover tours.",
    images: ["/images/mossyforest (1).jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://mossyforest.my",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristDestination",
              name: "Mossy Forest Cameron Highlands",
              description:
                "A mystical cloud forest ecosystem in Cameron Highlands, Malaysia, where ancient trees are covered in emerald moss at 2000 meters altitude.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cameron Highlands",
                addressRegion: "Pahang",
                addressCountry: "Malaysia",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "4.4774",
                longitude: "101.3770",
              },
              url: "https://mossyforest.my",
              image: [
                "https://mossyforest.my/images/mossyforest (1).jpg",
                "https://mossyforest.my/images/mossyforest (2).jpg",
                "https://mossyforest.my/images/mossyforest (3).jpg",
              ],
              touristType: [
                "Nature Lovers",
                "Photographers",
                "Adventure Seekers",
              ],
              hasMap: "https://goo.gl/maps/your-map-link",
            }),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="MY-C" />
        <meta name="geo.placename" content="Cameron Highlands" />
        <meta name="geo.position" content="4.4774;101.3770" />
        <meta name="ICBM" content="4.4774, 101.3770" />

        {/* Preload critical images */}
        <link rel="preload" href="/images/mossyforest (1).jpg" as="image" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
