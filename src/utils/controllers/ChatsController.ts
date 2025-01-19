import { chatsApi } from '@/utils/Api/ChatsApi';
import { IReqData } from '@/utils/Api/BaseApi';
import { EPopupTriggers } from '@/utils/constants';
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

  async createChat(data: IReqData) {
    await this.api.createChat(data)
      .then((chat) => {
        if (chat) {
          store.set(EPopupTriggers.ADD_CHAT, false);
          this.getChats();
        }
      })
      .catch(console.error);
  }

  async addUserToChat(data: IReqData) {
    await this.api.addUserToChat(data)
      .then(() => {
        store.set(EPopupTriggers.ADD_USER, false);
      })
      .catch(console.error);
  }

  async removeUserFromChat(data: IReqData) {
    await this.api.removeUserFromChat(data)
      .then(() => {
        store.set(EPopupTriggers.REMOVE_USER, false);
      })
      .catch(console.error);
  }

  async getChatToken(data: IReqData) {
    await this.api.getChatToken(data)
      .then((response) => {
        return response;
      })
      .catch(console.error);
  }
}

export default new ChatsController();
