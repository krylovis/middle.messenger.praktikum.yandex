import Block from '@/utils/Block/index';
import { errorPageTemplate } from './template';

export default class ErrorPage extends Block {
  constructor(props) {
    super({
      ...props,
    })
  }

  override render() {
      return errorPageTemplate
  }
}
