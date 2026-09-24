import React from 'react';
import { brandPalette, contactData } from '../data/ciclaReformedData';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  FileCheck, 
  Scale, 
  ArrowRight, 
  MessageCircle,
  AlertTriangle,
  Lightbulb,
  FileSpreadsheet,
  Award
} from 'lucide-react';

export const ParaPrefeiturasSection: React.FC = () => {
  return (
    <section
      id="para-prefeituras"
      className="py-20 md:py-28 bg-[#F4F9FA] text-[#575756] relative overflow-hidden border-t border-slate-200/70"
    >
      {/* Detalhe de fundo técnico em ciano/água */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: brandPalette.cyan }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#41B6C0]/15 text-[#0B2E4D] text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#41B6C0]/30">
            <Building2 className="w-3.5 h-3.5 text-[#41B6C0]" />
            <span>Gestão Pública · Secretarias de Meio Ambiente & Limpeza Urbana</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#311853] tracking-tight leading-tight mb-4">
            Para Prefeituras: Programas de coleta seletiva estruturados, inclusivos e em conformidade legal.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Apoiamos municípios a estruturar programas viáveis de coleta seletiva com base em diagnósticos territoriais precisos, reduzindo o descarte em aterro sanitário e regularizando a contratação de cooperativas de catadores com total segurança jurídica perante os órgãos de controle.
          </p>
        </div>

        {/* 3 Pilares Específicos: Diagnóstico Territorial | Reestruturação de Coleta | Conformidade PNRS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {/* Pilar 1: Diagnóstico Territorial */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#41B6C0]/15 text-[#41B6C0] flex items-center justify-center mb-5 font-extrabold text-lg">
                01
              </div>
              <h3 className="text-xl font-bold text-[#311853] mb-3">
                Diagnóstico Territorial & Rotas
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Mapeamento minucioso dos fluxos de resíduos, pontos críticos de descarte, rotas otimizadas por setor e capacidade real dos galpões de triagem.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#41B6C0] shrink-0 mt-0.5" />
                  <span>Levantamento volumétrico e diagnóstico da situação local</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#41B6C0] shrink-0 mt-0.5" />
                  <span>Redução de despesas com frete e aterramento de recicláveis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#41B6C0] shrink-0 mt-0.5" />
                  <span>Mapeamento de geradores e planejamento georreferenciado</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pilar 2: Programas de Coleta Seletiva */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#41B6C0]/15 text-[#41B6C0] flex items-center justify-center mb-5 font-extrabold text-lg">
                02
              </div>
              <h3 className="text-xl font-bold text-[#311853] mb-3">
                Estruturação de Programas de Coleta
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Desenho de modelos operacionais e integrados de coleta seletiva municipal com inclusão socioprodutiva de catadores, assegurando sustentabilidade à rotina.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#41B6C0] shrink-0 mt-0.5" />
                  <span>Integração de associações e cooperativas na operação pública</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#41B6C0] shrink-0 mt-0.5" />
                  <span>Dimensionamento de galpões, balanças, prensas e caminhões</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#41B6C0] shrink-0 mt-0.5" />
                  <span>Planejamento de campanhas de adesão da população</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pilar 3: Conformidade com PNRS & Contratos */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#41B6C0]/15 text-[#41B6C0] flex items-center justify-center mb-5 font-extrabold text-lg">
                03
              </div>
              <h3 className="text-xl font-bold text-[#311853] mb-3">
                Conformidade com a PNRS & Convênios
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Adequação da gestão municipal à Lei 12.305/2010, estruturando termos de colaboração, minutas de convênios e contratações com respaldo perante os Tribunais de Contas.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#41B6C0] shrink-0 mt-0.5" />
                  <span>Contratação legalizada de cooperativas (dispensa de licitação fundamentada)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#41B6C0] shrink-0 mt-0.5" />
                  <span>Prevenção de TACs e atendimento às exigências do Ministério Público</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#41B6C0] shrink-0 mt-0.5" />
                  <span>Aptidão para captação de recursos e linhas de fomento ambiental</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dois Cases Obrigatórios de Prefeituras em Destaque */}
        <div className="space-y-6 mb-12">
          {/* Case 1: Prefeitura de São Paulo - SP Coopera */}
          <div className="bg-white rounded-3xl border border-[#41B6C0]/30 p-8 sm:p-10 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#41B6C0] bg-[#41B6C0]/10 px-3 py-1 rounded-full">
                Case de Sucesso Obrigatório · Capital Paulistana
              </span>
              <span className="text-xs text-slate-500 font-bold">
                Prefeitura de São Paulo · Programa SP Coopera
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <h4 className="text-2xl font-bold text-[#311853]">
                  Ampliação do número de cooperativas conveniadas à Prefeitura de São Paulo
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A <strong>Cicla</strong> atuou ativamente no programa <strong>SP Coopera</strong>, que ampliou significativamente a quantidade de cooperativas conveniadas da <strong>Prefeitura de São Paulo</strong>, promovendo melhores condições de trabalho, infraestrutura e sustentabilidade econômica para os catadores de materiais recicláveis na maior capital do país.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 pt-1">
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-4 h-4" /> Convênios formalizados
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-4 h-4" /> Dignidade laboral para catadores
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-4 h-4" /> Segurança jurídica municipal
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#F4F9FA] rounded-2xl p-6 border border-slate-200 text-center">
                <span className="text-xs font-bold uppercase text-slate-500 block mb-1">
                  Programa SP Coopera
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0B2E4D] block mb-1">
                  São Paulo
                </span>
                <span className="text-xs font-bold text-[#311853] block mb-2">
                  Expansão de Cooperativas Conveniadas
                </span>
                <span className="text-xs text-slate-500 block leading-relaxed">
                  Atuação técnica da Cicla viabilizando a integração institucional com a gestão municipal.
                </span>
              </div>
            </div>
          </div>

          {/* Case 2: Curitiba - Projeto EcoCidadão */}
          <div className="bg-[#311853] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#9AC31C] bg-white/10 px-3 py-1 rounded-full">
                Case Pioneiro Nacional · Referência em Gestão de Resíduos
              </span>
              <span className="text-xs text-white/70 font-semibold">
                Curitiba · Projeto EcoCidadão (2007–2009)
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <h4 className="text-2xl font-bold text-white">
                  Daniel Carvalho coordenou a implantação do Projeto EcoCidadão em Curitiba
                </h4>
                <p className="text-sm text-white/85 leading-relaxed">
                  Sob a coordenação de <strong>Daniel Carvalho</strong>, o <strong>Projeto EcoCidadão</strong> promoveu a inclusão pioneira de catadores de materiais recicláveis na gestão de resíduos da capital paranaense. A experiência organizou pontos de triagem, rotas integradas e reconhecimento formal dos trabalhadores, consolidando-se como um modelo histórico e pioneiro em todo o Brasil.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-white/80 pt-1">
                  <span className="inline-flex items-center gap-1.5 text-[#9AC31C] font-bold">
                    <CheckCircle2 className="w-4 h-4" /> Modelo pioneiro no Brasil
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#9AC31C] font-bold">
                    <CheckCircle2 className="w-4 h-4" /> Inclusão na gestão municipal de resíduos
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/10 rounded-2xl p-6 border border-white/15 text-center backdrop-blur-sm">
                <span className="text-xs font-bold uppercase text-[#9AC31C] block mb-1">
                  Coordenação Daniel Carvalho
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-white block mb-1">
                  Curitiba
                </span>
                <span className="text-xs font-bold text-white block mb-2">
                  Projeto EcoCidadão (2007–2009)
                </span>
                <span className="text-xs text-white/70 block leading-relaxed">
                  Referência nacional de inclusão de catadores na limpeza urbana municipal.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Específico para Prefeituras */}
        <div className="bg-gradient-to-r from-[#0B2E4D] to-[#311853] rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold mb-2">
              Sua prefeitura precisa estruturar ou aprimorar o programa de coleta seletiva?
            </h3>
            <p className="text-sm text-white/80 max-w-2xl leading-relaxed">
              Agende uma reunião com Daniel Carvalho para avaliar os gargalos de destinação de resíduos da sua cidade e receber um direcionamento técnico inicial.
            </p>
          </div>

          <a
            href={contactData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#9AC31C] hover:bg-[#86aa18] text-[#311853] font-extrabold text-sm sm:text-base px-7 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 text-center"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Solicitar diagnóstico para prefeitura</span>
          </a>
        </div>
      </div>
    </section>
  );
};
