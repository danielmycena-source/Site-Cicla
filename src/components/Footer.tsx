import React from 'react';
import { CiclaLogo } from './CiclaLogo';
import { contactData, brandPalette } from '../data/ciclaReformedData';
import { MessageCircle, Mail, Phone, Heart, Sparkles, Building2, Factory, Users, Linkedin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#220F3B] text-white/80 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Coluna 1: Marca, Posicionamento e Taglines */}
          <div className="md:col-span-4 space-y-4">
            <a href="#inicio" className="inline-block p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9AC31C] rounded-lg">
              <CiclaLogo variant="on-dark" height={38} />
            </a>
            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              Consultoria em economia circular especializada em programas de coleta seletiva municipal, investimentos privados e fortalecimento institucional de organizações de catadores.
            </p>
            <div className="pt-1">
              <span className="text-[11px] font-extrabold text-[#9AC31C] tracking-wide uppercase block">
                “Conexões para uma economia circular”
              </span>
              <span className="text-[11px] text-white/50 italic mt-0.5 block">
                Resíduo que vira dignidade · Articular, estruturar, transformar
              </span>
            </div>

            {/* Conexões no LinkedIn */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href={contactData.linkedinCompanyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#0A66C2] text-white font-medium text-xs transition-colors border border-white/15"
                title="Página da Cicla Brasil no LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 fill-current" />
                <span>Cicla no LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={contactData.linkedinDanielUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#0A66C2] text-white font-medium text-xs transition-colors border border-white/15"
                title="Perfil de Daniel Carvalho no LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 fill-current" />
                <span>Daniel Carvalho</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Soluções por Segmento */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Soluções por Público
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#para-prefeituras"
                  className="hover:text-[#41B6C0] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41B6C0]" />
                  <span>Para Prefeituras (Coleta Seletiva)</span>
                </a>
              </li>
              <li>
                <a
                  href="#para-empresas"
                  className="hover:text-[#E5006B] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5006B]" />
                  <span>Para Empresas (Investimento Social)</span>
                </a>
              </li>
              <li>
                <a
                  href="#para-cooperativas"
                  className="hover:text-[#9AC31C] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9AC31C]" />
                  <span>Para Cooperativas de Catadores</span>
                </a>
              </li>
              <li>
                <a
                  href="#experiencias"
                  className="hover:text-white transition-colors"
                >
                  Cases de Sucesso (SP, Curitiba, Coca-Cola)
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="hover:text-white transition-colors"
                >
                  Sobre Daniel Carvalho & Cicla
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Cases em Destaque */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Cases Reais
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li className="hover:text-white transition-colors">
                <a href="#experiencias">SP Coopera (São Paulo)</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#experiencias">EcoCidadão (Curitiba)</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#experiencias">Coca-Cola (+300 orgs)</a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato Direto */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contato Direto
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Fale diretamente com nosso fundador e consultor técnico:
            </p>
            <div className="space-y-2 pt-1 text-xs sm:text-sm">
              <a
                href={contactData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#9AC31C] hover:underline font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{contactData.phoneDisplay} (WhatsApp)</span>
              </a>
              <a
                href={contactData.emailUrl}
                className="flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Mail className="w-4 h-4 text-white/60" />
                <span>{contactData.email}</span>
              </a>
              <a
                href={contactData.linkedinDanielUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>Daniel Carvalho no LinkedIn</span>
              </a>
              <a
                href={contactData.linkedinCompanyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>Cicla Brasil no LinkedIn</span>
              </a>
              <p className="text-xs text-white/50 pt-1">
                {contactData.address}
              </p>
            </div>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Cicla Consultoria em Economia Circular. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#inicio" className="hover:text-white transition-colors">Voltar ao topo ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
