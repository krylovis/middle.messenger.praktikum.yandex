import Block, { IData } from '@/utils/Block';
import { dropdownMenuTemplate } from './template';

export default class DropdownMenu extends Block<IData> {
  menuTrigger: string;

  constructor(props: IData) {
    super({
      ...props,
    })

    this.menuTrigger = '';
  }

  componentBeforeMount(newElement: HTMLElement) {
    this.menuTrigger = this.props?.menuTrigger as string || '';

  }

  render() {
    return dropdownMenuTemplate;
  }
}
