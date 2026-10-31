import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Outfit } from "next/font/google";
import { Shell } from "@/components/shell";
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
  title: "BK Sports & Fitness | Paschim Vihar, Delhi",
  description:
    "BK Sports & Fitness — 27 years in Paschim Vihar, Delhi. Cricket, football, badminton, gym gear, bat knocking, racket repair, and delivery across India. Call or WhatsApp +91 7503600586.",
  icons: { icon: "/favicon.svg" },
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
