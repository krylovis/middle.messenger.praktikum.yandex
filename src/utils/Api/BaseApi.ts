import { BASE_URL, HEADERS } from '@/utils/constants';

export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface IParams {
  baseUrl: string,
  endpoint?: string,
  headers: Record<string, string>,
}

export interface IReqParams {
  method: METHODS,
  path?: string,
  timeout?: number,
  data?: FormData | string,
}

export interface IReqData {
  path?: string,
  timeout?: number,
  data?: FormData | string,
}

export class BaseApi {
  _baseUrl;
  _endpoint;
  _headers;
  _url;

  constructor({ baseUrl, headers, endpoint = '' }: IParams) {
    this._baseUrl = baseUrl;
    this._endpoint = endpoint;
    this._headers = headers;
    this._url = `${this._baseUrl}${endpoint}`;
  }

  public request({ method, path = '', timeout, data }: IReqParams) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.withCredentials = true;
      req.open(method, `${this._url}${path}`);
      req.responseType = 'json';

      if (timeout) {
        req.timeout = timeout;
      }

      if (this._headers) {
        for (const key in this._headers) {
          req.setRequestHeader(key, this._headers[key]);
        }
      }

      req.onload = () => {
        if ([200, 201].includes(req.status)) {
          resolve(req.response);
        } else {
          reject(new Error(`Ошибка сервера: ${req.statusText}`));
        }
      };

      req.onerror = () => {
        reject(new Error(`Ошибка соединения: ${req.status}`));
      };

      if (method === METHODS.POST || method === METHODS.PUT && data) {
        if (typeof data === 'string') {
          req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        }
        req.send(data);
      } else {
        req.send();
      }
    })
  }

  public get({ path }: IReqData) {
    return this.request({ method: METHODS.GET, path });
  }

  public post({ path, data }: IReqData) {
    return this.request({ method: METHODS.POST, path, data });
  }

  public put({ path, data }: IReqData) {
    return this.request({ method: METHODS.PUT, path, data });
  }

  public delete({ path }: IReqData) {
    return this.request({ method: METHODS.DELETE, path });
  }
}

export const api = new BaseApi({
  baseUrl: BASE_URL,
  headers: HEADERS,
});
