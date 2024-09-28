import Popup from './Popup.js';

interface TData {
  selector: string,
  handleFormSubmit: (formData?: Record<string, string | number | boolean>) => void
}

export default class PopupWithForm extends Popup {
  readonly _popupForm: HTMLFormElement | null | undefined;
  readonly _formData: Record<string, string | number | boolean>;
  readonly _inputList: NodeListOf<HTMLFormElement> | undefined;
  readonly _popupTitle: HTMLElement | null | undefined;
  readonly _handleFormSubmit: (data: Record<string, string | number | boolean>) => void;
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
    this._inputList?.forEach((input: HTMLFormElement) => {
      this._formData[input.name] = input?.value;
    });
    return this._formData;
  };

  close() {
    super.close();
    this._popupForm?.reset();
  };

  setPopupTitle(text = 'Загрузите файл') {
    const target = this._popupTitle as Element;
    target.textContent = text;
  }

  setInputValues(data: Record<string, string | number | boolean>) {
    this._inputList?.forEach((input: HTMLFormElement) => {
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
