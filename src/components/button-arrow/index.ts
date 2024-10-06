import { Block, IData } from '@/utils/Block';
import { buttonArrowTemplate } from './template';

export default class ButtonArrow extends Block<IData> {
  render() {
    return buttonArrowTemplate;
  }
}
