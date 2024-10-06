import Block, { IData } from '@/utils/Block';
import { chatHeaderTemplate } from './template';

export default class ChatHeader extends Block<IData> {
  render() {
    return chatHeaderTemplate;
  }
}
