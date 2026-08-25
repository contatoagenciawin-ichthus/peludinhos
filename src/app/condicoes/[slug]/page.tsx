import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { conditions } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

const conditionContent = {
  "alergias-e-atopia": {
    intro: "Coceira persistente, inflamação da pele e otites que voltam podem fazer parte de quadros alérgicos. Como sinais parecidos também aparecem em outras doenças, a investigação precisa considerar o histórico completo do cão ou gato.",
    signs: [
      "coceira frequente ou intensa, inclusive em patas, face, barriga e orelhas",
      "vermelhidão, lambedura excessiva e irritação recorrente da pele",
      "otites que melhoram e depois voltam",
      "sintomas sazonais ou que persistem ao longo do ano",
    ],
    investigation: "A avaliação dermatológica começa pela história clínica e pelo exame da pele e dos ouvidos. Dependendo dos achados, pode ser necessário investigar infecções secundárias, parasitas e diferentes componentes alérgicos antes de definir a melhor estratégia de controle.",
    followUp: "Doenças alérgicas costumam exigir acompanhamento. O objetivo é identificar fatores relevantes para aquele paciente, controlar inflamação e infecções associadas e ajustar o manejo ao longo do tempo.",
  },
  "otites-recorrentes": {
    intro: "Uma otite pode ser um episódio isolado, mas quando volta repetidamente é importante investigar o que mantém a inflamação. Em muitos pacientes, alterações do ouvido estão relacionadas a problemas dermatológicos que também precisam ser controlados.",
    signs: [
      "coçar ou sacudir a cabeça com frequência",
      "vermelhidão, secreção ou odor no ouvido",
      "dor ou incômodo ao tocar a região",
      "episódios que reaparecem depois do tratamento",
    ],
    investigation: "A avaliação pode incluir exame do conduto auditivo, análise do histórico e citologia, conforme a necessidade clínica. Também é importante observar a pele e procurar fatores predisponentes ou doenças de base que expliquem a recorrência.",
    followUp: "Tratar somente a crise pode não ser suficiente quando existe uma causa dermatológica associada. O acompanhamento ajuda a reduzir recidivas e a adaptar o manejo do ouvido à evolução de cada paciente.",
  },
  dermatites: {
    intro: "Dermatite é um termo amplo para processos inflamatórios da pele. Vermelhidão, feridas, crostas, descamação ou infecções recorrentes podem ter causas diferentes e, por isso, o tratamento depende de uma avaliação adequada.",
    signs: [
      "vermelhidão, descamação, crostas ou lesões na pele",
      "coceira, lambedura ou mordedura frequente",
      "odor, oleosidade ou alterações na textura da pele",
      "infecções que retornam ou demoram a responder",
    ],
    investigation: "O padrão das lesões, a distribuição pelo corpo, o tempo de evolução e os tratamentos já realizados ajudam a direcionar a investigação. Exames complementares podem ser indicados para diferenciar causas infecciosas, inflamatórias, alérgicas ou outras alterações dermatológicas.",
    followUp: "A condução muda conforme a causa identificada. Em alguns casos, resolver a infecção secundária é apenas uma etapa; em outros, será necessário acompanhar uma condição crônica ou recorrente.",
  },
  "queda-de-pelos-e-alopecias": {
    intro: "Falhas na pelagem e queda de pelos podem ocorrer com ou sem coceira. O padrão da alopecia, a condição da pele e outros sinais do animal ajudam a diferenciar causas dermatológicas e sistêmicas.",
    signs: [
      "áreas localizadas ou extensas sem pelos",
      "pelagem que afina, quebra ou demora a crescer novamente",
      "alteração de cor, textura, oleosidade ou descamação da pele",
      "queda de pelos acompanhada de coceira, lesões ou outros sintomas",
    ],
    investigation: "A consulta dermatológica avalia a distribuição da perda de pelos, a presença de inflamação e o histórico do paciente. Conforme o caso, podem ser necessários exames de pele, pelos ou outras investigações para definir a origem do problema.",
    followUp: "O crescimento da pelagem depende da causa e do ciclo do pelo. Por isso, a resposta nem sempre é imediata e o acompanhamento é importante para avaliar evolução e necessidade de ajustes.",
  },
} as const;

export function generateStaticParams() {
  return conditions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = conditions.find((item) => item.slug === slug);
  if (!condition) return {};

  return {
    title: condition.title,
    description: `${condition.description} Dermatologia veterinária para cães e gatos em Americana e região.`,
    alternates: { canonical: `/condicoes/${condition.slug}` },
  };
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const condition = conditions.find((item) => item.slug === slug);
  const content = conditionContent[slug as keyof typeof conditionContent];

  if (!condition || !content) notFound();

  return (
    <>
      <section className="section">
        <div className="container narrow">
          <span className="eyebrow">Dermatologia veterinária</span>
          <h1>{condition.title}</h1>
          <p className="lead">{content.intro}</p>

          <h2>Sinais que merecem avaliação</h2>
          <ul>
            {content.signs.map((sign) => (
              <li key={sign}>{sign}</li>
            ))}
          </ul>

          <h2>Como é feita a investigação</h2>
          <p>{content.investigation}</p>

          <h2>Por que o acompanhamento pode ser importante</h2>
          <p>{content.followUp}</p>

          <p>
            A indicação de exames e tratamentos depende do quadro de cada paciente. Conheça também a página de{" "}
            <Link href="/dermatologia-veterinaria">dermatologia veterinária</Link> e os recursos utilizados na investigação.
          </p>

          <WhatsAppLink>Falar sobre atendimento</WhatsAppLink>
        </div>
      </section>
    </>
  );
}
