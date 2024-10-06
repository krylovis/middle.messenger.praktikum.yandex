import { Block, IData } from '@/utils/Block';
import { buttonTemplate } from './template';

export default class Button extends Block<IData> {
  render() {
    return buttonTemplate;
  }
}
