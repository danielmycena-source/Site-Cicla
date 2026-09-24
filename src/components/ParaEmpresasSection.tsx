import React from 'react';
import { brandPalette, contactData } from '../data/ciclaReformedData';
import { 
  Factory, 
  Handshake, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  BarChart3,
  Building2,
  Users,
  ShieldCheck,
  Award
} from 'lucide-react';

export const ParaEmpresasSection: React.FC = () => {
  return (
    <section
      id="para-empresas"
      className="py-20 md:py-28 bg-white text-[#575756] relative overflow-hidden"
    >
      {/* Luz de fundo oficial rosa */}
      <div
        className="absolute top-1/3 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: brandPalette.pink }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5006B]/10 text-[#E5006B] text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#E5006B]/25">
            <Factory className="w-3.5 h-3.5 text-[#E5006B]" />
            <span>Indústria, Varejo & Investimento Social Privado</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#311853] tracking-tight leading-tight mb-4">
            Para Empresas: Investimentos privados em estruturação de cooperativas com dados e impacto tangível.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Não operamos fretes nem comercializamos créditos: nossa consultoria estrutura o investimento social privado corporativo diretamente na capacitação, infraestrutura e governança de organizações de catadores, entregando relatórios consistentes e acompanhamento de ponta a ponta.
          </p>
        </div>

        {/* 3 Pilares Específicos: Investimento Privado | Monitoramento e Gestão de Dados | Relatório de Impacto Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {/* Pilar 1: Estruturação de Organizações */}
          <div className="bg-[#FFF8FA] rounded-2xl p-7 border border-[#E5006B]/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E5006B]/15 text-[#E5006B] flex items-center justify-center mb-5 font-extrabold text-lg">
                01
              </div>
              <h3 className="text-xl font-bold text-[#311853] mb-3">
                Estruturação de Organizações
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Diagnóstico técnico de necessidades reais dos galpões de triagem, planejamento de aquisição de maquinário e qualificação produtiva dos cooperados.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-200/60">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5006B] shrink-0 mt-0.5" />
                  <span>Adequação de layout, esteiras, prensas e segurança operacional</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5006B] shrink-0 mt-0.5" />
                  <span>Capacitação em governança, liderança e rotinas de gestão</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5006B] shrink-0 mt-0.5" />
                  <span>Investimento direcionado com alto retorno socioprodutivo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pilar 2: Gestão de Informações e Monitoramento */}
          <div className="bg-[#FFF8FA] rounded-2xl p-7 border border-[#E5006B]/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E5006B]/15 text-[#E5006B] flex items-center justify-center mb-5 font-extrabold text-lg">
                02
              </div>
              <h3 className="text-xl font-bold text-[#311853] mb-3">
                Monitoramento & Gestão de Dados
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Estruturação de fluxos de informação para monitorar a evolução das cooperativas apoiadas pelo investimento privado em escala regional ou nacional.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-200/60">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5006B] shrink-0 mt-0.5" />
                  <span>Acompanhamento sistemático de indicadores operacionais</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5006B] shrink-0 mt-0.5" />
                  <span>Padronização e verificação de dados de produção e renda</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5006B] shrink-0 mt-0.5" />
                  <span>Experiência comprovada em programas de abrangência nacional</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pilar 3: Tangibilização e Impacto Auditável */}
          <div className="bg-[#FFF8FA] rounded-2xl p-7 border border-[#E5006B]/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E5006B]/15 text-[#E5006B] flex items-center justify-center mb-5 font-extrabold text-lg">
                03
              </div>
              <h3 className="text-xl font-bold text-[#311853] mb-3">
                Tangibilização do Investimento Social
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Transformação dos investimentos em relatórios técnicos transparentes, conectando os compromissos ESG da empresa ao protagonismo real dos catadores.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-200/60">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5006B] shrink-0 mt-0.5" />
                  <span>Relatórios com evidências concretas de desenvolvimento comunitário</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5006B] shrink-0 mt-0.5" />
                  <span>Métricas de aumento de renda média e autonomia dos grupos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5006B] shrink-0 mt-0.5" />
                  <span>Materialização consistente para prestação de contas institucional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Case Obrigatório em Destaque: Coca-Cola Brasil */}
        <div className="bg-gradient-to-br from-[#311853] to-[#200e38] text-white rounded-3xl p-8 sm:p-10 shadow-2xl mb-12 border border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#9AC31C] bg-white/10 px-3 py-1 rounded-full">
              Case Obrigatório em Destaque · Investimento Corporativo
            </span>
            <span className="text-xs text-white/70 font-semibold">
              Coca-Cola Brasil · Coletivo Reciclagem (2013–2019)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h4 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Monitoramento do desenvolvimento de mais de 300 organizações de catadores pelo Brasil
              </h4>
              <p className="text-sm text-white/85 leading-relaxed">
                A <strong>Cicla</strong> apoiou a <strong>Coca-Cola Brasil</strong> na estruturação da gestão de informações para materializar e tangibilizar os resultados do investimento social. O projeto acompanhou mais de 300 cooperativas e associações em território nacional, garantindo transparência de dados, acompanhamento do salto produtivo e governança coletiva.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-white/75">
                <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9AC31C]" />
                  Gestão de Informações
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9AC31C]" />
                  Tangibilização de Resultados
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9AC31C]" />
                  +300 Organizações Impactadas
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 rounded-2xl p-6 border border-white/15 text-center backdrop-blur-sm">
              <span className="text-xs font-bold uppercase text-[#9AC31C] block mb-1">
                Alcance Nacional
              </span>
              <span className="text-4xl sm:text-5xl font-extrabold text-white block mb-1">
                +300
              </span>
              <span className="text-sm font-bold text-white block mb-2">
                Organizações de Catadores
              </span>
              <span className="text-xs text-white/70 block leading-relaxed">
                Apoiadas e monitoradas com gestão de dados pela Cicla no Coletivo Reciclagem.
              </span>
            </div>
          </div>
        </div>

        {/* CTA Corporativo */}
        <div className="bg-[#FFF0F6] rounded-3xl p-8 sm:p-10 border border-[#E5006B]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#311853] mb-2">
              Sua empresa quer estruturar investimentos com retorno social mensurável em cooperativas?
            </h3>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              Converse com a Cicla para desenhar projetos de fortalecimento de cooperativas com rigor metodológico e acompanhamento de campo.
            </p>
          </div>

          <a
            href={contactData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#E5006B] hover:bg-[#c7005d] text-white font-extrabold text-sm sm:text-base px-7 py-4 rounded-xl shadow-lg shadow-[#E5006B]/25 transition-all transform hover:-translate-y-0.5 active:scale-95 text-center"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Falar sobre investimento em cooperativas</span>
          </a>
        </div>
      </div>
    </section>
  );
};
