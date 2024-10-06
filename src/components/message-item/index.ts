import Block, { IData } from '@/utils/Block';
import { messageItemTemplate } from './template';

export default class MessageItem extends Block<IData> {
  render() {
    return messageItemTemplate;
  }
}
