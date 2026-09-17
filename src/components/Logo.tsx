"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "stacked" | "horizontal" | "icon" | "text";
  size?: "sm" | "md" | "lg" | "xl";
  showSubtitle?: boolean;
  subtitleText?: string;
  href?: string;
  className?: string;
}

export default function Logo({
  variant = "horizontal",
  size = "md",
  showSubtitle = true,
  subtitleText = "A Rede Social das Licitações",
  href,
  className = "",
}: LogoProps) {
  const iconDimensions = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-14 h-14",
    xl: "w-24 h-24 sm:w-28 sm:h-28",
  }[size];

  const titleSizes = {
    sm: "text-xs tracking-wider",
    md: "text-sm tracking-wide",
    lg: "text-xl sm:text-2xl tracking-tight",
    xl: "text-2xl sm:text-3xl tracking-tight",
  }[size];

  const subtitleSizes = {
    sm: "text-[9px]",
    md: "text-[10px]",
    lg: "text-xs",
    xl: "text-xs sm:text-sm",
  }[size];

  const content = (
    <div
      className={`inline-flex ${
        variant === "stacked"
          ? "flex-col items-center text-center gap-3"
          : variant === "icon"
          ? "items-center justify-center"
          : "items-center gap-3"
      } ${className}`}
    >
      {/* 1. EMBLEMA OFICIAL */}
      {variant !== "text" && (
        <div
          className={`relative ${iconDimensions} rounded-xl overflow-hidden flex items-center justify-center group shrink-0 transition-transform duration-300 hover:scale-105`}
        >
          <img
            src="/logo-icon.png"
            alt="Licita Sentinel Emblema Oficial"
            className="w-full h-full object-cover relative z-10"
            loading="eager"
          />

          <div className="absolute -top-1 -right-1 flex h-2 w-2 z-20">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
        </div>
      )}

      {/* 2. TIPOGRAFIA OFICIAL: LICITA SENTINEL */}
      {variant !== "icon" && (
        <div className={variant === "stacked" ? "space-y-1" : "space-y-0.5 text-left"}>
          <div className={`font-extrabold tracking-tight text-white leading-none ${titleSizes} flex items-center ${variant === "stacked" ? "justify-center" : "justify-start"} gap-1.5`}>
            <span className="text-white">LICITA</span>
            <span className="text-blue-400">
              SENTINEL
            </span>
          </div>

          {showSubtitle && (
            <p className={`text-slate-400 font-normal tracking-tight ${subtitleSizes} leading-tight`}>
              {subtitleText}
            </p>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block hover:opacity-95 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}
