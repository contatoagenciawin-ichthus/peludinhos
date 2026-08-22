import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { locations } from "@/lib/site-data";

type Props = { params: Promise<{ cidade: string }> };

export function generateStaticParams() {
  return locations.map((location) => ({ cidade: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cidade } = await params;
  const location = locations.find((item) => item.slug === cidade);
  if (!location) return {};
  return { title: `Dermatologia veterinária em ${location.city}`, alternates: { canonical: `/onde-atendemos/${location.slug}` } };
}

export default async function LocationPage({ params }: Props) {
  const { cidade } = await params;
  const location = locations.find((item) => item.slug === cidade);
  if (!location) notFound();

  return (
    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">Onde atendemos</span>
        <h1>Dermatologia veterinária em {location.city}.</h1>
        <p className="lead">{location.owned ? `Atendimento na ${location.label}, ${location.address}.` : "A Dra. Daniela atende na cidade em clínica parceira, conforme períodos liberados em sua agenda central."}</p>
        <p>Não é necessário escolher uma agenda separada. Pelo WhatsApp da Peludinhos, o atendimento verifica a disponibilidade da Dra. Daniela e orienta sobre o local compatível.</p>
        <WhatsAppLink location={location.city}>Ver disponibilidade em {location.city}</WhatsAppLink>
      </div>
    </section>
  );
}
