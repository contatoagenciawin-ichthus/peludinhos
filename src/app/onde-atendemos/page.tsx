import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { DOCTOR_SHORT_NAME, locations } from "@/lib/site-data";

export const metadata: Metadata = { title: "Onde a Dra. Danielle atende", alternates: { canonical: "/onde-atendemos" } };

export default function LocationsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="narrow">
          <span className="eyebrow">Atendimento multi-local</span>
          <h1>Atendimento em Americana, Campinas, Sumaré e Hortolândia.</h1>
          <p className="lead">A agenda é centralizada na disponibilidade da {DOCTOR_SHORT_NAME}. O WhatsApp da Peludinhos orienta sobre o local e horário compatíveis sem criar agendas paralelas por clínica.</p>
        </div>
        <div className="cards-grid compact-grid">
          {locations.map((location) => (
            <Link className="card" href={`/onde-atendemos/${location.slug}`} key={location.slug}>
              <h3>{location.city}</h3><p>{location.label}</p><span className="link-arrow">Ver atendimento →</span>
            </Link>
          ))}
        </div>
        <WhatsAppLink>Encontrar local e horário</WhatsAppLink>
      </div>
    </section>
  );
}
