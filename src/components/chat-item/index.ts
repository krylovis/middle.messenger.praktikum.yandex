import Block, { IData } from '@/utils/Block';
import { chatItemTemplate } from './template';

export default class ChatItem extends Block<IData> {
  render() {
    return chatItemTemplate;
  }
}
