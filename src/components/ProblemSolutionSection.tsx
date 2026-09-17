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
  DollarSign,
  Clock,
  ShieldCheck
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
        
        {/* Faixa de Informação Importante / Estatística de Vitórias (+45%) com Tópicos Maiores */}
        <div className="mb-16 max-w-5xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-950/80 border border-blue-600/40 flex items-center justify-center shrink-0 shadow-inner">
                <TrendingUp className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-2.5">
                  <span className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-tight">
                    +45%
                  </span>
                  <span className="text-sm sm:text-lg font-extrabold text-white uppercase tracking-wider">
                    A Mais de Vitórias em Disputas
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Média comprovada por empresas que usam o sistema inteligente em pregões públicos
                </p>
              </div>
            </div>

            <a
              href={getWhatsAppLink("ESPECIALISTA")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shrink-0 shadow-md flex items-center justify-center gap-2"
            >
              <span>Falar com Especialista no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Tópicos Maiores em Destaque */}
          <div className="space-y-4">
            <p className="text-sm sm:text-base font-bold text-slate-200">
              Usuários do Licita Sentinel vencem mais porque:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Tópico 1 */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-blue-500/50 transition-all space-y-2 group">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/40 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                    Descobrem a licitação antes
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                  O radar 24h encontra oportunidades do seu ramo no Brasil inteiro no instante em que são publicadas.
                </p>
              </div>

              {/* Tópico 2 */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-amber-500/50 transition-all space-y-2 group">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-950 border border-amber-500/40 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                    Não perdem prazos de 2h
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                  Alertas imediatos no WhatsApp quando o pregoeiro convoca o envio de propostas ou documentação.
                </p>
              </div>

              {/* Tópico 3 */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-emerald-500/50 transition-all space-y-2 group">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                    Nunca são desclassificados
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                  Auditoria e checklist inteligente para garantir habilitação completa sem faltar nenhum documento.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Cabeçalho Focado no Fornecimento para o Governo */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/40 text-xs font-semibold text-blue-300">
            <Radar className="w-3.5 h-3.5 text-blue-400" />
            <span>RADAR 24 HORAS DE OPORTUNIDADES PÚBLICAS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Sua empresa está perdendo contratos milionários por não saber onde estão as licitações do seu ramo?
          </h2>
        </div>

        {/* Comparativo: Busca Manual vs Radar 24h Licita Sentinel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LADO A: O Jeito Tradicional (Lento, Cego e Limitado) */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-rose-500/30 shadow-lg flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-rose-950 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase">
                  Busca Manual Tradicional
                </span>
                <span className="text-xs font-semibold text-rose-400">Contratos Perdidos Todo Mês</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white">
                Como as empresas perdem vendas públicas sem perceber:
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-rose-950/20 border border-rose-500/20">
                  <Globe2 className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="font-semibold text-slate-200">Centenas de Portais Fragmentados</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-rose-950/20 border border-rose-500/20">
                  <Target className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="font-semibold text-slate-200">Concorrentes Faturando Sozinhos</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-rose-950/20 border border-rose-500/20">
                  <Search className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="font-semibold text-slate-200">Filtros Fracos e Perda de Tempo com Editais Irrelevantes</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/20 text-xs text-rose-200 text-center font-medium">
              Um único contrato público que você deixa de disputar por falta de aviso custa anos de faturamento.
            </div>
          </div>

          {/* LADO B: Com o Radar 24h Licita Sentinel */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 border-2 border-emerald-500/60 shadow-xl flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase">
                  Com o Radar 24h Licita Sentinel
                </span>
                <span className="text-xs text-emerald-400 font-bold">100% das Oportunidades no seu Radar</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white">
                Todas as licitações do seu nicho no Brasil inteiro:
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-100">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <Radar className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-white">Varredura 24 Horas no que Você Fornece</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <Globe2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="font-semibold text-white">Cobertura Nacional Completa</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-white">Oportunidades de Bandeja para sua Empresa Vender</span>
                </div>
              </div>
            </div>

            <div className="pt-1">
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
