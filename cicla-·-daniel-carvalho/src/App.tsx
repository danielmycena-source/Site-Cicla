import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FrentesSection } from './components/FrentesSection';
import { AboutSection } from './components/AboutSection';
import { ExperienciasSection } from './components/ExperienciasSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#575756] selection:bg-[#9AC31C] selection:text-[#311853]">
      {/* Navegação Superior Fixa */}
      <Navbar />

      <main className="flex-grow">
        {/* A. Abertura (Hero) */}
        <Hero />

        {/* B. As Três Frentes de Atuação */}
        <FrentesSection />

        {/* C. Apresentação Pessoal: Daniel Carvalho */}
        <AboutSection />

        {/* D. Experiências Documentadas */}
        <ExperienciasSection />

        {/* E. Contato Direto */}
        <ContactSection />
      </main>

      {/* Rodapé com Identidade e Créditos */}
      <Footer />
    </div>
  );
}
