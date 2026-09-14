import React from 'react';
import { contactData, brandPalette } from '../data/ciclaData';
import { MessageCircle, ArrowDown, Building2, Landmark, Users, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative bg-[#311853] text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Elementos visuais de fundo inspirados no Manual de Identidade Visual (Página 1 e 10) */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: brandPalette.pink }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ backgroundColor: brandPalette.green }}
        aria-hidden="true"
      />
      
      {/* Detalhe de fita orgânica sutil em SVG (lembrando as curvas do manual) */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto opacity-10 pointer-events-none hidden lg:block"
        viewBox="0 0 300 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M300 50 C200 100 150 250 220 350 C280 440 250 550 150 600"
          stroke="#9AC31C"
          strokeWidth="48"
          strokeLinecap="round"
        />
        <path
          d="M260 0 C160 80 120 200 180 300 C240 400 200 500 100 560"
          stroke="#E5006B"
          strokeWidth="32"
          strokeLinecap="round"
        />
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Identificação Confirmada */}
          <div
            id="hero-badge"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: brandPalette.green }}
            />
            <span className="font-semibold text-white">Daniel Carvalho</span>
            <span className="text-white/40">·</span>
            <span className="text-white/90">Cicla</span>
          </div>

          {/* Título Principal */}
          <h1
            id="hero-headline"
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-white"
          >
            Conexões para uma <br className="hidden sm:inline" />
            <span
              className="relative inline-block text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(135deg, #FFFFFF 30%, ${brandPalette.green} 100%)`,
              }}
            >
              economia circular.
            </span>
          </h1>

          {/* Texto de Apoio */}
          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-white/85 font-normal leading-relaxed mb-8 max-w-2xl"
          >
            Projetos que aproximam empresas, municípios e organizações de catadores
            para fortalecer a cadeia da reciclagem.
          </p>

          {/* Ações (WhatsApp Primário + Experiências Secundário) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <a
              id="hero-cta-whatsapp"
              href={contactData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#9AC31C] hover:bg-[#86aa18] text-[#311853] font-bold text-base px-7 py-4 rounded-full shadow-lg shadow-[#9AC31C]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Converse comigo</span>
            </a>

            <a
              id="hero-cta-experiences"
              href="#experiencias"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-base px-6 py-4 rounded-full backdrop-blur-sm transition-all text-center"
            >
              <span>Ver experiências documentadas</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Três Polos de Conexão (Empresas, Municípios, Catadores) */}
        <div
          id="hero-pillars-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/15"
        >
          {/* Polo 1: Empresas */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-2.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                style={{ backgroundColor: brandPalette.pink }}
              >
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-white text-base">Empresas</span>
            </div>
            <p className="text-sm text-white/75 leading-relaxed">
              Viabilização de projetos de sustentabilidade, investimentos circulares e conformidade de logística reversa.
            </p>
          </div>

          {/* Polo 2: Municípios */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-2.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                style={{ backgroundColor: brandPalette.cyan }}
              >
                <Landmark className="w-5 h-5" />
              </div>
              <span className="font-bold text-white text-base">Municípios</span>
            </div>
            <p className="text-sm text-white/75 leading-relaxed">
              Desenho técnico e reestruturação de sistemas municipais de coleta seletiva adaptados à realidade local.
            </p>
          </div>

          {/* Polo 3: Catadores */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-2.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[#311853]"
                style={{ backgroundColor: brandPalette.green }}
              >
                <Users className="w-5 h-5" />
              </div>
              <span className="font-bold text-white text-base">Organizações de Catadores</span>
            </div>
            <p className="text-sm text-white/75 leading-relaxed">
              Estruturação gerencial, infraestrutura de triagem, dignidade laboral e acesso direto ao mercado.
            </p>
          </div>
        </div>

        {/* Lema da Marca do Manual (Página 9) */}
        <div className="mt-8 text-center sm:text-left">
          <p className="text-xs sm:text-sm tracking-wide text-white/60 font-medium">
            <span className="text-[#9AC31C] font-semibold">“Não transformamos resíduos, </span>
            <span className="text-white font-bold uppercase tracking-wider">transformamos o mundo!”</span>
            <span className="text-white/40 ml-2">— Manual de Identidade Visual Cicla</span>
          </p>
        </div>
      </div>
    </section>
  );
};
