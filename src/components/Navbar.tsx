"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, ArrowRight, ShieldCheck, Sparkles, LogIn } from "lucide-react";
import { getWhatsAppLink, getLoginLink } from "@/lib/constants";

interface NavbarProps {
  onOpenLeadModal?: (plan?: string) => void;
}

export default function Navbar({ onOpenLeadModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050A14]/90 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Oficial */}
          <div className="flex items-center gap-4">
            <Logo variant="horizontal" size="md" />
            
            {/* Status do Radar em tempo real */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>RADAR PNCP ATIVO</span>
            </div>
          </div>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300 tracking-wide uppercase font-mono">
            <a href="#recursos" className="hover:text-cyan-400 transition-colors">
              Recursos
            </a>
            <a href="#como-comecar" className="hover:text-cyan-400 transition-colors text-cyan-300 flex items-center gap-1">
              <span>Como Começar</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </a>
            <a href="#demonstracao" className="hover:text-cyan-400 transition-colors">
              Como Funciona
            </a>
            <a href="#planos" className="hover:text-cyan-400 transition-colors">
              Planos
            </a>
            <a href="#depoimentos" className="hover:text-cyan-400 transition-colors">
              Casos de Sucesso
            </a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTAs Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getLoginLink()}
              className="px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5 text-slate-400" />
              <span>Entrar</span>
            </a>

            <a
              href={getWhatsAppLink("FREE")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-mono font-bold text-xs shadow-[0_0_20px_rgba(0,229,255,0.35)] hover:shadow-[0_0_30px_rgba(0,229,255,0.55)] transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-950" />
              <span>Testar no WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-950 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Botão Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Gaveta Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070D1B]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-mono text-slate-200 uppercase">
            <a
              href="#recursos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60 hover:text-cyan-400"
            >
              Recursos
            </a>
            <a
              href="#como-comecar"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60 text-cyan-300 flex items-center justify-between"
            >
              <span>Como Começar do Zero</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">Novo</span>
            </a>
            <a
              href="#demonstracao"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60 hover:text-cyan-400"
            >
              Como Funciona
            </a>
            <a
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60 hover:text-cyan-400"
            >
              Planos & Preços
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60 hover:text-cyan-400"
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60 hover:text-cyan-400"
            >
              FAQ
            </a>
          </nav>

          <div className="pt-4 border-t border-slate-800/80 space-y-2">
            <a
              href={getLoginLink()}
              className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-900/80 text-center text-xs font-mono font-bold text-slate-200 flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4 text-slate-400" />
              <span>Acessar Conta</span>
            </a>

            <a
              href={getWhatsAppLink("FREE")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-black text-center text-xs font-mono font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Testar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
