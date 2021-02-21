const showInputError = (formElement, inputElement, errorMessage) => {
  // console.log(inputElement.name, errorMessage);
  const errorELement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add('popup__input_type_error');
  errorELement.classList.add('popup__input-error_active');
  errorELement.textContent = errorMessage;
}

const hideInputError = (inputElement) => {
  inputElement.classList.remove('popup__input_type_error');
  errorELement.classList.remove('popup__input-error_active');
  errorELement.textContent = '';
}


const checkInputValidity = (formElement, inputElement) => {
  const isInputElementValid = inputElement.validity.valid;

  if (!isInputElementValid) {
    const errorMessage = inputElement.validationMessage;

    showInputError(formElement, inputElement, errorMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  formElement.addEventListener('submit',  (event) => {
    event.preventDefault();
  });
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'))
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  formList.forEach(setEventListeners);
};

enableValidation();