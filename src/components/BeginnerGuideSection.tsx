"use client";

import React, { useState } from "react";
import { 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  HelpCircle,
  FileText,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

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
    <section id="como-comecar" className="py-24 relative bg-[#0B1120] border-t border-slate-800/80 overflow-hidden">
      
      {/* Luz ambiente */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[500px] bg-blue-600/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span>NUNCA PARTICIPOU DE LICITAÇÕES?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            O Licita Sentinel é o seu Guia Prático para Vender para o Governo
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            O Sentinela é a <strong>ferramenta de inteligência</strong> que orienta e entrega o passo a passo para que <strong>qualquer empresário ou MEI</strong> participe de licitações públicas com segurança jurídica e dispute contratos lucrativos.
          </p>
        </div>

        {/* Faixa de Estatística Comprovada */}
        <div className="mb-14 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-xl bg-blue-950 border border-blue-800/60 flex items-center justify-center shrink-0">
              <TrendingUp className="w-7 h-7 text-blue-400" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-blue-400 tracking-tight">+45%</span>
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">A Mais de Vitórias em Disputas</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Usuários do Licita Sentinel vencem mais porque não perdem prazos de 2h, evitam editais problemáticos e nunca são desclassificados por falta de documento.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink("INICIANTE")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shrink-0 shadow-md flex items-center gap-2"
          >
            <span>Falar com Especialista no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Passo a Passo Interativo para Iniciantes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Menu Lateral de Passos */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              SEU CAMINHO ATÉ O PRIMEIRO CONTRATO:
            </span>

            {steps.map((s, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  activeStep === idx
                    ? "bg-slate-800 border-blue-500 shadow-sm"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-bold ${activeStep === idx ? "text-blue-400" : "text-slate-500"}`}>
                    {s.number}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {s.title}
                    </h4>
                    <span className="text-xs text-slate-400">
                      {s.tag}
                    </span>
                  </div>
                </div>

                <ChevronRight className={`w-4 h-4 transition-transform ${activeStep === idx ? "text-blue-400 translate-x-1" : "text-slate-600"}`} />
              </div>
            ))}
          </div>

          {/* Card Detalhado do Passo Ativo */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-md space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold">
                PASSO {steps[activeStep].number} DE 04
              </span>
              <span className="text-xs text-slate-400">
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

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-200 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Dica Prática do Sentinela:</strong>
                {steps[activeStep].tip}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-medium">
                Qualquer CNPJ ativo pode começar hoje mesmo.
              </span>
              <a
                href={getWhatsAppLink("INICIANTE")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>COMEÇAR PELO WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
