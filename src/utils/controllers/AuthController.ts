import { authApi } from '@/utils/Api/AuthApi';
import { IReqData } from '@/utils/Api/BaseApi';
import { router } from '@/utils/Router';
import store from '@/utils/Store';

class AuthController {
  private api;

  constructor() {
    this.api = authApi;
  }

  async signUp(data: IReqData) {
    await this.api.signUp(data)
      .then((id) => {
        if (id) {
          this.getUser();
          router.go('/messenger');
        }
      })
      .catch(console.error);
  }

  async signIn(data: IReqData) {
    await this.api.signIn(data)
      .then(() => {
        this.getUser();
        router.go('/messenger');
      })
      .catch(console.error);;
  }

  async getUser() {
    await this.api.getUser()
      .then((user) => {
        if (user) {
          store.set('currentUser', user);
        }
      })
      .catch(console.error);
  }

  async logout() {
    await this.api.logout();
    router.go('/');
  }
}

export default new AuthController();
