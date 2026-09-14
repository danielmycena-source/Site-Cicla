import { FrenteAtuacao, ExperienciaDocumentada, ContactInfo } from '../types';

export const contactData: ContactInfo = {
  name: 'Daniel Carvalho',
  brand: 'Cicla',
  email: 'daniel@ciclabrasil.com.br',
  phone: '+55 (11) 97034-0808',
  whatsappUrl: 'https://wa.me/5511970340808?text=Ol%C3%A1%20Daniel%2C%20visitei%20o%20site%20da%20Cicla%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.',
  emailUrl: 'mailto:daniel@ciclabrasil.com.br?subject=Contato%20via%20Site%20Cicla%20-%20Projeto',
  phoneUrl: 'tel:+5511970340808',
};

export const brandPalette = {
  // Paleta Principal do Manual de Identidade Visual Cicla
  green: '#9AC31C',      // Pantone 157-8 C - Equilíbrio
  yellow: '#FFE000',     // Pantone 4-8 C - Esperança
  orange: '#F39200',     // Pantone 4-8 C - Criatividade
  pink: '#E5006B',       // Pantone 69-8 C - Dignidade
  gray: '#575756',       // Pantone 172-13 C - Compromisso (texto)
  white: '#FFFFFF',      // Calma (fundo e respiro)
  
  // Paleta de Apoio
  purple: '#311853',     // Pantone 101-16 C - Títulos, contraste e botões de destaque
  cyan: '#41B6C0',       // Pantone 124-6 C - Elementos secundários
  mint: '#14BE70',       // Pantone 139-6 C - Elementos secundários
  navy: '#0B2E4D',       // Pantone 118-16 C - Alternativa de contraste
};

export const frentesAtuacao: FrenteAtuacao[] = [
  {
    id: 'economia-circular',
    title: 'Economia Circular & Parcerias Corporativas',
    shortTitle: 'Economia Circular',
    summary: 'Construção de projetos com empresas, articulação de elos da cadeia da reciclagem e estratégias sustentáveis de investimento.',
    description: 'Apoio a empresas e indústrias na concepção e viabilização de iniciativas que transformam materiais pós-consumo em recursos reais, com diálogo direto entre os setores produtivo, municipal e os operadores da reciclagem. A logística reversa e a conformidade regulatória integram essa frente como alavancas estruturantes de valor compartilhado.',
    accentColor: brandPalette.pink,
    bgLight: '#FFF5F8',
    borderAccent: '#F9C2D9',
    iconName: 'RotateCcw',
    tag: 'Frente 01 · Empresas & Cadeia Produtiva',
    keyAspects: [
      {
        title: 'Construção de Projetos sob Medida',
        description: 'Desenvolvimento de iniciativas conjuntas de circularidade conectando metas corporativas aos agentes que operam na ponta da cadeia.'
      },
      {
        title: 'Articulação da Cadeia de Reciclagem',
        description: 'Integração transparente entre geradores, recicladores, indústrias transformadoras e organizações de triagem.'
      },
      {
        title: 'Estratégias de Investimento & Logística Reversa',
        description: 'Orientação técnica para direcionamento eficiente de recursos de logística reversa e conformidade com a PNRS.'
      }
    ],
    audienceNote: 'Voltado a gestores de sustentabilidade, operações e compras em indústrias e empresas de bens de consumo.'
  },
  {
    id: 'coleta-seletiva',
    title: 'Desenvolvimento de Sistemas Municipais de Coleta Seletiva',
    shortTitle: 'Coleta Seletiva Municipal',
    summary: 'Desenvolvimento e reestruturação de sistemas públicos e parcerias locais, considerando a realidade e o contexto de cada município.',
    description: 'Diagnóstico e desenho técnico de sistemas municipais de coleta seletiva que equilibrem viabilidade operacional, regularização institucional, inclusão social e eficiência de custos para a administração pública.',
    accentColor: brandPalette.cyan,
    bgLight: '#F2FAFB',
    borderAccent: '#BCE8EC',
    iconName: 'Building2',
    tag: 'Frente 02 · Gestão Pública & Cidades',
    keyAspects: [
      {
        title: 'Diagnóstico Territorial & Municipal',
        description: 'Mapeamento de fluxos de resíduos, rotas de coleta e gargalos logísticos locais com olhar adaptado ao porte do município.'
      },
      {
        title: 'Reestruturação & Regularização',
        description: 'Apoio técnico para adequação legal, contratualização e modernização de operações de manejo de recicláveis.'
      },
      {
        title: 'Integração com Operadores Locais',
        description: 'Construção de arranjos que articulam o poder público municipal às cooperativas e associações locais.'
      }
    ],
    audienceNote: 'Voltado a secretários municipais, gestores públicos e consórcios intermunicipais de saneamento e meio ambiente.'
  },
  {
    id: 'organizacoes-catadores',
    title: 'Estruturação & Fortalecimento de Organizações de Catadores',
    shortTitle: 'Organizações de Catadores',
    summary: 'Apoio prático à estruturação, gestão administrativa, melhoria de infraestrutura e acesso qualificado ao mercado da reciclagem.',
    description: 'Trabalho de campo e assessoria orientados à emancipação e profissionalização de cooperativas e associações de catadores, garantindo condições dignas de trabalho, controle operacional e remuneração justa pelo serviço ambiental prestado.',
    accentColor: brandPalette.green,
    bgLight: '#F8FBEF',
    borderAccent: '#DCEDB0',
    iconName: 'Users2',
    tag: 'Frente 03 · Fortalecimento Comunitário & Gestão',
    keyAspects: [
      {
        title: 'Gestão Administrativa & Operacional',
        description: 'Implantação de rotinas de controle de estoque, pesagem, rateio financeiro transparente e governança coletiva.'
      },
      {
        title: 'Infraestrutura & Condições de Trabalho',
        description: 'Diagnóstico e planos de melhoria para layout de galpões, segurança ocupacional, maquinário e fluxos de triagem.'
      },
      {
        title: 'Acesso Direto ao Mercado',
        description: 'Capacitação para comercialização conjunta, corte de intermediários abusivos e negociação direta com a indústria.'
      }
    ],
    audienceNote: 'Voltado a lideranças de cooperativas, redes de catadores, institutos de fomento e investidores sociais.'
  }
];

export const experienciasDocumentadas: ExperienciaDocumentada[] = [
  {
    id: 'cooperativas-profissionalizacao',
    title: 'Profissionalização e Estruturação de Cooperativas',
    frenteId: 'organizacoes-catadores',
    frenteLabel: 'Organizações de Catadores',
    summary: 'Cinco cooperativas beneficiadas por programa abrangente de assessoria, tecnologia de gestão e melhorias físicas.',
    documentedContext: 'Iniciativa voltada à elevação da maturidade operacional e gerencial de cooperativas de triagem, combinando intervenções em infraestrutura com capacitação humana.',
    keyContributions: [
      'Assessoria técnica continuada realizada de forma remota e presencial;',
      'Implantação de software de gestão para controle de triagem, volumes e faturamento;',
      'Adequações de infraestrutura física e consultorias especializadas em processos produtivos.'
    ],
    referenceDocument: {
      source: 'Documento Institucional Cicla',
      page: 'Página 9',
      period: 'Novembro de 2022'
    },
    accentColor: brandPalette.green
  },
  {
    id: 'plataforma-indicadores',
    title: 'Metodologia de Diagnóstico e Plataforma de Indicadores',
    frenteId: 'organizacoes-catadores',
    frenteLabel: 'Metodologia & Monitoramento',
    summary: 'Estruturação de metodologia para diagnóstico, plano de ação e acompanhamento contínuo do desenvolvimento de cooperativas.',
    documentedContext: 'Ferramenta estruturada para mapear com clareza o estágio de maturidade das organizações de catadores e nortear planos de investimento com metas verificáveis.',
    keyContributions: [
      'Diagnóstico abrangente em quatro eixos: Gestão, Infraestrutura, Segurança do Trabalho e Acesso ao Mercado;',
      'Elaboração de planos de ação individualizados com base nos pontos críticos identificados;',
      'Sistema de monitoramento contínuo da evolução dos indicadores operacionais e sociais.'
    ],
    referenceDocument: {
      source: 'Metodologia Cicla - Plataforma Indicadores',
      page: 'Páginas 6 a 13',
      period: 'Versão 2020'
    },
    accentColor: brandPalette.cyan
  },
  {
    id: 'oleo-cozinha-sp',
    title: 'Logística Reversa e Reciclagem de Óleo de Cozinha Usado',
    frenteId: 'economia-circular',
    frenteLabel: 'Economia Circular',
    summary: 'Projeto para redução do descarte inadequado de óleo vegetal na Grande São Paulo com inclusão socioeconômica de catadores.',
    documentedContext: 'Construção de arranjo circular para coleta, destinação correta e reinserção de óleo residual comestível, mitigando impactos na rede hídrica e gerando renda.',
    keyContributions: [
      'Estruturação de rede de pontos de coleta e logística dedicada na Região Metropolitana de São Paulo;',
      'Integração de cooperativas e catadores no processo de recolhimento e pré-processamento;',
      'Destinação ambientalmente adequada com rastreabilidade da cadeia de valor.'
    ],
    referenceDocument: {
      source: 'Documento Institucional Cicla',
      page: 'Página 8',
      period: 'Março de 2017 a Dezembro de 2020'
    },
    accentColor: brandPalette.orange
  },
  {
    id: 'sistemas-municipais-sebrae',
    title: 'Apoio a Sistemas Municipais de Coleta Seletiva',
    frenteId: 'coleta-seletiva',
    frenteLabel: 'Coleta Seletiva Municipal',
    summary: 'Consultoria técnica via Sebrae para apoiar o poder público municipal na reestruturação e regularização legal de sistemas.',
    documentedContext: 'Atuação direta junto a administrações públicas municipais para superar os desafios técnicos, fiscais e contratuais da implementação da coleta seletiva.',
    keyContributions: [
      'Diagnóstico da infraestrutura e dos modelos contratuais vigentes no município;',
      'Assessoria técnica para regularização e conformidade com a Política Nacional de Resíduos Sólidos (PNRS);',
      'Elaboração de diretrizes para sustentabilidade econômico-financeira do sistema municipal.'
    ],
    referenceDocument: {
      source: 'Documento Institucional Cicla',
      page: 'Página 13',
      period: 'Novembro de 2022'
    },
    accentColor: brandPalette.purple
  }
];
