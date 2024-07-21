import Block from '@/utils/Block/index';
import { registerPageTemplate } from './template';

export default class RegisterPage extends Block {
  constructor(props) {
    super({
      ...props,
    })
  }

  override render() {
      return registerPageTemplate
  }
}
