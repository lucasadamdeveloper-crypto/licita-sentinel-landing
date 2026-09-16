export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.licitasentinel.com";
export const WHATSAPP_NUMBER = "5542999757796";
export const WHATSAPP_DISPLAY = "(42) 99975-7796";

export type WhatsAppLeadContext = 
  | "GERAL" 
  | "FREE" 
  | "PRO" 
  | "BUSINESS" 
  | "INICIANTE" 
  | "DEMO";

export const getWhatsAppLink = (context: WhatsAppLeadContext | string = "GERAL") => {
  let message = "Olá! Conheci o Licita Sentinel e gostaria de entender melhor como funciona para o meu segmento e como posso testar.";

  switch (context) {
    case "PRO":
      message = "Olá! Tenho interesse no Plano PRO do Licita Sentinel e gostaria de tirar algumas dúvidas para começar a usar.";
      break;
    case "BUSINESS":
      message = "Olá! Quero conhecer o Plano BUSINESS do Licita Sentinel, especialmente os alertas no WhatsApp para quando estiver participando do pregão.";
      break;
    case "INICIANTE":
      message = "Olá! Quero começar a vender produtos/serviços para o governo através do Licita Sentinel. Como posso dar os primeiros passos?";
      break;
    case "DEMO":
      message = "Olá! Vi a demonstração na página do Licita Sentinel e gostaria de ver o software funcionando com editais reais do meu nicho.";
      break;
    case "FREE":
    case "GERAL":
    default:
      message = "Olá! Conheci o Licita Sentinel e gostaria de entender melhor como funciona para o meu segmento e como posso testar.";
      break;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const getLoginLink = () => {
  return `${APP_URL}/login`;
};
