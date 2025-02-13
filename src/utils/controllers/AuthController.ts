import { authApi } from '@/utils/Api/AuthApi';
import { IReqData } from '@/utils/Api/BaseApi';
import { router } from '@/utils/Router';
import chatsController from '@/utils/controllers/ChatsController';
import store from '@/utils/Store';

class AuthController {
  private api;

  constructor() {
    this.api = authApi;
  }

  async signUp(data: IReqData) {
    await this.api.signUp(data)
      .then(async (id) => {
        if (id) {
          await this.getUser();
          router.go('/messenger');
        }
      })
      .catch(console.error);
  }

  async signIn(data: IReqData) {
    await this.api.signIn(data)
      .then(async () => {
        await this.getUser();
        router.go('/messenger');
      })
      .catch(console.error);
  }

  async getUser() {
    await this.api.getUser()
      .then(async (user) => {
        if (user) {
          store.set('currentUser', user);
          await chatsController.getChats();
        }
      })
      .catch(console.error);
  }

  async logout() {
    await this.api.logout()
      .then(() => {
        store.delete('currentUser');
        store.delete('chatsList');
        router.go('/');
      })
      .catch(console.error);
  }
}

export default new AuthController();
