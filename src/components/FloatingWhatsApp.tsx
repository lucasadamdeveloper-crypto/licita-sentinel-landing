"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const [closedBalloon, setClosedBalloon] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Balão de Chamada para Ação */}
      {!closedBalloon && (
        <div className="relative bg-slate-900 border border-slate-700 text-slate-200 text-xs py-2 px-3.5 rounded-xl shadow-xl flex items-center gap-2 max-w-[260px]">
          <div>
            <span className="font-bold text-emerald-400 block text-xs">
              Atendimento Online
            </span>
            <span className="text-slate-300">Tire dúvidas ou solicite seu teste no WhatsApp!</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setClosedBalloon(true);
            }}
            className="text-slate-400 hover:text-white p-0.5 rounded-full"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botão Principal Flutuante */}
      <a
        href={getWhatsAppLink("GERAL")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Radar wave effect */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
}
