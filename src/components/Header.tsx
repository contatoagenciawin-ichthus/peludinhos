import Link from "next/link";
import { WhatsAppLink } from "./WhatsAppLink";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Peludinhos — início">
          <strong>PELUDINHOS</strong>
          <span>Dermatologia Veterinária</span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <Link href="/dermatologia-veterinaria">Dermatologia</Link>
          <Link href="/dra-daniela">Dra. Daniela</Link>
          <Link href="/onde-atendemos">Onde atende</Link>
          <Link href="/para-veterinarios">Para veterinários</Link>
        </nav>
        <WhatsAppLink>Agendar atendimento</WhatsAppLink>
      </div>
    </header>
  );
}
