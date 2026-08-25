import type { Metadata } from "next";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { DOCTOR_DISPLAY_NAME, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Dra. Danielle Hernandes Guimarães",
  description: "Conheça a trajetória e a formação da Dra. Danielle Hernandes Guimarães, médica-veterinária com atuação especializada em dermatologia veterinária.",
  alternates: { canonical: "/dra-danielle" },
};

export default function DaniellePage() {
  return (
    <>
      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div style={{ position: "relative", maxWidth: "520px" }}>
            <img
              src="/images/dani-prof.jpg"
              alt={`${DOCTOR_DISPLAY_NAME}, médica-veterinária da Peludinhos Dermatologia Veterinária`}
              style={{
                width: "100%",
                aspectRatio: "4 / 5",
                objectFit: "cover",
                objectPosition: "center 18%",
                borderRadius: "30px",
                boxShadow: "var(--shadow)",
              }}
            />
          </div>

          <div style={{ paddingTop: "10px" }}>
            <span className="eyebrow">{DOCTOR_DISPLAY_NAME}</span>
            <h1 style={{ fontSize: "clamp(2.65rem, 4.7vw, 4.65rem)", maxWidth: "13ch" }}>
              Dermatologia veterinária com experiência clínica e formação especializada.
            </h1>
            <p className="lead">
              A trajetória da Dra. Danielle reúne clínica de pequenos animais, formação específica em dermatologia e interesse aprofundado por doenças alérgicas, pele e ouvidos de cães e gatos.
            </p>
            <div className="hero-proof" aria-label="Formação em dermatologia veterinária">
              <span>Pós-graduação em Dermatologia Veterinária</span>
              <span>Especialização em Dermatologia Felina</span>
              <span>Aperfeiçoamento em Alergologia</span>
            </div>
            <div className="actions">
              <WhatsAppLink>Agendar atendimento</WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <span className="eyebrow">Trajetória profissional</span>
            <h2>Uma mudança de carreira que levou à Medicina Veterinária e, depois, à dermatologia.</h2>
          </div>
          <div>
            <p className="lead smaller">
              Antes da Medicina Veterinária, Danielle formou-se em Comunicação Social pela PUC Campinas, fez pós-graduação em Administração pela FGV e um curso complementar de Marketing na Martin College, na Austrália.
            </p>
            <p>
              O projeto de se tornar veterinária, porém, continuava presente. A decisão de mudar de carreira amadureceu após uma experiência em alto-mar com baleias, quando percebeu que queria direcionar sua vida profissional ao cuidado animal.
            </p>
            <p>
              Durante a graduação em Medicina Veterinária, trabalhou com animais de grande porte, especialmente ovinos e caprinos, em atividades ligadas à reprodução e à produção de queijo. Ao mesmo tempo, a clínica de pequenos animais sempre fez parte da sua rotina.
            </p>
            <p>
              Foi no atendimento clínico que os casos de pele e ouvidos ganharam cada vez mais espaço. Esse interesse levou à pós-graduação em Dermatologia Veterinária, à especialização em Dermatologia Felina e ao aperfeiçoamento em Alergologia, área que hoje concentra sua atuação profissional.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="narrow">
            <span className="eyebrow">Atendimentos</span>
            <h2>Recursos clínicos e diagnósticos escolhidos de acordo com cada caso.</h2>
            <p className="lead smaller">
              A investigação dermatológica é individualizada. Consulta, exames e tratamentos são indicados conforme o histórico, os achados clínicos e a necessidade de cada paciente.
            </p>
          </div>

          <div className="cards-grid compact-grid">
            {services.map((service, index) => (
              <div className="card" key={service.title}>
                <span className="card-index">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <WhatsAppLink>Falar com a Peludinhos</WhatsAppLink>
        </div>
      </section>
    </>
  );
}
