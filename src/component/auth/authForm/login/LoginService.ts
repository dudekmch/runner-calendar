import { HttpMethod, IRequestConfig } from "../../../../hook/UseHttp";

export interface LoginCredentials {
    username: string,
    password: string
}

export const createRequestConfig = (credentials: LoginCredentials) : IRequestConfig => {
    return {
        url: '/login',
        method: HttpMethod.POST,
        includeCredentials: true,
        authorizationHeaderValue: createAuthorizationHeader(credentials),
        body: credentials
      };
}

const createAuthorizationHeader = (credentials: LoginCredentials) : string => {
    return window.btoa(unescape(encodeURIComponent(JSON.stringify(credentials))))
}