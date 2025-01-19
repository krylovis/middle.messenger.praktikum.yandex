import store, { IChat } from '@/utils/Store';
import Block, { IData } from '@/utils/Block';
import { connectWithChats } from '@/utils/connects';
import { chatListTemplate } from './template';
import { EPopupTriggers } from '@/utils/constants';
import ChatsController from '@/utils/controllers/ChatsController';

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

    if ((chatsList as IChat[])?.length) {
      this.lists.lists = (chatsList as IChat[]).map(({
        id, title, last_message, unread_count, avatar,
      }) => {
        const chatAvatar = new Avatar({ avatar });
        const currentChatId = `chat-${id}`;

        return new ChatItem({
          Avatar: chatAvatar,
          title,
          lastMessage: last_message?.content,
          unreadCount: unread_count,
          time: last_message?.time,
          attr: { id: currentChatId },
          events: {
            click: (event) => {
              event.preventDefault();
              store.toggleCurrentChat(id);

              const list = document.querySelectorAll('.chat-item');
              const selectedItem = Array.from((list as NodeListOf<Element>))
                .find((item) => item.classList.contains('chat-item_selected'));

              if (selectedItem) {
                selectedItem.classList.remove('chat-item_selected');

                if (selectedItem?.id === currentChatId) {
                  return;
                }
              }

              list.forEach((item) => {
                if (item.id === currentChatId) {
                  item.classList.add('chat-item_selected');
                }
              });

              ChatsController.createWebSocket(id);
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
