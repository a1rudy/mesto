export default class FormValidator {
  constructor(config, formSelector) {
    this._formSelector = formSelector;
    this._config = config;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorELement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._config.inputErrorClass);
    errorELement.classList.add(this._config.errorClass);
    errorELement.textContent = errorMessage;
  }

  _hideInputError(formElement, inputElement) {
    const errorELement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._config.inputErrorClass);
    errorELement.classList.remove(this._config.errorClass);
    errorELement.textContent = '';
  }

  _checkInputValidity(formElement, inputElement) {
    const isInputElementValid = inputElement.validity.valid

    if (!isInputElementValid) {
      const errorMessage = inputElement.validationMessage;
      this._showInputError(formElement, inputElement, errorMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

    _setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._config.inputSelector));

    const buttonElement = formElement.querySelector(this._config.submitButtonSelector);
    
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }
  _checkButtonStateOpenPopup() {
    const formElement = document.querySelector(this._formSelector);
    const inputList = Array.from(formElement.querySelectorAll(this._config.inputSelector));
    const buttonElement = formElement.querySelector(this._config.submitButtonSelector);
    inputList.forEach((inputElement) => {
      this._toggleButtonState(inputList, buttonElement);
      this._hideInputError(formElement, inputElement);
    });
  }

  enableValidation() {
    if (this._formSelector == this._config.formSelector) {
      const formList = Array.from(document.querySelectorAll(this._formSelector));
  
      formList.forEach((formElement) => {
        this._setEventListeners(formElement);
      });
    } else {
      this._checkButtonStateOpenPopup()
    }
  }
}