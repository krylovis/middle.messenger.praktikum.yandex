import Block, { IData } from '@/utils/Block';
import DropdownMenuControl from './DropdownMenuControl';
import { dropdownMenuTemplate } from './template';

export default class DropdownMenu extends Block<IData> {
  dropdownMenu: DropdownMenuControl | null;
  menuTrigger: string;

  constructor(props: IData) {
    super({
      ...props,
    })

    this.dropdownMenu = null;
    this.menuTrigger = '';
  }

  componentBeforeMount(newElement: HTMLElement) {
    this.menuTrigger = this.props?.menuTrigger as string || '';

    const dropdownMenuElement = newElement.querySelector('.dropdown-menu') as HTMLElement;
    if (dropdownMenuElement) {
      this.dropdownMenu = new DropdownMenuControl({ element: dropdownMenuElement, menuTrigger: this.menuTrigger });
      this.dropdownMenu.setEventListeners();
    }
  }

  addAttributes() {
    if (this.props[this.menuTrigger]) {
      this.dropdownMenu?.open();
    }
  }

  render() {
    return dropdownMenuTemplate;
  }
}
