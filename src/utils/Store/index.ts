/* eslint-disable @typescript-eslint/no-dynamic-delete */
import EventBus from "@/utils/EventBus";
import { set } from "@/utils/helpers";
import { EPopupTriggers, EDropdownMenuTriggers } from '@/utils/constants';

export enum StoreEvents {
  Updated = 'updated',
}

export interface IUser {
  "id": number,
  "first_name": string,
  "second_name": string,
  "display_name"?: string,
  "phone": string,
  "login": string,
  "avatar"?: string,
  "email": string
}

export interface IChat {
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

export interface IMessage {
  "chat_id": number,
  "time": string,
  "type": string,
  "user_id": string,
  "content": string,
  "file"?: {
    "id": number,
    "user_id": number,
    "path": string,
    "filename": string,
    "content_type": string,
    "content_size": number,
    "upload_date": string,
  }
}

export interface IState {
  chatsList?: IChat[];
  messagesList: IMessage[];
  currentUser?: IUser;
  currentChat?: IChat | null;
  currentChatId?: number | null;
  [EPopupTriggers.AVATAR_CHANGE]?: boolean;
  [EPopupTriggers.ADD_CHAT]?: boolean;
  [EPopupTriggers.ADD_USER]?: boolean;
  [EPopupTriggers.REMOVE_USER]?: boolean;
  [EDropdownMenuTriggers.HEADER_MENU]?: boolean;
}

export class Store extends EventBus {
  private state: IState = {
    [EDropdownMenuTriggers.HEADER_MENU]: false,
    messagesList: [],
  };

  constructor() {
    super();
    this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated);
  };

  public setMessage(message: IMessage) {
    set(this.state, 'messagesList', [message, ...this.state.messagesList]);
    this.emit(StoreEvents.Updated);
  };

  public getAllState() {
    return this.state;
  }

  public toggleCurrentChat(chatId: number) {
    if (this.state.currentChat?.id === chatId) {
      set(this.state, 'currentChat', null);
    } else {
      const selectedChat = this.state.chatsList?.find(({ id }) => id === chatId);
      set(this.state, 'currentChat', JSON.parse(JSON.stringify(selectedChat)));
    }

    this.emit(StoreEvents.Updated);
  }

  public toggleValue(path: string, value: unknown) {
    const currentValue = this.state[path as keyof IState];

    if (currentValue !== value) {
      set(this.state, path, value);
    } else {
      set(this.state, path, null);
    }
  }

  public toggle(path: string) {
    const currentValue = this.state[path as keyof IState];
    set(this.state, path, !currentValue);

    this.emit(StoreEvents.Updated);
  }

  public getState(key: string)  {
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
