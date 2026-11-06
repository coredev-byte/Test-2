// ⚠️ Confirme o número completo do WhatsApp (DDI + DDD + número, só dígitos).
// No Instagram aparece "5566996469..." — complete os dígitos finais aqui
// ou defina VITE_WHATSAPP_NUMBER nas variáveis de ambiente da Vercel.
export const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER || "5566996469";

export const WHATSAPP_MESSAGE =
  "Olá, Dr. Otávio! Vim pelo site e gostaria de agendar uma consulta.";

export const waLink = (msg = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const INSTAGRAM_DR = "https://www.instagram.com/dr_otavioviano";
export const INSTAGRAM_CLINICA = "https://www.instagram.com/vianosaude";
export const CRM = "CRM-MT 14912";
