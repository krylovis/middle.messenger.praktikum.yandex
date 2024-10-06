import { Block, IData } from '@/utils/Block';
import { inputTemplate } from './template';

export default class Input extends Block<IData> {
  render() {
    return inputTemplate;
  }
}
