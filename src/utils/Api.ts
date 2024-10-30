import { BASE_URL, HEADERS } from '@/utils/constants'

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
interface IParams {
  baseUrl: string,
  headers: Record<string, string>,
}
interface IReqParams {
  method: METHODS,
  path?: string,
  timeout?: number,
  data?: FormData | string,
}
interface IReqData {
  path?: string,
  timeout?: number,
  data?: FormData | string,
}

class Api {
  _baseUrl;
  _headers;

  constructor({ baseUrl, headers }: IParams) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  private _request({ method, path = '', timeout, data }: IReqParams) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.withCredentials = true;
      req.open(method, `${this._baseUrl}${path}`);
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
        req.send(data);
      } else {
        req.send();
      }
    })
  }

  public get({ path }: IReqData) {
    return this._request({ method: METHODS.GET, path });
  }

  public post({ path, data }: IReqData) {
    return this._request({ method: METHODS.POST, path, data });
  }

  public put({ path, data }: IReqData) {
    return this._request({ method: METHODS.PUT, path, data });
  }

  public delete({ path }: IReqData) {
    return this._request({ method: METHODS.DELETE, path });
  }
}

export const api = new Api({
  baseUrl: BASE_URL,
  headers: HEADERS,
});
