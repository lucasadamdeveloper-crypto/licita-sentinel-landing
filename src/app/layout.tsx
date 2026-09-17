import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://licitasentinel.com.br"),
  title: "LICITA SENTINEL | Monitoramento e Alertas de Licitações PNCP",
  description: "Rastreamento, triagem e alertas em tempo real no WhatsApp para licitações públicas com dados oficiais do PNCP. Feito para fornecedores vencerem mais com a Lei 14.133/2021 sem perder o prazo de 2h.",
  keywords: [
    "licitações",
    "PNCP",
    "inteligência artificial licitações",
    "edital",
    "lei 14.133",
    "compras governamentais",
    "radar de licitações",
    "software licitação",
    "alerta whatsapp licitação",
    "sentinela licitações"
  ],
  authors: [{ name: "Licita Sentinel" }],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/logo-icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "LICITA SENTINEL | O Sentinela Inteligente de Licitações",
    description: "Monitore editais do PNCP e receba convocações do pregoeiro direto no WhatsApp.",
    url: "https://licitasentinel.com.br",
    siteName: "Licita Sentinel",
    images: [
      {
        url: "/logo-sentinel.png",
        width: 1200,
        height: 630,
        alt: "Licita Sentinel - O Sentinela de Licitações",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LICITA SENTINEL | O Sentinela Inteligente de Licitações",
    description: "Monitore editais do PNCP e receba convocações do pregoeiro direto no WhatsApp.",
    images: ["/logo-sentinel.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`dark ${plusJakartaSans.variable}`}>
      <body className="bg-[#0B1120] text-slate-100 min-h-screen selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
