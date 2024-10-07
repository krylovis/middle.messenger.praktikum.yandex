import Block, { IData } from '@/utils/Block';
import { chatFooterTemplate } from './template';

export default class ChatFooter extends Block<IData> {
  render() {
    return chatFooterTemplate;
  }
}
