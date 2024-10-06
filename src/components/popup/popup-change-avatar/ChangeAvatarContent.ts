import { Block, IData } from '@/utils/Block';
import { changeAvatarContentTemplate } from './template';

export default class ChangeAvatarContent extends Block<IData> {
  render() {
    return changeAvatarContentTemplate;
  }
}
