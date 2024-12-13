import Block, { IData } from '@/utils/Block';
import { connectWithChats } from '@/utils/connects';
import { chatListTemplate } from './template';

import {
  ButtonWithIcon,
} from '@/components';

const addChatBtn = new ButtonWithIcon({
  type: 'button',
  title: 'Добавить чат',
  iconName: 'add-item',
  events: {
    click: (event) => {
      console.log('event', event);
    }
  }
});

class ChatList extends Block<IData> {
  constructor(props: IData) {
    super({
      ...props,
      AddChatBtn: addChatBtn
    })
  }

  public componentBeforeMount(): void {
    if (this.props.chatsList) {
      //
    }
  }

  render() {
    return chatListTemplate;
  }
}

export default connectWithChats(ChatList)
