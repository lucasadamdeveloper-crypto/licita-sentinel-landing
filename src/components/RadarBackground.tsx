"use client";

import React from "react";

interface RadarBackgroundProps {
  density?: number;
  className?: string;
  sizeClassName?: string;
}

export default function RadarBackground({
  density = 0.25,
  className = "",
  sizeClassName = "w-[210px] h-[210px] sm:w-[260px] sm:h-[260px]",
}: RadarBackgroundProps) {
  return (
    <div
      className={`pointer-events-none select-none z-0 flex items-center justify-center ${
        className || "relative"
      }`}
      style={{ opacity: density }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes radarSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes blipFade {
          0%, 100% {
            opacity: 0.15;
            transform: scale(0.85);
          }
          50% {
            opacity: 0.85;
            transform: scale(1.15);
          }
        }
      `}</style>

      {/* Halo de luz suave proporcional ao radar */}
      <div className="absolute inset-[-20%] rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

      {/* Disco Principal do Radar */}
      <div className={`relative ${sizeClassName} rounded-full flex items-center justify-center shrink-0`}>
        
        {/* Feixe rotativo */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            animation: "radarSpin 5s linear infinite",
            background:
              "conic-gradient(from 0deg at 50% 50%, rgba(0, 229, 255, 0.5) 0deg, rgba(0, 229, 255, 0.18) 25deg, rgba(0, 229, 255, 0.02) 50deg, transparent 75deg, transparent 360deg)",
          }}
        >
          <div className="absolute top-1/2 left-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/80 to-cyan-100 shadow-[0_0_8px_#00e5ff] origin-left -translate-y-1/2" />
        </div>

        {/* Anéis Concêntricos */}
        <div className="absolute inset-0 rounded-full border border-cyan-400/50 shadow-[0_0_15px_rgba(0,229,255,0.2)]" />
        <div className="absolute inset-[6px] rounded-full border border-cyan-500/30 border-dashed" />
        <div className="absolute inset-[18%] rounded-full border border-cyan-400/40" />
        <div className="absolute inset-[36%] rounded-full border border-cyan-500/30 border-dashed" />
        <div className="absolute inset-[54%] rounded-full border border-cyan-400/45" />
        <div className="absolute inset-[72%] rounded-full border border-cyan-400/50" />

        {/* Alvos Luminosos (Blips) */}
        <div
          className="absolute top-[26%] right-[22%] flex items-center justify-center"
          style={{ animation: "blipFade 3s ease-in-out infinite" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300 shadow-[0_0_6px_#00e5ff]"></span>
          </span>
        </div>

        <div
          className="absolute bottom-[24%] left-[24%] flex items-center justify-center"
          style={{ animation: "blipFade 2.4s ease-in-out infinite 0.8s" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_6px_#10b981]"></span>
          </span>
        </div>

        <div
          className="absolute bottom-[30%] right-[32%] flex items-center justify-center"
          style={{ animation: "blipFade 2.8s ease-in-out infinite 1.4s" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-300 shadow-[0_0_4px_#00e5ff]"></span>
          </span>
        </div>

        {/* Núcleo Central do Radar */}
        <div className="relative w-4 h-4 rounded-full bg-cyan-950/80 border border-cyan-400/70 shadow-[0_0_10px_#00e5ff] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping opacity-75" />
          <div className="w-1 h-1 rounded-full bg-white absolute" />
        </div>
      </div>
    </div>
  );
}
