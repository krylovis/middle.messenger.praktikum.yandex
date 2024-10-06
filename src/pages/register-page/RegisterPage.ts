import { Block, IData } from '@/utils/Block';
import { registerPageTemplate } from './template';

export default class RegisterPage extends Block<IData> {
  constructor(props: IData) {
    super({
      ...props,
    })
  }

  override render() {
      return registerPageTemplate
  }
}
