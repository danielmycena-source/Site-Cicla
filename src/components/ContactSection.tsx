import React, { useState } from 'react';
import { brandPalette, contactData } from '../data/ciclaReformedData';
import { CiclaLogo } from './CiclaLogo';
import { QuickDiagnosisForm } from './QuickDiagnosisForm';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  Copy, 
  Sparkles,
  ShieldCheck,
  Building2,
  ExternalLink,
  Linkedin
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#311853] text-white relative overflow-hidden">
      {/* Luzes de fundo da marca */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: brandPalette.pink }}
      />
      <div
        className="absolute bottom-0 left-10 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ backgroundColor: brandPalette.green }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#9AC31C]" />
            <span>Atendimento Especializado</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Vamos conversar sobre o seu projeto?
          </h2>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            Seja para estruturar o programa de coleta seletiva do seu município, direcionar investimentos privados para cooperativas ou fortalecer a gestão e autonomia da sua organização de catadores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Informações de Contato Direto */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/15 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>Canais Oficiais de Contato</span>
              </h3>

              <div className="space-y-6 text-sm">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#9AC31C] text-[#311853] flex items-center justify-center shrink-0 shadow">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs text-white/60 uppercase tracking-wider block mb-0.5">
                      WhatsApp Direto (Daniel Carvalho)
                    </span>
                    <a
                      href={contactData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#9AC31C] hover:underline"
                    >
                      {contactData.phoneDisplay}
                    </a>
                    <span className="text-xs text-white/60 block mt-0.5">
                      Resposta ágil em horário comercial
                    </span>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs text-white/60 uppercase tracking-wider block mb-0.5">
                      E-mail Institucional
                    </span>
                    <a
                      href={contactData.emailUrl}
                      className="text-sm sm:text-base font-semibold text-white hover:text-[#9AC31C] transition-colors"
                    >
                      {contactData.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-white/60 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    title="Copiar e-mail"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#9AC31C]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Localização / Atuação */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-5 h-5 text-[#41B6C0]" />
                  </div>
                  <div>
                    <span className="text-xs text-white/60 uppercase tracking-wider block mb-0.5">
                      Base Operacional & Atendimento
                    </span>
                    <p className="text-sm text-white/90 font-medium">
                      {contactData.address}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Daniel Carvalho */}
                <div className="flex items-start gap-4 pt-2 border-t border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/20 text-[#0A66C2] flex items-center justify-center shrink-0 border border-[#0A66C2]/40">
                    <Linkedin className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs text-white/60 uppercase tracking-wider block mb-0.5">
                      LinkedIn — Daniel Carvalho
                    </span>
                    <a
                      href={contactData.linkedinDanielUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-white hover:text-[#9AC31C] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>linkedin.com/in/daniel-cicla</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                    <span className="text-xs text-white/60 block mt-0.5">
                      Perfil profissional do fundador e consultor técnico
                    </span>
                  </div>
                </div>

                {/* LinkedIn Cicla Brasil */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/20 text-[#0A66C2] flex items-center justify-center shrink-0 border border-[#0A66C2]/40">
                    <Linkedin className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs text-white/60 uppercase tracking-wider block mb-0.5">
                      Página Institucional no LinkedIn
                    </span>
                    <a
                      href={contactData.linkedinCompanyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-white hover:text-[#9AC31C] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>linkedin.com/company/cicla-brasil/</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                    <span className="text-xs text-white/60 block mt-0.5">
                      Notícias, artigos e projetos da Cicla Brasil
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <ShieldCheck className="w-4 h-4 text-[#9AC31C]" />
                  <span>Atendimento técnico sigiloso e direto com especialista</span>
                </div>
              </div>
            </div>

            {/* Chamada para conversa com o Daniel + LinkedIn */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#9AC31C] to-[#E5006B] p-0.5 shrink-0">
                  <div className="w-full h-full rounded-[10px] bg-[#220F3B] flex items-center justify-center text-white font-bold text-base">
                    DC
                  </div>
                </div>
                <div className="text-xs">
                  <strong className="text-white block text-sm font-bold mb-0.5">Daniel Carvalho</strong>
                  <p className="text-white/70">
                    Especialista em Economia Circular
                  </p>
                </div>
              </div>
              <a
                href={contactData.linkedinDanielUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A66C2]/25 hover:bg-[#0A66C2]/40 text-white font-semibold text-xs border border-[#0A66C2]/50 transition-colors"
                title="Acessar LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 fill-current" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>
          </div>

          {/* Formulário de Diagnóstico Rápido */}
          <div className="lg:col-span-7">
            <QuickDiagnosisForm sourceContext="secao-contato" />
          </div>
        </div>
      </div>
    </section>
  );
};
