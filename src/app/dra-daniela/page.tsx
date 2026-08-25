import type { Metadata } from "next";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export const metadata: Metadata = { title: "Dra. Daniela", alternates: { canonical: "/dra-daniela" } };

export default function DanielaPage() {
  return (
    <section className="section">
      <div className="container split">
        <img
          src="/images/dani-prof.jpg"
          alt="Dra. Daniela, médica-veterinária da Peludinhos Dermatologia Veterinária"
          className="portrait-placeholder tall"
          style={{ width: "100%", height: "620px", objectFit: "cover", objectPosition: "center 20%" }}
        />
        <div>
          <span className="eyebrow">Dra. Daniela</span>
          <h1>Atuação dedicada à dermatologia veterinária.</h1>
          <p className="lead">A Dra. Daniela acompanha cães e gatos com doenças de pele, pelos e ouvidos, incluindo casos recorrentes e crônicos, atendendo tanto tutores quanto pacientes encaminhados por outros médicos-veterinários.</p>
          <p>O novo site utilizará apenas formação, especializações, CRMV e vínculos profissionais confirmados documentalmente.</p>
          <WhatsAppLink>Falar com a Peludinhos</WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
