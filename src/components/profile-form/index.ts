import Block, { IData } from '@/utils/Block';
import { profileFormTemplate } from './template';

export default class ProfileForm extends Block<IData> {
  render() {
    return profileFormTemplate;
  }
}
