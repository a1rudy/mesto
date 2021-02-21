const showInputError = (formElement, inputElement, errorMessage) => {
  // console.log(inputElement.name, errorMessage);
  const errorELement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add('popup__input_type_error');
  errorELement.classList.add('popup__input-error_active');
  errorELement.textContent = errorMessage;
};
// 5.1 функция на добавление текста ошибки про невалидном инпуте

const hideInputError = (formElement, inputElement) => {
  const errorELement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove('popup__input_type_error');
  errorELement.classList.remove('popup__input-error_active');
  errorELement.textContent = '';
};
// 6.1 функция на удаление текста ошибки про валидном инпуте

const checkInputValidity = (formElement, inputElement) => {
  const isInputElementValid = inputElement.validity.valid

  if (!isInputElementValid) {
    const errorMessage = inputElement.validationMessage;
    showInputError(formElement, inputElement, errorMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
// 4.1 проверяем валидность введенного инпута и передаем функцию для добавления или удаления текста ошибки

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add('popup__save-button_inactive');
  } else {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove('popup__save-button_inactive');
  }
};
// 5.2 добавляем отключение кнопки сабмита, если все инпуты невалидны, убираем, если валидны;

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
// 4.2 проверяем, все ли инпуты НЕ валидны, если да, возвращает true, если нет - false;

const setEventListeners = (formElement) => {
  formElement.addEventListener('submit',  (event) => {
    event.preventDefault();
  });

  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

  const buttonElement = formElement.querySelector('.popup__save-button');

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function (/*event*/) {
      // console.log(event.target.name);
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });

  toggleButtonState(inputList, buttonElement);
};
// 2. отменяем стандартное событие сабмита;
// 3.1 находим все инпуты на странице и передаем им функцию на проверку валидности;
// 3.2 вместе с редактированием инпута передаем функцию на переключение кнопки сабмита, кнопка сабмита отключена перед редактированием инпута;

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  
  formList.forEach(setEventListeners)
}
// 1. находим все формы на странице

enableValidation();