import Block, { IData } from '@/utils/Block';
import { dropdownMenuTemplate } from './template';

export default class DropdownMenu extends Block<IData> {
  render() {
    return dropdownMenuTemplate;
  }
}
