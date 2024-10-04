import Block, { TData } from '@/utils/Block/index';
import { loginPageTemplate } from './template';

export default class LoginPage extends Block {
  constructor(props: TData) {
    super({
      ...props,
    })
  }

  override render() {
      return loginPageTemplate
  }
}
