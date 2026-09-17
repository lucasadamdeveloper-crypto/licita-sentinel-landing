"use client";

import React from "react";
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Crown, 
  ShieldCheck, 
  Shield,
  Zap, 
  Bot, 
  HelpCircle 
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

interface PricingSectionProps {
  onOpenLeadModal: (plan?: string) => void;
}

export default function PricingSection({ onOpenLeadModal }: PricingSectionProps) {
  return (
    <section id="planos" className="py-24 relative bg-[#0B1120] border-t border-slate-800/80 overflow-hidden">
      
      {/* Luz ambiente de destaque */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-blue-600/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>INVESTIMENTO COM RETORNO COMPROVADO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Planos Transparentes Feitos para Substituir Custos e Escalar Vitórias
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Comece no <strong>Plano Gratuito</strong> sem cartão ou contrate a proteção completa para sua empresa. Sem contrato de fidelidade ou taxas ocultas.
          </p>
        </div>

        {/* Grade de 3 Planos Oficiais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          
          {/* PLANO 1: FREE (R$ 0) */}
          <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between relative group shadow-md">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-slate-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Plano Gratuito</h3>
                    <span className="text-xs text-slate-400">Degustação Contínua</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Acesse a plataforma gratuitamente para experimentar o monitoramento de editais sem colocar a mão no bolso.
              </p>

              <div className="pt-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-slate-400 font-medium">R$</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">0</span>
                  <span className="text-xs text-slate-400 font-normal">/sempre</span>
                </div>
                <span className="text-xs text-emerald-400 font-medium mt-1 block">
                  ✓ Sem necessidade de cartão
                </span>
              </div>

              {/* Recursos Free */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Top 2 Oportunidades Diárias:</strong> editais com maior aderência ao seu nicho</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Acesso ao Radar Oficial do PNCP</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Configuração de Perfil da Empresa</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Sem prazo de expiração</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={getWhatsAppLink("FREE")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <span>COMEÇAR GRATUITAMENTE</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </a>
            </div>
          </div>

          {/* PLANO 2: PRO (R$ 119,90) */}
          <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between relative group shadow-md">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-950 border border-blue-800/60 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Plano Pro</h3>
                    <span className="text-xs text-blue-300">Catálogo 100% Liberado</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Ideal para empresas ativas que não querem perder nenhuma oportunidade em aberto no Brasil inteiro.
              </p>

              <div className="pt-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-slate-400 font-medium">R$</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">119,90</span>
                  <span className="text-xs text-slate-400 font-normal">/mês</span>
                </div>
                <span className="text-xs text-blue-400 font-medium mt-1 block">
                  ✓ Sem fidelidade • Cancele quando quiser
                </span>
              </div>

              {/* Recursos Pro */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Radar Multi-Fontes:</strong> PNCP, BLL Compras e Portais Estaduais</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Filtros Avançados de Aderência:</strong> direto ao perfil do negócio</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Funil Comercial Kanban:</strong> 6 etapas de gestão de propostas</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Boletim de Editais:</strong> acesse a plataforma ou receba no WhatsApp</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Catálogo ilimitado de oportunidades</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={getWhatsAppLink("PRO")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>TESTAR PLANO PRO NO WHATSAPP</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* PLANO 3: BUSINESS (R$ 189,90) - DESTAQUE */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-900 border-2 border-emerald-500 shadow-xl flex flex-col justify-between relative group scale-100 lg:scale-[1.02]">
            
            {/* Badge de Mais Recomendado */}
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold uppercase tracking-wide shadow-md flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mais Recomendado</span>
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                    <Crown className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Plano Business</h3>
                    <span className="text-xs text-emerald-300">Suíte Completa & Alertas WhatsApp</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Acompanhe editais no Painel e receba avisos no WhatsApp durante a disputa para <strong>nunca perder o prazo de 2h</strong> do pregoeiro.
              </p>

              <div className="pt-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-slate-400 font-medium">R$</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">189,90</span>
                  <span className="text-xs text-slate-400 font-normal">/mês</span>
                </div>
                <span className="text-xs text-slate-300 font-medium mt-1 block">
                  ★ Menos de R$ 6,50 por dia (menos que 1 cafezinho)
                </span>
              </div>

              {/* Recursos Business */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Alertas na Disputa via WhatsApp:</strong> chamado do pregoeiro e prazo fatal de 2h</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Proteção do Prazo de 2h:</strong> checklist pré-auditado para submissão ágil</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Auditoria Completa de Edital:</strong> resumo de riscos em 30 segundos</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Minutas de Impugnação em 1 Clique:</strong> fundamentação conforme a Lei 14.133</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Tudo do Plano Pro:</strong> Multi-fontes, funil Kanban e filtros completos</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={getWhatsAppLink("BUSINESS")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <span>TESTAR PLANO BUSINESS NO WHATSAPP</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}
