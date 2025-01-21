import Block, { IData } from '@/utils/Block';
import { profileAvatarTemplate } from './template';
import connectWithAvatar from '@/utils/connects/connectWithAvatar';

class ProfileAvatar extends Block<IData> {
  render() {
    return profileAvatarTemplate;
  }
}

export default connectWithAvatar(ProfileAvatar);
