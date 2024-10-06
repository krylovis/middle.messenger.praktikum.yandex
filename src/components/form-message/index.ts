import Block, { IData } from '@/utils/Block';
import { formMessageTemplate } from './template';

export default class FormMessage extends Block<IData> {
  render() {
    return formMessageTemplate;
  }
}
