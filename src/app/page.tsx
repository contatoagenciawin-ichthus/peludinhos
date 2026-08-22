import Link from "next/link";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { conditions, locations } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Dermatologia veterinária especializada</span>
            <h1>Saúde da pele, pelos e ouvidos de cães e gatos exige investigação especializada.</h1>
            <p className="lead">A Dra. Daniela atende casos dermatológicos em Americana e clínicas parceiras da região, com avaliação individualizada e acompanhamento ao longo do tratamento.</p>
            <div className="actions">
              <WhatsAppLink>Ver disponibilidade pelo WhatsApp</WhatsAppLink>
              <Link className="button button-secondary" href="/para-veterinarios">Sou médico-veterinário</Link>
            </div>
          </div>
          <div className="media-placeholder" aria-label="Espaço reservado para fotografia real da Dra. Daniela em atendimento">
            <span>Fotografia clínica real<br/>Dra. Daniela + paciente</span>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container narrow">
          <span className="eyebrow">Quando procurar avaliação especializada</span>
          <h2>Quando o problema persiste ou volta, é importante investigar além do sintoma.</h2>
          <p className="lead smaller">Coceira frequente, otites recorrentes, alterações na pele, falhas de pelagem e alergias podem ter causas diferentes e exigir investigação dermatológica específica.</p>
        </div>
        <div className="container cards-grid">
          {conditions.map((item) => (
            <Link className="card" href={`/condicoes/${item.slug}`} key={item.slug}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="link-arrow">Entender melhor →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">A avaliação dermatológica</span>
            <h2>Histórico, exame clínico e recursos diagnósticos orientam a condução de cada caso.</h2>
          </div>
          <div className="stack-list">
            <p><strong>Avaliação especializada:</strong> pele, pelagem, ouvidos, histórico e evolução dos sintomas.</p>
            <p><strong>Exames dermatológicos:</strong> citologia e testes específicos quando indicados.</p>
            <p><strong>Procedimentos:</strong> recursos dermatológicos definidos conforme a necessidade do paciente.</p>
            <p><strong>Acompanhamento:</strong> especialmente relevante em doenças crônicas e recorrentes.</p>
          </div>
        </div>
      </section>

      <section className="section brand-band">
        <div className="container split">
          <div>
            <span className="eyebrow light">Atendimento regional</span>
            <h2>Uma especialista, uma agenda central e diferentes locais de atendimento.</h2>
            <p>A disponibilidade da Dra. Daniela é organizada de forma centralizada. Pelo WhatsApp da Peludinhos, o atendimento pode considerar sua cidade e indicar o local e horário compatíveis.</p>
            <WhatsAppLink variant="secondary">Encontrar o atendimento mais conveniente</WhatsAppLink>
          </div>
          <div className="location-list">
            {locations.map((location) => (
              <Link href={`/onde-atendemos/${location.slug}`} key={location.slug}>
                <strong>{location.city}</strong><span>{location.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="portrait-placeholder"><span>Dra. Daniela<br/>foto profissional</span></div>
          <div>
            <span className="eyebrow">Dra. Daniela</span>
            <h2>Dermatologia veterinária como especialidade, não como atendimento genérico.</h2>
            <p className="lead smaller">A atuação é dedicada à investigação e acompanhamento de doenças dermatológicas em cães e gatos, com atendimento próprio e em clínicas parceiras.</p>
            <p className="pending-note">Formação, CRMV e títulos serão inseridos após validação documental.</p>
            <Link className="text-link" href="/dra-daniela">Conheça a atuação profissional →</Link>
          </div>
        </div>
      </section>

      <section className="section pro-section">
        <div className="container pro-card">
          <div>
            <span className="eyebrow">Para médicos-veterinários e clínicas</span>
            <h2>Suporte especializado em dermatologia para casos que exigem uma investigação mais específica.</h2>
            <p>A Peludinhos também atua em conjunto com profissionais e clínicas, apoiando a investigação, a confirmação diagnóstica e a condução dermatológica, com preservação da relação do veterinário responsável com o tutor.</p>
          </div>
          <div className="actions vertical-actions">
            <Link className="button button-primary" href="/para-veterinarios">Conhecer o suporte especializado</Link>
            <WhatsAppLink audience="veterinario" intent="suporte" variant="text">Conversar sobre um caso →</WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container narrow center">
          <span className="eyebrow">Atendimento pelo WhatsApp</span>
          <h2>Quer verificar o local e a disponibilidade para atendimento?</h2>
          <p>O canal da Peludinhos concentra o atendimento e orienta a partir da sua necessidade, localização e disponibilidade da Dra. Daniela.</p>
          <WhatsAppLink>Iniciar atendimento</WhatsAppLink>
        </div>
      </section>
    </>
  );
}
