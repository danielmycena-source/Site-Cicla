import React from 'react';
import { brandPalette, contactData } from '../data/ciclaReformedData';
import { 
  Users, 
  Briefcase, 
  Store, 
  GraduationCap, 
  CheckCircle2, 
  Scale, 
  ArrowRight,
  MessageCircle,
  HeartHandshake,
  ShieldCheck,
  Award
} from 'lucide-react';

export const ParaCooperativasSection: React.FC = () => {
  return (
    <section
      id="para-cooperativas"
      className="py-20 md:py-28 bg-[#F8FBEF] text-[#575756] relative overflow-hidden border-t border-slate-200/60"
    >
      {/* Luz verde oficial no fundo */}
      <div
        className="absolute top-10 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ backgroundColor: brandPalette.green }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9AC31C]/20 text-[#311853] text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#9AC31C]/40">
            <Users className="w-3.5 h-3.5 text-[#311853]" />
            <span>Cooperativas & Associações de Catadores</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#311853] tracking-tight leading-tight mb-4">
            Para Cooperativas: Fortalecimento institucional, gestão transparente e autonomia no mercado.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Os catadores e catadoras são os protagonistas da circularidade. A Cicla atua lado a lado com as lideranças para organizar controles de pesagem, capacitar a equipe em governança coletiva e estruturar a organização para celebrar convênios públicos e vender direto à indústria sem intermediários atravessadores.
          </p>
        </div>

        {/* 3 Pilares Específicos: Gestão Administrativa | Acesso Direto ao Mercado | Formação e Capacitação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {/* Pilar 1: Gestão Administrativa */}
          <div className="bg-white rounded-2xl p-7 border border-[#9AC31C]/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#9AC31C]/20 text-[#311853] flex items-center justify-center mb-5 font-extrabold text-lg">
                01
              </div>
              <h3 className="text-xl font-bold text-[#311853] mb-3">
                Gestão Administrativa & Operacional
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Rotinas transparentes de pesagem diária, controle de fardos, fluxo de caixa e rateio justo entre os cooperados, garantindo confiabilidade nas informações.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9AC31C] shrink-0 mt-0.5" />
                  <span>Controle diário de estoque e triagem por tipo de material</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9AC31C] shrink-0 mt-0.5" />
                  <span>Planilhas e relatórios de rateio claros e democráticos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9AC31C] shrink-0 mt-0.5" />
                  <span>Regularização de estatuto, atas, CNPJ e documentação</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pilar 2: Acesso Direto ao Mercado */}
          <div className="bg-white rounded-2xl p-7 border border-[#9AC31C]/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#9AC31C]/20 text-[#311853] flex items-center justify-center mb-5 font-extrabold text-lg">
                02
              </div>
              <h3 className="text-xl font-bold text-[#311853] mb-3">
                Acesso Direto ao Mercado Comprador
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Superação da dependência de atravessadores. Ensinamos a classificar os materiais nos padrões exigidos pelas fábricas recicladoras para obter a melhor remuneração.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9AC31C] shrink-0 mt-0.5" />
                  <span>Eliminação de intermediários que retêm o valor do reciclável</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9AC31C] shrink-0 mt-0.5" />
                  <span>Padronização de fardos nos padrões das grandes recicladoras</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9AC31C] shrink-0 mt-0.5" />
                  <span>Negociação de contratos e parcerias comerciais estáveis</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pilar 3: Formação e Capacitação */}
          <div className="bg-white rounded-2xl p-7 border border-[#9AC31C]/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#9AC31C]/20 text-[#311853] flex items-center justify-center mb-5 font-extrabold text-lg">
                03
              </div>
              <h3 className="text-xl font-bold text-[#311853] mb-3">
                Formação, Liderança & Segurança
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Capacitação contínua de cooperados e lideranças em assembleias democráticas, ergonomia, uso correto de EPIs e operação preventiva de maquinários.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9AC31C] shrink-0 mt-0.5" />
                  <span>Formação de novas lideranças e sucessão administrativa</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9AC31C] shrink-0 mt-0.5" />
                  <span>Protocolos de segurança no trabalho e saúde ocupacional</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9AC31C] shrink-0 mt-0.5" />
                  <span>Capacidade técnica para responder a editais e convênios municipais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Destaque Institucional: Reconhecimento da Base */}
        <div className="bg-white rounded-3xl border border-[#9AC31C]/40 p-8 sm:p-10 shadow-lg mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#311853] bg-[#9AC31C]/25 px-3 py-1 rounded-full">
              Protagonismo & Dignidade Laboral
            </span>
            <span className="text-xs text-slate-500 font-semibold">
              Metodologia Cicla em Campo
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h4 className="text-2xl font-bold text-[#311853]">
                Do trabalho informal e desvalorizado à organização autônoma e remunerada pelo serviço ambiental
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mais do que separar materiais, cooperativas estruturadas prestam um serviço ambiental indispensável para as cidades e indústrias. Apoiamos a formalização contábil, a melhoria contínua dos galpões e o treinamento para que as organizações negociem de igual para igual com grandes compradores.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" /> Autonomia produtiva
                </span>
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" /> Prestação de serviço ambiental reconhecido
                </span>
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" /> Gestão democrática
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#F8FBEF] rounded-2xl p-6 border border-[#9AC31C]/30 text-center">
              <span className="text-xs font-bold uppercase text-slate-600 block mb-1">
                Foco na Base
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#311853] block mb-1">
                Autonomia
              </span>
              <span className="text-sm font-bold text-[#9AC31C] block mb-2">
                & Valorização do Trabalho
              </span>
              <span className="text-xs text-slate-600 block leading-relaxed">
                Capacitação que transforma galpões em centros eficientes de triagem e renda coletiva.
              </span>
            </div>
          </div>
        </div>

        {/* CTA para Cooperativas */}
        <div className="bg-[#311853] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold mb-2">
              Sua cooperativa ou associação quer aprimorar a gestão e conquistar autonomia?
            </h3>
            <p className="text-sm text-white/80 max-w-2xl leading-relaxed">
              Fale diretamente no WhatsApp com o Daniel Carvalho. Vamos entender a realidade do seu galpão e construir caminhos viáveis juntos.
            </p>
          </div>

          <a
            href={contactData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#9AC31C] hover:bg-[#86aa18] text-[#311853] font-extrabold text-sm sm:text-base px-7 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 text-center"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Falar com o Daniel no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
