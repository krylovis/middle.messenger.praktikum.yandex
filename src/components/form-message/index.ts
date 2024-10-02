import Block from '@/utils/Block';
import { formMessageTemplate } from './template';

export default class FormMessage extends Block {
  render() {
    return formMessageTemplate;
  }
}
