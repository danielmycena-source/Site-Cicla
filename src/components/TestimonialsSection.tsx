import React, { useState } from 'react';
import { testimonials, brandPalette } from '../data/ciclaReformedData';
import { Quote, Star, Building2, Factory, Users, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Todos' | 'Prefeitura' | 'Empresa' | 'Cooperativa'>('Todos');

  const filteredTestimonials = activeCategory === 'Todos'
    ? testimonials
    : testimonials.filter(t => t.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-white text-[#575756] border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5006B] bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#E5006B]/20">
            Provas Sociais & Confiança
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#311853] mt-4 mb-3 tracking-tight">
            Quem vivenciou a transformação com a Cicla
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Depoimentos de quem está na gestão pública, na indústria ou operando os galpões de triagem todos os dias.
          </p>

          {/* Filtros rápidos por público */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {(['Todos', 'Prefeitura', 'Empresa', 'Cooperativa'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all ${
                  activeCategory === cat
                    ? 'bg-[#311853] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'Todos' ? 'Todos os relatos' : cat === 'Prefeitura' ? 'Prefeituras' : cat === 'Empresa' ? 'Empresas' : 'Cooperativas'}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredTestimonials.map((item) => {
            const isPref = item.category === 'Prefeitura';
            const isEmp = item.category === 'Empresa';
            const accentBg = isPref ? '#41B6C0' : isEmp ? '#E5006B' : '#9AC31C';
            const Icon = isPref ? Building2 : isEmp ? Factory : Users;

            return (
              <div
                key={item.id}
                className="bg-[#FAFAFA] rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all relative group"
              >
                {/* Linha de topo com a cor do perfil */}
                <div
                  className="absolute top-0 left-8 right-8 h-1 rounded-full"
                  style={{ backgroundColor: accentBg }}
                />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span
                      className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${accentBg}18`,
                        color: accentBg === '#9AC31C' ? '#311853' : accentBg,
                      }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.category}</span>
                    </span>

                    <Quote className="w-6 h-6 text-slate-300 group-hover:text-slate-400 transition-colors" />
                  </div>

                  {/* Citação textual */}
                  <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                    “{item.quote}”
                  </p>
                </div>

                {/* Identificação do Autor */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0 shadow-sm"
                    style={{ backgroundColor: accentBg }}
                  >
                    {item.author.charAt(1) || item.category.charAt(0)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#311853] block">
                      {item.author}
                    </span>
                    <span className="text-[11px] text-slate-600 block">
                      {item.role} · {item.organization}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
