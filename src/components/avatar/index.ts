import { Block, IData } from '@/utils/Block';
import { avatarTemplate } from './template';

export default class Avatar extends Block<IData> {
  render() {
    return avatarTemplate;
  }
}

