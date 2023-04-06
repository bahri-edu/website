export interface News {
  id: string;
  title: Translate;
  description: Translate;
  type: NewsTypeEnum;
  images?: string[];
  createdAt: any;
}

export interface NewsResponse {
  data: News[];
  totalDocs: number;
  totalPages: number;
  page: number;
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

export interface ViceChancellorMessage {
  id: string;
  title: Translate;
  descriptions: Translate[];
}

export enum FactType {
  STUDENT = "STUDENT",
  STAFF = "STAFF",
}

export enum NewsTypeEnum {
  ACADEMIC = "ACADEMIC",
  GENERAL = "GENERAL",
}

export enum CurrentPositionTypeEnum {
  VICE_CHANCELLOR,
  DEPUTY_VICE_CHANCELLOR,
  PRINCIPAL,
  SECRETARY_OF_SCIENTIFIC_AFFAIRS,
}

export interface CurrentAdministration {
  id: string;
  name: Translate;
  imageUrl: string;
  birthdate: string;
  degree: Translate;
  email: string;
  phone: string;
  position: Translate;
  qualifications: Translate[];
  socials: Social[];
  positionType: CurrentPositionTypeEnum;
}

export interface UpdateCurrentAdministration {
  id: string;
  change: Partial<CurrentAdministration>;
}

export interface Info {
  title: Translate;
  icon: string;
  description: Translate;
}

export interface Staff {
  name: Translate;
  position: Translate;
  email: string;
  phone: string;
}

export interface UniversityAdministration {
  unit: Translate;
  introduction: Translate;
  info: Info[];
  staffTitle: Translate;
  staff: Staff[];
  slug: string;
}

export interface Logo {
  id: string;
  title: Translate;
  description: Translate;
  seqNo: number;
}
