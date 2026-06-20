import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeoKlicks Digitech | Full-Stack & AI/ML Development Agency",
  description: "Clarity. Capability. Confidence — Delivered Digitally. NeoKlicks Digitech is a freelance agency in Nashik, India specializing in custom web apps, real AI/ML integrations, and digital growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${caveat.variable} scroll-smooth h-full`}
    >
      <body className="font-sans antialiased text-brand-navy bg-slate-50 min-h-screen flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CLEEWNGDD6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CLEEWNGDD6');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

