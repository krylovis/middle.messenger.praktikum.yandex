import Block, { IData } from '@/utils/Block';
import Popup from '../Popup';
import { popupContainerTemplate } from './template';

export default class PopupContainer extends Block<IData> {
  popup: Popup | null;
  popupTrigger: string;

  constructor(props: IData) {
    super({
      ...props,
    })

    this.popup = null;
    this.popupTrigger = '';
  }

  componentBeforeMount(newElement: HTMLElement) {
    this.popupTrigger = this.props?.popupTrigger as string || '';
    this.popup = new Popup({ element: newElement, popupTrigger: this.popupTrigger });
    this.popup.setEventListeners();
  }

  addAttributes() {
    if (this.props[this.popupTrigger]) {
      this.popup?.open();
    }
  }

  removeEvents() {
    this.popup?.removeEventListeners();
  }

  render() {
    return popupContainerTemplate;
  }
}
