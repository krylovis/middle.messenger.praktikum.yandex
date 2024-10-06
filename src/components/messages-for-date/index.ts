import Block, { IData } from '@/utils/Block';
import { messagesForDate } from './template';

export default class MessagesForDate extends Block<IData> {
  render() {
    return messagesForDate;
  }
}
