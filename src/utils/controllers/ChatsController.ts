import { chatsApi } from '@/utils/Api/ChatsApi';
// import { IReqData } from '@/utils/Api/BaseApi';
import store from '@/utils/Store';

class ChatsController {
  private api;

  constructor() {
    this.api = chatsApi;
  }

  async getChats() {
    await this.api.getChats()
      .then((chatsList) => {
        if (chatsList) {
          store.set('chatsList', chatsList);
        }
      })
      .catch(console.error);
  }
}

export default new ChatsController();
