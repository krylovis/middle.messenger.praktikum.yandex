/* eslint-disable @typescript-eslint/no-unused-vars */
import { BASE_URL, HEADERS} from '@/utils/constants'

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
      req.open(method, `${this._baseUrl}${path}`);

      // req.withCredentials = true;
      req.responseType = 'json';
      if(timeout) {
        req.timeout = timeout;
      }

      if(this._headers.length) {
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

      if (method === METHODS.GET || method === METHODS.PUT && data) {
				req.send(data);
			} else {
				req.send();
			}

      req.send();
    })
  }
}

export const api = new Api({
  baseUrl: BASE_URL,
  headers: HEADERS,
});
