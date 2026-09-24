import React from 'react';
import { brandPalette, contactData, valoresMarcaCicla, agenda2030Summary } from '../data/ciclaReformedData';
import { CiclaLogo } from './CiclaLogo';
import { 
  CheckCircle2, 
  Award, 
  HeartHandshake, 
  Scale, 
  ArrowRight, 
  MessageCircle, 
  FileCheck,
  Target,
  Sparkles,
  Eye,
  Shield,
  Building2,
  Users,
  Factory,
  Linkedin,
  ExternalLink,
  Globe2
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#FAFAFA] text-[#575756] relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Bloco 1: Quem é Daniel Carvalho (Bio + Perfil de Liderança + Destaque EcoCidadão) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Card Visual / Identidade */}
          <div className="lg:col-span-5">
            <div className="bg-[#311853] text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl border border-white/10">
              {/* Brilho da marca */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ backgroundColor: brandPalette.green }}
              />

              {/* Logo Oficial */}
              <div className="mb-6">
                <CiclaLogo variant="on-dark" height={42} />
              </div>

              {/* Foto / Placeholder de Retrato Profissional */}
              <div className="relative mb-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-[#9AC31C] to-[#E5006B] p-1 shadow-lg">
                  <div className="w-full h-full rounded-[14px] bg-[#220F3B] flex items-center justify-center text-white text-3xl font-extrabold tracking-tight">
                    DC
                  </div>
                </div>
                <div className="absolute bottom-0 left-20 sm:left-24 bg-[#9AC31C] text-[#311853] text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow">
                  Coordenação em Campo
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#9AC31C] font-bold block mb-1">
                  Fundador & Líder Técnico
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Daniel Carvalho
                </h3>
                <p className="text-sm text-white/75 mt-1 leading-snug">
                  Especialista em Economia Circular, Coleta Seletiva Municipal e Fortalecimento de Organizações de Catadores
                </p>
              </div>

              <div className="w-full h-px bg-white/15 my-6" />

              <p className="text-xs sm:text-sm text-white/85 italic leading-relaxed pl-3 border-l-2 border-[#9AC31C]">
                “Nosso trabalho não é fazer frete de resíduo: é construir conexões sólidas que transformam resíduos em dignidade e mercado para quem coleta.”
              </p>

              <div className="mt-6 space-y-2.5">
                <a
                  href={contactData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#9AC31C] hover:bg-[#86aa18] text-[#311853] font-bold text-sm py-3 px-5 rounded-xl transition-all shadow hover:shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Falar diretamente com o Daniel</span>
                </a>

                {/* Conexão LinkedIn de Daniel Carvalho */}
                <a
                  href={contactData.linkedinDanielUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#084e96] text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-all shadow-sm border border-white/20 hover:border-white/40 group"
                  title="Acessar perfil de Daniel Carvalho no LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-white fill-current" />
                  <span>Conectar no LinkedIn (Daniel)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Conexão Página da Cicla no LinkedIn */}
                <a
                  href={contactData.linkedinCompanyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white/90 font-medium text-xs py-2 px-3 rounded-lg transition-colors border border-white/10 hover:border-white/25 group"
                  title="Seguir a página da Cicla no LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#9AC31C] fill-current" />
                  <span>Página da Cicla no LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Biografia e Abordagem */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#311853]/5 border border-[#311853]/10 text-[#311853] text-xs font-bold uppercase tracking-wider">
              Sobre a Liderança & Origem
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#311853] tracking-tight leading-tight">
              Especialista que une rigor técnico, legislação e vivência no chão da reciclagem.
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              Liderada por <strong>Daniel Carvalho</strong>, a <strong>Cicla</strong> atua como a ponte de confiança entre o poder público, o setor privado e o movimento de catadores. Sua trajetória é marcada por grandes marcos da gestão de resíduos no Brasil, como a <strong>coordenação da implantação do Projeto EcoCidadão em Curitiba (2007–2009)</strong> — um dos modelos pioneiros de inclusão formal de catadores na gestão pública municipal do país.
            </p>

            <p className="text-base text-slate-700 leading-relaxed">
              Com histórico de suporte técnico a prefeituras como São Paulo (no programa <strong>SP Coopera</strong>) e no monitoramento de investimentos privados de escala nacional (como o <strong>Coletivo Reciclagem da Coca-Cola Brasil</strong>, com mais de 300 organizações apoiadas), Daniel estrutura projetos que aliam viabilidade econômica, segurança jurídica e protagonismo social.
            </p>

            {/* Escopo bem definido */}
            <div className="p-4 rounded-2xl bg-[#311853]/5 border border-[#311853]/15 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="text-[#311853] block mb-1">Nosso Foco de Atuação:</strong>
              Trabalho restrito e especializado em <strong>projetos de fortalecimento institucional de organizações de catadores</strong>, <strong>programas municipais de coleta seletiva</strong> e <strong>investimentos privados na estruturação de organizações de catadores</strong>. Não realizamos operação logística de resíduos.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9AC31C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#311853] uppercase">
                    Clareza Técnica & Jurídica
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Diagnósticos embasados na Lei 12.305/10 e resoluções dos órgãos de controle.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E5006B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#311853] uppercase">
                    Viabilidade Real em Campo
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Soluções factíveis com o orçamento e maquinário disponível de cada operação.
                  </p>
                </div>
              </div>
            </div>

            {/* Conexões Oficiais no LinkedIn */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={contactData.linkedinDanielUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2]/15 text-[#0A66C2] font-semibold text-xs transition-colors border border-[#0A66C2]/20"
                title="Acessar LinkedIn de Daniel Carvalho"
              >
                <Linkedin className="w-3.5 h-3.5 fill-current" />
                <span>Perfil de Daniel Carvalho no LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <a
                href={contactData.linkedinCompanyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors border border-slate-200"
                title="Acessar página da Cicla no LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2] fill-current" />
                <span>Página da Cicla no LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>
        </div>

        {/* Bloco 2: Linha do Tempo com os Grandes Projetos da Marca */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#311853] bg-[#9AC31C]/25 px-3 py-1 rounded-full">
              Histórico & Linha do Tempo
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#311853] mt-3 mb-2">
              Grandes Marcos na Trajetória da Cicla
            </h3>
            <p className="text-sm text-slate-600">
              Projetos estruturantes que consolidaram nossa reputação em âmbito municipal e corporativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Marco 1: EcoCidadão */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-[#311853] text-[#9AC31C] flex items-center justify-center font-extrabold text-sm mb-4">
                07-09
              </div>
              <span className="text-xs font-bold uppercase text-[#41B6C0] block mb-1">
                Curitiba · Pioneirismo Nacional
              </span>
              <h4 className="text-base font-bold text-[#311853] mb-2">
                Projeto EcoCidadão
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Daniel Carvalho coordenou a implantação do projeto pioneiro de inclusão de catadores de materiais recicláveis na gestão municipal de resíduos em Curitiba.
              </p>
            </div>

            {/* Marco 2: Coca-Cola Brasil */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-[#E5006B] text-white flex items-center justify-center font-extrabold text-sm mb-4">
                13-19
              </div>
              <span className="text-xs font-bold uppercase text-[#E5006B] block mb-1">
                Coca-Cola Brasil · Escala Nacional
              </span>
              <h4 className="text-base font-bold text-[#311853] mb-2">
                Coletivo Reciclagem
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monitoramento do desenvolvimento e gestão de dados de mais de 300 organizações de catadores pelo Brasil, tangibilizando o investimento social corporativo.
              </p>
            </div>

            {/* Marco 3: SP Coopera */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-[#41B6C0] text-white flex items-center justify-center font-extrabold text-sm mb-4">
                SP
              </div>
              <span className="text-xs font-bold uppercase text-[#311853] block mb-1">
                Prefeitura de São Paulo · Gestão Pública
              </span>
              <h4 className="text-base font-bold text-[#311853] mb-2">
                Programa SP Coopera
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Atuação técnica na ampliação do número de cooperativas conveniadas à Prefeitura de São Paulo, assegurando dignidade e condições de trabalho estruturadas.
              </p>
            </div>
          </div>
        </div>

        {/* Bloco 3: História, Missão, Visão e Valores da Cicla */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#9AC31C] bg-[#9AC31C]/15 px-3 py-1 rounded-full">
              Cultura Institucional
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#311853] mt-3 mb-2">
              Nossos Princípios Fundamentais
            </h3>
            <p className="text-sm text-slate-600">
              O que guia cada diagnóstico territorial, programa municipal e projeto de investimento social que desenhamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Missão / Propósito */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#311853] text-white flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-[#9AC31C]" />
                </div>
                <h4 className="text-lg font-bold text-[#311853] mb-2">
                  Propósito
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  “Construir conexões que transformam resíduos em dignidade e mercado para quem coleta.”
                </p>
              </div>
            </div>

            {/* Visão */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#311853] text-white flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5 text-[#41B6C0]" />
                </div>
                <h4 className="text-lg font-bold text-[#311853] mb-2">
                  Visão
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ser a consultoria de referência na união entre conformidade técnica da PNRS, eficiência da gestão municipal e emancipação socioprodutiva de catadores.
                </p>
              </div>
            </div>

            {/* Posicionamento */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#311853] text-white flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-[#E5006B]" />
                </div>
                <h4 className="text-lg font-bold text-[#311853] mb-2">
                  Posicionamento
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A Cicla é a consultoria que transforma a obrigação legal da PNRS em oportunidades reais — conectando prefeituras, empresas e catadores com clareza técnica e impacto social.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Valores Centrais da Marca Cicla & Conexão Direta com os ODS da ONU */}
          <div className="pt-6 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#311853]/10 text-[#311853] text-xs font-extrabold uppercase tracking-wider mb-2">
                  <Globe2 className="w-3.5 h-3.5 text-[#41B6C0]" />
                  <span>Cultura Institucional & Agenda 2030 da ONU</span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-[#311853] tracking-tight">
                  Os Quatro Valores da Cicla e a Conexão com os ODS
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  Nossos valores fundacionais não são conceitos abstratos: conectam-se diretamente a <strong>8 Objetivos de Desenvolvimento Sustentável da ONU</strong>, oferecendo respaldo técnico e métricas auditáveis para prefeituras e relatórios ESG de empresas.
                </p>
              </div>

              {/* Tag com contagem */}
              <div className="shrink-0 flex items-center gap-2 bg-[#311853] text-white px-3.5 py-2 rounded-2xl shadow-sm">
                <span className="text-xs font-medium text-white/80">Impacto Direto em:</span>
                <span className="text-sm font-extrabold text-[#9AC31C]">{agenda2030Summary.totalODSConectados} ODS da ONU</span>
              </div>
            </div>

            {/* Grid dos 4 Valores com ODS vinculados */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {valoresMarcaCicla.map((val) => (
                <div
                  key={val.id}
                  className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: val.accentColor }}
                  />

                  <div>
                    {/* Topo do Card */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span
                        className="text-xs font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider"
                        style={{
                          backgroundColor: `${val.accentColor}18`,
                          color: val.accentColor === '#9AC31C' ? '#311853' : val.accentColor,
                        }}
                      >
                        {val.number}. {val.title}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        Valor Essencial
                      </span>
                    </div>

                    {/* Definição do Valor */}
                    <h5 className="text-base font-bold text-[#311853] mb-2 leading-snug">
                      {val.description}
                    </h5>

                    {/* Impacto em Campo */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 bg-white p-3.5 rounded-xl border border-slate-200/70">
                      <strong className="text-slate-800 block mb-0.5 font-bold">Aplicação Prática em Campo:</strong>
                      {val.practicalImpact}
                    </p>
                  </div>

                  {/* ODS Conectados */}
                  <div className="pt-3 border-t border-slate-200/70">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block mb-2">
                      Conexão com os ODS da ONU:
                    </span>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {val.odsList.map((ods) => (
                        <div
                          key={ods.number}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-white text-xs font-bold transition-all shadow-xs"
                          style={{ backgroundColor: ods.color }}
                          title={`${ods.label} - ${ods.name}: ${ods.targetFocus}`}
                        >
                          <span className="text-[10px] font-black bg-black/20 px-1.5 py-0.5 rounded">
                            {ods.number}
                          </span>
                          <span className="text-[11px] font-semibold leading-tight">
                            {ods.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Detalhamento das Metas dos ODS */}
                    <div className="space-y-1.5 bg-white/70 p-3 rounded-xl border border-slate-100">
                      {val.odsList.map((ods) => (
                        <p key={`meta-${ods.number}`} className="text-[11px] text-slate-600 leading-relaxed flex items-start gap-2">
                          <span
                            className="w-2 h-2 rounded-full mt-1 shrink-0"
                            style={{ backgroundColor: ods.color }}
                          />
                          <span>
                            <strong className="text-slate-700">{ods.label}:</strong> {ods.targetFocus}
                          </span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Painel de Valor Estratégico para os 3 Públicos */}
            <div className="bg-[#311853] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-lg border border-white/10">
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
                style={{ backgroundColor: brandPalette.green }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Globe2 className="w-5 h-5 text-[#9AC31C]" />
                  <h5 className="text-base sm:text-lg font-bold text-white">
                    Por que a conexão com os ODS fortalece sua contratação ou investimento?
                  </h5>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1 text-xs sm:text-sm">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col justify-between">
                    <div>
                      <span className="text-[#41B6C0] font-bold block mb-1.5 uppercase tracking-wider text-xs">
                        Para Prefeituras (ODS 11, 12, 16 e 17)
                      </span>
                      <p className="text-white/80 leading-relaxed">
                        Embasamento formal para prestação de contas perante Tribunais de Contas, cumprimento das metas dos Planos Municipais de Gestão Integrada de Resíduos (PMGIRS) e redução dos custos com aterros sanitários com inclusão socioprodutiva.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col justify-between">
                    <div>
                      <span className="text-[#E5006B] font-bold block mb-1.5 uppercase tracking-wider text-xs">
                        Para Empresas (ODS 8, 12, 9 e 17)
                      </span>
                      <p className="text-white/80 leading-relaxed">
                        Métricas tangíveis e auditáveis para relatórios ESG (Pacto Global, GRI, ISE B3), garantindo que investimentos privados fortaleçam galpões reais com governança comprovada e impacto social mensurável.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col justify-between">
                    <div>
                      <span className="text-[#9AC31C] font-bold block mb-1.5 uppercase tracking-wider text-xs">
                        Para Cooperativas (ODS 8, 1 e 10)
                      </span>
                      <p className="text-white/80 leading-relaxed">
                        Superação da invisibilidade histórica: reconhecimento dos catadores como prestadores de serviços ambientais qualificados, com remuneração justa por triagem, uso contínuo de EPIs e autonomia comercial.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
