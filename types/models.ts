export interface News {
  id: string;
  title: Translate;
  description: Translate;
  type: NewsTypeEnum;
  images?: string[];
  createdAt: any;
}

export interface EService {
  id: string;
  title: Translate;
  icon: string;
  seqNo: number;
}

export interface FactAndFigure {
  id: string;
  count: number;
  description: Translate;
  type: FactType;
}

interface Social {
  icon: string;
  url: string;
}

export interface Contact {
  location: Translate;
  phone: string[];
  email: string;
  fax: string;
  socials: Social[];
}

export interface RelatedSite {
  text: Translate;
  url: string;
  seqNo: number;
}

export interface Translate {
  en: string;
  ar: string;
}

export interface UpdateFactAndFigure {
  id: string;
  change: Partial<FactAndFigure>;
}

export enum FactType {
  STUDENT = "STUDENT",
  STAFF = "STAFF",
}

export enum NewsTypeEnum {
  ACADEMIC = "ACADEMIC",
  GENERAL = "GENERAL",
}
