"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "O Licita Sentinel transformou nossa rotina. Antes passávamos a manhã inteira abrindo dezenas de portais. Na primeira semana de uso, identificamos um pregão no Paraná de R$ 890 mil e saímos vencedores. O investimento se pagou centenas de vezes.",
      author: "Carlos Eduardo Mendes",
      role: "Diretor Comercial",
      company: "TechMed Hospitalar",
      highlight: "+R$ 890k em contrato ganho",
      rating: 5,
    },
    {
      quote:
        "A auditoria de edital com inteligência artificial é impressionante. Ela encontrou uma exigência de atestado de capacitação que quase nos desclassificou. O checklist dos artigos 66 a 69 da Lei 14.133 dá uma segurança jurídica que nenhum outro software oferece.",
      author: "Juliana Vasconcellos",
      role: "Especialista em Licitações Públicas",
      company: "Inova Distribuidora",
      highlight: "Zero inabilitações em 6 meses",
      rating: 5,
    },
    {
      quote:
        "O gerador de minutas de impugnação é genial. Encontramos uma cláusula restritiva que exigia marca específica em um pregão municipal. Geramos a impugnação fundamentada no TCU em 1 clique e o órgão retificou o edital no dia seguinte.",
      author: "Marcos Vinicius Ribeiro",
      role: "Sócio-Fundador",
      company: "Ribeiro & Prado Engenharia",
      highlight: "Impugnação deferida em 24h",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 relative bg-[#0B1120] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>RESULTADOS COMPROVADOS POR EMPRESAS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Quem Usa o Licita Sentinel Não Volta ao Método Antigo
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Veja como empresas de tecnologia, serviços, obras e saúde estão vencendo mais licitações e protegendo seus prazos.
          </p>
        </div>

        {/* Depoimentos Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between relative group shadow-sm"
            >
              <div className="space-y-4">
                
                {/* Estrelas & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
                    {item.highlight}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-slate-700" />

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <h4 className="text-sm font-bold text-white">
                  {item.author}
                </h4>
                <p className="text-xs text-slate-400">
                  {item.role} • <span className="text-blue-400">{item.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
