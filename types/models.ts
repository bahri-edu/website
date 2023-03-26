export interface News {
  id: string;
  title: Translate;
  description: Translate;
  type: NewsTypeEnum;
  images?: string[];
  createdAt: any;
}

export interface College {
  id: string;
  name: Translate;
  image: string;
  code: string;
  introduction: Translate;
  info: CollegeInfo;
  counter: Counter;
}

export interface Counter {
  student: number;
  department: number;
  staff: number;
}

export interface CollegeInfo {
  vision: Translate;
  academicQualification: Translate;
  bachelorProgram: Translate;
  registrationStep: Translate;
  collegeDepartment: Translate[];
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

export interface Social {
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

export interface VisionMission {
  id: string;
  title: Translate;
  description: Translate;
  sqNo: number;
  icon: string;
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

export interface HistoricalBackground {
  id: string;
  title: Translate;
  description: Translate;
}

export enum FactType {
  STUDENT = "STUDENT",
  STAFF = "STAFF",
}

export enum NewsTypeEnum {
  ACADEMIC = "ACADEMIC",
  GENERAL = "GENERAL",
}
