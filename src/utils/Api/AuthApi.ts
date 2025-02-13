import { BASE_URL, HEADERS } from '@/utils/constants';
import { BaseApi, IReqData } from './BaseApi';

class AuthApi extends BaseApi {
  constructor() {
    super({
      headers: HEADERS,
      baseUrl: BASE_URL,
      endpoint: '/auth',
    });
  }

  public signUp({ data }: IReqData) {
    return this.post({ path: '/signup', data });
  }

  public signIn({ data }: IReqData) {
    return this.post({ path: '/signin', data });
  }

  public getUser() {
    return this.get({ path: '/user' });
  }

  public logout() {
    return this.post({ path: '/logout' });
  }
}

export const authApi = new AuthApi();
