import store from '@/utils/Store';
import Block, { IData } from '@/utils/Block';
import { connectWithChats } from '@/utils/connects';
import { chatListTemplate } from './template';
import { EPopupTriggers } from '@/utils/constants';

import {
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
