"use client";

import React from "react";
import { 
  AlertTriangle, 
  Clock, 
  Users, 
  DollarSign, 
  CheckCircle2, 
  XCircle, 
  ShieldAlert, 
  Sparkles, 
  ArrowRight,
  MessageSquare,
  Zap
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

interface ProblemSolutionSectionProps {
  onOpenLeadModal: (plan?: string) => void;
}

export default function ProblemSolutionSection({ onOpenLeadModal }: ProblemSolutionSectionProps) {
  return (
    <section className="py-20 relative bg-[#0B1120] border-t border-slate-800/80 overflow-hidden">
      
      {/* Luz ambiente de alerta/solução */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-600/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/60 border border-rose-500/40 text-xs font-semibold text-rose-300">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>A REALIDADE DO MERCADO DE LICITAÇÕES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Sua empresa já perdeu um contrato público porque ninguém viu a convocação do pregoeiro a tempo?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            A maioria dos fornecedores comete dois erros custosos: ou deixam passar o <strong>prazo de 2 horas</strong> por estarem ocupados na operação, ou gastam milhares de reais mantendo <strong>funcionários dedicados apenas a vigiar telas</strong>.
          </p>
        </div>

        {/* Comparativo de Dores vs Solução Sentinela */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LADO A: O Jeito Antigo (Arriscado e Caro) */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/90 border border-rose-500/30 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-rose-950 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase">
                  O Método Antigo & Manual
                </span>
                <span className="text-xs font-semibold text-rose-400">Alto Risco de Prejuízo</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white">
                Como as empresas perdem contratos todo mês:
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                  <Clock className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">O Pânico do Prazo de 2 Horas:</strong>
                    O pregoeiro convoca no chat: <em>"Apresente a proposta readequada e as certidões em 2 horas"</em>. Sua equipe está em reunião, ninguém vê a tempo, o prazo expira e a empresa é desclassificada sumariamente.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                  <Users className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Equipe Dedicada Só Pra Dar F5:</strong>
                    Salários, encargos, CLT e férias de colaboradores dedicados apenas a abrir dezenas de portais governamentais. Um custo fixo de R$ 6.000 a R$ 12.000/mês sujeito a falhas por cansaço humano.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                  <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Risco de Multa e Impedimento de Licitar:</strong>
                    Deixar de responder a convocação do pregoeiro não gera apenas desclassificação: na Nova Lei 14.133 pode acarretar sanções administrativas e suspensão do direito de licitar com órgãos públicos.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/20 text-xs text-rose-200 text-center font-medium">
              Um único pregão perdido paga 5 anos de qualquer software de monitoramento.
            </div>
          </div>

          {/* LADO B: Com o Licita Sentinel */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-900 border-2 border-emerald-500/60 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase">
                  Com o Licita Sentinel
                </span>
                <span className="text-xs text-emerald-400 font-bold">100% Protegido</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white">
                Tranquilidade total e resposta rápida na disputa:
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Aviso Imediato no WhatsApp Durante a Disputa:</strong>
                    As licitações do seu nicho ficam organizadas no seu Painel. E quando sua empresa estiver participando do pregão, o Sentinela avisa no WhatsApp do diretor e do analista assim que o pregoeiro abrir convocação no chat.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Dossiê e Checklist Pré-Auditados:</strong>
                    O Sentinela audita previamente os requisitos de habilitação (Arts. 66 a 69 da Lei 14.133). Quando o pregoeiro abrir o prazo de 2 horas, seu kit de documentos já está pronto para submissão ágil.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <DollarSign className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Economia Drástica em Folha de Pagamento:</strong>
                    Substitua a rotina maçante de caçar editais por uma triagem automatizada 24/7. Você economiza tempo da sua equipe e pode começar no <strong>Plano Gratuito</strong> imediatamente.
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
                <span>SOLICITAR TESTE GRATUITO NO WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
