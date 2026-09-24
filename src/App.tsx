import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactMetricsSection } from './components/ImpactMetricsSection';
import { ParaPrefeiturasSection } from './components/ParaPrefeiturasSection';
import { ParaEmpresasSection } from './components/ParaEmpresasSection';
import { ParaCooperativasSection } from './components/ParaCooperativasSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ExperienciasSection } from './components/ExperienciasSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#575756] selection:bg-[#9AC31C] selection:text-[#311853]">
      {/* Navegação Superior Fixa com segmentação e CTA */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Home: Headline Forte + 3 Cards de Entrada + Formulário Curto Integrado */}
        <Hero />

        {/* 1.1 Números de Impacto e Prova Social Imediata */}
        <ImpactMetricsSection />

        {/* 2. Para Prefeituras: Diagnóstico Territorial, Coleta Seletiva, PNRS, Estudo de Caso */}
        <ParaPrefeiturasSection />

        {/* 3. Para Empresas: Logística Reversa, Parcerias com Cooperativas, Relatório de Impacto */}
        <ParaEmpresasSection />

        {/* 4. Para Cooperativas: Gestão Administrativa, Acesso Direto ao Mercado, Capacitação */}
        <ParaCooperativasSection />

        {/* Provas Sociais & Depoimentos Reais / Segmentados */}
        <TestimonialsSection />

        {/* Estudos de Caso & Experiências Documentadas */}
        <ExperienciasSection />

        {/* 5. Sobre: Daniel Carvalho, História da Cicla, Missão, Visão e Valores */}
        <AboutSection />

        {/* 6. Contato: Formulário Detalhado + WhatsApp + E-mail + Mapa/Sede */}
        <ContactSection />
      </main>

      {/* Rodapé com Identidade, Navegação e Créditos */}
      <Footer />

      {/* Botão de WhatsApp Flutuante com Pulso e Tooltip */}
      <FloatingWhatsAppButton />
    </div>
  );
}
