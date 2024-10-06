import { Block, IData } from '@/utils/Block';
import { chatListTemplate } from './template';

export default class ChatList extends Block<IData> {
  render() {
    return chatListTemplate;
  }
}
