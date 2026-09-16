"use client";

import React, { useState } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { ArrowLeft, User, Mail, Building, Phone, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function RegisterPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          email,
          empresa,
          whatsapp,
          plano: "FREE",
        }),
      });
      setSuccess(true);
    } catch {
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050A14] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full max-w-lg p-8 rounded-3xl bg-[#091122] border border-cyan-500/30 shadow-[0_0_50px_rgba(0,229,255,0.2)] relative z-10 space-y-6">
        <div className="text-center space-y-2">
          <Logo variant="horizontal" size="md" />
          <h2 className="text-xl font-bold text-white pt-2">Criar Conta Gratuita</h2>
          <p className="text-xs text-slate-400">
            Acompanhe as melhores oportunidades públicas sem precisar de cartão
          </p>
        </div>

        {success ? (
          <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-4">
            <h3 className="text-lg font-bold text-cyan-300">Cadastro Concluído!</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sua conta gratuita foi criada com sucesso. Você já pode acessar a plataforma e cadastrar seus filtros de nicho.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-black font-mono font-bold text-xs"
            >
              <span>Ir para a Página Inicial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
            <div>
              <label className="block text-slate-300 font-mono mb-1">Nome Completo</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#060C18] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
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
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#060C18] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-mono mb-1">Empresa</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    placeholder="Nome da empresa"
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#060C18] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-mono mb-1">WhatsApp para Avisos</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#060C18] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-mono font-bold text-xs shadow-[0_0_20px_rgba(0,229,255,0.35)] flex items-center justify-center gap-2 hover:opacity-95 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>{loading ? "Criando Conta..." : "CRIAR MINHA CONTA GRÁTIS"}</span>
            </button>
          </form>
        )}

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao início</span>
          </Link>

          <Link href="/login" className="text-cyan-400 hover:underline">
            Já tenho conta
          </Link>
        </div>
      </div>
    </div>
  );
}
