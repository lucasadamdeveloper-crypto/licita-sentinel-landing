"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  FileText, 
  ShieldAlert, 
  FileCheck, 
  Copy, 
  Check, 
  ArrowRight,
  TrendingUp,
  Cpu
} from "lucide-react";

interface InteractiveDemoSectionProps {
  onOpenLeadModal: (plan?: string) => void;
}

export default function InteractiveDemoSection({ onOpenLeadModal }: InteractiveDemoSectionProps) {
  const [activeTab, setActiveTab] = useState<"auditoria" | "checklist" | "impugnacao">("auditoria");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demonstracao" className="py-24 relative bg-[#070D1B] border-t border-slate-800/80">
      
      {/* Luz ambiente central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>SIMULAÇÃO AO VIVO DO SOFTWARE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Veja a Inteligência Artificial do Sentinel Trabalhando
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Selecione uma das ferramentas abaixo para experimentar como o Licita Sentinel sintetiza editais, audita documentos e protege seu lucro em tempo recorde.
          </p>

          {/* Abas de Navegação Interativa */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab("auditoria")}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === "auditoria"
                  ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                  : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>1. Auditoria Instantânea</span>
            </button>

            <button
              onClick={() => setActiveTab("checklist")}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === "checklist"
                  ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                  : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              <FileCheck className="w-4 h-4" />
              <span>2. Checklist Lei 14.133</span>
            </button>

            <button
              onClick={() => setActiveTab("impugnacao")}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === "impugnacao"
                  ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                  : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>3. Minuta de Impugnação</span>
            </button>
          </div>
        </div>

        {/* Display da Simulação */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#091122] border border-cyan-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Header da janela interativa */}
          <div className="px-6 py-4 bg-[#050A14] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-cyan-300 font-bold">
                {activeTab === "auditoria" && "MÓDULO IA: LEITURA E SÍNTESE DE EDITAL (134 PÁGINAS PROCESSADAS)"}
                {activeTab === "checklist" && "MÓDULO HABILITAÇÃO: ARTS. 66 A 69 LEI 14.133/2021"}
                {activeTab === "impugnacao" && "MÓDULO JURÍDICO: MINUTA AUTOMÁTICA FUNDAMENTADA NO TCU"}
              </span>
            </div>

            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
              Status: 100% Concluído (0.8s)
            </span>
          </div>

          {/* Conteúdo Aba 1: Auditoria Instantânea */}
          {activeTab === "auditoria" && (
            <div className="p-6 sm:p-8 space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0B152A] border border-slate-800">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                    OPORTUNIDADE EM DESTAQUE
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    Pregão Eletrônico 0122/2026 • Registro de Preços
                  </h4>
                  <p className="text-xs text-slate-400">Secretaria de Educação e Administração • Valor Máximo: R$ 3.820.000,00</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold shrink-0">
                  <TrendingUp className="w-4 h-4" />
                  <span>Score Aderência: 95/100</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#060C18] border border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Pontos Fortes & Atrativos
                  </span>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>Exigência de atestado de 40% da capacidade técnica (dentro dos limites do TCU).</li>
                    <li>Pagamento estipulado em 10 dias após a liquidação da nota fiscal.</li>
                    <li>Possibilidade de subcontratação parcial autorizada expressamente.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#060C18] border border-amber-500/30 space-y-2">
                  <span className="text-xs font-mono font-bold text-amber-300 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-400" /> Alertas de Risco & Atenção
                  </span>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>Cláusula 9.4 estipula multa de 1% ao dia em caso de atraso na entrega.</li>
                    <li>Obrigatório laudo de conformidade emitido por laboratório acreditado.</li>
                    <li>Garantia contratual de 5% exigida em até 10 dias da assinatura.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between">
                <span className="text-xs text-slate-300">
                  Quer ver este relatório em tempo real para os editais da sua empresa?
                </span>
                <button
                  onClick={() => onOpenLeadModal("BUSINESS")}
                  className="px-4 py-2 rounded-xl bg-cyan-400 text-black font-mono font-bold text-xs hover:bg-cyan-300 transition-all shrink-0"
                >
                  Testar com seu CNPJ
                </button>
              </div>
            </div>
          )}

          {/* Conteúdo Aba 2: Checklist Lei 14.133 */}
          {activeTab === "checklist" && (
            <div className="p-6 sm:p-8 space-y-4 animate-in fade-in duration-300">
              <p className="text-xs text-slate-400">
                Auditoria automática de cada requisito formal de habilitação previsto no edital, mapeando artigos 66 a 69 da Nova Lei de Licitações:
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#0B152A] border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</div>
                    <div>
                      <h5 className="text-xs font-bold text-white">Habilitação Jurídica (Art. 66)</h5>
                      <p className="text-[11px] text-slate-400">Contrato Social consolidado, procuração e documento dos sócios.</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">100% APTO</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0B152A] border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</div>
                    <div>
                      <h5 className="text-xs font-bold text-white">Regularidade Fiscal e Trabalhista (Art. 68)</h5>
                      <p className="text-[11px] text-slate-400">CND Federal, FGTS, CNDT e Certidão Estadual válidas no SICAF.</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">VÁLIDAS</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0B152A] border border-cyan-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">★</div>
                    <div>
                      <h5 className="text-xs font-bold text-white">Qualificação Técnico-Operacional (Art. 67)</h5>
                      <p className="text-[11px] text-slate-400">Exigência de atestado de no mínimo 500 unidades fornecidas compatíveis.</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 font-bold">ATENDIDO</span>
                </div>
              </div>
            </div>
          )}

          {/* Conteúdo Aba 3: Minuta de Impugnação */}
          {activeTab === "impugnacao" && (
            <div className="p-6 sm:p-8 space-y-4 animate-in fade-in duration-300 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400 text-[11px]">
                  PEÇA PROCESSUAL GERADA AUTOMATICAMENTE (PRONTA PARA PROTOCOLO)
                </span>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copiado!" : "Copiar Minuta"}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#050A14] border border-slate-800 text-slate-300 space-y-3 leading-relaxed max-h-60 overflow-y-auto font-mono text-[11px]">
                <p className="text-cyan-300 font-bold">
                  ILUSTRÍSSIMO SENHOR AGENTE DE CONTRATAÇÃO / PREGOEIRO DO EDITAL Nº 0122/2026
                </p>
                <p>
                  <strong>EMPRESA LICITANTE</strong>, inscrita no CNPJ/MF sob nº XX.XXX.XXX/0001-XX, vem, respeitosamente, com fulcro no art. 164 da Lei Federal nº 14.133/2021, tempestivamente interpor:
                </p>
                <p className="text-amber-300 font-bold uppercase">
                  IMPUGNAÇÃO AO EDITAL COM PEDIDO DE RETIFICAÇÃO DE CLÁUSULA RESTRITIVA
                </p>
                <p>
                  1. DA ILEGALIDADE DA CLÁUSULA 8.2: O instrumento convocatório exige marca exclusiva e tempo mínimo de constituição jurídica de 5 anos, violando frontalmente o art. 9º, inciso I da Lei 14.133/2021 e a Súmula nº 272 do Tribunal de Contas da União (TCU)...
                </p>
                <p className="text-slate-400">
                  [...Fundamentação jurídica completa, jurisprudência do TCU e pedidos de deferimento estruturados...]
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
