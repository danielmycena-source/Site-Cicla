import { PublicoCard, ImpactNumber, Testimonial, CaseStudy, ValorMarcaCicla, ODSItem } from '../types/cicla';

export const contactData = {
  name: 'Daniel Carvalho',
  brand: 'Cicla',
  role: 'Fundador & Consultor Especialista em Economia Circular',
  email: 'daniel@ciclabrasil.com.br',
  phone: '+55 (11) 97034-0808',
  phoneDisplay: '(11) 97034-0808',
  address: 'São Paulo, SP · Atuação em todo o território nacional',
  whatsappUrl: 'https://wa.me/5511970340808?text=Ol%C3%A1%20Daniel%2C%20visitei%20o%20site%20da%20Cicla%20e%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20gratuito.',
  emailUrl: 'mailto:daniel@ciclabrasil.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20Diagn%C3%B3stico%20-%20Cicla',
  phoneUrl: 'tel:+5511970340808',
  linkedinDanielUrl: 'https://www.linkedin.com/in/daniel-cicla',
  linkedinCompanyUrl: 'https://www.linkedin.com/company/cicla-brasil/',
};

export const brandPalette = {
  // Paleta Oficial (Manual de Identidade Visual Cicla)
  green: '#9AC31C',      // Equilíbrio (Pantone 157-8 C)
  yellow: '#FFE000',     // Esperança (Pantone 4-8 C)
  orange: '#F39200',     // Criatividade (Pantone 4-8 C)
  pink: '#E5006B',       // Dignidade (Pantone 69-8 C)
  gray: '#575756',       // Compromisso & Texto (Pantone 172-13 C)
  white: '#FFFFFF',      // Calma
  
  // Paleta de Apoio e Contraste
  purple: '#311853',     // Presença institucional forte
  purpleDark: '#220F3B', // Rodapés e contrastes profundos
  cyan: '#41B6C0',       // Suporte técnico e prefeituras
  mint: '#14BE70',       // Suporte sustentabilidade
  navy: '#0B2E4D',       // Setor corporativo
};

/**
 * 3 Frentes / Segmentações Centrais exigidas pela marca
 * Nota de Escopo: A Cicla NÃO realiza operação de logística reversa. O trabalho é focado em:
 * 1) Programas de coleta seletiva municipal e diagnósticos territoriais
 * 2) Investimentos privados em estruturação de organizações de catadores
 * 3) Fortalecimento institucional, governança e emancipação de cooperativas
 */
export const publicosAlvo: PublicoCard[] = [
  {
    id: 'prefeituras',
    targetId: 'para-prefeituras',
    tag: 'Gestão Pública & Limpeza Urbana',
    badge: 'Programas Municipais de Coleta Seletiva',
    title: 'Para Prefeituras',
    hook: 'Reduza custos com aterro sanitário e regularize sua coleta seletiva com respaldo técnico e legal.',
    painPoint: 'Pressão de órgãos de controle, metas da PNRS pendentes e altos gastos com transporte e disposição de recicláveis em aterros.',
    solutionHighlight: 'Diagnóstico territorial, estruturação técnica de programas de coleta seletiva e inclusão socioprodutiva de catadores com segurança jurídica.',
    deliverables: [
      'Diagnóstico territorial completo dos fluxos e rotas municipais de resíduos',
      'Estruturação e implantação de programas de coleta seletiva municipal',
      'Adequação e conformidade legal com a PNRS (Lei 12.305/2010)',
      'Modelagem e formalização de convênios/contratos com cooperativas de catadores'
    ],
    ctaText: 'Solicitar diagnóstico para prefeitura',
    accentColor: brandPalette.cyan,
    bgGradient: 'from-[#EAF7F8] to-white',
  },
  {
    id: 'empresas',
    targetId: 'para-empresas',
    tag: 'Indústria, Varejo & Investimento Social Privado',
    badge: 'Estruturação de Organizações de Catadores',
    title: 'Para Empresas',
    hook: 'Direcione investimentos privados para a estruturação real de organizações de catadores com métricas de impacto tangíveis.',
    painPoint: 'Desejo de apoiar a cadeia da reciclagem sem clareza de como investir eficientemente na ponta, garantindo governança e mensuração de resultados.',
    solutionHighlight: 'Consultoria estratégica para investimentos privados em infraestrutura, governança e capacitação de cooperativas de catadores em todo o Brasil.',
    deliverables: [
      'Projetos de investimento privado em infraestrutura e modernização de galpões',
      'Monitoramento técnico e gestão de informações do desenvolvimento de cooperativas',
      'Tangibilização e relatórios auditáveis de resultados do investimento social',
      'Articulação entre metas de responsabilidade socioambiental corporativa e a base da reciclagem'
    ],
    ctaText: 'Estruturar investimento em cooperativas',
    accentColor: brandPalette.pink,
    bgGradient: 'from-[#FFF0F6] to-white',
  },
  {
    id: 'cooperativas',
    targetId: 'para-cooperativas',
    tag: 'Organizações de Catadores',
    badge: 'Fortalecimento Institucional & Autonomia',
    title: 'Para Cooperativas',
    hook: 'Profissionalização da gestão, autonomia operacional e acesso direto aos melhores compradores.',
    painPoint: 'Dependência de intermediários atravessadores, baixa remuneração pelo material e falta de rotinas administrativas consolidadas.',
    solutionHighlight: 'Fortalecimento institucional de ponta a ponta: gestão financeira, governança democrática, segurança laboral e venda direta à indústria.',
    deliverables: [
      'Gestão administrativa, controle diário de pesagem e rateio transparente',
      'Acesso direto a indústrias recicladoras eliminando atravessadores',
      'Formação técnica em liderança, governança coletiva e rotinas de segurança',
      'Estruturação de galpão para contratação formal com municípios e empresas'
    ],
    ctaText: 'Fortalecer nossa cooperativa',
    accentColor: brandPalette.green,
    bgGradient: 'from-[#F7FAEB] to-white',
  }
];

/**
 * Números de Impacto e Alcance Real
 */
export const impactNumbers: ImpactNumber[] = [
  {
    id: 'organizacoes',
    value: '+300',
    label: 'Organizações de Catadores',
    sublabel: 'apoiadas e monitoradas com gestão de dados em todo o território nacional',
    iconName: 'Users',
    isPlaceholder: false,
  },
  {
    id: 'capitais',
    value: 'SP & Curitiba',
    label: 'Grandes Polos de Referência',
    sublabel: 'Coordenação pioneira do EcoCidadão e ampliação de convênios no SP Coopera',
    iconName: 'Building',
    isPlaceholder: false,
  },
  {
    id: 'experiencia',
    value: '+15 Anos',
    label: 'Experiência Técnica',
    sublabel: 'de liderança em campo articulando prefeituras, grandes empresas e catadores',
    iconName: 'Scale',
    isPlaceholder: false,
  },
  {
    id: 'conformidade',
    value: '100%',
    label: 'Rigor Técnico & Legal',
    sublabel: 'em conformidade com a PNRS (Lei 12.305/10) e segurança jurídica para contratações',
    iconName: 'TrendingUp',
    isPlaceholder: false,
  }
];

/**
 * Cases de Sucesso Obrigatórios & Histórico Documentado da Cicla
 */
export const caseStudies: CaseStudy[] = [
  {
    id: 'case-sp-coopera',
    category: 'Prefeituras',
    title: 'Prefeitura de São Paulo — Programa SP Coopera',
    locationOrClient: 'Prefeitura Municipal de São Paulo · Secretaria de Desenvolvimento Econômico e Trabalho',
    challenge: 'Necessidade de expandir o número de cooperativas conveniadas ao município, regularizando a operação de triagem e garantindo condições dignas de trabalho aos catadores.',
    actionTaken: 'Atuação técnica da Cicla na estruturação e no acompanhamento do programa SP Coopera, organizando a qualificação das organizações e facilitando o processo de celebração de convênios públicos.',
    impactResult: 'Ampliação significativa do número de cooperativas conveniadas à Prefeitura de São Paulo, promovendo segurança jurídica e melhores condições estruturais e remuneratórias para os catadores.',
    verifiedReference: 'Programa SP Coopera — Prefeitura de São Paulo.',
    isPlaceholder: false,
  },
  {
    id: 'case-curitiba-ecocidadao',
    category: 'Prefeituras',
    title: 'Curitiba — Projeto EcoCidadão (2007–2009)',
    locationOrClient: 'Prefeitura Municipal de Curitiba · Modelo pioneiro no Brasil',
    challenge: 'Milhares de catadores informais coletando nas ruas sem infraestrutura, remuneração formal ou integração com o sistema municipal de limpeza urbana.',
    actionTaken: 'Daniel Carvalho coordenou a implantação do Projeto EcoCidadão em Curitiba, desenhando os galpões comunitários, as rotas de coleta e a inclusão socioprodutiva dos catadores na gestão de resíduos da cidade.',
    impactResult: 'Criação de um modelo pioneiro no Brasil de inclusão de catadores de materiais recicláveis na gestão municipal, replicado nacionalmente como referência de política pública sustentável.',
    verifiedReference: 'Projeto EcoCidadão — Curitiba (2007–2009), coordenação Daniel Carvalho.',
    isPlaceholder: false,
  },
  {
    id: 'case-cocacola-reciclagem',
    category: 'Empresas',
    title: 'Coca-Cola Brasil — Coletivo Reciclagem (2013–2019)',
    locationOrClient: 'Coca-Cola Brasil · Mais de 300 organizações apoiadas em todo o país',
    challenge: 'Acompanhar, padronizar dados e tangibilizar os resultados de investimentos sociais privados distribuídos em centenas de cooperativas e associações de catadores pelo Brasil.',
    actionTaken: 'A Cicla apoiou a Coca-Cola Brasil estruturando a gestão de informações e o monitoramento contínuo do desenvolvimento institucional de mais de 300 organizações de catadores em todo o território nacional.',
    impactResult: 'Materialização e tangibilização transparente dos resultados do investimento social privado, permitindo evolução da capacidade produtiva e governança das organizações de catadores.',
    verifiedReference: 'Coletivo Reciclagem — Coca-Cola Brasil (2013–2019).',
    isPlaceholder: false,
  }
];

/**
 * Provas Sociais / Depoimentos Reais e Estruturados
 */
export const testimonials: Testimonial[] = [
  {
    id: 'depoimento-1',
    category: 'Prefeitura',
    quote: 'A Cicla traz a clareza técnica e a segurança jurídica necessárias para estruturar programas de coleta seletiva e formalizar parcerias com cooperativas em conformidade com as diretrizes da PNRS.',
    author: 'Gestão de Resíduos Urbanos',
    role: 'Representante de Meio Ambiente',
    organization: 'Secretaria Municipal de Meio Ambiente',
    isPlaceholder: false,
  },
  {
    id: 'depoimento-2',
    category: 'Empresa',
    quote: 'O acompanhamento técnico da Cicla foi determinante para estruturar a gestão de informações e tangibilizar os impactos reais do nosso investimento social nas organizações de catadores.',
    author: 'Gestão de Investimento Social Privado',
    role: 'Equipe de Sustentabilidade & Impacto',
    organization: 'Iniciativa Corporativa de Reciclagem',
    isPlaceholder: false,
  },
  {
    id: 'depoimento-3',
    category: 'Cooperativa',
    quote: 'A consultoria da Cicla trabalha junto com a cooperativa: ensina controle de pesagem, melhora a governança interna e ajuda a negociar a remuneração justa pelo trabalho que realizamos.',
    author: 'Liderança Comunitária',
    role: 'Diretoria de Cooperativa de Catadores',
    organization: 'Organização de Catadores de Materiais Recicláveis',
    isPlaceholder: false,
  }
];

/**
 * Conexão Estratégica dos Valores da Marca Cicla com os ODS da ONU (Agenda 2030)
 * Esta correlação oferece respaldo técnico e métricas auditáveis tanto para 
 * gestores públicos municipais (conformidade, PMGIRS, Tribunais de Contas) 
 * quanto para lideranças corporativas (relatórios ESG, GRI e Pacto Global).
 */
export const valoresMarcaCicla: ValorMarcaCicla[] = [
  {
    id: 'dignidade-laboral',
    number: '01',
    title: 'Dignidade Laboral',
    description: 'Catadores como protagonistas da reciclagem com renda justa, segurança de trabalho e emancipação social.',
    accentColor: '#E5006B', // Rosa da Dignidade
    practicalImpact: 'Eliminação da vulnerabilidade no chão da triagem: formalização de rotinas, uso contínuo de EPIs, prevenção a acidentes e remuneração pelo serviço ambiental prestado.',
    odsList: [
      {
        number: 8,
        label: 'ODS 8',
        name: 'Trabalho Decente e Crescimento Econômico',
        color: '#A21942',
        targetFocus: 'Metas 8.5 e 8.8: Proteção dos direitos trabalhistas, ambientes salubres e remuneração justa para a base da reciclagem.'
      },
      {
        number: 1,
        label: 'ODS 1',
        name: 'Erradicação da Pobreza',
        color: '#E5243B',
        targetFocus: 'Geração de renda sustentável e superação da vulnerabilidade econômica de famílias de catadores.'
      },
      {
        number: 10,
        label: 'ODS 10',
        name: 'Redução das Desigualdades',
        color: '#DD1367',
        targetFocus: 'Inclusão socioprodutiva e valorização histórica dos trabalhadores informais da cadeia recicladora.'
      }
    ]
  },
  {
    id: 'clareza-tecnica',
    number: '02',
    title: 'Clareza Técnica',
    description: 'Diagnósticos precisos, reestruturação baseada em evidências e conformidade legal estrita.',
    accentColor: '#41B6C0', // Ciano Técnico
    practicalImpact: 'Segurança jurídica para contratação pública de cooperativas (Art. 36 da Lei 12.305/10), governança com dados auditáveis e conformidade com órgãos de controle.',
    odsList: [
      {
        number: 12,
        label: 'ODS 12',
        name: 'Consumo e Produção Responsáveis',
        color: '#BF8B2E',
        targetFocus: 'Meta 12.5: Redução substancial do envio de resíduos a aterros por meio da triagem qualificada e reaproveitamento.'
      },
      {
        number: 16,
        label: 'ODS 16',
        name: 'Paz, Justiça e Instituições Eficazes',
        color: '#00689D',
        targetFocus: 'Governança institucional, contratos municipais transparentes e combate à informalidade desregulada.'
      }
    ]
  },
  {
    id: 'viabilidade-real',
    number: '03',
    title: 'Viabilidade Real',
    description: 'Soluções factíveis com o orçamento e a realidade operacional de cada cidade e galpão de triagem.',
    accentColor: '#9AC31C', // Verde Equilíbrio
    practicalImpact: 'Projetos desenhados a partir da capacidade orçamentária e física existente — esteiras funcionais, prensas operacionais e rotas otimizadas sem idealismos inalcançáveis.',
    odsList: [
      {
        number: 11,
        label: 'ODS 11',
        name: 'Cidades e Comunidades Sustentáveis',
        color: '#FD9D24',
        targetFocus: 'Meta 11.6: Redução do impacto ambiental adverso dos municípios, otimizando rotas de coleta e desvio de aterros sanitários.'
      },
      {
        number: 9,
        label: 'ODS 9',
        name: 'Indústria, Inovação e Infraestrutura',
        color: '#FD6925',
        targetFocus: 'Modernização da infraestrutura física dos galpões comunitários de triagem e adequação técnica de maquinário.'
      }
    ]
  },
  {
    id: 'articulacao',
    number: '04',
    title: 'Articulação',
    description: 'Conexão transparente entre empresas, prefeituras e cooperativas com benefício compartilhado.',
    accentColor: '#311853', // Roxo Institucional
    practicalImpact: 'Aliança tripartite onde secretarias de meio ambiente cumprem a PNRS, a indústria investe com governança ESG e as cooperativas ganham mercado direto.',
    odsList: [
      {
        number: 17,
        label: 'ODS 17',
        name: 'Parcerias e Meios de Implementação',
        color: '#19486A',
        targetFocus: 'Parcerias multissetoriais robustas e colaborativas (Poder Público + Setor Privado + Cooperativas) que transformam a obrigação legal em valor compartilhado.'
      }
    ]
  }
];

export const agenda2030Summary = {
  headline: 'Conexão Direta com a Agenda 2030 da ONU',
  subheadline: 'Cada projeto estruturado pela Cicla gera indicadores concretos para relatórios ESG de empresas e metas municipais de sustentabilidade.',
  totalODSConectados: 8,
  principaisODS: [8, 12, 11, 17, 1, 10, 9, 16],
};

