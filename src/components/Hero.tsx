import React, { useState } from 'react';
import { brandPalette, contactData } from '../data/ciclaReformedData';
import { QuickDiagnosisForm } from './QuickDiagnosisForm';
import { 
  Building2, 
  Factory, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Award,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeAudienceTab, setActiveAudienceTab] = useState<'prefeitura' | 'empresa' | 'cooperativa'>('prefeitura');

  return (
    <section
      id="inicio"
      className="relative bg-[#311853] text-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Luzes orgânicas da paleta oficial no fundo escuro */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: brandPalette.pink }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: brandPalette.green }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna Esquerda: Headline de 5 segundos + Subtítulo + 3 Cards de Entrada */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline e Posicionamento */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs sm:text-sm font-semibold backdrop-blur-sm">
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ backgroundColor: brandPalette.green }}
              />
              <span className="text-[#9AC31C] font-bold">Consultoria em Economia Circular</span>
              <span className="text-white/40">·</span>
              <span className="text-white/80">Conexões para uma Economia Circular</span>
            </div>

            {/* Headline Principal (5 segundos) */}
            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold tracking-tight leading-[1.14] text-white">
              Transformamos a obrigação legal da PNRS em{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(135deg, #FFFFFF 20%, ${brandPalette.green} 100%)`,
                }}
              >
                oportunidades reais e dignidade.
              </span>
            </h1>

            {/* Subtítulo de Conversão com delimitação clara */}
            <p className="text-base sm:text-lg text-white/85 font-normal leading-relaxed max-w-2xl">
              Conectamos prefeituras, empresas e cooperativas de catadores através de <strong>programas de coleta seletiva</strong>, <strong>investimentos privados em estruturação</strong> e <strong>fortalecimento institucional de organizações de catadores</strong>.
            </p>

            {/* Selo dos 3 Cases Históricos */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-white/60 font-medium">Cases em destaque:</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-lg text-white/90 font-semibold border border-white/10">
                Prefeitura de SP (SP Coopera)
              </span>
              <span className="bg-white/10 px-2.5 py-1 rounded-lg text-white/90 font-semibold border border-white/10">
                Curitiba (EcoCidadão)
              </span>
              <span className="bg-white/10 px-2.5 py-1 rounded-lg text-white/90 font-semibold border border-white/10">
                Coca-Cola Brasil (+300 orgs)
              </span>
            </div>

            {/* 3 CARDS CLICÁVEIS DE SEGMENTAÇÃO DIRETA */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#9AC31C] mb-3 flex items-center gap-2">
                <span>Selecione seu segmento para navegação guiada:</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Card 1: Para Prefeituras */}
                <a
                  href="#para-prefeituras"
                  onClick={() => setActiveAudienceTab('prefeitura')}
                  className="group bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[#41B6C0]/60 rounded-2xl p-4 transition-all transform hover:-translate-y-1 block text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#41B6C0]/20 flex items-center justify-center text-[#41B6C0]">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#41B6C0] bg-[#41B6C0]/10 px-2 py-0.5 rounded-full">
                      Cidades
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#41B6C0] transition-colors">
                    Para Prefeituras
                  </h3>
                  <p className="text-xs text-white/70 mt-1 line-clamp-2 leading-relaxed">
                    Programas de coleta seletiva, redução de custos de aterro e segurança jurídica.
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-bold text-[#41B6C0] group-hover:translate-x-1 transition-transform">
                    <span>Ver soluções</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </a>

                {/* Card 2: Para Empresas */}
                <a
                  href="#para-empresas"
                  onClick={() => setActiveAudienceTab('empresa')}
                  className="group bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[#E5006B]/60 rounded-2xl p-4 transition-all transform hover:-translate-y-1 block text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#E5006B]/20 flex items-center justify-center text-[#E5006B]">
                      <Factory className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5006B] bg-[#E5006B]/10 px-2 py-0.5 rounded-full">
                      Empresas & ESG
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#E5006B] transition-colors">
                    Para Empresas
                  </h3>
                  <p className="text-xs text-white/70 mt-1 line-clamp-2 leading-relaxed">
                    Investimentos privados na estruturação de organizações com dados tangíveis.
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-bold text-[#E5006B] group-hover:translate-x-1 transition-transform">
                    <span>Ver soluções</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </a>

                {/* Card 3: Para Cooperativas */}
                <a
                  href="#para-cooperativas"
                  onClick={() => setActiveAudienceTab('cooperativa')}
                  className="group bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[#9AC31C]/60 rounded-2xl p-4 transition-all transform hover:-translate-y-1 block text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#9AC31C]/20 flex items-center justify-center text-[#9AC31C]">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9AC31C] bg-[#9AC31C]/10 px-2 py-0.5 rounded-full">
                      Operadores
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#9AC31C] transition-colors">
                    Para Cooperativas
                  </h3>
                  <p className="text-xs text-white/70 mt-1 line-clamp-2 leading-relaxed">
                    Fortalecimento institucional, gestão transparente e autonomia no mercado.
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-bold text-[#9AC31C] group-hover:translate-x-1 transition-transform">
                    <span>Ver soluções</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </a>
              </div>
            </div>

            {/* Balizador Rápido de Confiança */}
            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-white/75">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#9AC31C]" />
                Liderança de Daniel Carvalho
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#9AC31C]" />
                Diagnóstico inicial sem custo
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#9AC31C]" />
                Metodologia comprovada em campo
              </span>
            </div>
          </div>

          {/* Coluna Direita: CTA Principal com Formulário Curto Integrado */}
          <div className="lg:col-span-5">
            <div id="formulario-hero">
              <QuickDiagnosisForm 
                initialPublico={activeAudienceTab} 
                sourceContext="hero-section"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
