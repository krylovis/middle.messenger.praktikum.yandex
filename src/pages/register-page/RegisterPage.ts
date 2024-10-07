import Block, { IData } from '@/utils/Block';
import { registerPageTemplate } from './template';

export default class RegisterPage extends Block<IData> {
  constructor(props: IData) {
    super({
      ...props,
    })
  }

  override addEvents() {
    this.enableValidation(this._element as HTMLElement);
  }

  override removeEvents() {
    this.disableValidation();
  }

  override render() {
      return registerPageTemplate
  }
}
