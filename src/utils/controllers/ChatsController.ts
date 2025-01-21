import { chatsApi } from '@/utils/Api/ChatsApi';
import { IReqData } from '@/utils/Api/BaseApi';
import { EPopupTriggers } from '@/utils/constants';
import chatWebSocket, { IMessage } from '@/utils/Api/ChatWebSocket';
import store, { IUser } from '@/utils/Store';

export interface IChatSelect {
  chatId: number,
}
class ChatsController {
  private api;

  constructor() {
    this.api = chatsApi;
  }

  setDefaultValueForChat() {
    const stateKeysList = ['messagesList', 'chatUsers'];

    for (const stateKey of stateKeysList) {
      store.set(stateKey, []);
    }
  }

  async getCurrentChatData({ chatId }: IChatSelect) {
    this.setDefaultValueForChat();

    this.getChatUsers({ chatId });
    this.createWebSocket({ chatId });
  }

  async createWebSocket({ chatId }: IChatSelect) {
    const token = await this.getChatToken({ chatId });
    const { id } = store.getState('currentUser') as IUser;

    if (typeof token === 'string') {
      chatWebSocket.createWebSocket({ token, userId: id, chatId });
    }
  }

  sendMessage({ message }: IMessage) {
    chatWebSocket.sendMessage({ message });
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
    interface IToken { token?: string }

    return await this.api.getChatToken(data)
      .then((response) => {
        return (response as IToken).token;
      })
      .catch(console.error);
  }

  async getChatUsers(data: IReqData) {
    await this.api.getChatUsers(data)
      .then((response) => {
        store.set('chatUsers', response);
      })
      .catch(console.error);
  }
}

export default new ChatsController();
