"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como funciona o Plano Gratuito do Licita Sentinel?",
      a: "Você cria sua conta em menos de 1 minuto e pode usar o Plano Free sem limite de tempo e sem precisar cadastrar cartão de crédito. Você recebe diariamente as 2 oportunidades de maior score do seu nicho e experimenta a velocidade do radar.",
    },
    {
      q: "Como funcionam os alertas no WhatsApp para não perder o prazo de 2 horas do pregoeiro?",
      a: "As oportunidades e novos editais aparecem organizados dentro do seu Dashboard na plataforma. Já os alertas no WhatsApp entram em ação quando a sua empresa está participando do pregão em andamento: caso o pregoeiro chame sua empresa no chat ou abra a convocação com o temido prazo de 2 horas para envio da proposta readequada e certidões, o Sentinela avisa imediatamente no seu celular para você não ser desclassificado nem penalizado. Além disso, nosso checklist já deixa todas as certidões exigidas pré-auditadas para você anexar em minutos.",
    },
    {
      q: "Quanto minha empresa economiza em funcionários?",
      a: "Empresas de médio porte costumam manter de 1 a 3 colaboradores dedicados apenas a abrir dezenas de portais públicos e vigiar pregões. O Sentinela automatiza 100% dessa rotina por uma fração minúscula de um salário mínimo, liberando sua equipe para focar em precificação e fechamento de contratos.",
    },
    {
      q: "Quais portais de compras públicas o Licita Sentinel monitora?",
      a: "Monitoramos em tempo real o PNCP (Portal Nacional de Contratações Públicas), Compras.gov.br (Comprasnet), BLL Compras, Compras Paraná, BEC/SP, Licitações-e e diversos portais municipais e estaduais com atualização diária e deduplicação inteligente.",
    },
    {
      q: "O software já está atualizado com a Nova Lei de Licitações (Lei 14.133/2021)?",
      a: "Sim, 100%! O Licita Sentinel foi desenvolvido desde o primeiro dia com base na Lei Federal nº 14.133/2021. Todo o checklist de habilitação (arts. 66 a 69) e os modelos de impugnação utilizam a jurisprudência mais recente do Tribunal de Contas da União (TCU).",
    },
    {
      q: "Posso cancelar ou fazer upgrade de plano quando quiser?",
      a: "Com certeza. Nossos planos não possuem fidelidade nem multa rescisória. Você pode começar no Free e fazer upgrade para o Pro ou Business quando quiser, com cancelamento descomplicado em 1 clique.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#050A14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>DÚVIDAS FREQUENTES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes sobre o Licita Sentinel
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            Tudo o que você precisa saber para começar a usar a plataforma hoje mesmo.
          </p>
        </div>

        {/* Acordeão */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#091122] border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 text-cyan-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-cyan-950/80 border-cyan-500/40" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
