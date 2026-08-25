import type { Metadata } from "next";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export const metadata: Metadata = { title: "Dúvidas frequentes", alternates: { canonical: "/duvidas-frequentes" } };

const faqs = [
  ["Preciso de encaminhamento?", "O tutor pode entrar em contato diretamente com a Peludinhos. Pacientes também podem chegar por encaminhamento de médicos-veterinários e clínicas."],
  ["Onde a Dra. Danielle atende?", "Em Americana e também em clínicas parceiras de Campinas, Sumaré e Hortolândia, conforme a agenda central da profissional."],
  ["Como faço para agendar?", "O atendimento é iniciado pelo WhatsApp da Peludinhos, que orienta sobre local e disponibilidade."],
  ["Já sou paciente. Preciso explicar tudo novamente?", "O fluxo do ScribVet está sendo preparado para reconhecer responsável e animal e recuperar o histórico pertinente, com os controles de segurança e autorização aplicáveis."],
];

export default function FAQPage() {
  return (
    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">Dúvidas frequentes</span><h1>Informações práticas sobre atendimento.</h1>
        <div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        <WhatsAppLink>Falar com a Peludinhos</WhatsAppLink>
      </div>
    </section>
  );
}
