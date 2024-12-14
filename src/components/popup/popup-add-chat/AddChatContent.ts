import Block, { IData } from '@/utils/Block';
import { addChatContentTemplate } from './template';

export default class AddChatContent extends Block<IData> {
  render() {
    return addChatContentTemplate;
  }
}
