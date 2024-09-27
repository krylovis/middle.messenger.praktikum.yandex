/* eslint-disable @typescript-eslint/no-unused-vars */
import { BASE_URL, HEADERS} from '@/utils/constants'

interface TParams {
  baseUrl: string,
  headers: Record<string, string>,
}

enum METHODS {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE'
}

class Api {
  _baseUrl;
  _headers;

  constructor({ baseUrl, headers }: TParams) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // const request = new XMLHttpRequest();
}

export const api = new Api({
  baseUrl: BASE_URL,
  headers: HEADERS,
});
