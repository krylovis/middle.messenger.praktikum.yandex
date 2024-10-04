import Block, { TData } from '@/utils/Block/index';
import { errorPageTemplate } from './template';

export default class ErrorPage extends Block {
  constructor(props: TData) {
    super({
      ...props,
    })
  }

  override render() {
      return errorPageTemplate
  }
}
