import Link from "next/link";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/peludinhosdermavet/" },
  { label: "Facebook", href: "https://www.facebook.com/peludinhosdermavet" },
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>Peludinhos Dermatologia Veterinária</strong>
          <p>Atendimento especializado para cães e gatos.</p>
        </div>
        <div>
          <strong>Atendimento</strong>
          <p>Americana, Campinas, Sumaré e Hortolândia.</p>
        </div>
        <div>
          <strong>Navegação</strong>
          <p><Link href="/para-veterinarios">Para veterinários e clínicas</Link></p>
          <p><Link href="/duvidas-frequentes">Dúvidas frequentes</Link></p>
        </div>
        <div>
          <strong>Redes sociais</strong>
          <div className="footer-social-links" aria-label="Redes sociais da Peludinhos">
            {socialLinks.map((item) => (
              <a
                className="footer-social-link"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                key={item.label}
              >
                {item.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
