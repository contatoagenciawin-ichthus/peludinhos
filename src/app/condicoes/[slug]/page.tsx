import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { conditions } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return conditions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = conditions.find((item) => item.slug === slug);
  if (!condition) return {};
  return { title: condition.title, description: condition.description, alternates: { canonical: `/condicoes/${condition.slug}` } };
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const condition = conditions.find((item) => item.slug === slug);
  if (!condition) notFound();
  return (
    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">Dermatologia veterinária</span>
        <h1>{condition.title}</h1>
        <p className="lead">{condition.description}</p>
        <p>Esta página será aprofundada com conteúdo clínico revisado pela Dra. Daniela antes da publicação, evitando generalizações e promessas de resultado.</p>
        <WhatsAppLink>Falar sobre atendimento</WhatsAppLink>
      </div>
    </section>
  );
}
