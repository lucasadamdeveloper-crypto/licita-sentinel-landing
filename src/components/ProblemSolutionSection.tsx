"use client";

import React from "react";
import { 
  Radar, 
  Search, 
  Target, 
  Building2, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Globe2,
  DollarSign
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

interface ProblemSolutionSectionProps {
  onOpenLeadModal: (plan?: string) => void;
}

export default function ProblemSolutionSection({ onOpenLeadModal }: ProblemSolutionSectionProps) {
  return (
    <section className="py-20 relative bg-[#0B1120] border-t border-slate-800/80 overflow-hidden">
      
      {/* Luz ambiente suave */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho Focado no Fornecimento para o Governo */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/40 text-xs font-semibold text-blue-300">
            <Radar className="w-3.5 h-3.5 text-blue-400" />
            <span>RADAR 24 HORAS DE OPORTUNIDADES PÚBLICAS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Sua empresa está perdendo contratos milionários por não saber onde estão as licitações do seu ramo?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            O governo compra <strong>bilhões todos os dias</strong> em produtos e serviços exatamente como os que você vende. O problema é que encontrar essas licitações manualmente em centenas de portais espalhados pelo Brasil é como procurar agulha no palheiro.
          </p>
        </div>

        {/* Comparativo: Busca Manual vs Radar 24h Licita Sentinel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LADO A: O Jeito Tradicional (Lento, Cego e Limitado) */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/90 border border-rose-500/30 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-rose-950 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase">
                  Busca Manual Tradicional
                </span>
                <span className="text-xs font-semibold text-rose-400">Contratos Perdidos Todo Mês</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white">
                Como as empresas perdem vendas públicas sem perceber:
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                  <Globe2 className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Centenas de Portais Fragmentados:</strong>
                    PNCP, Compras.gov, BEC-SP, portais municipais e estatais. Entrar site por site diariamente consome horas de trabalho e 80% das melhores oportunidades passam batidas.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                  <Target className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Concorrentes Faturando Sozinhos:</strong>
                    Editais com pouquíssimos participantes abrem e encerram no seu estado ou município vizinho porque sua equipe não ficou sabendo a tempo da publicação.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                  <Search className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Filtros Fracos e Perda de Tempo:</strong>
                    Termos genéricos que trazem centenas de editais irrelevantes, fazendo sua equipe perder tempo abrindo arquivos PDF de compras que nada têm a ver com o seu negócio.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/20 text-xs text-rose-200 text-center font-medium">
              Um único contrato público que você deixa de disputar por falta de aviso custa anos de faturamento.
            </div>
          </div>

          {/* LADO B: Com o Radar 24h Licita Sentinel */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-900 border-2 border-emerald-500/60 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase">
                  Com o Radar 24h Licita Sentinel
                </span>
                <span className="text-xs text-emerald-400 font-bold">100% das Oportunidades no seu Radar</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white">
                Todas as licitações do seu nicho no Brasil inteiro:
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <Radar className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Varredura 24 Horas no que Você Fornece:</strong>
                    Você cadastra os produtos e serviços que sua empresa vende. O Sentinela varre o Brasil 24 horas por dia e traz apenas o que tem fit real com o seu portfólio comercial.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <Globe2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Cobertura Nacional Completa:</strong>
                    Monitoramento unificado do PNCP oficial, portais de compras estaduais, prefeituras municipais, consórcios públicos e empresas públicas em todos os 26 estados e DF.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Oportunidades de Bandeja para sua Empresa Vender:</strong>
                    Receba no seu painel e por alertas as melhores oportunidades mastigadas, com valores estimados, datas de disputa e nível de competitividade para você fechar mais negócios com o governo.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink("FREE")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>BUSCAR OPORTUNIDADES DO MEU RAMO NO WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
