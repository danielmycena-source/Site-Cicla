export type PublicoAlvoId = 'prefeituras' | 'empresas' | 'cooperativas';

export interface PublicoCard {
  id: PublicoAlvoId;
  targetId: string;
  tag: string;
  title: string;
  hook: string;
  painPoint: string;
  solutionHighlight: string;
  deliverables: string[];
  ctaText: string;
  accentColor: string;
  bgGradient: string;
  badge: string;
}

export interface ImpactNumber {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconName: 'Scale' | 'Building' | 'Users' | 'TrendingUp';
  isPlaceholder?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  category: 'Prefeitura' | 'Empresa' | 'Cooperativa';
  isPlaceholder?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: 'Prefeituras' | 'Empresas' | 'Cooperativas';
  locationOrClient: string;
  challenge: string;
  actionTaken: string;
  impactResult: string;
  verifiedReference?: string;
  isPlaceholder?: boolean;
}

export interface DiagnosisFormData {
  nome: string;
  email: string;
  telefone: string;
  organizacao: string;
  tipoPublico: 'prefeitura' | 'empresa' | 'cooperativa' | 'outro';
  municipioEstado: string;
  principalDesafio: string;
}

export interface ODSItem {
  number: number;
  label: string;
  name: string;
  color: string;
  targetFocus: string;
}

export interface ValorMarcaCicla {
  id: string;
  number: string;
  title: string;
  description: string;
  accentColor: string;
  practicalImpact: string;
  odsList: ODSItem[];
}

