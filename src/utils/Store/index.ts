/* eslint-disable @typescript-eslint/no-dynamic-delete */
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

interface IChats {
  "id": number,
  "title": string,
  "avatar": string,
  "unread_count": number,
  "created_by": number,
  "last_message": {
    "user": {
      "first_name": string,
      "second_name": string,
      "avatar": string,
      "email": string,
      "login": string,
      "phone": string
    },
    "time": string,
    "content": string
  }
}

export interface IState {
  chatsList?: IChats[];
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

  public getAllState() {
    return this.state;
  }

  public getState(key: string): IUser | boolean | null | IChats[] {
    const state = this.state[key as keyof IState];

    if (state) {
      return state;
    } else {
      return null;
    }
  }

  public delete(key: string): void {
    const state = this.state[key as keyof IState];

    if (state) {
      delete this.state[key as keyof IState];
    }
  }
}

export default new Store();
