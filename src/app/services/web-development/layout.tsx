import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Web Development Services in Nashik | NeoKlicks DigiTech",
  description: "NeoKlicks DigiTech crafts pixel-perfect, high-performance websites that attract customers and grow revenue. Custom full-stack web development for businesses across India and globally.",
  keywords: "web development Nashik, custom website development India, full stack developer Maharashtra, Next.js development India, React developer Nashik, website development agency India",
  authors: [{ name: "NeoKlicks DigiTech" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://neoklicksdigitech.com/services/web-development",
  },
  openGraph: {
    type: "website",
    url: "https://neoklicksdigitech.com/services/web-development",
    siteName: "NeoKlicks DigiTech",
    title: "Web Development | Websites That Captivate, Convert & Scale – NeoKlicks DigiTech",
    description: "Pixel-perfect, high-performance websites built to grow your business. Custom full-stack web development from NeoKlicks DigiTech in Nashik, India.",
    images: [
      {
        url: "https://neoklicksdigitech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Services – NeoKlicks DigiTech Nashik",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | NeoKlicks DigiTech Nashik",
    description: "Custom, high-performance websites built to captivate, convert, and scale. Full-stack web development from NeoKlicks DigiTech, Nashik India.",
    images: [
      {
        url: "https://neoklicksdigitech.com/og-image.jpg",
        alt: "NeoKlicks DigiTech – Web Development Services",
      },
    ],
  },
  other: {
    "content-language": "en-IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
  width: "device-width",
  initialScale: 1,
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
