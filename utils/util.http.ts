const baseUrl = "http://164.92.186.47:4000/api/";
export const uploadFileUrl = "http://164.92.186.47:4004/";

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
