"use client";

import React, { useState } from "react";
import { 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  FileCheck, 
  Radar, 
  ArrowRight, 
  Building2, 
  TrendingUp,
  AlertCircle
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

interface InteractiveDemoSectionProps {
  onOpenLeadModal: (plan?: string) => void;
}

export default function InteractiveDemoSection({ onOpenLeadModal }: InteractiveDemoSectionProps) {
  const [activeTab, setActiveTab] = useState<"busca" | "auditoria" | "checklist">("busca");
  const [selectedNiche, setSelectedNiche] = useState<string>("Tecnologia & TI");

  const niches = [
    { label: "Tecnologia & TI", title: "Aquisição de servidores, switches e infraestrutura de rede corporativa" },
    { label: "Construção & Reformas", title: "Reforma preventiva e manutenção predial com fornecimento de materiais" },
    { label: "Alimentos & Merenda", title: "Registro de Preços para fornecimento contínuo de gêneros alimentícios" },
    { label: "Saúde & Medicamentos", title: "Fornecimento de insumos médico-hospitalares e medicamentos de uso geral" },
    { label: "Serviços & Portaria", title: "Contratação de serviços terceirizados de controle de acesso, portaria e limpeza" }
  ];

  const currentNicheData = niches.find(n => n.label === selectedNiche) || niches[0];

  return (
    <section id="demonstracao" className="py-20 relative bg-[#0B1120] border-t border-slate-800/80">
      
      {/* Luz ambiente central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>DEMONSTRAÇÃO DO SOFTWARE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Veja Como é Simples Encontrar e Vencer Licitações
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Selecione seu segmento abaixo e veja como a plataforma organiza as melhores oportunidades públicas em tempo real.
          </p>

          {/* Abas Limpas de Navegação */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab("busca")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "busca"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              <Radar className="w-4 h-4" />
              <span>1. Radar de Oportunidades</span>
            </button>

            <button
              onClick={() => setActiveTab("auditoria")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "auditoria"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>2. Análise de Edital com IA</span>
            </button>

            <button
              onClick={() => setActiveTab("checklist")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "checklist"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              <FileCheck className="w-4 h-4" />
              <span>3. Checklist de Documentos</span>
            </button>
          </div>
        </div>

        {/* Display da Janela de Simulação Limpa */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Barra Superior da Janela */}
          <div className="px-5 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              </div>
              <span className="ml-2 text-xs text-slate-400 font-medium hidden sm:inline">
                Licita Sentinel • Painel de Inteligência
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Radar PNCP Ativo</span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* ABA 1: RADAR DE OPORTUNIDADES */}
          {/* ========================================================================= */}
          {activeTab === "busca" && (
            <div className="p-5 sm:p-7 space-y-5">
              
              {/* Seletor Rápido de Segmentos */}
              <div>
                <span className="text-xs text-slate-400 block mb-2 font-medium">
                  Selecione o segmento da sua empresa:
                </span>
                <div className="flex flex-wrap gap-2">
                  {niches.map((niche) => (
                    <button
                      key={niche.label}
                      onClick={() => setSelectedNiche(niche.label)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        selectedNiche === niche.label
                          ? "bg-blue-600 text-white font-semibold shadow-sm"
                          : "bg-slate-950 border border-slate-700 text-slate-300 hover:text-white"
                      }`}
                    >
                      {niche.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Card Limpo da Oportunidade Encontrada */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-700/80 space-y-4 shadow-sm">
                
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 text-[11px] font-semibold">
                      PREGÃO ELETRÔNICO Nº 0122/2026
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                      PNCP Oficial
                    </span>
                  </div>

                  <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> 96% Compatível
                  </span>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {currentNicheData.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    Prefeitura Municipal • Londrina / PR
                  </p>
                </div>

                {/* Métricas Principais */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">Valor Estimado</span>
                    <span className="text-sm sm:text-base font-bold text-emerald-400">R$ 2.450.000,00</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">Data da Disputa</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">29/09 às 10:00</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">Enquadramento</span>
                    <span className="text-xs font-medium text-slate-300">Lei 14.133 • Ampla</span>
                  </div>
                </div>

                {/* Ações Diretas */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                  <a
                    href={getWhatsAppLink("DEMO")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Quero Oportunidades Deste Ramo no WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setActiveTab("auditoria")}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Ver Análise por IA</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* ABA 2: ANÁLISE DE EDITAL POR IA */}
          {/* ========================================================================= */}
          {activeTab === "auditoria" && (
            <div className="p-5 sm:p-7 space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">Pregão Eletrônico 0122/2026</h4>
                  <p className="text-[11px] text-slate-400">{currentNicheData.title}</p>
                </div>
                <span className="text-xs text-emerald-400 font-bold">Score 95/100</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Pontos Favoráveis
                  </span>
                  <ul className="text-slate-300 space-y-1.5 leading-relaxed">
                    <li>✓ Exigência técnica proporcional ao objeto.</li>
                    <li>✓ Pagamento garantido em até 15 dias úteis.</li>
                    <li>✓ Sem cláusulas abusivas ou direcionamentos.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-bold text-amber-400 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-400" /> Pontos de Atenção
                  </span>
                  <ul className="text-slate-300 space-y-1.5 leading-relaxed">
                    <li>⚠️ Prazo de entrega estipulado em 30 dias.</li>
                    <li>⚠️ Validade de certidões conferida na abertura.</li>
                    <li>⚠️ Proposta readequada no prazo de 2 horas.</li>
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppLink("DEMO")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Testar Análise de Edital no WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* ABA 3: CHECKLIST DE DOCUMENTOS */}
          {/* ========================================================================= */}
          {activeTab === "checklist" && (
            <div className="p-5 sm:p-7 space-y-3">
              <span className="text-xs text-slate-400 font-medium block">
                Auditoria automática de certidões e habilitação (Lei 14.133):
              </span>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-white font-medium">Habilitação Jurídica (Contrato Social & Sócios)</span>
                  </div>
                  <span className="text-emerald-400 font-bold">100% OK</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-white font-medium">Regularidade Fiscal (Receita Federal, FGTS, CNDT)</span>
                  </div>
                  <span className="text-emerald-400 font-bold">VÁLIDAS</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-white font-medium">Qualificação Técnica (Atestados de Capacidade)</span>
                  </div>
                  <span className="text-emerald-400 font-bold">COMPATÍVEL</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppLink("DEMO")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Auditar Meus Documentos no WhatsApp</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
