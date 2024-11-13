import EventBus from "@/utils/EventBus";
import { set } from "@/utils/helpers";

export enum StoreEvents {
  Updated = 'updated',
}

interface IUser {
  "id": number,
  "first_name": string,
  "second_name": string,
  "display_name"?: string,
  "phone": string,
  "login": string,
  "avatar"?: string,
  "email": string
}

export interface IState {
  currentUser?: IUser;
  isPopupOpen?: boolean;
}

class Store extends EventBus {
  private state: IState = {};

  constructor() {
    super();
    this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated);
  };

  public getState() {
    return this.state;
  }
}

export default new Store();
