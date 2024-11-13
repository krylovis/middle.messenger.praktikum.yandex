import store from '@/utils/Store';
export default class Popup {
  readonly _popup: HTMLElement | null;
  readonly _closeByEscape: (event: KeyboardEvent) => void;
  readonly _mousedownClose: (event: MouseEvent) => void;

  constructor(element: HTMLElement) {
    this._popup = element;
    this._closeByEscape = this._handleCloseByEscape.bind(this);
    this._mousedownClose = this._handleMousedownClose.bind(this);
  }

  open() {
    this._popup?.classList.add('popup_opened');
    document.addEventListener('keydown', this._closeByEscape);
  }

  close() {
    store.set('isPopupOpen', false);
    this._popup?.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closeByEscape);
  }

  _handleCloseByEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') this.close();
  }

  _handleMousedownClose(event: MouseEvent) {
    const target = event.target as Element;

    if (target.classList.contains('popup_opened')) this.close();
    if (target.classList.contains('popup__close-button')) this.close();
  }

  setEventListeners() {
    this._popup?.addEventListener('mousedown', this._mousedownClose);
  }

  removeEventListeners() {
    document.removeEventListener('mousedown', this._mousedownClose);
  }
}
