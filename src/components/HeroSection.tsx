"use client";

import React from "react";
import RadarBackground from "./RadarBackground";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Radar, 
  CheckCircle2, 
  FileText, 
  TrendingUp, 
  Building2, 
  AlertTriangle,
  Play
} from "lucide-react";

interface HeroSectionProps {
  onOpenLeadModal: (plan?: string) => void;
}

export default function HeroSection({ onOpenLeadModal }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden cyber-grid">
      {/* Halo de luz ambiente cibernético */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/10 to-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag Pulsante */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08152B] border border-cyan-400/40 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-300 tracking-wider uppercase">
              VARREDURA EM TEMPO REAL • PNCP E DEMAIS PORTAIS DO BRASIL
            </span>
          </div>
        </div>

        {/* Título Principal de Alto Impacto */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            A Rede Social das{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,229,255,0.4)]">
              Licitações
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Economize o salário de <strong>2 ou mais funcionários</strong> dedicados. O <strong>Licita Sentinel</strong> varre os portais 24h, avisa convocações urgentes no seu <strong>WhatsApp</strong> e impede que sua empresa perca contratos no <strong>prazo fatal de 2 horas do pregoeiro</strong> para envio de proposta e certidões.
          </p>

          {/* Botões de Ação Principal */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenLeadModal("FREE")}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 text-black font-mono font-extrabold text-sm sm:text-base shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_50px_rgba(0,229,255,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5"
            >
              <Sparkles className="w-5 h-5 text-black" />
              <span>CRIAR CONTA GRATUITA AGORA</span>
              <ArrowRight className="w-5 h-5 text-black" />
            </button>

            <a
              href="#demonstracao"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-200 font-mono font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span>VER COMO FUNCIONA AO VIVO</span>
            </a>
          </div>

          {/* Micro-benefícios de Confiança */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Plano Free sem limite de tempo</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Alertas imediatos de pregão no WhatsApp</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Checklist pronto para o prazo de 2h</span>
            </div>
          </div>
        </div>

        {/* MOCKUP INTERATIVO DO PRODUTO (RADAR + AUDITORIA DE EDITAL COM IA) */}
        <div className="mt-14 md:mt-20 relative max-w-5xl mx-auto">
          
          {/* Brilho de fundo no card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-70 pointer-events-none" />

          <div className="relative rounded-3xl bg-[#091122]/95 border border-cyan-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
            
            {/* Top Bar da Janela do Software */}
            <div className="px-5 py-3.5 bg-[#050B17] border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <span className="text-cyan-400">●</span> licita-sentinel-v2.5 // sentinela-pncp-ativo
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                Score IA: 98/100
              </div>
            </div>

            {/* Conteúdo da Interface Simulada */}
            <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Lado Esquerdo: O Radar Sentinel em Ação */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#050A14]/80 border border-slate-800 text-center relative overflow-hidden">
                <div className="relative my-2">
                  <RadarBackground density={0.9} sizeClassName="w-[180px] h-[180px] sm:w-[200px] h-[200px]" />
                </div>
                
                <div className="mt-3 space-y-1 z-10">
                  <div className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                    RADAR EM VARREDURA
                  </div>
                  <div className="text-[11px] text-slate-400">
                    42 novos editais detectados hoje no seu nicho
                  </div>
                </div>
              </div>

              {/* Lado Direito: Card de Edital com IA (Visual Premium) */}
              <div className="lg:col-span-8 space-y-4">
                
                {/* Header do Edital */}
                <div className="p-4 rounded-2xl bg-[#0E1A33]/80 border border-cyan-500/30 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono text-[11px] font-bold">
                        PREGÃO ELETRÔNICO Nº 0048/2026
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-mono text-[10px]">
                        PR - PARANÁ
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>SCORE IA: 96% ALTA CHANCE</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      Aquisição de Equipamentos de Tecnologia da Informação e Segurança de Rede com Garantia On-Site
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5 font-mono">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      Tribunal de Contas do Estado / Órgão Oficial
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-800">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">VALOR ESTIMADO</span>
                      <span className="text-sm sm:text-base font-mono font-bold text-amber-400">R$ 2.450.000,00</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">DISPUTA PREVISTA</span>
                      <span className="text-xs sm:text-sm font-mono text-slate-200">22/09 às 09:30</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <span className="text-[10px] font-mono text-slate-400 block">ENQUADRAMENTO</span>
                      <span className="text-xs font-mono text-cyan-300">Lei 14.133 • Ampla Disputa</span>
                    </div>
                  </div>
                </div>

                {/* Box de Análise da IA Sentinel */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-950/40 via-[#0B152A] to-amber-950/20 border border-cyan-500/20 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-cyan-300 font-mono font-bold text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>SÍNTESE EXECUTIVA DO SENTINELA</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Edital favorável. <strong>Exigência técnica atendida</strong> pelos seus atestados cadastrados. Cláusula 7.2 prevê pagamento em até 15 dias úteis. Nenhum risco impeditivo de habilitação identificado nos artigos 66 a 69.
                  </p>
                  <div className="flex items-center gap-3 pt-1 text-[10px] font-mono">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Certidões 100% OK
                    </span>
                    <span className="text-amber-400 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> Prazo de Entrega: 30 dias corridos
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Faixa de Métricas e Números Oficiais */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#091122]/80 border border-slate-800 text-center hover:border-cyan-500/30 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white text-gradient">
              +R$ 1.8 Bi
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
              Monitorados no PNCP
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#091122]/80 border border-slate-800 text-center hover:border-cyan-500/30 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">
              WhatsApp
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
              Avisos em Tempo Real
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#091122]/80 border border-slate-800 text-center hover:border-cyan-500/30 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400">
              Prazo de 2h
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
              Certidões Pré-auditadas
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#091122]/80 border border-slate-800 text-center hover:border-cyan-500/30 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">
              Plano Free
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
              Comece Grátis sem Cartão
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
