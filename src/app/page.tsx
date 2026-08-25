import Link from "next/link";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import {
  conditions,
  locations,
  services,
  DOCTOR_DISPLAY_NAME,
  DOCTOR_SHORT_NAME,
} from "@/lib/site-data";

const PHOTO_HERO = "/images/hero-dra-dani-v2.jpg.jpg";
const PHOTO_CLINICAL = "/images/investigacao-dra-dani-v2.jpg.jpg";
const PHOTO_DOCTOR = "/images/dra-dani-clinica-v2.jpg.jpg";
const PROCEDURE_STYLES = ["procedure-card-orange", "procedure-card-purple", "procedure-card-coral"] as const;

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <span className="eyebrow">Dermatologia veterinária especializada</span>
            <h1>Coceira, alergias e otites recorrentes merecem investigação além do sintoma.</h1>
            <p className="lead">
              Atendimento dermatológico para cães e gatos em Americana, Campinas, Sumaré e Hortolândia,
              com avaliação individualizada e acompanhamento dos casos.
            </p>
            <div className="actions">
              <WhatsAppLink>Agendar atendimento</WhatsAppLink>
              <Link className="button button-secondary" href="/onde-atendemos">Ver locais de atendimento</Link>
            </div>
            <div className="hero-proof" aria-label="Principais frentes de atendimento">
              <span>Coceira persistente</span>
              <span>Otites recorrentes</span>
              <span>Alergias e atopia</span>
              <span>Alterações de pele e pelos</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo-frame">
              <img src={PHOTO_HERO} alt={`${DOCTOR_SHORT_NAME} durante atendimento veterinário`} className="hero-photo" />
            </div>
            <div className="hero-location-card">
              <span>Atendimento regional</span>
              <strong>Americana + região</strong>
              <p>Uma agenda, diferentes locais de atendimento.</p>
            </div>
            <div className="hero-accent" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="home-intro section">
        <div className="container section-heading-grid">
          <div>
            <span className="eyebrow">Quando procurar</span>
            <h2>Quando o problema volta, o próximo passo não deveria ser apenas repetir o tratamento.</h2>
          </div>
          <p className="lead smaller">
            Problemas dermatológicos podem ter causas diferentes e se manifestar de formas parecidas.
            Uma avaliação especializada ajuda a organizar a investigação e definir uma condução adequada para cada paciente.
          </p>
        </div>

        <div className="container symptom-grid">
          {conditions.map((item, index) => (
            <Link className="symptom-card" href={`/condicoes/${item.slug}`} key={item.slug}>
              <span className="card-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="link-arrow">Saiba quando investigar →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section clinical-section">
        <div className="container clinical-grid">
          <div className="clinical-photo-wrap">
            <img src={PHOTO_CLINICAL} alt={`${DOCTOR_SHORT_NAME} em ambiente de investigação clínica`} className="clinical-photo" loading="lazy" />
            <div className="clinical-photo-caption">Avaliação dermatológica individualizada</div>
          </div>

          <div className="clinical-copy">
            <span className="eyebrow">Como funciona a investigação</span>
            <h2>Não existe um único protocolo para todo problema de pele.</h2>
            <p className="lead smaller">
              Histórico, exame clínico e recursos diagnósticos orientam quais hipóteses precisam ser investigadas
              e o que faz sentido para aquele cão ou gato.
            </p>
            <div className="clinical-steps">
              <div><strong>01</strong><span><b>Entender o histórico</b> sintomas, recorrência, tratamentos prévios e evolução.</span></div>
              <div><strong>02</strong><span><b>Avaliar o paciente</b> pele, pelagem, ouvidos e sinais associados.</span></div>
              <div><strong>03</strong><span><b>Investigar quando necessário</b> exames e testes são indicados conforme o caso.</span></div>
              <div><strong>04</strong><span><b>Acompanhar a resposta</b> especialmente em doenças crônicas e recorrentes.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section procedure-section">
        <div className="container section-heading-grid procedure-heading">
          <div>
            <span className="eyebrow">Atendimentos</span>
            <h2>Consulta, testes e tratamentos indicados conforme a necessidade de cada caso.</h2>
          </div>
          <p>
            A investigação é individualizada. Os recursos clínicos e diagnósticos entram quando acrescentam informação ou benefício à condução do paciente.
          </p>
        </div>

        <div className="container procedure-grid">
          {services.map((service, index) => (
            <div className={`procedure-card ${PROCEDURE_STYLES[index % PROCEDURE_STYLES.length]}`} key={service.title}>
              <span>0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="container procedure-link-wrap">
          <Link className="text-link" href="/dermatologia-veterinaria">Conheça a avaliação dermatológica →</Link>
        </div>
      </section>

      <section className="section location-section">
        <div className="container location-layout">
          <div className="location-copy">
            <span className="eyebrow light">Onde atendemos</span>
            <h2>Americana é o núcleo da Peludinhos. {DOCTOR_SHORT_NAME} também atende em clínicas parceiras da região.</h2>
            <p>
              Pelo WhatsApp da Peludinhos, o atendimento identifica sua necessidade e sua cidade para orientar o local e a disponibilidade mais convenientes.
            </p>
            <WhatsAppLink variant="secondary">Encontrar atendimento</WhatsAppLink>
          </div>
          <div className="city-grid">
            {locations.map((location) => (
              <Link className="city-card" href={`/onde-atendemos/${location.slug}`} key={location.slug}>
                <span>{location.slug === "americana" ? "Clínica própria" : "Clínica parceira"}</span>
                <strong>{location.city}</strong>
                <p>{location.label}</p>
                <small>Ver atendimento →</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section doctor-section">
        <div className="container doctor-layout doctor-layout-photo">
          <div className="doctor-photo-wrap">
            <img src={PHOTO_DOCTOR} alt={`${DOCTOR_DISPLAY_NAME}, médica-veterinária com atuação em dermatologia`} className="doctor-photo" loading="lazy" />
            <div className="doctor-brand-note">
              <span>Peludinhos</span>
              <strong>Dermatologia veterinária como especialidade.</strong>
            </div>
          </div>
          <div className="doctor-copy">
            <span className="eyebrow">{DOCTOR_DISPLAY_NAME}</span>
            <h2>Uma atuação dedicada à dermatologia de cães e gatos.</h2>
            <p className="lead smaller">
              Pós-graduada em Dermatologia Veterinária, com especialização em Dermatologia Felina e aperfeiçoamento em Alergologia, a Dra. Danielle concentra sua atuação na investigação e no acompanhamento de doenças de pele e ouvidos.
            </p>
            <Link className="text-link" href="/dra-danielle">Conheça a trajetória profissional →</Link>
          </div>
        </div>
      </section>

      <section className="section pro-section">
        <div className="container pro-card pro-card-redesign">
          <div>
            <span className="eyebrow">Para médicos-veterinários e clínicas</span>
            <h2>Suporte especializado para casos dermatológicos que pedem uma investigação mais específica.</h2>
            <p>
              A Peludinhos pode atuar em conjunto com o veterinário responsável, apoiando a investigação, a confirmação diagnóstica e a condução dermatológica sem romper a relação construída com o tutor.
            </p>
          </div>
          <div className="actions vertical-actions">
            <Link className="button button-primary" href="/para-veterinarios">Área para veterinários</Link>
            <WhatsAppLink audience="veterinario" intent="suporte" variant="text">Conversar sobre um caso →</WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="section final-cta home-final-cta">
        <div className="container final-cta-layout">
          <div>
            <span className="eyebrow">Atendimento Peludinhos</span>
            <h2>Seu cão ou gato apresenta um problema de pele que persiste ou sempre volta?</h2>
          </div>
          <div>
            <p>
              Conte brevemente o que está acontecendo e informe sua cidade. O atendimento orienta o próximo passo e verifica o local disponível para consulta.
            </p>
            <WhatsAppLink>Falar com a Peludinhos</WhatsAppLink>
          </div>
        </div>
      </section>
    </>
  );
}
