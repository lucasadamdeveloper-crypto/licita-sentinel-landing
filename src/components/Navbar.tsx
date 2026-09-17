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
          ? "bg-[#0B1120]/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Oficial */}
          <div className="flex items-center gap-4">
            <Logo variant="horizontal" size="md" />
          </div>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#demonstracao" className="hover:text-white transition-colors">
              Como Funciona
            </a>
            <a href="#planos" className="hover:text-white transition-colors">
              Planos
            </a>
            <a href="#depoimentos" className="hover:text-white transition-colors">
              Casos de Sucesso
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* CTAs Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getLoginLink()}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all flex items-center gap-1.5"
            >
              <LogIn className="w-4 h-4 text-slate-400" />
              <span>Entrar</span>
            </a>

            <a
              href={getWhatsAppLink("FREE")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Testar no WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Botão Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Gaveta Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1120]/98 backdrop-blur-2xl border-b border-slate-800 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
            <a
              href="#demonstracao"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-white"
            >
              Como Funciona
            </a>
            <a
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-white"
            >
              Planos & Preços
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-white"
            >
              Casos de Sucesso
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-white"
            >
              Dúvidas Frequentes
            </a>
          </nav>

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <a
              href={getLoginLink()}
              className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-center text-xs font-semibold text-slate-200 flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4 text-slate-400" />
              <span>Acessar Conta</span>
            </a>

            <a
              href={getWhatsAppLink("FREE")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 text-center text-xs font-bold shadow-md flex items-center justify-center gap-2"
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
