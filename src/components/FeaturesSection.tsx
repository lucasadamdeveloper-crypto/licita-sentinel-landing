"use client";

import React from "react";
import { 
  Radar, 
  Sparkles, 
  ArrowUpRight 
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Radar,
      title: "Painel Centralizado & Alertas de Disputa",
      badge: "Economia de Equipe",
      description:
        "Todas as licitações do seu nicho organizadas no Painel em tempo real. E quando sua empresa estiver na disputa, receba alertas imediatos no WhatsApp caso o pregoeiro convoque no prazo de 2h — sem precisar de funcionários dando F5.",
      color: "from-blue-500/20 to-transparent",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
    },
  ];

  return (
    <section id="recursos" className="py-24 relative bg-[#0B1120] border-t border-slate-800/80 overflow-hidden">
      
      {/* Halo de Fundo */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>RECURSOS QUE TRANSFORMAM EDITAIS EM CONTRATOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Criado para Fornecedores que Não Podem Perder Tempo nem Margem
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Uma plataforma completa para você identificar oportunidades lucrativas, avaliar a viabilidade com segurança jurídica e disputar o pregão com tranquilidade.
          </p>
        </div>

        {/* Card em Destaque Centralizado */}
        <div className="max-w-2xl mx-auto">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-8 sm:p-9 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-600/40 flex items-center justify-center transition-colors shadow-inner">
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>

                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
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
