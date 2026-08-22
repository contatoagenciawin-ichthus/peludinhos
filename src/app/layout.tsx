import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | Dra. Daniela`, template: `%s | Peludinhos` },
  description: "Dermatologia veterinária especializada para cães e gatos, com atendimento em Americana, Campinas, Sumaré e Hortolândia.",
  alternates: { canonical: "/" },
  openGraph: { title: SITE_NAME, type: "website", locale: "pt_BR", url: SITE_URL },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
