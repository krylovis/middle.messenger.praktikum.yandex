import { BASE_URL, HEADERS } from '@/utils/constants';
import { BaseApi, IReqData } from './BaseApi';

class ChatsApi extends BaseApi {
  constructor() {
    super({
      headers: HEADERS,
      baseUrl: BASE_URL,
      endpoint: '/chats',
    });
  }

  public getChats() {
    return this.get({ path: '/' });
  }

  public createChat({ data }: IReqData) {
    return this.post({ path: '/', data });
  }

  public deleteChat({ data }: IReqData) {
    return this.delete({ path: '/', data });
  }

  public addUserToChat({ data }: IReqData) {
    return this.put({ path: '/users', data });
  }

  public removeUserFromChat({ data }: IReqData) {
    return this.delete({ path: '/users', data });
  }
}

export const chatsApi = new ChatsApi();
