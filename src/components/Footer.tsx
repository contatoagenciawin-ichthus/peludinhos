import Link from "next/link";

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
      </div>
    </footer>
  );
}
