
import { EFormSelectors } from '@/utils/constants';

interface TData {
  formElement: HTMLFormElement,
}

export default class FormValidator {
  readonly _formElement: HTMLFormElement;
  readonly _inputList: HTMLInputElement[];
  readonly _submitBtn: HTMLButtonElement | null;

  readonly _label: string;
  readonly _input: string;
  readonly _inputTypeError: string;
  readonly _inputError: string;
  readonly _inputErrorActive: string;
  readonly _submitBtnInactive: string;

  constructor({ formElement }: TData ) {
    this._formElement = formElement;

    this._label = EFormSelectors.LABEL;
    this._input = EFormSelectors.INPUT;
    this._inputTypeError = EFormSelectors.INPUTT_TYPE_ERROR;
    this._inputError = EFormSelectors.INPUT_ERROR;
    this._inputErrorActive = EFormSelectors.INPUT_ERROR_ACTIVE;
    this._submitBtnInactive = EFormSelectors.SUBMIT_BTN_INACTIVE;

    this._submitBtn = this._formElement.querySelector(EFormSelectors.SUBMIT_BTN);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._input));
  };

  _showError = (inputElement: HTMLInputElement, errorMessage: string) => {
    const errorElement = inputElement?.closest(this._label)?.querySelector(this._inputError) as HTMLElement;

    inputElement.classList.add(this._inputTypeError);
    errorElement.classList.add(this._inputErrorActive);
    errorElement.textContent = errorMessage;
    errorElement.title = errorMessage;
  };

  _hideError = (inputElement: HTMLInputElement) => {
    const errorElement = inputElement?.closest(this._label)?.querySelector(this._inputError) as HTMLElement;

    inputElement.classList.remove(this._inputTypeError);
    errorElement.classList.remove(this._inputErrorActive);
    errorElement.textContent = '';
    errorElement.title = '';
  };

  _checkInputValidity = (inputElement: HTMLInputElement) => {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _disableButton = () => {
    if(this._submitBtn) {
      this._submitBtn?.classList.add(this._submitBtnInactive);
      this._submitBtn.disabled = true;
    }
  };

  _enableButton = () => {
    if(this._submitBtn) {
      this._submitBtn.classList.remove(this._submitBtnInactive);
      this._submitBtn.disabled = false;
    }
  };

  resetValidation() {
    this._disableButton();
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
  };

  toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  };

  _setEventListeners = () => {
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };
};
