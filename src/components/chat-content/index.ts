import Block, { IData } from '@/utils/Block';
import { chatContentTemplate } from './template';
import { connectWithMessages } from '@/utils/connects';

export class ChatContent extends Block<IData> {
  constructor(props: IData) {
    super({
      ...props,
      lists: [],
    })
  }

  public updateLists(): void {
    const { messagesList } = this.props;
    console.log('messagesList', messagesList);
  }

  render() {
    return chatContentTemplate;
  }
}

export default connectWithMessages(ChatContent)
