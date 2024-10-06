import { Block, IData } from '@/utils/Block';
import { profileAvatarTemplate } from './template';

export default class ProfileAvatar extends Block<IData> {
  render() {
    return profileAvatarTemplate;
  }
}
