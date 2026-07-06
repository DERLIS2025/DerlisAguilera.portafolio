import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://derlisaguilera.com"),
  title: "Derlis Aguilera | Ecommerce Strategy & AI Operations",
  description: "Portfolio profesional de Derlis Aguilera. Ecommerce, IA, automatización, analítica y transformación digital.",
  authors: [{ name: "Derlis Aguilera" }],
  keywords: ["Ecommerce", "Shopify", "AI Operations", "Business Intelligence", "Digital Growth", "Automatización"],
  openGraph: {
    title: "Derlis Aguilera | Ecommerce Strategy & AI Operations",
    description: "Ecommerce, IA, automatización, analítica y transformación digital.",
    type: "website",
    locale: "es_PY",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${geist.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
