import { BASE_URL, HEADERS } from '@/utils/constants';
import { BaseApi, IReqData } from './BaseApi';

class UserApi extends BaseApi {
  constructor() {
    super({
      headers: HEADERS,
      baseUrl: BASE_URL,
      endpoint: '/user',
    });
  }

  public updateProfile({ data }: IReqData) {
    return this.put({ path: '/profile', data });
  }

  public changeAvatar({ data }: IReqData) {
    return this.put({ path: '/profile/avatar', data });
  }

  public changePassword({ data }: IReqData) {
    return this.put({ path: '/password', data });
  }

  public findUser({ data }: IReqData) {
    return this.post({ path: '/search', data });
  }
}

export const userApi = new UserApi();
