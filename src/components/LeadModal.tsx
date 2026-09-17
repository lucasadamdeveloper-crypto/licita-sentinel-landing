"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone, Building, User } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export default function LeadModal({ isOpen, onClose, selectedPlan = "BUSINESS" }: LeadModalProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [segmento, setSegmento] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.licitasentinel.com.br";

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          email,
          empresa,
          whatsapp,
          segmento,
          plano: selectedPlan,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Erro ao registrar interesse.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.warn("Lead submit warning:", err);
      // Mesmo com erro de rede, permite ao usuário seguir para o app
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#091122] rounded-3xl border border-cyan-500/40 shadow-[0_0_50px_rgba(0,229,255,0.25)] overflow-hidden">
        
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Conta Liberada com Sucesso!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Você acaba de ativar seu acesso ao <strong>Licita Sentinel</strong> no plano <strong>{selectedPlan}</strong>.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`${appUrl}/register?email=${encodeURIComponent(email)}&empresa=${encodeURIComponent(empresa)}&plano=${encodeURIComponent(selectedPlan)}`}
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
              >
                <span>ACESSAR PLATAFORMA AGORA</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-slate-400">
              Suas oportunidades estão no Painel e as convocações de disputa chegam direto no WhatsApp.
            </p>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-6">
            
            <div className="space-y-1.5 pr-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ACESSO IMEDIATO • PLANO {selectedPlan}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {selectedPlan === "FREE" ? "Crie sua Conta Gratuita" : `Comece no Plano ${selectedPlan}`}
              </h3>
              <p className="text-xs text-slate-300">
                Acesse o painel com os editais do seu nicho e ative alertas no WhatsApp para quando estiver participando do pregão.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-300 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-200 font-medium mb-1">Seu Nome Completo</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Ex: Carlos Silva"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-200 font-medium mb-1">E-mail Corporativo</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu.email@empresa.com.br"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-200 font-medium mb-1">Nome da Empresa</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      placeholder="Sua Empresa"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-200 font-medium mb-1">WhatsApp para Alertas</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="(00) 00000-0000"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-sans"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-200 font-medium mb-1">Segmento / Ramo de Atuação</label>
                <input
                  type="text"
                  value={segmento}
                  onChange={(e) => setSegmento(e.target.value)}
                  placeholder="Ex: Tecnologia, Obras, Material Médico, Limpeza..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-sans"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {loading ? "Liberando Acesso..." : (selectedPlan === "FREE" ? "CRIAR MINHA CONTA GRÁTIS" : `COMEÇAR NO PLANO ${selectedPlan}`)}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dados protegidos pela LGPD • Sem fidelidade</span>
              </div>
            </form>

          </div>
        )}

      </div>
    </div>
  );
}
