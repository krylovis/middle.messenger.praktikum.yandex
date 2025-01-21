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
    const formatter = new Intl.DateTimeFormat('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })

    if ((messagesList as IMessage[])?.length) {
      this.lists.lists = [{ date: '', data: messagesList}].map(({ date, data }) => {
        const messageItemList = (data as IMessage[]).map(({
          chat_id, content, time, user_id,
        }) => {
          const isOwner = (currentUser as IUser)?.id === user_id;
          const classList = [];
          const formatTime = time ? formatter.format(new Date(time)) : '';

          if (isOwner) {
            classList.push('message-item_type_owner');
          }

          return new MessageItem({
            owner: isOwner,
            message: content,
            sentedAt: formatTime,
            attr: { class: classList },
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
