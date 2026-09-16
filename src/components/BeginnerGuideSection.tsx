"use client";

import React, { useState } from "react";
import { 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  TrendingUp, 
  FileCheck, 
  Store, 
  Award,
  ChevronRight
} from "lucide-react";

interface BeginnerGuideSectionProps {
  onOpenLeadModal: (plan?: string) => void;
}

export default function BeginnerGuideSection({ onOpenLeadModal }: BeginnerGuideSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Credenciamento Simples e Gratuito",
      tag: "Primeiro Passo",
      desc: "Você não precisa de despachante nem consultoria cara. O Sentinela mostra como fazer o cadastro gratuito no SICAF e nos portais oficiais (PNCP, Compras.gov.br) em menos de 1 hora.",
      tip: "MEIs, microempresas (ME) e EPPs têm tratamento diferenciado e preferência legal pela Lei Complementar 123.",
    },
    {
      number: "02",
      title: "Oportunidades Fáceis para Começar",
      tag: "Menor Concorrência",
      desc: "Nosso radar filtra automaticamente as Dispensas Eletrônicas e pregões exclusivos para pequenas empresas. São contratações mais rápidas, com menos exigências e alta margem de lucro.",
      tip: "O governo compra de tudo: desde material de escritório, uniformes e alimentos até serviços técnicos e reformas.",
    },
    {
      number: "03",
      title: "Checklist Guiado Sem Juridiquês",
      tag: "Zero Complicação",
      desc: "Você não precisa ler 100 páginas de edital nem entender termos difíceis de direito público. O Sentinela analisa o edital e lista exatamente quais certidões e documentos você precisa emitir na internet.",
      tip: "Mais de 90% das certidões obrigatórias são emitidas gratuitamente pela internet em 2 minutos.",
    },
    {
      number: "04",
      title: "Proposta e Disputa sem Medo de Errar",
      tag: "Orientação Passo a Passo",
      desc: "Acompanhe suas oportunidades pelo Dashboard e receba avisos no WhatsApp durante a disputa caso o pregoeiro chame no prazo de 2h. O Sentinela ajuda a formatar e enviar tudo no tempo certo.",
      tip: "Empresas que utilizam o Licita Sentinel registram em média +45% a mais de taxa de vitória em licitações.",
    },
  ];

  return (
    <section id="como-comecar" className="py-24 relative bg-[#060C18] border-t border-slate-800/80 overflow-hidden">
      
      {/* Luz ambiente */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[500px] bg-cyan-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-xs font-mono text-cyan-300">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>NUNCA PARTICIPOU DE LICITAÇÕES?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            O Licita Sentinel é o seu Meio Prático para Vender para o Governo
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            O Sentinela não disputa nem vence sozinho: ele é a <strong>ferramenta de inteligência</strong> que ensina, orienta e dá o passo a passo para que <strong>qualquer empresário ou MEI</strong> participe de licitações públicas com segurança e conquiste contratos milionários.
          </p>
        </div>

        {/* Faixa de Estatística Comprovada */}
        <div className="mb-14 max-w-4xl mx-auto p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#0B1832] via-[#0E2045] to-[#0A162D] border border-cyan-500/30 shadow-[0_0_40px_rgba(0,229,255,0.15)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center shrink-0">
              <TrendingUp className="w-7 h-7 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-300">+45%</span>
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">A Mais de Ganhos e Vitórias</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Usuários do Licita Sentinel vencem mais porque não perdem prazos de 2h, evitam editais problemáticos e nunca são desclassificados por falta de documento.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenLeadModal("FREE")}
            className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-mono font-bold text-xs hover:bg-cyan-300 transition-all shrink-0 shadow-md flex items-center gap-2"
          >
            <span>Começar do Zero</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Passo a Passo Interativo para Iniciantes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Menu Lateral de Passos */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
              SEU CAMINHO ATÉ O PRIMEIRO CONTRATO:
            </span>

            {steps.map((s, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  activeStep === idx
                    ? "bg-[#0E1A33] border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                    : "bg-[#091122]/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-mono font-bold ${activeStep === idx ? "text-cyan-400" : "text-slate-500"}`}>
                    {s.number}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {s.title}
                    </h4>
                    <span className="text-[10px] font-mono text-cyan-300/80">
                      {s.tag}
                    </span>
                  </div>
                </div>

                <ChevronRight className={`w-4 h-4 transition-transform ${activeStep === idx ? "text-cyan-400 translate-x-1" : "text-slate-600"}`} />
              </div>
            ))}
          </div>

          {/* Card Detalhado do Passo Ativo */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-[#091122] border border-cyan-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold">
                PASSO {steps[activeStep].number} DE 04
              </span>
              <span className="text-xs font-mono text-slate-400">
                {steps[activeStep].tag}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {steps[activeStep].desc}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-200 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-cyan-300 block mb-0.5">Dica de Ouro do Sentinela:</strong>
                {steps[activeStep].tip}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                Qualquer CNPJ pode começar hoje mesmo.
              </span>
              <button
                onClick={() => onOpenLeadModal("FREE")}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-mono font-bold text-xs hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <span>CRIAR CONTA GRÁTIS E APRENDER</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
