import store from '@/utils/Store';

export interface IDropdownMenuControl {
  element: HTMLElement,
  menuTrigger: string,
}
export default class DropdownMenuControl {
  readonly _dropdownMenu: HTMLElement | null;
  readonly _menuTrigger: string = '';
  readonly _mouseleaveClose: (event: MouseEvent) => void;

  constructor({ element, menuTrigger }: IDropdownMenuControl) {
    this._dropdownMenu = element;
    this._menuTrigger = menuTrigger;
    this._mouseleaveClose = this._handleMouseleaveClose.bind(this);
  }

  open() {
    this._dropdownMenu?.classList.add('dropdown-menu_active');
  }

  close() {
    store.set(this._menuTrigger, false);
    this._dropdownMenu?.classList.remove('dropdown-menu_active');
  }

  _handleMouseleaveClose() {
    if (this._dropdownMenu?.classList.contains('dropdown-menu_active')) this.close();
  }

  setEventListeners() {
    this._dropdownMenu?.addEventListener('mouseleave', this._mouseleaveClose);
  }
}
