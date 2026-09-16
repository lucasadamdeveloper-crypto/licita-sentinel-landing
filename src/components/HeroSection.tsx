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

            {/* Conteúdo da Interface Simulada: TELA REAL DO DASHBOARD */}
            <div className="p-4 sm:p-6 space-y-4 font-sans">
              
              {/* 1. Funil de Decisão Comercial (Etapa 6 da Jornada) */}
              <div className="p-3.5 rounded-2xl bg-[#070F22] border border-cyan-500/20 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    Funil de Decisão Comercial (Etapa 6 da Jornada)
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                    Filtre por estágio da sua proposta:
                  </span>
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
                  <button className="px-3 py-1.5 rounded-xl font-bold bg-cyan-400 text-black border border-cyan-400 shadow-[0_0_12px_rgba(0,229,255,0.4)] flex items-center gap-1.5 shrink-0">
                    <span>Todos</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-black/20 text-black">29</span>
                  </button>

                  <button className="px-3 py-1.5 rounded-xl font-bold bg-blue-500/20 text-blue-300 border border-blue-500/40 flex items-center gap-1.5 shrink-0">
                    <span>🔍 Analisar</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-black/40 text-slate-300">0</span>
                  </button>

                  <button className="px-3 py-1.5 rounded-xl font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 shrink-0">
                    <span>✅ Participar</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-black/40 text-slate-300">2</span>
                  </button>

                  <button className="px-3 py-1.5 rounded-xl font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center gap-1.5 shrink-0">
                    <span>📨 Proposta Enviada</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-black/40 text-slate-300">0</span>
                  </button>

                  <button className="px-3 py-1.5 rounded-xl font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5 shrink-0">
                    <span>🏆 Ganha</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-black/40 text-slate-300">0</span>
                  </button>

                  <button className="px-3 py-1.5 rounded-xl font-bold bg-orange-500/20 text-orange-300 border border-orange-500/40 flex items-center gap-1.5 shrink-0">
                    <span>🛑 Perdida</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-black/40 text-slate-300">0</span>
                  </button>
                </div>
              </div>

              {/* 2. Barra de Filtros Rápidos */}
              <div className="px-4 py-2.5 rounded-xl bg-[#070F22] border border-cyan-500/20 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-cyan-300 flex items-center gap-1.5">
                    Filtros rápidos
                    <span className="px-1.5 py-0.2 rounded-full bg-cyan-400/20 text-[10px] text-cyan-200">Ativos</span>
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-300 font-medium">
                    Estado: <strong className="text-cyan-300">Paraná (PR)</strong>
                  </span>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">▼</span>
              </div>

              {/* 3. Abas de Interesse e Esfera */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white border border-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.35)] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Com Interesse</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-black/30 text-cyan-200">29</span>
                  </button>

                  <button className="px-4 py-2 rounded-xl font-medium text-slate-400 hover:text-white border border-transparent hover:bg-slate-900/60 flex items-center gap-1.5">
                    <span>✕ Não Tenho Interesse</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-slate-400">0</span>
                  </button>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-[#070F20] text-slate-300 border border-slate-700 text-xs flex items-center gap-1.5 self-end sm:self-auto font-mono">
                  <span>Esfera: <strong className="text-white">Todas as Esferas (29)</strong> ▼</span>
                </div>
              </div>

              {/* 4. CARD REAL DE OPORTUNIDADE (IDÊNTICO À IMAGEM 2) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#070F22] border border-cyan-500/40 shadow-[0_4px_25px_rgba(0,0,0,0.6)] space-y-3.5 text-left">
                
                {/* Badges de Topo do Card */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono font-bold">
                    <span className="px-2 py-0.5 rounded-md border border-emerald-400/60 bg-emerald-950/40 text-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.2)]">
                      COMPATIBILIDADE 95/100
                    </span>
                    <span className="px-2 py-0.5 rounded-md border border-cyan-400/50 bg-cyan-950/60 text-cyan-300">
                      Match Direto de Nicho
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-950 text-blue-300 border border-blue-500/30">
                      MUNICIPAL
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                      Serviços
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                      Disputa em 13 dias
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400">
                      Ampla Concorrência
                    </span>
                    <span className="text-slate-400 text-[10px] font-mono hidden md:inline">
                      Pregão Eletrônico - Registro de Preços
                    </span>
                  </div>

                  {/* Indicador Circular de 95% + Coração */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full border-2 border-cyan-400 bg-cyan-950 flex items-center justify-center font-mono font-bold text-xs text-cyan-300 shadow-[0_0_12px_rgba(0,229,255,0.4)]">
                      95%
                    </div>
                    <span className="text-slate-400 hover:text-rose-400 cursor-pointer text-sm">♡</span>
                    <span className="text-slate-400 text-sm">›</span>
                  </div>
                </div>

                {/* Órgão e Localidade */}
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                    SERVIÇO MUNICIPAL DE SANEAMENTO E INFRAESTRUTURA DE LONDRINA • Londrina/PR
                  </span>

                  {/* Título com Destaques em Amarelo */}
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug mt-1">
                    Prestação de serviços de <mark className="bg-yellow-400 text-black px-1 rounded font-bold">segurança privada</mark>, <mark className="bg-yellow-400 text-black px-1 rounded font-bold">vigilância desarmada</mark> e <mark className="bg-yellow-400 text-black px-1 rounded font-bold">monitoramento eletrônico</mark> 24 horas por sistema <mark className="bg-yellow-400 text-black px-1 rounded font-bold">CFTV</mark> com apoio tático de viaturas para as estações de tratamento e reservatórios.
                  </h4>
                </div>

                {/* Box de "Por que deu Match:" (Laranja/Âmbar) */}
                <div className="p-3 rounded-xl bg-[#140F09] border border-amber-500/40 text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 text-amber-400 font-mono font-bold text-[11px]">
                    <span>✨ Por que deu Match:</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Match de escopo primário em Segurança Privada, Portaria & Controlador de Acesso: <em>"segurança privada"</em>, <em>"vigilância desarmada"</em>, <em>"monitoramento eletrônico"</em> no objeto/título da contratação pública.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] font-mono text-slate-400">
                    <span className="text-amber-300/80">Tags no Objeto:</span>
                    <span className="bg-slate-900 px-1.5 py-0.2 rounded border border-slate-800">#segurança privada</span>
                    <span className="bg-slate-900 px-1.5 py-0.2 rounded border border-slate-800">#vigilância desarmada</span>
                    <span className="bg-slate-900 px-1.5 py-0.2 rounded border border-slate-800">#monitoramento eletrônico</span>
                    <span className="bg-slate-900 px-1.5 py-0.2 rounded border border-slate-800">#cftv</span>
                  </div>
                </div>

                {/* Barra Inferior com Valores e Botões de Ação */}
                <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-6">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">VALOR ESTIMADO</span>
                      <span className="text-base font-extrabold font-mono text-white">R$ 3.2M</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">DISPUTA / SESSÃO</span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold">
                        <span>📅 Disputa: 29/09/2026, 10:00</span>
                        <span className="text-slate-400 font-normal hidden sm:inline">(Disputa em 13 dias)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => onOpenLeadModal("FREE")}
                      className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-mono font-bold text-xs shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transition-all flex items-center justify-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Análise com IA</span>
                    </button>

                    <button
                      onClick={() => onOpenLeadModal("FREE")}
                      className="px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-rose-300 hover:text-white font-mono text-xs transition-all flex items-center justify-center gap-1"
                    >
                      <span>✕ Não tenho interesse</span>
                    </button>
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
