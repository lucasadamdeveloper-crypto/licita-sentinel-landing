"use client";

import React from "react";
import { Shield, Lock, FileCheck, Landmark, Globe2, Award } from "lucide-react";

export default function SocialProofSection() {
  const portals = [
    { name: "PNCP Oficial", desc: "Portal Nacional de Contratações", badge: "Federal" },
    { name: "Compras.gov.br", desc: "Antigo Comprasnet", badge: "Federal" },
    { name: "BLL Compras", desc: "Bolsa de Licitações e Leilões", badge: "Nacional" },
    { name: "Compras Paraná", desc: "Portal Oficial do Estado PR", badge: "Estadual" },
    { name: "BEC / SP", desc: "Bolsa Eletrônica de Compras SP", badge: "Estadual" },
    { name: "Licitações-e", desc: "Plataforma Banco do Brasil", badge: "Bancário" },
  ];

  return (
    <section className="py-12 border-y border-slate-800/80 bg-[#070D1C]/60 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-2 mb-8">
          <p className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
            RASTREAMENTO MULTI-FONTES INTEGRADO AOS MAIORES ECOSSISTEMAS PÚBLICOS
          </p>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            Conexão direta com fontes oficiais sem intermediários lentos
          </h2>
        </div>

        {/* Grade de Portais */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {portals.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#091122] border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-2">
                <Landmark className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  {item.badge}
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h4>
                <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Selos de Garantia e Conformidade Jurídica */}
        <div className="mt-10 pt-8 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Estruturado segundo a <strong>Nova Lei 14.133/2021</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-cyan-400" />
            <span>Criptografia de Dados de Ponta a Ponta</span>
          </div>

          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Conformidade Estrita com a <strong>LGPD</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
}
