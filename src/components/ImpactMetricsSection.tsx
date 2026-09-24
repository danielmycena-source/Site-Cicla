import React from 'react';
import { impactNumbers, brandPalette } from '../data/ciclaReformedData';
import { Scale, Building, Users, TrendingUp } from 'lucide-react';

export const ImpactMetricsSection: React.FC = () => {
  return (
    <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[11px] uppercase tracking-widest font-extrabold text-[#311853] bg-[#9AC31C]/20 px-3 py-1 rounded-full">
            Impacto Real & Mensurável
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#311853] mt-2">
            Números que comprovam a força da articulação
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Resultados consolidados em campo através da união entre técnica, poder público e cooperativas.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {impactNumbers.map((item, index) => {
            const Icon =
              item.iconName === 'Scale'
                ? Scale
                : item.iconName === 'Building'
                ? Building
                : item.iconName === 'Users'
                ? Users
                : TrendingUp;

            const iconColors = [
              brandPalette.green,
              brandPalette.cyan,
              brandPalette.pink,
              brandPalette.purple,
            ];

            return (
              <div
                key={item.id}
                className={`flex flex-col items-center text-center px-3 ${
                  index > 0 ? 'pt-6 lg:pt-0' : ''
                }`}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 shadow-sm"
                  style={{
                    backgroundColor: `${iconColors[index % iconColors.length]}18`,
                    color: iconColors[index % iconColors.length],
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Valor numérico em destaque */}
                <div className="flex items-center gap-1">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#311853] tracking-tight">
                    {item.value}
                  </span>
                </div>

                <span className="text-sm font-bold text-slate-900 mt-1">
                  {item.label}
                </span>

                <p className="text-xs text-slate-500 mt-1 leading-relaxed max-w-[200px]">
                  {item.sublabel}
                </p>

                {/* Comentário visual de placeholder para clareza da documentação */}
                {item.isPlaceholder && (
                  <span className="mt-2 text-[10px] text-slate-400 font-mono">
                    {/* PLACEHOLDER: indicador de métrica expansível */}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
