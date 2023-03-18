export interface ITranslate {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export function useTranslate(model: ITranslate, locale: string | undefined) {
  const lng = locale === "en" ? "en" : "ar";
  return (key: string) => model?.[key]?.[lng] || "";
}
