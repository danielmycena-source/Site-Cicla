export type FrenteId = 'economia-circular' | 'coleta-seletiva' | 'organizacoes-catadores';

export interface FrenteAtuacao {
  id: FrenteId;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  accentColor: string;
  bgLight: string;
  borderAccent: string;
  iconName: 'RotateCcw' | 'Building2' | 'Users2';
  tag: string;
  keyAspects: {
    title: string;
    description: string;
  }[];
  audienceNote: string;
}

export interface ExperienciaDocumentada {
  id: string;
  title: string;
  frenteId: FrenteId;
  frenteLabel: string;
  summary: string;
  documentedContext: string;
  keyContributions: string[];
  referenceDocument: {
    source: string;
    page: string;
    period?: string;
  };
  accentColor: string;
}

export interface ContactInfo {
  name: string;
  brand: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  emailUrl: string;
  phoneUrl: string;
  linkedinDanielUrl: string;
  linkedinCompanyUrl: string;
}
