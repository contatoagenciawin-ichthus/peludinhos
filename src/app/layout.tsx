import type { Metadata } from "next";
import "./globals.css";
import "./social.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_LIVE, SITE_NAME, SITE_URL } from "@/lib/site-data";

const SITE_DESCRIPTION = "Dermatologia veterinária para cães e gatos com a Dra. Danielle Hernandes Guimarães. Atendimento em Americana, Campinas, Sumaré e Hortolândia.";
const INSTAGRAM_URL = "https://www.instagram.com/peludinhosdermavet/";
const FACEBOOK_URL = "https://www.facebook.com/peludinhosdermavet";
const SOCIAL_IMAGE = "/opengraph-image?v=peludinhos-20260825";
const FAVICON = "/favicon.svg?v=peludinhos-20260825";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dermatologia Veterinária em Americana e Região | Peludinhos",
    template: "%s | Peludinhos",
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  robots: {
    index: SITE_LIVE,
    follow: SITE_LIVE,
    googleBot: SITE_LIVE
      ? {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        }
      : {
          index: false,
          follow: false,
        },
  },
  icons: {
    icon: [{ url: FAVICON, type: "image/svg+xml" }],
    shortcut: FAVICON,
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1200,
        height: 630,
        alt: "Peludinhos Dermatologia Veterinária — atendimento especializado para cães e gatos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
};

const veterinaryCareJsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  "@id": `${SITE_URL}/#veterinary-care`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  telephone: "+55 19 99164-6193",
  logo: `${SITE_URL}/brand/logo-peludinhos.webp`,
  image: `${SITE_URL}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Peru, 103 — Frezzarin",
    addressLocality: "Americana",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Americana" },
    { "@type": "City", name: "Campinas" },
    { "@type": "City", name: "Sumaré" },
    { "@type": "City", name: "Hortolândia" },
  ],
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(veterinaryCareJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
