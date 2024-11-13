import Block, { IData } from '@/utils/Block';
import Popup from '../Popup';
import { connectWithPopup } from '@/utils/connects';
import { popupContainerTemplate } from './template';

class PopupContainer extends Block<IData> {
  popup: Popup | null;

  constructor(props: IData) {
    super({
      ...props,
    })

    this.popup = null;
  }

  componentBeforeMount(newElement: HTMLElement) {
    this.popup = new Popup(newElement);
    this.popup.setEventListeners();
  }

  addAttributes() {
    if (this.props.isPopupOpen) {
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

export default connectWithPopup(PopupContainer);
