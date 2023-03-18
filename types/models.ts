export interface News {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  type: NewsTypeEnum;
  images?: string[];
  createdAt: any;
}

export interface EService {
  id: string;
  titleAr: string;
  titleEn: string;
  icon: string;
  seqNo: number;
}

export interface FactAndFigure {
  id: string;
  count: number;
  descriptionAr: string;
  descriptionEn: string;
  type: FactType;
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
