import { Block, IData } from '@/utils/Block';
import { popupContainerTemplate } from './template';

export default class PopupContainer extends Block<IData> {
  render() {
    return popupContainerTemplate;
  }
}
