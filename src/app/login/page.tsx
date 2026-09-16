"use client";

import React, { useState } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { ArrowLeft, Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("Conectando ao banco de dados e autenticando...");
    // Redireciona para o app ou avisa
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050A14] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md p-8 rounded-3xl bg-[#091122] border border-cyan-500/30 shadow-[0_0_50px_rgba(0,229,255,0.2)] relative z-10 space-y-6">
        <div className="text-center space-y-2">
          <Logo variant="horizontal" size="md" />
          <h2 className="text-xl font-bold text-white pt-2">Acesse sua Conta</h2>
          <p className="text-xs text-slate-400">
            Ambiente seguro com criptografia de ponta a ponta
          </p>
        </div>

        {msg && (
          <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs text-center font-mono">
            {msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
          <div>
            <label className="block text-slate-300 font-mono mb-1">E-mail de Acesso</label>
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

          <div>
            <label className="block text-slate-300 font-mono mb-1">Senha</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#060C18] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-mono font-bold text-xs shadow-[0_0_20px_rgba(0,229,255,0.35)] flex items-center justify-center gap-2 hover:opacity-95 transition-all"
          >
            <span>ENTRAR NO SISTEMA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao início</span>
          </Link>

          <Link href="/#planos" className="text-cyan-400 hover:underline">
            Criar conta grátis
          </Link>
        </div>
      </div>
    </div>
  );
}
