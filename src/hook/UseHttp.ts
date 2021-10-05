import { useState, useCallback } from "react";

export interface IRequestConfig {
    url: string;
    method: HttpMethod;
    headers?: HeadersInit;
    body?: {};
  }
  
  export enum HttpMethod {
    GET,
    POST,
  }

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const sendRequest = useCallback(async (requestConfig: IRequestConfig,
    applyData: (data: any) => void) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method.toString() : HttpMethod.GET.toString(),
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError((err as Error).message);
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
