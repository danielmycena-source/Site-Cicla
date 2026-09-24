import React from 'react';
import { contactData, brandPalette } from '../data/ciclaReformedData';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      {/* Tooltip convidativo que surge ao passar o mouse */}
      <span className="hidden md:inline-block mr-3 bg-white text-[#311853] text-xs font-bold px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Converse com Daniel Carvalho 👋
      </span>

      {/* Botão de ação flutuante com cor da marca e pulso */}
      <a
        id="floating-whatsapp-cta"
        href={contactData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp com Daniel Carvalho"
        className="w-14 h-14 rounded-full bg-[#9AC31C] hover:bg-[#86aa18] text-[#311853] flex items-center justify-center shadow-2xl shadow-[#9AC31C]/40 transition-all transform hover:scale-110 active:scale-95 relative"
      >
        {/* Anel de pulso sutil */}
        <span className="absolute inset-0 rounded-full bg-[#9AC31C] opacity-75 animate-ping -z-10 group-hover:hidden" />
        
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </aside>
  );
};
