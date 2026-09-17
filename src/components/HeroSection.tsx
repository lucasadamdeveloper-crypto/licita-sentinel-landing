"use client";

import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

interface HeroSectionProps {
  onOpenLeadModal: (plan?: string) => void;
}

export default function HeroSection({ onOpenLeadModal }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden subtle-mesh">
      {/* Luz ambiente suave corporativa */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag Institucional */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-200 tracking-wide">
              1º SISTEMA INTELIGENTE DO BRASIL • RADAR 24H NO SEU RAMO
            </span>
          </div>
        </div>

        {/* Título Principal: Slogan Oficial e Proposta de Valor */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            A Rede Social das{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">
              Licitações
            </span>
          </h1>

          <p className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white max-w-3xl mx-auto tracking-tight leading-snug">
            O radar 24h que busca as melhores oportunidades do seu ramo no Brasil inteiro.
          </p>

          {/* Slogan Oficial de Faturamento & Praticidade */}
          <div className="flex justify-center pt-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold shadow-sm">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>A praticidade e agilidade que levam a um faturamento maior.</span>
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            <strong className="text-white font-semibold">Acabou o spam de licitação por e-mail.</strong> Tenha as melhores licitações na palma da sua mão acessando direto pela plataforma ou recebendo alertas em tempo real no seu <strong>WhatsApp</strong>.
          </p>

          {/* Botão de Ação Comercial */}
          <div className="pt-4 flex justify-center">
            <a
              href={getWhatsAppLink("FREE")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2.5"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>TESTAR GRATUITAMENTE NO WHATSAPP</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </a>
          </div>
        </div>

        {/* Faixa de Métricas e Credibilidade Corporativa */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              +R$ 1.8 Bi
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Oportunidades no PNCP
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
              WhatsApp
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Alertas Imediatos no Celular
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">
              Prazo de 2h
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Proteção Contra Desclassificação
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
              Plano Free
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Sem Cartão de Crédito
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
