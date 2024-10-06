import Block, { IData } from '@/utils/Block';
import { buttonWithIconTemplate } from './template';

export default class ButtonWithIcon extends Block<IData> {
  render() {
    return buttonWithIconTemplate;
  }
}
