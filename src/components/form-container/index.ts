import Block, { IData } from '@/utils/Block';
import { formContainerTemplate } from './template';

export default class FormContainer extends Block<IData> {
  render() {
    return formContainerTemplate;
  }
}
