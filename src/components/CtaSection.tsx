"use client";

import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

interface CtaSectionProps {
  onOpenLeadModal: (plan?: string) => void;
}

export default function CtaSection({ onOpenLeadModal }: CtaSectionProps) {
  return (
    <section className="py-20 relative bg-[#0B1120] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-2xl p-8 sm:p-14 bg-slate-900 border border-slate-800 shadow-2xl text-center overflow-hidden">
          
          {/* Halos de luz de fundo suaves */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>COMECE NO PLANO GRATUITO HOJE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Pronto para proteger sua empresa e disputar licitações com segurança?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              O Sentinela é a ferramenta essencial que rastreia, audita e entrega tudo pronto para sua equipe. Empresas que usam o Licita Sentinel registram <strong>+45% a mais de vitórias</strong> e nunca mais perdem convocações no prazo de 2 horas.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink("FREE")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>COMEÇAR GRATUITAMENTE NO WHATSAPP</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Grátis para começar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sem Cartão de Crédito</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Alerta de convocação no WhatsApp</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
