import { userApi } from '@/utils/Api/UserApi';
import { IReqData } from '@/utils/Api/BaseApi';
import store from '@/utils/Store';

class UserController {
  private api;

  constructor() {
    this.api = userApi;
  }

  async updateProfile(data: IReqData) {
    await this.api.updateProfile(data)
      .then((user) => {
        if (user) {
          store.set('currentUser', user);
        }
      })
      .catch(console.error);
  }

  async changeAvatar(data: IReqData) {
    await this.api.changeAvatar(data)
      .then((user) => {
        if (user) {
          store.set('currentUser', user);
        }
      })
      .catch(console.error);;
  }

  async changePassword(data: IReqData) {
    await this.api.changePassword(data)
      .then((password) => {
        if (password) {
          console.log('password', password);
        }
      })
      .catch(console.error);
  }

  async findUser(data: IReqData) {
    await this.api.findUser(data)
      .then((password) => {
        if (password) {
          console.log('password', password);
        }
      })
      .catch(console.error);
  }
}

export default new UserController();
