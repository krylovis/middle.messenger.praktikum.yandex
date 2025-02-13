import Block, { IData } from '@/utils/Block';
import { dropdownMenuItemTemplate } from './template';

export default class DropdownMenuItem extends Block<IData> {
  render() {
    return dropdownMenuItemTemplate;
  }
}
