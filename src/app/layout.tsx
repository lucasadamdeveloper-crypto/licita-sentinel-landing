import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://licitasentinel.com.br"),
  title: "LICITA SENTINEL | Sentinela Inteligente de Licitações PNCP",
  description: "Rastreamento, triagem e inteligência artificial aplicada a licitações públicas com dados oficiais do PNCP, BLL Compras e Portais Estaduais. Feito para fornecedores vencerem mais com a Lei 14.133/2021.",
  keywords: [
    "licitações",
    "PNCP",
    "inteligência artificial licitações",
    "edital",
    "lei 14.133",
    "compras governamentais",
    "radar de licitações",
    "software licitação",
    "impugnação de edital",
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
    description: "Encontre, audite e vença licitações antes da sua concorrência com o radar de IA mais avançado do Brasil.",
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
    description: "Encontre, audite e vença licitações antes da sua concorrência com IA.",
    images: ["/logo-sentinel.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#00E5FF",
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
    <html lang="pt-BR" className="dark">
      <body className="bg-[#050A14] text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
