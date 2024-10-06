import { Block, IData } from '@/utils/Block';
import { loginPageTemplate } from './template';

export default class LoginPage extends Block<IData> {
  constructor(props: IData) {
    super({
      ...props,
    })
  }

  override render() {
      return loginPageTemplate
  }
}
