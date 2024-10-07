import Block, { IData } from '@/utils/Block';
import { errorPageTemplate } from './template';

export default class ErrorPage extends Block<IData> {
  constructor(props: IData) {
    super({
      ...props,
    })
  }

  override render() {
      return errorPageTemplate
  }
}
