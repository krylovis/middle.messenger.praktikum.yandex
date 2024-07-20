import Block from '@/utils/Block/index';
import { loginPageTemplate } from './template';

export default class LoginPage extends Block {
  constructor(props) {
    super({
      ...props,
    })
  }

  override render() {
      return loginPageTemplate
  }
}
