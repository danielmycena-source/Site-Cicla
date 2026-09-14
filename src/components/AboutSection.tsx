import React from 'react';
import { contactData, brandPalette } from '../data/ciclaData';
import { CiclaLogo } from './CiclaLogo';
import { MessageCircle, Mail, Phone, ExternalLink, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white text-[#575756] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Esquerda: Marca e Cartão Institucional */}
          <div className="lg:col-span-5">
            <div className="bg-[#311853] text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-xl">
              {/* Círculo de luz de fundo com a cor verde da marca */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-20 blur-2xl pointer-events-none"
                style={{ backgroundColor: brandPalette.green }}
              />

              {/* Logo Oficial da Cicla em destaque */}
              <div className="mb-8">
                <CiclaLogo variant="on-dark" symbolSize={48} />
              </div>

              {/* Informações confirmadas */}
              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#9AC31C] font-semibold block mb-1">
                    Apresentação
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Daniel Carvalho
                  </h3>
                  <p className="text-sm text-white/70 mt-1">
                    Cicla · Economia Circular & Reciclagem
                  </p>
                </div>

                <div className="w-full h-px bg-white/15 my-4" />

                {/* Slogan do Manual (Página 9) */}
                <blockquote className="text-sm italic text-white/85 pl-3 border-l-2 border-[#9AC31C] py-1">
                  “Não transformamos resíduos, transformamos o mundo!”
                </blockquote>
              </div>

              {/* Botões rápidos de contato direto */}
              <div className="space-y-3 pt-2">
                <a
                  href={contactData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#9AC31C] hover:bg-[#86aa18] text-[#311853] font-bold text-sm py-3 px-5 rounded-xl transition-all shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Conversar pelo WhatsApp</span>
                </a>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={contactData.emailUrl}
                    className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium py-2.5 px-3 rounded-lg transition-colors border border-white/10"
                    title="Enviar e-mail"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#41B6C0]" />
                    <span>E-mail</span>
                  </a>
                  <a
                    href={contactData.phoneUrl}
                    className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium py-2.5 px-3 rounded-lg transition-colors border border-white/10"
                    title="Ligar para telefone"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#9AC31C]" />
                    <span>Telefone</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Declaração em Primeira Pessoa e Posicionamento */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#311853]/5 border border-[#311853]/10 text-[#311853] text-xs font-semibold uppercase tracking-wider">
              Atuação & Propósito
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#311853] tracking-tight leading-tight">
              Construindo pontes técnicas e humanas na cadeia da reciclagem
            </h2>

            {/* Citação textual confirmada no briefing */}
            <div className="p-5 rounded-2xl bg-[#FFF5F8] border border-[#F9C2D9]/80">
              <p className="text-base sm:text-lg text-[#311853] font-semibold leading-relaxed">
                “Atuo na construção de projetos de economia circular, no desenvolvimento de sistemas de coleta seletiva municipal e no apoio à estruturação de organizações de catadores.”
              </p>
              <span className="text-xs font-bold text-[#E5006B] block mt-2 tracking-wide uppercase">
                — Daniel Carvalho
              </span>
            </div>

            <p className="text-base text-[#575756] leading-relaxed">
              Minha experiência está fundamentada na conexão prática entre os requisitos regulatórios e operacionais de grandes empresas, as particularidades da gestão pública municipal e a realidade socioeconômica dos catadores de materiais recicláveis.
            </p>

            <p className="text-base text-[#575756] leading-relaxed">
              Acredito que iniciativas de sustentabilidade só geram valor perene quando são técnica e financeiramente viáveis, garantindo que os investimentos em logística reversa e economia circular cheguem à base produtiva com respeito, governança e transparência.
            </p>

            {/* Três princípios de trabalho */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="border-l-2 border-[#9AC31C] pl-3">
                <h4 className="text-sm font-bold text-[#311853]">Sem Atalhos</h4>
                <p className="text-xs text-[#575756] mt-1">
                  Projetos desenhados a partir da realidade de campo e da viabilidade real.
                </p>
              </div>
              <div className="border-l-2 border-[#41B6C0] pl-3">
                <h4 className="text-sm font-bold text-[#311853]">Conexão Real</h4>
                <p className="text-xs text-[#575756] mt-1">
                  Diálogo aberto e contínuo entre empresas, prefeituras e cooperativas.
                </p>
              </div>
              <div className="border-l-2 border-[#E5006B] pl-3">
                <h4 className="text-sm font-bold text-[#311853]">Dignidade & Gestão</h4>
                <p className="text-xs text-[#575756] mt-1">
                  Fortalecimento de quem realmente tria e recupera os recicláveis no país.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
