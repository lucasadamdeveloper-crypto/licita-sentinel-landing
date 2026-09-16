"use client";

import React from "react";
import Logo from "./Logo";
import { ShieldCheck, Mail, Phone, ExternalLink, MessageCircle } from "lucide-react";
import { getLoginLink, getWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#03060C] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Coluna da Marca */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="horizontal" size="md" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              O Sentinela de inteligência artificial de alta performance para empresas vencerem licitações públicas com conformidade estrita à Lei 14.133/2021.
            </p>

            {/* WhatsApp e Status */}
            <div className="flex flex-col gap-2 pt-2">
              <a 
                href={getWhatsAppLink("GERAL")} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Comercial: {WHATSAPP_DISPLAY}</span>
              </a>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>SISTEMAS OPERACIONAIS • PNCP ONLINE</span>
              </div>
            </div>
          </div>

          {/* Coluna Plataforma */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Plataforma
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li><a href="#recursos" className="hover:text-cyan-400 transition-colors">Radar Multi-Fontes</a></li>
              <li><a href="#recursos" className="hover:text-cyan-400 transition-colors">Auditoria de Edital por IA</a></li>
              <li><a href="#recursos" className="hover:text-cyan-400 transition-colors">Checklist Lei 14.133</a></li>
              <li><a href="#recursos" className="hover:text-cyan-400 transition-colors">Minutas de Impugnação</a></li>
              <li><a href="#recursos" className="hover:text-cyan-400 transition-colors">Funil Comercial Kanban</a></li>
            </ul>
          </div>

          {/* Coluna Planos & Acesso */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Planos & Acesso
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li><a href="#planos" className="hover:text-cyan-400 transition-colors">Plano Pro (R$ 119,90)</a></li>
              <li><a href="#planos" className="hover:text-amber-400 transition-colors">Plano Business (R$ 189,90)</a></li>
              <li><a href={getLoginLink()} className="hover:text-cyan-400 transition-colors flex items-center gap-1">Entrar no Software <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href={getWhatsAppLink("FREE")} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">Testar no WhatsApp <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Coluna Conformidade & Jurídico */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Segurança & Termos
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li><span className="text-slate-500">Lei 14.133/2021 Compliant</span></li>
              <li><span className="text-slate-500">LGPD & Privacidade</span></li>
              <li><span className="text-slate-500">Termos de Uso</span></li>
              <li><span className="text-slate-500">Criptografia SSL 256-bit</span></li>
            </ul>
          </div>

        </div>

        {/* Rodapé inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Licita Sentinel. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span>Tecnologia de ponta em Inteligência Artificial para Licitações</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
