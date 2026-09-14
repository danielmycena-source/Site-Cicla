import React, { useState, useEffect } from 'react';
import { CiclaLogo } from './CiclaLogo';
import { contactData } from '../data/ciclaData';
import { MessageCircle, Menu, X, Phone, Mail } from 'lucide-react';

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
    { label: 'Frentes de Atuação', href: '#frentes' },
    { label: 'Daniel Carvalho', href: '#sobre' },
    { label: 'Experiências', href: '#experiencias' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#311853]/95 backdrop-blur-md shadow-lg shadow-[#311853]/20 py-3'
          : 'bg-[#311853] py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo Cicla com respiro adequado */}
        <a
          href="#"
          id="nav-logo-link"
          className="flex items-center gap-2 group transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9AC31C] rounded-lg p-1"
          aria-label="Cicla - Página inicial"
        >
          <CiclaLogo variant="on-dark" symbolSize={38} />
          <span className="sr-only">Cicla</span>
        </a>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              id={`nav-link-${link.href.replace('#', '')}`}
              href={link.href}
              className="text-white/85 hover:text-[#9AC31C] font-medium text-sm lg:text-[15px] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#9AC31C] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Ação Primária Desktop (WhatsApp direto) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="nav-cta-whatsapp"
            href={contactData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#9AC31C] hover:bg-[#86aa18] text-[#311853] font-bold text-sm px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Converse comigo</span>
          </a>
        </div>

        {/* Botão Menu Mobile */}
        <button
          id="mobile-menu-toggle-btn"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#9AC31C] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9AC31C]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Gaveta Mobile */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#24113E] border-t border-white/10 px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col gap-3" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-[#9AC31C] text-base font-medium py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={contactData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#9AC31C] hover:bg-[#86aa18] text-[#311853] font-bold py-3 px-4 rounded-xl shadow transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Conversar no WhatsApp</span>
              </a>

              <div className="flex justify-between items-center px-1 pt-2 text-xs text-white/70">
                <a
                  href={contactData.emailUrl}
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <Mail className="w-3.5 h-3.5 text-[#41B6C0]" />
                  <span>{contactData.email}</span>
                </a>
                <a
                  href={contactData.phoneUrl}
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9AC31C]" />
                  <span>{contactData.phone}</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
