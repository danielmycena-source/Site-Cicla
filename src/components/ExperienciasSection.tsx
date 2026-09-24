import React from 'react';
import { caseStudies, contactData } from '../data/ciclaReformedData';
import { Building2, Factory, Award, MessageCircle, FileText } from 'lucide-react';

export const ExperienciasSection: React.FC = () => {
  return (
    <section id="experiencias" className="py-20 md:py-28 bg-[#F8F9FA] text-[#575756] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#311853]/5 border border-[#311853]/10 text-[#311853] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#9AC31C]" />
            <span>Cases de Sucesso & Trajetória Comprovada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#311853] tracking-tight mb-3">
            Casos Reais que Transformaram a Reciclagem no Brasil
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A Cicla atua exclusivamente no desenho de <strong>programas de coleta seletiva municipal</strong>, na <strong>estruturação e fortalecimento institucional de organizações de catadores</strong> e na <strong>gestão e monitoramento de investimentos privados</strong> com impacto social e ambiental mensurável.
          </p>
        </div>

        {/* Grid dos 3 Casos Obrigatórios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {caseStudies.map((item) => {
            const isPref = item.category === 'Prefeituras';
            const accentColor = isPref ? (item.id === 'case-sp-coopera' ? '#41B6C0' : '#311853') : '#E5006B';
            const Icon = isPref ? Building2 : Factory;

            return (
              <article
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-2"
                  style={{ backgroundColor: accentColor }}
                />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${accentColor}18`,
                        color: accentColor,
                      }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.category}</span>
                    </span>
                    <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Case Real
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#311853] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 mb-5">
                    {item.locationOrClient}
                  </p>

                  <div className="space-y-3 text-xs leading-relaxed text-slate-600 mb-6">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <strong className="text-[#311853] block mb-1">Contexto & Desafio:</strong>
                      {item.challenge}
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <strong className="text-[#311853] block mb-1">Atuação Técnica da Cicla:</strong>
                      {item.actionTaken}
                    </div>

                    <div 
                      className="p-3.5 rounded-xl border font-medium"
                      style={{
                        backgroundColor: `${accentColor}10`,
                        borderColor: `${accentColor}30`,
                        color: '#311853',
                      }}
                    >
                      <strong className="block mb-1 text-[#311853] font-bold">
                        Impacto e Resultado Atingido:
                      </strong>
                      {item.impactResult}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#311853]" />
                    <span>{item.verifiedReference}</span>
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Banner de Posicionamento Claro */}
        <div className="bg-[#311853] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#9AC31C] block mb-1">
              Foco & Escopo Técnico Especializado
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Inteligência técnica, governança e viabilidade para quem quer fazer acontecer.
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Não realizamos operação de transporte ou frete de logística reversa. Nosso papel é a estruturação qualificada: planos municipais de coleta seletiva, gestão e monitoramento de investimentos privados e fortalecimento institucional para que as cooperativas operem com protagonismo e autonomia.
            </p>
          </div>

          <a
            href={contactData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#9AC31C] hover:bg-[#86aa18] text-[#311853] font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar sobre seu projeto</span>
          </a>
        </div>
      </div>
    </section>
  );
};
