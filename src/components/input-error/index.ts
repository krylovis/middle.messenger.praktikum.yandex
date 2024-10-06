import { Block, IData } from '@/utils/Block';
import { inputErrorTemplate } from './template';

export default class InputError extends Block<IData> {
  render() {
    return inputErrorTemplate;
  }
}
