import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { DOCTOR_SHORT_NAME, locations } from "@/lib/site-data";

type Props = { params: Promise<{ cidade: string }> };

export function generateStaticParams() {
  return locations.map((location) => ({ cidade: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cidade } = await params;
  const location = locations.find((item) => item.slug === cidade);
  if (!location) return {};

  const description = location.owned
    ? `Dermatologia veterinária em ${location.city} para cães e gatos, com atendimento na Peludinhos Dermatologia Veterinária. Consulte disponibilidade.`
    : `Dermatologia veterinária em ${location.city} para cães e gatos com a ${DOCTOR_SHORT_NAME}, em clínica parceira conforme agenda. Consulte disponibilidade.`;

  return {
    title: `Dermatologia veterinária em ${location.city}`,
    description,
    alternates: { canonical: `/onde-atendemos/${location.slug}` },
  };
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
        <p className="lead">
          {location.owned
            ? `Atendimento na ${location.label}, ${location.address}.`
            : `${DOCTOR_SHORT_NAME} atende na cidade em clínica parceira, conforme períodos liberados em sua agenda central.`}
        </p>

        <p>
          A consulta dermatológica é indicada para cães e gatos com problemas de pele, pelos e ouvidos, incluindo
          coceira persistente, alergias, dermatites, otites recorrentes e alterações de pelagem. A avaliação considera
          o histórico do paciente, a recorrência dos sintomas e os achados clínicos antes da definição dos próximos passos.
        </p>

        <h2>Como funciona o atendimento em {location.city}</h2>
        <p>
          {location.owned
            ? "Em Americana, o atendimento acontece no consultório da própria Peludinhos, que funciona como núcleo da agenda dermatológica."
            : `Em ${location.city}, o atendimento acontece em clínica parceira. A agenda é organizada de forma centralizada pela Peludinhos para facilitar a orientação do tutor.`}
        </p>
        <p>
          Não é necessário escolher uma agenda separada. Pelo WhatsApp da Peludinhos, o atendimento verifica a disponibilidade da {DOCTOR_SHORT_NAME} e orienta sobre o local compatível.
        </p>

        <p>
          Para entender os principais motivos de consulta e os recursos utilizados na investigação, veja também a página de{" "}
          <Link href="/dermatologia-veterinaria">dermatologia veterinária</Link>.
        </p>

        <WhatsAppLink location={location.city}>Ver disponibilidade em {location.city}</WhatsAppLink>
      </div>
    </section>
  );
}
