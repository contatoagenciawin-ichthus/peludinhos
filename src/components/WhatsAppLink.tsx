import { whatsappUrl, type WhatsAppAudience } from "@/lib/whatsapp";

export function WhatsAppLink({
  children,
  audience = "tutor",
  location,
  intent,
  variant = "primary",
}: {
  children: React.ReactNode;
  audience?: WhatsAppAudience;
  location?: string;
  intent?: "agendamento" | "retorno" | "encaminhamento" | "suporte";
  variant?: "primary" | "secondary" | "text";
}) {
  return (
    <a
      className={`button button-${variant}`}
      href={whatsappUrl({ audience, location, intent })}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
