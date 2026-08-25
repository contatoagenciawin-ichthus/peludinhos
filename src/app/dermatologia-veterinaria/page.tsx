import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { conditions, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Dermatologia veterinária",
  description: "Consultas dermatológicas, prick test, citologia dermatológica, imunoterapia e tratamento do conduto auditivo para cães e gatos.",
  alternates: { canonical: "/dermatologia-veterinaria" },
};

export default function DermatologiaPage() {
  return (
    <>
      <section className="section">
        <div className="container narrow">
          <span className="eyebrow">A especialidade</span>
          <h1>Dermatologia veterinária para pele, pelos e ouvidos de cães e gatos.</h1>
          <p className="lead">
            A consulta dermatológica considera histórico, distribuição das lesões, recorrência dos sintomas,
            exames anteriores e achados clínicos para definir os próximos passos da investigação.
          </p>
          <div className="cards-grid compact-grid">
            {conditions.map((item) => (
              <Link className="card" href={`/condicoes/${item.slug}`} key={item.slug}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="narrow">
            <span className="eyebrow">Atendimentos</span>
            <h2>Recursos clínicos e diagnósticos para diferentes etapas da investigação e do tratamento.</h2>
            <p className="lead smaller">
              Nem todo paciente precisa dos mesmos exames ou procedimentos. A indicação é feita de acordo com o quadro clínico e com o objetivo de cada etapa da investigação.
            </p>
          </div>
          <div className="cards-grid compact-grid">
            {services.map((service) => (
              <div className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <WhatsAppLink>Ver disponibilidade</WhatsAppLink>
        </div>
      </section>
    </>
  );
}
