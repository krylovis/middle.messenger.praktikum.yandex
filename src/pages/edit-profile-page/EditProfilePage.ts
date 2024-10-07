import Block, { IData } from '@/utils/Block';
import { editProfilePageTemplate } from './template';

export default class EditProfilePage extends Block<IData> {
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
    return editProfilePageTemplate;
  }
}
