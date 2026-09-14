import React, { useState } from 'react';
import { contactData, brandPalette } from '../data/ciclaData';
import { MessageCircle, Mail, Phone, Copy, Check, ArrowUpRight } from 'lucide-react';
import { CiclaLogo } from './CiclaLogo';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#311853] text-white relative overflow-hidden">
      {/* Luzes de fundo da paleta oficial */}
      <div
        className="absolute top-0 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ backgroundColor: brandPalette.pink }}
      />
      <div
        className="absolute bottom-0 left-10 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: brandPalette.green }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-wider mb-5">
            Canais Oficiais
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Vamos conversar sobre seu projeto?
          </h2>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            Seja para estruturar uma iniciativa corporativa de economia circular, diagnosticar a coleta seletiva do seu município ou apoiar cooperativas de catadores.
          </p>
        </div>

        {/* Card Principal de Contato com Ações Diretas */}
        <div className="bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl max-w-3xl mx-auto">
          {/* Identificação de Daniel Carvalho e Cicla */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs uppercase font-bold text-[#9AC31C] tracking-wider block mb-1">
                Contato Direto
              </span>
              <h3 className="text-2xl font-bold text-white">
                {contactData.name}
              </h3>
              <p className="text-sm text-white/70">
                {contactData.brand} · Conexões para uma economia circular
              </p>
            </div>

            <div className="p-2 bg-white/5 rounded-2xl border border-white/10 shrink-0">
              <CiclaLogo variant="on-dark" symbolSize={36} showText={false} />
            </div>
          </div>

          {/* Grid de Canais: WhatsApp (Primário), E-mail, Telefone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            {/* Canal 1: WhatsApp (Canal Principal) */}
            <div className="md:col-span-3 bg-gradient-to-r from-[#9AC31C] to-[#88b015] rounded-2xl p-6 text-[#311853] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#311853]/10 px-2.5 py-0.5 rounded-full text-xs font-bold mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#311853]" />
                  Canal Principal · Resposta Rápida
                </div>
                <h4 className="text-xl font-extrabold tracking-tight">
                  WhatsApp
                </h4>
                <p className="text-sm font-semibold opacity-90 mt-0.5">
                  {contactData.phone}
                </p>
              </div>

              <a
                id="contact-btn-whatsapp-main"
                href={contactData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#311853] hover:bg-[#24113E] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow transition-all active:scale-95 text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#9AC31C]" />
                <span>Iniciar Conversa</span>
              </a>
            </div>

            {/* Canal 2: E-mail */}
            <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                  <Mail className="w-3.5 h-3.5 text-[#41B6C0]" />
                  <span>E-mail Profissional</span>
                </div>
                <p className="text-base font-bold text-white break-all">
                  {contactData.email}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 mt-2">
                <a
                  id="contact-btn-email-mailto"
                  href={contactData.emailUrl}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium py-2.5 px-3 rounded-lg transition-colors border border-white/15"
                >
                  <span>Enviar mensagem</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium py-2.5 px-3 rounded-lg transition-colors border border-white/15"
                  title="Copiar endereço de e-mail"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#9AC31C]" />
                      <span className="text-[#9AC31C] font-semibold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Canal 3: Telefone */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                  <Phone className="w-3.5 h-3.5 text-[#9AC31C]" />
                  <span>Telefone</span>
                </div>
                <p className="text-base font-bold text-white">
                  {contactData.phone}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 mt-2">
                <a
                  id="contact-btn-phone-tel"
                  href={contactData.phoneUrl}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium py-2.5 px-3 rounded-lg transition-colors border border-white/15"
                >
                  <span>Ligar agora</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center justify-center p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/15"
                  title="Copiar número de telefone"
                >
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-[#9AC31C]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Nota de privacidade e transparência */}
        <p className="text-center text-xs text-white/50 mt-8">
          Contatos diretos confirmados com Daniel Carvalho para proposição de projetos e parcerias institucionais.
        </p>
      </div>
    </section>
  );
};
