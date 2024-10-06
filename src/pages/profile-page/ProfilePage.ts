import { Block, IData } from '@/utils/Block';
import { profilePageTemplate } from './template';

export default class ProfilePage extends Block<IData> {
  constructor(props: IData) {
    super({
      ...props,
    })
  }

  override render() {
      return profilePageTemplate
  }
}
