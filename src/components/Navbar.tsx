import React, { useState, useEffect } from 'react';
import { CiclaLogo } from './CiclaLogo';
import { contactData, brandPalette } from '../data/ciclaReformedData';
import { MessageCircle, Menu, X, Building2, Factory, Users, Sparkles, ChevronDown, Linkedin, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Para Prefeituras', href: '#para-prefeituras', highlight: 'cyan' },
    { label: 'Para Empresas', href: '#para-empresas', highlight: 'pink' },
    { label: 'Para Cooperativas', href: '#para-cooperativas', highlight: 'green' },
    { label: 'Histórico & Casos', href: '#experiencias' },
    { label: 'Sobre Daniel', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#311853]/95 backdrop-blur-md shadow-lg shadow-[#311853]/25 py-3'
          : 'bg-[#311853] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo Oficial Cicla */}
        <a
          href="#inicio"
          id="nav-logo-link"
          className="flex items-center gap-2 group transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9AC31C] rounded-lg p-1"
          aria-label="Cicla - Página inicial"
        >
          <CiclaLogo variant="on-dark" height={36} />
          <span className="sr-only">Cicla</span>
        </a>

        {/* Links Desktop Segmentados com Hierarquia Visual */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const isHighlighted = link.highlight;
            const accentColor = 
              link.highlight === 'cyan' ? '#41B6C0' : 
              link.highlight === 'pink' ? '#E5006B' : 
              link.highlight === 'green' ? '#9AC31C' : undefined;

            return (
              <a
                key={link.href}
                id={`nav-link-${link.href.replace('#', '')}`}
                href={link.href}
                className="text-white/85 hover:text-white font-semibold text-sm transition-colors py-1 relative group flex items-center gap-1.5"
              >
                {isHighlighted && (
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                )}
                <span>{link.label}</span>
                <span 
                  className="absolute bottom-0 left-0 w-0 h-[2px] transition-all group-hover:w-full"
                  style={{ backgroundColor: accentColor || '#9AC31C' }}
                />
              </a>
            );
          })}
        </nav>

        {/* Botão de Alta Conversão na Barra Superior & Conexão LinkedIn */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            id="nav-linkedin-link"
            href={contactData.linkedinCompanyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            title="Página da Cicla no LinkedIn"
            aria-label="Página da Cicla no LinkedIn"
          >
            <Linkedin className="w-4 h-4 fill-current" />
          </a>

          <a
            id="nav-cta-diagnostico"
            href="#formulario-hero"
            className="inline-flex items-center gap-2 bg-[#9AC31C] hover:bg-[#86aa18] text-[#311853] font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-[#311853]" />
            <span>Diagnóstico Gratuito</span>
          </a>
        </div>

        {/* Botão Mobile */}
        <button
          id="mobile-menu-toggle-btn"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-[#9AC31C] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9AC31C]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Gaveta Mobile */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#24113E] border-t border-white/10 px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col gap-2" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-[#9AC31C] text-sm font-semibold py-2.5 px-3 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-white/10">
                    Segmento
                  </span>
                )}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#formulario-hero"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#9AC31C] text-[#311853] font-bold text-sm py-3 rounded-xl shadow text-center"
              >
                <Sparkles className="w-4 h-4" />
                <span>Solicitar Diagnóstico Gratuito</span>
              </a>

              <a
                href={contactData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white/10 text-white font-semibold text-xs py-2.5 rounded-xl border border-white/10"
              >
                <MessageCircle className="w-4 h-4 text-[#9AC31C]" />
                <span>WhatsApp: {contactData.phoneDisplay}</span>
              </a>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={contactData.linkedinDanielUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 text-white font-medium text-xs py-2 px-2 rounded-xl border border-[#0A66C2]/40"
                >
                  <Linkedin className="w-3.5 h-3.5 fill-current" />
                  <span>Daniel (LinkedIn)</span>
                </a>
                <a
                  href={contactData.linkedinCompanyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/15 text-white font-medium text-xs py-2 px-2 rounded-xl border border-white/10"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#9AC31C] fill-current" />
                  <span>Cicla (LinkedIn)</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
