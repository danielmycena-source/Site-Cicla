import React from 'react';
import { frentesAtuacao, brandPalette, contactData } from '../data/ciclaData';
import { RotateCcw, Building2, Users2, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

export const FrentesSection: React.FC = () => {
  return (
    <section id="frentes" className="py-20 md:py-28 bg-[#FAFAFA] text-[#575756]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#311853]/5 border border-[#311853]/10 text-[#311853] text-xs font-semibold uppercase tracking-wider mb-4">
            Atuação Estratégica
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#311853] tracking-tight mb-5">
            Três frentes integradas para transformar a cadeia da reciclagem
          </h2>
          <p className="text-base sm:text-lg text-[#575756] leading-relaxed">
            A Cicla atua na articulação entre o setor corporativo, o poder público municipal e as organizações de catadores, superando gargalos operacionais e criando soluções economicamente e socialmente sustentáveis.
          </p>
        </div>

        {/* Grid das 3 Frentes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {frentesAtuacao.map((frente, index) => {
            const Icon =
              frente.iconName === 'RotateCcw'
                ? RotateCcw
                : frente.iconName === 'Building2'
                ? Building2
                : Users2;

            return (
              <article
                key={frente.id}
                id={`frente-card-${frente.id}`}
                className="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Topo do Card: Ícone e Tag */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className="w-13 h-13 rounded-xl flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105"
                      style={{ backgroundColor: frente.accentColor }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: frente.bgLight,
                        color: frente.accentColor,
                        border: `1px solid ${frente.borderAccent}`,
                      }}
                    >
                      Pilar 0{index + 1}
                    </span>
                  </div>

                  {/* Título e Resumo */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#311853] mb-3 leading-snug">
                    {frente.title}
                  </h3>
                  <p className="text-sm font-medium text-[#575756] mb-5 leading-relaxed">
                    {frente.summary}
                  </p>

                  <div className="w-full h-px bg-slate-100 my-5" />

                  {/* Aspectos-chave da Frente */}
                  <div className="space-y-4 mb-6">
                    <h4 className="text-xs font-bold text-[#311853] uppercase tracking-wider">
                      Aspectos Centrais de Atuação
                    </h4>
                    {frente.keyAspects.map((aspect, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: frente.accentColor }}
                        />
                        <div>
                          <span className="text-sm font-semibold text-[#311853] block">
                            {aspect.title}
                          </span>
                          <span className="text-xs text-[#575756] leading-relaxed block mt-0.5">
                            {aspect.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rodapé do Card: Público-alvo e Ação */}
                <div className="pt-6 border-t border-slate-100 mt-4">
                  <p className="text-xs text-[#575756]/80 italic mb-4">
                    {frente.audienceNote}
                  </p>
                  <a
                    href={contactData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#311853] hover:text-[#E5006B] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Conversar sobre esta frente</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bloco de Intersecção e Conexão Real */}
        <div className="mt-14 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-lg font-bold text-[#311853] mb-2">
              Por que a integração das três frentes é indispensável?
            </h3>
            <p className="text-sm text-[#575756] leading-relaxed">
              Projetos corporativos só se sustentam quando respeitam as capacidades e os custos dos municípios e remuneram com dignidade as cooperativas de catadores. A Cicla conecta esses agentes com clareza técnica e viabilidade de ponta a ponta.
            </p>
          </div>
          <a
            href={contactData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#311853] hover:bg-[#24113E] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow transition-all shrink-0 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#9AC31C] fill-current" />
            <span>Vamos dialogar</span>
          </a>
        </div>
      </div>
    </section>
  );
};
