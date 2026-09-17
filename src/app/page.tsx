"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import BeginnerGuideSection from "@/components/BeginnerGuideSection";
import InteractiveDemoSection from "@/components/InteractiveDemoSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function LandingPage() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("FREE");

  const handleOpenLeadModal = (plan?: string) => {
    setSelectedPlan(plan || "FREE");
    setLeadModalOpen(true);
  };

  const handleCloseLeadModal = () => {
    setLeadModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050A14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Barra de Navegação Superior */}
      <Navbar onOpenLeadModal={handleOpenLeadModal} />

      {/* 2. Hero Section com Radar e Visualização de Edital */}
      <main className="flex-1">
        <HeroSection onOpenLeadModal={handleOpenLeadModal} />

        {/* 3. Portais Homologados e Prova Social */}
        <SocialProofSection />

        {/* 4. Comparativo de Oportunidades no seu Ramo & Dores de Licitação */}
        <ProblemSolutionSection onOpenLeadModal={handleOpenLeadModal} />

        {/* 5. Simulação Interativa (Demonstração ao Vivo do Software) */}
        <InteractiveDemoSection onOpenLeadModal={handleOpenLeadModal} />

        {/* 6. Grade de Recursos e Inteligência Artificial */}
        <FeaturesSection />

        {/* 7. Guia para Iniciantes: Qualquer um pode participar com o Sentinela */}
        <BeginnerGuideSection onOpenLeadModal={handleOpenLeadModal} />

        {/* 6. Tabela Oficial de Planos & Preços (PRO e BUSINESS) */}
        <PricingSection onOpenLeadModal={handleOpenLeadModal} />

        {/* 7. Depoimentos e Casos de Sucesso */}
        <TestimonialsSection />

        {/* 8. FAQ - Perguntas Frequentes */}
        <FaqSection />

        {/* 9. Chamada Final para Ação (CTA Banner) */}
        <CtaSection onOpenLeadModal={handleOpenLeadModal} />
      </main>

      {/* 10. Rodapé Completo */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
