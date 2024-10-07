import Block, { IData } from '@/utils/Block';
import { chatContentTemplate } from './template';

export default class ChatContent extends Block<IData> {
  render() {
    return chatContentTemplate;
  }
}
