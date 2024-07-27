import Block from '@/utils/Block/index';
import { mainPageTemplate } from './template';

export default class MainPage extends Block {
  constructor(props) {
    super({
      ...props,
    })
  }

  override render() {
      return mainPageTemplate
  }
}
