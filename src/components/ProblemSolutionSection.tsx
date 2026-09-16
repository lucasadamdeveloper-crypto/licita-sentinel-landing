"use client";

import React from "react";
import { 
  AlertTriangle, 
  Clock, 
  Users, 
  CheckCircle2, 
  MessageSquare, 
  DollarSign, 
  ShieldAlert, 
  ArrowRight,
  Zap,
  Sparkles
} from "lucide-react";

interface ProblemSolutionSectionProps {
  onOpenLeadModal: (plan?: string) => void;
}

export default function ProblemSolutionSection({ onOpenLeadModal }: ProblemSolutionSectionProps) {
  return (
    <section className="py-20 relative bg-[#040812] border-t border-slate-800/80 overflow-hidden">
      
      {/* Luz ambiente de alerta/solução */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-600/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-xs font-mono text-red-300">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span>A REALIDADE BRUTAL DO MERCADO DE LICITAÇÕES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Você já perdeu um contrato de R$ 500 mil porque ninguém viu a mensagem do pregoeiro?
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            A maioria dos empresários comete dois erros fatais: ou deixam passar o <strong>prazo de 2 horas</strong> por estarem ocupados, ou gastam milhares de reais contratando <strong>2 ou mais funcionários só para vigiar portais</strong>.
          </p>
        </div>

        {/* Comparativo de Dores vs Solução Sentinela */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LADO A: O Jeito Antigo (Arriscado e Caro) */}
          <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#140B10] to-[#0A0508] border border-red-500/30 shadow-[0_0_40px_rgba(239,68,68,0.1)] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-red-950 border border-red-500/50 text-red-400 font-mono text-xs font-bold uppercase">
                  O Método Antigo & Arriscado
                </span>
                <span className="text-xs font-mono text-red-400">Prejuízo Frequente</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Como as empresas perdem dinheiro todo mês:
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-red-950/20 border border-red-500/20">
                  <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">O Pânico do Prazo de 2 Horas:</strong>
                    O pregoeiro convoca no chat: <em>"Apresente a proposta readequada e as certidões em 2 horas"</em>. O empresário está em reunião, ninguém vê a tempo, o prazo expira e a empresa é desclassificada sumariamente.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-red-950/20 border border-red-500/20">
                  <Users className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">2 ou Mais Funcionários Só Pra Isso:</strong>
                    Salários, encargos, CLT e férias de 2 colaboradores dedicados apenas a abrir dezenas de portais e dar F5. Um custo fixo de R$ 6.000 a R$ 12.000/mês que falha por cansaço humano.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-red-950/20 border border-red-500/20">
                  <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Risco de Multa e Suspensão:</strong>
                    Deixar de responder a convocação do pregoeiro não gera apenas desclassificação: na Lei 14.133 pode gerar processo administrativo sancionatório e impedimento de licitar.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/20 text-xs font-mono text-red-300 text-center">
              ⚠️ Um único pregão perdido paga 5 anos de qualquer software.
            </div>
          </div>

          {/* LADO B: Com o Licita Sentinel */}
          <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#09172E] to-[#060F1E] border-2 border-cyan-400/80 shadow-[0_0_50px_rgba(0,229,255,0.25)] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-400/50 text-cyan-300 font-mono text-xs font-bold uppercase">
                  Com o Licita Sentinel
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">100% Protegido</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Automatize tudo e nunca mais perca uma convocação:
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30">
                  <MessageSquare className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Aviso Imediato no WhatsApp Durante a Disputa:</strong>
                    As licitações do seu nicho ficam organizadas no seu Dashboard. E quando sua empresa já está participando da disputa do pregão, o Sentinela envia alertas imediatos no seu celular caso o pregoeiro chame no chat ou abra o prazo fatal de 2 horas.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30">
                  <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Dossiê e Checklist Pré-Prontos:</strong>
                    O Sentinela já audita previamente os Arts. 66 a 69 da Lei 14.133. Quando o pregoeiro abrir o prazo de 2 horas, seu kit de certidões e proposta já estará 100% organizado para envio em 15 minutos.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30">
                  <DollarSign className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Economia Gigantesca em Folha de Pagamento:</strong>
                    Substitua a rotina maçante de caçar editais por um motor de IA que nunca dorme, nunca erra e não tira férias. Você pode começar no <strong>Plano Free</strong> sem pagar nada.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenLeadModal("FREE")}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 text-black font-mono font-extrabold text-xs sm:text-sm shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>COMEÇAR NO PLANO GRATUITO AGORA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
