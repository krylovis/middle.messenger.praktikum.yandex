import Block, { TData } from '@/utils/Block/index';
import { mainPageTemplate } from './template';

export default class MainPage extends Block {
  constructor(props: TData) {
    super({
      ...props,
    })
  }

  override render() {
      return mainPageTemplate
  }
}
