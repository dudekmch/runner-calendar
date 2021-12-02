import { useState, useCallback } from "react";

export interface IRequestConfig {
    url: string;
    method: HttpMethod;
    authorizationHeaderValue?: string;
    body?: {};
    includeCredentials?: boolean;
  }
  
  export enum HttpMethod {
    GET = "GET",
    POST = "POST",
  }

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const sendRequest = useCallback(async (requestConfig: IRequestConfig,
    applyData: (data: any) => void) => {
    setIsLoading(true);
    setError('');

    const headers = [
      ['Content-Type', 'application/json']
    ]
    if(requestConfig.includeCredentials){
      headers.push(['Authorization','Basic ' + requestConfig.authorizationHeaderValue!])
    }
 
    try {
      const response: Response = await fetch(process.env.REACT_APP_BACKEND_URL + requestConfig.url, {
        method: requestConfig.method ? requestConfig.method.valueOf() : HttpMethod.GET.valueOf(),
        credentials: requestConfig.includeCredentials ? 'include' as RequestCredentials : 'omit' as RequestCredentials,
        headers: headers as HeadersInit,
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      applyData(response);
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
