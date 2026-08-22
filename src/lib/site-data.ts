export const SITE_NAME = "Peludinhos Dermatologia Veterinária";
export const SITE_URL = "https://peludinhosdermatologia.com.br";
export const SITE_LIVE = process.env.NEXT_PUBLIC_SITE_LIVE === "true";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5519991646193";

export const locations = [
  {
    slug: "americana",
    city: "Americana",
    label: "Peludinhos Dermatologia Veterinária",
    address: "Rua Peru, 103 — Frezzarin — Americana/SP",
    owned: true,
  },
  { slug: "campinas", city: "Campinas", label: "Atendimento em clínica parceira", owned: false },
  { slug: "sumare", city: "Sumaré", label: "Atendimento em clínica parceira", owned: false },
  { slug: "hortolandia", city: "Hortolândia", label: "Atendimento em clínica parceira", owned: false },
] as const;

export const conditions = [
  {
    slug: "alergias-e-atopia",
    title: "Alergias e síndrome atópica",
    description: "Investigação e acompanhamento de quadros de coceira e inflamação recorrente da pele.",
  },
  {
    slug: "otites-recorrentes",
    title: "Otites recorrentes",
    description: "Avaliação dermatológica de inflamações de ouvido que persistem ou voltam com frequência.",
  },
  {
    slug: "dermatites",
    title: "Dermatites",
    description: "Investigação de alterações inflamatórias, infecciosas e outros problemas dermatológicos.",
  },
  {
    slug: "queda-de-pelos-e-alopecias",
    title: "Queda de pelos e alopecias",
    description: "Avaliação das causas de falhas de pelagem, perda de pelos e alterações persistentes do crescimento.",
  },
] as const;
