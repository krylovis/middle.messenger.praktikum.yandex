import Block, { IData } from '@/utils/Block';
import { inputFieldTemplate } from './template';

export default class InputField extends Block<IData> {
  render() {
    return inputFieldTemplate;
  }
}
