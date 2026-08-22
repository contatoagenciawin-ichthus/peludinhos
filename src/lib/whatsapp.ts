import { WHATSAPP_NUMBER } from "./site-data";

export type WhatsAppAudience = "tutor" | "veterinario";

export function whatsappUrl({
  audience,
  location,
  intent,
}: {
  audience: WhatsAppAudience;
  location?: string;
  intent?: "agendamento" | "retorno" | "encaminhamento" | "suporte";
}) {
  let message = "Olá, vim pelo site da Peludinhos.";

  if (audience === "veterinario") {
    message += " Sou médico-veterinário/represento uma clínica e gostaria de conversar sobre suporte dermatológico especializado";
    if (intent === "encaminhamento") message += " e encaminhamento de um paciente";
    message += ".";
  } else {
    message += " Gostaria de verificar atendimento dermatológico";
    if (intent === "retorno") message += " para retorno";
    if (location) message += ` em ${location}`;
    message += ".";
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
