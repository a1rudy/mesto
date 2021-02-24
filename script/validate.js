const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
  const errorELement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(inputErrorClass);
  errorELement.classList.add(errorClass);
  errorELement.textContent = errorMessage;
};
// 5.1 функция на добавление текста ошибки про невалидном инпуте

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorELement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(inputErrorClass);
  errorELement.classList.remove(errorClass);
  errorELement.textContent = '';
};
// 6.1 функция на удаление текста ошибки при валидном инпуте

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  const isInputElementValid = inputElement.validity.valid

  if (!isInputElementValid) {
    const errorMessage = inputElement.validationMessage;
    showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
};
// 4.1 проверяем валидность введенного инпута и передаем функцию для добавления или удаления текста ошибки

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(inactiveButtonClass);
  }
};
// 5.2 добавляем отключение кнопки сабмита, если все инпуты невалидны, убираем, если валидны;

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
// 4.2 проверяем, все ли инпуты НЕ валидны, если да, возвращает true, если нет - false;

function checkButtonStateOpenPopup(popupType, {formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) {
  const inputList = Array.from(popupType.querySelectorAll(inputSelector));
  const formElement = popupType.querySelector(formSelector);
  const buttonElement = popupType.querySelector(submitButtonSelector);
  inputList.forEach((inputElement) => {
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  });
}
// проверка состояния кнопки сабмит при открытии попапа

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
  });

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });

  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
};
// 2. отменяем стандартное событие сабмита;
// 3.1 находим все инпуты на странице и передаем им функцию на проверку валидности;
// 3.2 вместе с редактированием инпута передаем функцию на переключение кнопки сабмита, кнопка сабмита отключена перед редактированием инпута;

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  
  formList.forEach((formElement) => {
    setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
  });
};
// 1. находим все формы на странице

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

enableValidation(validationConfig);