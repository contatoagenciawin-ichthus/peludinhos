import type { Metadata } from "next";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Suporte dermatológico para veterinários e clínicas",
  description: "Suporte especializado em dermatologia veterinária para investigação, confirmação diagnóstica e acompanhamento de casos encaminhados.",
  alternates: { canonical: "/para-veterinarios" },
};

const indications = [
  "Otites recorrentes ou de difícil controle",
  "Prurido persistente e suspeita de doença alérgica",
  "Dermatites recorrentes ou resposta insatisfatória ao tratamento",
  "Alopecias e alterações persistentes da pelagem",
  "Casos em que a investigação dermatológica precisa ser aprofundada",
  "Necessidade de apoio à confirmação diagnóstica ou à condução do caso",
];

export default function VeterinariosPage() {
  return (
    <>
      <section className="hero section pro-hero">
        <div className="container narrow">
          <span className="eyebrow">Peludinhos para profissionais</span>
          <h1>Suporte especializado em dermatologia veterinária para médicos-veterinários e clínicas.</h1>
          <p className="lead">Apoio na investigação de casos dermatológicos, confirmação diagnóstica e condução especializada, mantendo o profissional responsável integrado ao acompanhamento.</p>
          <WhatsAppLink audience="veterinario" intent="suporte">Falar sobre um caso</WhatsAppLink>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Quando acionar uma especialista</span>
            <h2>Uma segunda avaliação pode ser útil quando o caso exige aprofundamento dermatológico.</h2>
          </div>
          <div className="stack-list">
            {indications.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <span className="eyebrow">Como funciona</span>
          <div className="process-grid">
            <div><span>01</span><h3>Apresentação do caso</h3><p>O profissional ou a clínica inicia o contato e compartilha as informações disponíveis.</p></div>
            <div><span>02</span><h3>Organização das pendências</h3><p>O fluxo identifica dados e exames já existentes e orienta o que ainda é necessário para o encaminhamento.</p></div>
            <div><span>03</span><h3>Avaliação especializada</h3><p>A Dra. Daniela realiza a investigação dermatológica no local e horário compatíveis com o caso.</p></div>
            <div><span>04</span><h3>Continuidade compartilhada</h3><p>As informações pertinentes podem retornar ao profissional encaminhador conforme autorização e necessidade clínica.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container pro-card">
          <div>
            <span className="eyebrow">Relação profissional preservada</span>
            <h2>A atuação especializada complementa o caso; não substitui o veterinário responsável.</h2>
            <p>O objetivo é aprofundar a frente dermatológica e colaborar com a continuidade do atendimento. Decisões clínicas, registros e compartilhamentos permanecem sob responsabilidade profissional e dentro das autorizações aplicáveis.</p>
          </div>
          <WhatsAppLink audience="veterinario" intent="encaminhamento">Encaminhar um paciente</WhatsAppLink>
        </div>
      </section>
    </>
  );
}
