import Block, { IData } from '@/utils/Block';
import { addUserContentTemplate } from './template';

export default class AddUserContent extends Block<IData> {
  render() {
    return addUserContentTemplate;
  }
}
