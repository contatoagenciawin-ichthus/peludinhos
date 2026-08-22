import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { conditions } from "@/lib/site-data";

export const metadata: Metadata = { title: "Dermatologia veterinária", alternates: { canonical: "/dermatologia-veterinaria" } };

export default function DermatologiaPage() {
  return (
    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">A especialidade</span>
        <h1>Dermatologia veterinária para pele, pelos e ouvidos de cães e gatos.</h1>
        <p className="lead">A consulta dermatológica considera histórico, distribuição das lesões, recorrência dos sintomas, exames anteriores e achados clínicos para definir os próximos passos da investigação.</p>
        <div className="cards-grid compact-grid">
          {conditions.map((item) => <Link className="card" href={`/condicoes/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.description}</p></Link>)}
        </div>
        <WhatsAppLink>Ver disponibilidade</WhatsAppLink>
      </div>
    </section>
  );
}
