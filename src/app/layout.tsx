import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ScrollManager } from "@/components/layout/ScrollManager";
import { JsonLd, localBusinessJsonLd } from "@/lib/seo";
import { site } from "@/content/site";
import "@/styles/globals.css";

const bagnard = localFont({
  src: "../fonts/Bagnard.otf",
  variable: "--font-bagnard",
  display: "swap",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Samadi Bali — Yoga, Wellness & Organic Food in Canggu",
    template: "%s · Samadi Bali",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    images: [{ url: "/images/hero/yoga.webp", width: 2400, height: 1600, alt: "Yoga at Samadi Bali" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/images/brand/logo-green.png", apple: "/images/brand/logo-green.png" },
};

export const viewport: Viewport = {
  themeColor: "#067c4a",
  width: "device-width",
  initialScale: 1,
};

// Marks JS as available so reveal start-states apply; if the motion layer never starts
// (blocked script, error), content is shown again after 3s.
const bootScript = `document.documentElement.classList.add('js');setTimeout(function(){var d=document.documentElement;if(!d.classList.contains('motion-ready'))d.classList.remove('js')},3000);`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bagnard.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <ScrollManager />
        <MotionProvider />
        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  );
}
