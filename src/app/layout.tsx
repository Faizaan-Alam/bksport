import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Outfit } from "next/font/google";
import { Shell } from "@/components/shell";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const display = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "BK Sports & Fitness",
    "sports shop Paschim Vihar",
    "cricket shop Delhi",
    "badminton racket repair Paschim Vihar",
    "gym equipment Paschim Vihar",
    "bat knocking Delhi",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1280,
        height: 720,
        alt: "Cricket bat, football, badminton racket, shuttlecock and dumbbells",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.svg" },
  category: "sports",
};

export const viewport: Viewport = {
  themeColor: "#07080b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="bksport" className={`${outfit.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full font-sans text-base-content">
        <a href="#categories" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[90] focus:bg-primary focus:px-3 focus:py-2 focus:font-semibold focus:text-primary-content">
          Skip to categories
        </a>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
