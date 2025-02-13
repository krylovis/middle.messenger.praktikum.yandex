import Block, { IData } from '@/utils/Block';
import { removeUserContentTemplate } from './template';

export default class RemoveUserContent extends Block<IData> {
  render() {
    return removeUserContentTemplate;
  }
}
