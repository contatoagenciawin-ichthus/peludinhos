import Link from "next/link";
import { WhatsAppLink } from "./WhatsAppLink";

const BRAND_LOGO = "/brand/logo-peludinhos.webp";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand brand-logo" href="/" aria-label="Peludinhos Dermatologia Veterinária — início">
          <img src={BRAND_LOGO} alt="Peludinhos Dermatologia Veterinária" />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <Link href="/dermatologia-veterinaria">Dermatologia</Link>
          <Link href="/dra-danielle">Dra. Danielle</Link>
          <Link href="/onde-atendemos">Onde atendemos</Link>
          <Link href="/para-veterinarios">Para veterinários</Link>
        </nav>
        <WhatsAppLink>Agendar atendimento</WhatsAppLink>
      </div>
    </header>
  );
}
