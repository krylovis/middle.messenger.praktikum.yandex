import store, { IChats } from '@/utils/Store';
import Block, { IData } from '@/utils/Block';
import { connectWithChats } from '@/utils/connects';
import { chatListTemplate } from './template';
import { EPopupTriggers } from '@/utils/constants';

import {
  ChatItem,
  Avatar,
  ButtonWithIcon,
} from '@/components';

const addChatBtn = new ButtonWithIcon({
  type: 'button',
  title: 'Добавить чат',
  iconName: 'add-item',
  events: {
    click: () => {
      store.set(EPopupTriggers.ADD_CHAT, true);
    }
  }
});

class ChatList extends Block<IData> {
  constructor(props: IData) {
    super({
      ...props,
      lists: [],
      AddChatBtn: addChatBtn
    })
  }

  public updateLists(): void {
    const { chatsList } = this.props;

    if ((chatsList as IChats[])?.length) {
      this.lists.lists = (chatsList as IChats[]).map(({
        id, title, last_message, unread_count, avatar,
      }) => {
        const chatAvatar = new Avatar({ avatar });

        return new ChatItem({
          Avatar: chatAvatar,
          title,
          lastMessage: last_message?.content,
          unreadCount: unread_count,
          time: last_message?.time,
          events: {
              click: () => {
                store.toggleValue('currentChat', id);
              }
            }
        });
      });
    }
  }

  render() {
    return chatListTemplate;
  }
}

export default connectWithChats(ChatList)
