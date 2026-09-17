"use client";

import React from "react";
import { 
  Globe2, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Building2,
  CheckCircle2
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export default function StorySection() {
  return (
    <section className="py-20 relative bg-[#070D1A] border-t border-slate-800/80 overflow-hidden">
      
      {/* Luz ambiente de prestígio */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-xs font-semibold text-blue-300 shadow-sm">
            <Globe2 className="w-3.5 h-3.5 text-blue-400" />
            <span>A ORIGEM DO 1º SISTEMA INTELIGENTE DO BRASIL</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            A tecnologia dos Estados Unidos que trouxemos para transformar suas vendas públicas.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Nos Estados Unidos, nenhuma grande empresa perde tempo caçando editais manualmente em portais lentos ou perde contratos por desatenção de prazos.
          </p>
        </div>

        {/* Bloco Central de Storytelling */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-8 relative">
          
          <div className="space-y-5 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            <p>
              No mercado americano, as maiores fornecedoras do governo utilizam <strong>inteligência algorítmica 24 horas por dia</strong>. O software monitora cada oportunidade pública no segundo em que ela nasce, filtra a compatibilidade exata com o que a empresa vende e protege cada etapa da disputa. O empresário não perde tempo: ele só recebe o que dá lucro.
            </p>

            <p className="text-slate-300">
              Quando olhamos para o Brasil, vimos um cenário arcaico: empresários brilhantes perdendo contratos de milhões porque alguém esqueceu de dar F5 no portal, ou porque a convocação do pregoeiro chegou no meio do almoço e o prazo expirou.
            </p>

            <div className="p-4 sm:p-5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-slate-100 font-medium leading-relaxed">
              💡 <strong>Decidimos acabar com essa desvantagem injusta:</strong> Trouxemos essa mesma metodologia dos maiores sistemas GovTech dos EUA e reconstruímos ela do zero para a realidade brasileira, 100% calibrada com o <strong>PNCP</strong> e as regras da <strong>Nova Lei de Licitações (Lei 14.133/2021)</strong>.
            </div>

            <p>
              Assim nasceu o <strong>Licita Sentinel: o 1º Sistema Inteligente do Brasil</strong> focado em colocar dinheiro no caixa de quem fornece para o governo — com radar 24h no seu ramo e alertas em tempo real no seu WhatsApp. <strong>A praticidade e agilidade que levam a um faturamento maior.</strong>
            </p>
          </div>

          {/* Comparativo Rápido de Vantagem Competitiva */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-slate-400 font-semibold uppercase tracking-wider block">O Modelo dos EUA</span>
              <p className="text-slate-300 leading-relaxed">
                Automação 24/7. O empresário foca na estratégia de preço enquanto a inteligência caça os contratos.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-rose-500/20 space-y-2">
              <span className="text-rose-400 font-semibold uppercase tracking-wider block">O Passado no Brasil</span>
              <p className="text-slate-300 leading-relaxed">
                Equipes exaustas dando F5, dezenas de portais confusos e contratos perdidos no chat do pregoeiro.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-2">
              <span className="text-emerald-400 font-bold uppercase tracking-wider block">Sua Nova Vantagem</span>
              <p className="text-slate-200 leading-relaxed">
                O 1º sistema inteligente nacional. Oportunidades do seu nicho de bandeja e proteção total na disputa.
              </p>
            </div>
          </div>


        </div>

      </div>
    </section>
  );
}
