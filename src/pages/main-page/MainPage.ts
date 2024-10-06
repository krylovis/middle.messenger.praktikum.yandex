import Block, { IData } from '@/utils/Block';
import { mainPageTemplate } from './template';

export default class MainPage extends Block<IData> {
  constructor(props: IData) {
    super({
      ...props,
    })
  }

  override render() {
      return mainPageTemplate
  }
}
