import Link from "next/link";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { conditions, locations } from "@/lib/site-data";

const PHOTO_HERO = "/images/home-dra-dani-paciente.avif";
const PHOTO_CLINICAL = "/images/home-investigacao.avif";
const PHOTO_DOCTOR = "/images/home-dra-dani.avif";

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
              <img src={PHOTO_HERO} alt="Dra. Dani durante atendimento veterinário" className="hero-photo" />
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
            <img src={PHOTO_CLINICAL} alt="Dra. Dani em ambiente de investigação clínica" className="clinical-photo" loading="lazy" />
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
            <span className="eyebrow">Exames e procedimentos</span>
            <h2>Recursos especializados entram quando fazem sentido para a investigação ou tratamento.</h2>
          </div>
          <p>
            A indicação é individual. O objetivo não é acumular procedimentos, mas usar o recurso correto quando ele acrescenta informação ou benefício ao caso.
          </p>
        </div>

        <div className="container procedure-grid">
          <div className="procedure-card procedure-card-orange">
            <span>01</span><h3>Prick test</h3><p>Recurso diagnóstico para investigação de alergias quando houver indicação clínica.</p>
          </div>
          <div className="procedure-card procedure-card-purple">
            <span>02</span><h3>Microagulhamento</h3><p>Procedimento dermatológico que pode integrar protocolos específicos de tratamento da pele.</p>
          </div>
          <div className="procedure-card procedure-card-coral">
            <span>03</span><h3>Peeling de diamante</h3><p>Recurso complementar para condições em que o cuidado da pele faça parte da estratégia terapêutica.</p>
          </div>
        </div>
        <div className="container procedure-link-wrap">
          <Link className="text-link" href="/dermatologia-veterinaria">Conheça a avaliação dermatológica →</Link>
        </div>
      </section>

      <section className="section location-section">
        <div className="container location-layout">
          <div className="location-copy">
            <span className="eyebrow light">Onde atendemos</span>
            <h2>Americana é o núcleo da Peludinhos. A Dra. Dani também atende em clínicas parceiras da região.</h2>
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
            <img src={PHOTO_DOCTOR} alt="Dra. Dani, médica-veterinária com atuação em dermatologia" className="doctor-photo" loading="lazy" />
            <div className="doctor-brand-note">
              <span>Peludinhos</span>
              <strong>Dermatologia veterinária como especialidade.</strong>
            </div>
          </div>
          <div className="doctor-copy">
            <span className="eyebrow">Dra. Dani</span>
            <h2>Uma atuação dedicada à dermatologia de cães e gatos.</h2>
            <p className="lead smaller">
              A Peludinhos reúne atendimento especializado, estrutura própria em Americana e uma rede regional de atendimento em clínicas parceiras.
            </p>
            <p className="pending-note">Formação, CRMV e títulos profissionais serão publicados após validação documental.</p>
            <Link className="text-link" href="/dra-daniela">Conheça a atuação profissional →</Link>
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
