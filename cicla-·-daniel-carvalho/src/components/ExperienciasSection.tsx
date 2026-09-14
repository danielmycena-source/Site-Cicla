import React from 'react';
import { experienciasDocumentadas, brandPalette, contactData } from '../data/ciclaData';
import { FileText, Calendar, Check, ArrowRight, MessageCircle, ExternalLink, Award } from 'lucide-react';

export const ExperienciasSection: React.FC = () => {
  return (
    <section id="experiencias" className="py-20 md:py-28 bg-[#F8F9FA] text-[#575756]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#311853]/5 border border-[#311853]/10 text-[#311853] text-xs font-semibold uppercase tracking-wider mb-4">
            Histórico & Repertório
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#311853] tracking-tight mb-4">
            Experiências Documentadas
          </h2>
          <p className="text-base sm:text-lg text-[#575756] leading-relaxed">
            Iniciativas e metodologias desenvolvidas pela Cicla com respaldo em documentos institucionais, contextualização cronológica e escopo verificado.
          </p>
        </div>

        {/* Grid das 4 Experiências Documentadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {experienciasDocumentadas.map((exp, idx) => (
            <article
              key={exp.id}
              id={`experiencia-card-${exp.id}`}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Barra superior de acento com a cor correspondente */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: exp.accentColor }}
              />

              <div>
                {/* Metadados: Frente e Período */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${exp.accentColor}18`,
                      color: exp.accentColor,
                    }}
                  >
                    {exp.frenteLabel}
                  </span>

                  {exp.referenceDocument.period && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#575756]/80 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#311853]" />
                      <span>{exp.referenceDocument.period}</span>
                    </span>
                  )}
                </div>

                {/* Título do Projeto */}
                <h3 className="text-xl font-bold text-[#311853] mb-3 group-hover:text-[#311853] transition-colors">
                  {exp.title}
                </h3>

                {/* Síntese */}
                <p className="text-sm font-semibold text-[#575756] mb-4 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Contexto Documentado */}
                <p className="text-xs sm:text-sm text-[#575756]/90 mb-5 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {exp.documentedContext}
                </p>

                {/* Ações e Contribuições Descritas */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-bold text-[#311853] uppercase tracking-wider">
                    Contribuições Documentadas
                  </h4>
                  {exp.keyContributions.map((contrib, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#575756]">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                        style={{ backgroundColor: exp.accentColor }}
                      />
                      <span className="leading-relaxed">{contrib}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rodapé do Card: Fonte de Referência Documental */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#575756]/75">
                <span className="inline-flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#311853]/70" />
                  <span>
                    Fonte: <strong className="text-[#311853] font-semibold">{exp.referenceDocument.source}</strong> ({exp.referenceDocument.page})
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Nota Metodológica e Transparência */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="max-w-2xl">
            <h4 className="text-sm font-bold text-[#311853] mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9AC31C]" />
              Transparência & Escopo Documental
            </h4>
            <p className="text-xs sm:text-sm text-[#575756] leading-relaxed">
              Os registros acima refletem iniciativas documentadas nos relatórios institucionais da Cicla (2017 a 2022). Em respeito à integridade da informação, métricas históricas são apresentadas em seus recortes originais sem agregações descontextualizadas.
            </p>
          </div>

          <a
            href={contactData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-[#311853] hover:bg-[#24113E] text-white px-5 py-3 rounded-xl transition-all shrink-0 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#9AC31C] fill-current" />
            <span>Conversar sobre novos projetos</span>
          </a>
        </div>
      </div>
    </section>
  );
};
