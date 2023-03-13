const baseUrl = "https://website-api-le8m.onrender.com/api/";
export const uploadFileUrl = "https://upload-service.onrender.com/";

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
