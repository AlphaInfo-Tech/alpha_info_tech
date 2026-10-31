import type { Metadata } from "next";
import { Inter, Sora, Roboto_Mono, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/lib/content";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Only the Voice2Fill pages use Tamil, so don't preload it on every page.
const notoTamil = Noto_Sans_Tamil({
  variable: "--font-tamil",
  subsets: ["tamil"],
  weight: ["500", "600", "700"],
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alphainfotech.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description:
    "Alpha Info Tech is the technology partner for small businesses — from simple websites to fully custom, enterprise-grade platforms for sales, operations, and finance.",
  keywords: [
    "Alpha Info Tech",
    "small business software",
    "Zoho Creator",
    "Google AppSheet",
    "business automation",
    "Erode Tamil Nadu software company",
  ],
  openGraph: {
    title: `${company.name} | ${company.tagline}`,
    description: company.statement,
    url: siteUrl,
    siteName: company.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | ${company.tagline}`,
    description: company.statement,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${robotoMono.variable} ${notoTamil.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
