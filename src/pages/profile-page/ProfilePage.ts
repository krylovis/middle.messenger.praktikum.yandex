import Block from '@/utils/Block/index';
import { profilePageTemplate } from './template';

export default class ProfilePage extends Block {
  constructor(props) {
    super({
      ...props,
    })
  }

  override render() {
      return profilePageTemplate
  }
}
