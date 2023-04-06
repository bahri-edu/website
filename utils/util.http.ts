import { CurrentPositionTypeEnum } from "@/types/models";

//const baseUrl = "http://164.92.186.47:4000/api/";
const baseUrl = "http://localhost:4000/api/";
export const uploadFileUrl = "http://164.92.186.47:4004/";
// export const uploadFileUrl = "http://localhost:4004/";

export interface HttpRequestOptions {
  method?: string;
  body?: any;
}

export const httpClient = async (url: string, options?: HttpRequestOptions) => {
  const response = await fetch(baseUrl + url, {
    method: options?.method || "GET",
    headers: {
      "Content-Type": "application/json",
    },
    ...(options?.body && { body: JSON.stringify(options.body) }),
  });

  const data = await response.json();

  if (!response.ok) {
    return Promise.reject(
      data?.errors?.map((r: any) => r.message)?.toString() || "server error"
    );
  }

  return Promise.resolve(data);
};

export type CurrentPositionType =
  | "vice-chancellor"
  | "deputy-vice-chancellor"
  | "principal"
  | "secretary-of-scientific-affairs";

export const getCurrentPosition = (
  type: CurrentPositionType
): CurrentPositionTypeEnum => {
  switch (type) {
    case "vice-chancellor":
      return CurrentPositionTypeEnum.VICE_CHANCELLOR;
    case "deputy-vice-chancellor":
      return CurrentPositionTypeEnum.DEPUTY_VICE_CHANCELLOR;
    case "principal":
      return CurrentPositionTypeEnum.PRINCIPAL;
    case "secretary-of-scientific-affairs":
      return CurrentPositionTypeEnum.SECRETARY_OF_SCIENTIFIC_AFFAIRS;
    default:
      return CurrentPositionTypeEnum.VICE_CHANCELLOR;
  }
};

export const numberToArry = (number: number) =>
  Array.from(new Array(number), (x, i) => i + 1);
