import Block, { IData } from '@/utils/Block';
import store, { IUser, IMessage } from '@/utils/Store';
import { chatContentTemplate } from './template';
import { connectWithMessages } from '@/utils/connects';

import { MessageItem, MessagesForDate } from '@/components';

export class ChatContent extends Block<IData> {
  constructor(props: IData) {
    super({
      ...props,
    })
  }

  public updateLists(): void {
    const { messagesList } = this.props;
    const currentUser = store.getState('currentUser');
    const formatter = new Intl.DateTimeFormat('ru-RU', {
      year: 'numeric', month: 'numeric', day: 'numeric'
    })

    if ((messagesList as IMessage[])?.length) {
      const dates = new Set();
      const newData = [];

      for (const item of (messagesList as IMessage[])) {
        const date = formatter.format(new Date(item.time));
        dates.add(date);
      }

      for (const date of Array.from(dates).sort()) {
        const data = (messagesList as IMessage[])
        .filter((item) => formatter.format(new Date(item.time)) === date)
        .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())

        newData.push({ date, data });
      }

      this.lists.lists = newData.map(({ date, data }) => {
        const messageItemList = (data as IMessage[]).map(({
          chat_id, content, time, user_id,
        }) => {
          const classList = [];
          const messageId = `message-${chat_id}`;
          const isOwner = (currentUser as IUser)?.id === user_id;
          const formatTime = time ? formatter.format(new Date(time)) : '';

          if (isOwner) {
            classList.push('message-item_type_owner');
          }

          return new MessageItem({
            owner: isOwner,
            message: content,
            sentedAt: formatTime,
            attr: { id: messageId, class: classList },
          });
        });

        return new MessagesForDate({ date, lists: messageItemList });
      })
    } else {
      this.lists.lists = [];
    }
  }

  render() {
    return chatContentTemplate;
  }
}

export default connectWithMessages(ChatContent)
