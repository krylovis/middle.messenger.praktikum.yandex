import Block, { IData } from '@/utils/Block';
import { connectWithChats } from '@/utils/connects';
import { chatListTemplate } from './template';

class ChatList extends Block<IData> {
  constructor(props: IData) {
    super({
      ...props,
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
