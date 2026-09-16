"use client";

import React from "react";
import { 
  Zap, 
  Crown, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Check,
  Shield,
  MessageSquare
} from "lucide-react";

interface PricingSectionProps {
  onOpenLeadModal: (plan?: string) => void;
}

export default function PricingSection({ onOpenLeadModal }: PricingSectionProps) {
  return (
    <section id="planos" className="py-24 relative bg-[#050A14] overflow-hidden">
      
      {/* Luz ambiente de destaque para o plano Business */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-amber-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E1B38] border border-amber-500/40 text-xs font-mono text-amber-300">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>INVESTIMENTO QUE SE PAGA NO PRIMEIRO EDITAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Planos Transparentes Feitos para Substituir Custos e Escalar Vitórias
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Comece no <strong>Plano Gratuito</strong> sem cartão ou escolha os planos profissionais para automatizar o trabalho de uma equipe inteira. Sem fidelidade, sem pegadinhas.
          </p>
        </div>

        {/* Grade de 3 Planos Oficiais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          
          {/* PLANO 1: FREE (R$ 0) */}
          <div className="p-7 rounded-3xl bg-[#091122]/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between relative group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-slate-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">PLANO FREE</h3>
                    <span className="text-[10px] font-mono text-slate-400">Degustação Contínua</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Acesse a plataforma gratuitamente para sentir o poder do radar sem colocar a mão no bolso.
              </p>

              <div className="pt-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-slate-400 font-mono">R$</span>
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">0</span>
                  <span className="text-xs text-slate-400 font-mono">/sempre</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 mt-1 block">
                  ✓ Sem necessidade de cartão
                </span>
              </div>

              {/* Recursos Free */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Top 2 Oportunidades Diárias:</strong> editais de maior score do nicho</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Acesso ao Radar do PNCP</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Configuração de Perfil da Empresa</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Sem prazo de expiração</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenLeadModal("FREE")}
                className="w-full py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 hover:bg-slate-800 text-white font-mono font-bold text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <span>CRIAR CONTA GRÁTIS</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* PLANO 2: PRO (R$ 119,90) */}
          <div className="p-7 rounded-3xl bg-[#091122]/90 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between relative group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">PLANO PRO</h3>
                    <span className="text-[10px] font-mono text-cyan-300">Catálogo 100% Liberado</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Ideal para empresas ativas que não querem perder nenhuma oportunidade em aberto.
              </p>

              <div className="pt-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-slate-400 font-mono">R$</span>
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">119,90</span>
                  <span className="text-xs text-slate-400 font-mono">/mês</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 mt-1 block">
                  ✓ Sem fidelidade • Cancele quando quiser
                </span>
              </div>

              {/* Recursos Pro */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Radar Multi-Fontes:</strong> PNCP, BLL Compras e Compras PR</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>8 Filtros de IA:</strong> aderência ao perfil do negócio</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Funil Comercial Kanban:</strong> 6 etapas de pipeline</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Boletim Matinal por E-mail:</strong> editais quentes do dia</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Catálogo ilimitado de oportunidades</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenLeadModal("PRO")}
                className="w-full py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:bg-slate-800 text-white font-mono font-bold text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <span>ESCOLHER PLANO PRO</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>
          </div>

          {/* PLANO 3: BUSINESS (R$ 189,90) - DESTAQUE */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0E1B38] to-[#070E20] border-2 border-amber-400 shadow-[0_0_40px_rgba(245,158,11,0.25)] flex flex-col justify-between relative group scale-100 lg:scale-[1.02]">
            
            {/* Badge de Mais Escolhido */}
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black text-[10px] font-mono font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>MAIS ESCOLHIDO</span>
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center">
                    <Crown className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">PLANO BUSINESS</h3>
                    <span className="text-[10px] font-mono text-amber-300">Suíte Completa de IA & WhatsApp</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Acompanhe editais no Dashboard e receba avisos no WhatsApp durante a disputa para não perder o prazo de 2h do pregoeiro.
              </p>

              <div className="pt-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-slate-400 font-mono">R$</span>
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400">189,90</span>
                  <span className="text-xs text-slate-400 font-mono">/mês</span>
                </div>
                <span className="text-[10px] font-mono text-amber-300 mt-1 block">
                  ★ Equivale a menos de R$ 6,50 por dia
                </span>
              </div>

              {/* Recursos Business */}
              <div className="space-y-2.5 pt-4 border-t border-slate-700 text-xs text-slate-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Alertas na Disputa via WhatsApp:</strong> chamado do pregoeiro e prazo de 2h</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Proteção do Prazo de 2h:</strong> checklist pré-pronto</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Auditoria Completa por IA:</strong> resumo em 30 segundos</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Minutas de Impugnação em 1 Clique</strong> com artigos e TCU</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Sentinela IA Ilimitado</strong> com Chat ao Vivo</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Tudo do Plano Pro</strong> (Multi-fontes & Filtros)</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenLeadModal("BUSINESS")}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-black font-mono font-extrabold text-xs shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1.5"
              >
                <span>COMEÇAR NO PLANO BUSINESS</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </button>
            </div>
          </div>

        </div>

        {/* Garantia e Segurança */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-2xl bg-[#070E1E] border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-400 font-mono">
          <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
          <span>
            <strong>Flexibilidade Total:</strong> Comece hoje no Plano Free ou faça upgrade quando quiser para desbloquear os alertas de disputa no WhatsApp e o Sentinela IA.
          </span>
        </div>

      </div>
    </section>
  );
}
