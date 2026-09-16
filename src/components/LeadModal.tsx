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
          <div className="p-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                Conta Liberada com Sucesso!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Você acaba de ativar seu acesso ao <strong>Licita Sentinel</strong> no plano <strong>{selectedPlan}</strong>.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`${appUrl}/register?email=${encodeURIComponent(email)}&empresa=${encodeURIComponent(empresa)}&plano=${encodeURIComponent(selectedPlan)}`}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-mono font-extrabold text-sm shadow-[0_0_30px_rgba(0,229,255,0.4)] flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
              >
                <span>ACESSAR PLATAFORMA AGORA</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] font-mono text-slate-400">
              Nossa equipe enviará os primeiros alertas de oportunidades diretamente no seu WhatsApp.
            </p>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-6">
            
            <div className="space-y-1.5 pr-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ACESSO IMEDIATO • PLANO {selectedPlan}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {selectedPlan === "FREE" ? "Crie sua Conta Gratuita" : `Comece no Plano ${selectedPlan}`}
              </h3>
              <p className="text-xs text-slate-400">
                Preencha os dados abaixo para receber os editais do seu nicho e convocações no WhatsApp.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-300 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-300 font-mono mb-1">Seu Nome Completo</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Ex: Lucas Silva"
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#060C18] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-mono mb-1">E-mail Corporativo</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu.email@empresa.com.br"
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#060C18] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-mono mb-1">Nome da Empresa</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      placeholder="Sua Empresa"
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#060C18] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-mono mb-1">WhatsApp para Alertas</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="(00) 00000-0000"
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#060C18] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-sans"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-mono mb-1">Nicho / Segmento Principal</label>
                <input
                  type="text"
                  value={segmento}
                  onChange={(e) => setSegmento(e.target.value)}
                  placeholder="Ex: Tecnologia, Obras, Material Médico, Limpeza..."
                  className="w-full px-3.5 py-3 rounded-xl bg-[#060C18] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-sans"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 text-black font-mono font-extrabold text-sm shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  {loading ? "Liberando Acesso..." : (selectedPlan === "FREE" ? "CRIAR MINHA CONTA GRÁTIS" : `COMEÇAR NO PLANO ${selectedPlan}`)}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dados 100% protegidos pela LGPD • Sem fidelidade</span>
              </div>
            </form>

          </div>
        )}

      </div>
    </div>
  );
}
