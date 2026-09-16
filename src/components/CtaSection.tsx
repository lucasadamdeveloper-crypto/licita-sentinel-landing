"use client";

import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

interface CtaSectionProps {
  onOpenLeadModal: (plan?: string) => void;
}

export default function CtaSection({ onOpenLeadModal }: CtaSectionProps) {
  return (
    <section className="py-20 relative bg-[#050A14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#071329] via-[#0E1A38] to-[#0A1630] border border-cyan-400/40 shadow-[0_0_60px_rgba(0,229,255,0.2)] text-center overflow-hidden">
          
          {/* Halos de luz de fundo no banner */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMECE NO PLANO GRATUITO HOJE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Pronto para ter o meio mais inteligente e ágil para disputar e vencer licitações?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              O Sentinela não disputa por você — ele é a <strong>ferramenta essencial</strong> que rastreia, audita e entrega tudo mastigado. Empresas que usam o Licita Sentinel registram <strong>+45% a mais de ganhos</strong> e nunca mais perdem convocações no prazo de 2 horas.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink("FREE")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 text-black font-mono font-extrabold text-sm sm:text-base shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_50px_rgba(0,229,255,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-black" />
                <span>SOLICITAR TESTE NO WHATSAPP</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>100% Grátis para começar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sem Cartão de Crédito</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Alerta de disputa no WhatsApp</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
