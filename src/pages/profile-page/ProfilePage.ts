import Block, { TData } from '@/utils/Block/index';
import { profilePageTemplate } from './template';

export default class ProfilePage extends Block {
  constructor(props: TData) {
    super({
      ...props,
    })
  }

  override render() {
      return profilePageTemplate
  }
}
