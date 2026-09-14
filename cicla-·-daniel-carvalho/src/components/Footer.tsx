import React from 'react';
import { CiclaLogo } from './CiclaLogo';
import { contactData, brandPalette } from '../data/ciclaData';
import { MessageCircle, Mail, Phone, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#24113E] text-white/80 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Coluna 1: Marca & Lema */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9AC31C] rounded-lg">
              <CiclaLogo variant="on-dark" symbolSize={40} />
            </a>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Projetos que aproximam empresas, municípios e organizações de catadores para fortalecer a cadeia da reciclagem no Brasil.
            </p>
            <p className="text-xs font-semibold text-[#9AC31C] tracking-wide uppercase">
              “Não transformamos resíduos, transformamos o mundo!”
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#frentes"
                  className="hover:text-[#9AC31C] transition-colors"
                >
                  Frentes de Atuação
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="hover:text-[#9AC31C] transition-colors"
                >
                  Daniel Carvalho
                </a>
              </li>
              <li>
                <a
                  href="#experiencias"
                  className="hover:text-[#9AC31C] transition-colors"
                >
                  Experiências Documentadas
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-[#9AC31C] transition-colors"
                >
                  Vamos conversar
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos Diretos */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Canais Diretos
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={contactData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#9AC31C] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#9AC31C]" />
                  <span>WhatsApp: {contactData.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={contactData.emailUrl}
                  className="inline-flex items-center gap-2 hover:text-[#41B6C0] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#41B6C0]" />
                  <span>{contactData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={contactData.phoneUrl}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-white/60" />
                  <span>{contactData.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior com créditos documentais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Cicla · Daniel Carvalho. Todos os direitos reservados.
          </p>

          <p className="text-center sm:text-right">
            Fotografias históricas de projetos: <span className="text-white/70">Chouette Films</span> (institucional 2022).
          </p>
        </div>
      </div>
    </footer>
  );
};
