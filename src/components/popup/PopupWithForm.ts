import Popup from './Popup.js';

type TData = {
  selector: string,
  handleFormSubmit: () => void
};

export default class PopupWithForm extends Popup {
  readonly _popupForm: HTMLFormElement | null | undefined;
  readonly _formData: { [key: string]: any };
  readonly _inputList: NodeListOf<Element> | undefined;
  readonly _popupTitle: HTMLElement | null | undefined;
  readonly _handleFormSubmit: (value: { [key: string]: any }) => void;
  readonly _handleSubmitBind: (event: SubmitEvent) => void;

  constructor({ selector, handleFormSubmit }: TData) {
    super(selector);
    this._formData = {};
    this._popupForm = this._popup?.querySelector('.popup__form');
    this._inputList = this._popup?.querySelectorAll('.popup__input');
    this._popupTitle = this._popup?.querySelector('.popup__title');
    this._handleFormSubmit = handleFormSubmit;
    this._handleSubmitBind = this._handleSubmit.bind(this);
  }

  _getInputValues() {
    this._inputList?.forEach((input: any) => this._formData[input.name] = input?.value);
    return this._formData;
  };

  close() {
    super.close();
    this._popupForm?.reset();
  };

  setPopupTitle(text: string = 'Загрузите файл') {
    const target = this._popupTitle as Element;
    target.textContent = text;
  }

  setInputValues(data: { [key: string]: any }) {
    this._inputList?.forEach((input: { [key: string]: any }) => {
      input.value = data[input.name];
    })
  }

  _handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    this._handleFormSubmit(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm?.addEventListener('submit', this._handleSubmitBind);
  };
}
