import type { Metadata } from "next";
import "./globals.css";
import "./social.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_LIVE, SITE_NAME, SITE_URL } from "@/lib/site-data";

const SITE_DESCRIPTION = "Dermatologia veterinária especializada para cães e gatos, com atendimento em Americana, Campinas, Sumaré e Hortolândia.";
const INSTAGRAM_URL = "https://www.instagram.com/peludinhosdermavet/";
const FACEBOOK_URL = "https://www.facebook.com/peludinhosdermavet";
const SOCIAL_IMAGE = "/opengraph-image?v=peludinhos-20260825";
const FAVICON = "/favicon.svg?v=peludinhos-20260825";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | Dermatologia Veterinária`, template: `%s | Peludinhos` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  robots: {
    index: SITE_LIVE,
    follow: SITE_LIVE,
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
