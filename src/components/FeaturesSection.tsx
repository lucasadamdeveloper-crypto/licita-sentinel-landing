"use client";

import React from "react";
import { 
  Radar, 
  BrainCircuit, 
  CheckSquare2, 
  AlertOctagon, 
  FileSignature, 
  Kanban, 
  Sparkles, 
  ArrowUpRight 
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Radar,
      title: "Radar com Alertas no WhatsApp",
      badge: "Economia de Funcionários",
      description:
        "Varredura 24/7 no PNCP, BLL e portais estaduais. Receba no WhatsApp o aviso de novos editais e convocações urgentes sem precisar de 2 funcionários de plantão dando F5.",
      color: "from-cyan-500/20 to-transparent",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-400",
    },
    {
      icon: BrainCircuit,
      title: "Auditoria de Edital com IA",
      badge: "Economia de 90% do Tempo",
      description:
        "O Sentinela lê editais densos de 100+ páginas em 30 segundos. Receba um resumo executivo com o objeto real, prazos de entrega e condições comerciais.",
      color: "from-blue-500/20 to-transparent",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
    },
    {
      icon: CheckSquare2,
      title: "Kit Pré-Pronto para o Prazo de 2 Horas",
      badge: "Zero Desclassificação",
      description:
        "O pregoeiro chamou e deu 2h para proposta e certidões? O Sentinela já audita previamente os Arts. 66 a 69 da Lei 14.133 para você anexar tudo em menos de 15 minutos.",
      color: "from-emerald-500/20 to-transparent",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-400",
    },
    {
      icon: AlertOctagon,
      title: "Matriz de Riscos & Cláusulas Ocultas",
      badge: "Proteção Financeira",
      description:
        "Detecção de pegadinhas jurídicas, prazos de pagamento abusivos, penalidades desmedidas e retenções perigosas antes de você dar o primeiro lance.",
      color: "from-amber-500/20 to-transparent",
      borderColor: "border-amber-500/30",
      iconColor: "text-amber-400",
    },
    {
      icon: FileSignature,
      title: "Minutas de Impugnação em 1 Clique",
      badge: "Fundamentação TCU",
      description:
        "Encontrou um edital direcionado ou ilegal? Gere pedidos de esclarecimento e impugnações completas, citando artigos da lei e jurisprudência oficial.",
      color: "from-purple-500/20 to-transparent",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
    },
    {
      icon: Kanban,
      title: "Funil Comercial & Pipeline Kanban",
      badge: "Gestão Estratégica",
      description:
        "Organize todo o processo licitatório em um Kanban de 6 etapas: Descoberta, Análise, Go/No-Go, Impugnação, Pregão e Homologação.",
      color: "from-cyan-500/20 to-transparent",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-400",
    },
  ];

  return (
    <section id="recursos" className="py-24 relative bg-[#050A14] overflow-hidden">
      
      {/* Halo de Fundo */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RECURSOS QUE TRANSFORMAM LICITAÇÕES EM CONTRATOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Criado para Licitantes que Não Podem Perder Tempo nem Margem
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Uma suíte completa de inteligência para você identificar as melhores oportunidades, avaliar a viabilidade com precisão cirúrgica e entrar na disputa com vantagem competitiva.
          </p>
        </div>

        {/* Grade de Recursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-7 rounded-3xl bg-gradient-to-b from-[#0B152A] to-[#070D1B] border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,229,255,0.15)] flex flex-col justify-between"
              >
                {/* Glow decorativo no topo */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.color} rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#071329] border border-slate-700/80 group-hover:border-cyan-400/50 flex items-center justify-center transition-colors">
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>

                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Conhecer recurso</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
