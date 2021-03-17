import {popupPhotoShow, openPopup, closePopup} from './utils.js'
import {initialEl} from './variable.js'
import Card from './Card.js'
import FormValidator from './FormValidator.js'

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

const popupProfile = document.querySelector('.popup_type_profile');
const popupMesto = document.querySelector('.popup_type_mesto');

const formsMesto = popupMesto.querySelector('.popup__form');

const topInputProfile = popupProfile.querySelector('.popup__input_type_top');
const bottomInputProfile = popupProfile.querySelector('.popup__input_type_bottom');
const topInputMesto = popupMesto.querySelector('.popup__input_type_top');
const bottomInputMesto = popupMesto.querySelector('.popup__input_type_bottom');

const editButtonProfile = document.querySelector('.profile__edit-button');

const addButtonMesto = document.querySelector('.profile__add-button');

const addName = document.querySelector('.profile__name');
const addJob = document.querySelector('.profile__description');

const elContainer = document.querySelector('.elements');

function closePopupByOverlay(evt, popupType) {
  evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button') ? closePopup(popupType) : false;
}
// реализация условия закрытия попапа по клику на оверлей и кнопку зыкрытия

function editProfileBySubmit(evt) {
  evt.preventDefault();

  addName.textContent = topInputProfile.value;
  addJob.textContent = bottomInputProfile.value;

  closePopup(popupProfile);
}
// реализация редактирования профиля при нажатии кнопки "сохранить"

function addMestoBySubmit(evt) {
  evt.preventDefault();

  const cardEl = new Card({name: topInputMesto.value, link: bottomInputMesto.value}, '.template_type_default').generateCard();
  elContainer.prepend(cardEl);

  formsMesto.reset();

  closePopup(popupMesto);
}
// реализация добавления элемента (карточки) с заголовком и картинкой на страницу при нажатии кнопки "добавить"

editButtonProfile.addEventListener('click', () => {
  topInputProfile.value = addName.textContent;
  bottomInputProfile.value = addJob.textContent;

  openPopup(popupProfile);
  new FormValidator(validationConfig, '.popup__form_type_profile').checkButtonStateOpenPopup()
});
popupProfile.addEventListener('mousedown', (evt) => {
  closePopupByOverlay(evt, popupProfile);
});
// слушатели на открытие и закрытие попапа профиля

addButtonMesto.addEventListener('click', () => {
  openPopup(popupMesto);
  new FormValidator(validationConfig, '.popup__form_type_mesto').checkButtonStateOpenPopup()
});
popupMesto.addEventListener('click', (evt) => {
  closePopupByOverlay(evt, popupMesto);
  evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button') ? formsMesto.reset() : false;
});
// слушатели на открытие и закрытие попапа добавления места

popupPhotoShow.addEventListener('click', (evt) => closePopupByOverlay(evt, popupPhotoShow))
// слушатель на закрытие попапа показа места

popupProfile.addEventListener('submit', editProfileBySubmit);
popupMesto.addEventListener('submit', addMestoBySubmit);

new FormValidator(validationConfig, '.popup__form_type_profile').enableValidation()
new FormValidator(validationConfig, '.popup__form_type_mesto').enableValidation()

const addEl = () => initialEl.forEach(item => {
  const cardEl = new Card(item, '.template_type_default').generateCard();

  elContainer.append(cardEl);
});

addEl();