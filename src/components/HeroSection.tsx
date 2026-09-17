"use client";

import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  ShieldCheck, 
  FileText, 
  DollarSign, 
  Building2, 
  Clock, 
  FileCheck2,
  Lock,
  Search,
  ExternalLink,
  ChevronRight,
  Filter,
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

          {/* Botões de Ação Comercial */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
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

            <a
              href="#demonstracao"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-blue-400 fill-blue-400" />
              <span>Ver Como Funciona na Prática</span>
            </a>
          </div>

          {/* Micro-benefícios de Confiança Corporativa */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Oportunidades do seu nicho no país inteiro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>Alertas diários de pregão em disputa no WhatsApp</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Proteção contra o prazo de 2h do pregoeiro</span>
            </div>
          </div>
        </div>

        {/* MOCKUP EXECUTIVO: ALERTA NO WHATSAPP + PAINEL DO EDITAL */}
        <div className="mt-14 md:mt-16 relative max-w-5xl mx-auto">
          
          <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl overflow-hidden">
            
            {/* Top Bar da Janela */}
            <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <span className="ml-3 text-xs text-slate-400 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  Painel de Oportunidades & Disputas • Licita Sentinel
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300">
                <span>Triagem Automática Ativa</span>
              </div>
            </div>

            {/* Conteúdo da Interface: Grid com Notificação WhatsApp e Card de Edital */}
            <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Coluna 1: Simulação do Alerta que chega no WhatsApp do Empresário (5 Colunas) */}
              <div className="lg:col-span-5 rounded-2xl bg-[#0b141a] border border-[#1f2c34] p-4 text-left shadow-xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#1f2c34]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-xs">
                      LS
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-100 block">Licita Sentinel | Alertas</span>
                      <span className="text-[10px] text-emerald-400 block">online • WhatsApp Oficial</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500">Agora</span>
                </div>

                {/* Balão de Mensagem WhatsApp */}
                <div className="rounded-xl rounded-tl-none bg-[#1f2c34] p-3 text-xs text-slate-200 space-y-2 leading-relaxed border border-[#2a3942]">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold text-[11px]">
                    <span>⚠️ CONVOCAÇÃO URGENTE DO PREGOEIRO</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    <strong>Órgão:</strong> Prefeitura de Londrina/PR<br />
                    <strong>Pregão Eletrônico:</strong> Nº 42/2025<br />
                    <strong>Item:</strong> Vigilância e Segurança Eletrônica
                  </p>
                  <div className="p-2 rounded-lg bg-[#111b21] border border-[#2a3942] text-[11px] text-slate-300">
                    <em>"Empresa convocada no chat para envio da proposta readequada e certidões. Prazo fatal de 2 horas iniciado."</em>
                  </div>
                  <div className="pt-1 flex items-center justify-between text-[10px] text-emerald-400 font-semibold">
                    <span>⏱️ Restam: 1h 54min</span>
                    <span className="text-slate-400">14:06 ✓✓</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Notificação entregue simultaneamente para 3 números da sua equipe.</span>
                </div>
              </div>

              {/* Coluna 2: Card de Oportunidade do Dashboard (7 Colunas) */}
              <div className="lg:col-span-7 space-y-4 text-left">
                
                {/* Abas e Filtros Limpos */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-semibold">
                      Com Interesse (29)
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium">
                      Paraná (PR)
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    Compatibilidade: <strong>95%</strong>
                  </span>
                </div>

                {/* Card de Licitação Formatado de Maneira Executiva */}
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3 shadow-md">
                  <div className="flex flex-wrap items-center gap-2 text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                      Disputa em 13 dias
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-semibold">
                      Municipal
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                      Pregão Eletrônico
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">
                      SERVIÇO MUNICIPAL DE SANEAMENTO E INFRAESTRUTURA • Londrina/PR
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1 leading-snug">
                      Prestação de serviços de segurança privada, vigilância patrimonial e monitoramento eletrônico 24h por CFTV.
                    </h4>
                  </div>

                  {/* Resumo Financeiro */}
                  <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-medium">Valor Estimado</span>
                      <span className="text-base font-bold text-emerald-400">R$ 3.200.000,00</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={getWhatsAppLink("DEMO")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Ver Auditoria do Edital</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

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
