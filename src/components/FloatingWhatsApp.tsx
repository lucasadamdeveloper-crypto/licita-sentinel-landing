"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
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
