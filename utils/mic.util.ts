import { CouncilTypeEnum, DeanshipTypeEnum, Translate } from "@/types/models";

export const getCouncil = (councilType: string): Translate => {
  switch (councilType) {
    case CouncilTypeEnum.UNIVERSITYCOUNCIL:
      return {
        ar: "مجلس الجامعة",
        en: "University Council",
      };

    case CouncilTypeEnum.DEANSCOUNCIL:
      return {
        ar: "مجلس العمداء",
        en: "Deans Council",
      };

    case CouncilTypeEnum.PROFESSORSCOUNCIL:
      return {
        ar: "مجلس الأساتذة",
        en: "Professors Council",
      };

    default:
      return {
        ar: "",
        en: "",
      };
  }
};

export const getDeanship = (deanshipType: string): Translate => {
  switch (deanshipType) {
    case DeanshipTypeEnum.DEANSHIPOFSCIENTIFICRESEARCH:
      return {
        ar: "عمادة البحث العلمي",
        en: "Deanship of Scientific Research",
      };

    case DeanshipTypeEnum.DEANSHIPOFSTUDENTAFFAIRS:
      return {
        ar: "عمادة شؤون الطلاب",
        en: "Deanship of Student Affairs",
      };

    case DeanshipTypeEnum.DEANSHIPOFLIBRARIES:
      return {
        ar: "عمادة المكتبات",
        en: "Deanship of Libraries",
      };

    default:
      return {
        ar: "",
        en: "",
      };
  }
};
