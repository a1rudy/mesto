const popupProfile = document.querySelector('.popup_type_profile');
const popupMesto = document.querySelector('.popup_type_mesto');
const popupPhotoShow = document.querySelector('.popup_type_photoShow');

const formsMesto = popupMesto.querySelector('.popup__form');
const formsProfile = popupProfile.querySelector('.popup__form');

const topInputProfile = popupProfile.querySelector('.popup__input_type_top');
const bottomInputProfile = popupProfile.querySelector('.popup__input_type_bottom');
const topInputMesto = popupMesto.querySelector('.popup__input_type_top');
const bottomInputMesto = popupMesto.querySelector('.popup__input_type_bottom');

const editButtonProfile = document.querySelector('.profile__edit-button');
const closeButtonProfile = popupProfile.querySelector('.popup__close-button');

const addButtonMesto = document.querySelector('.profile__add-button');
const closeButtonMesto = popupMesto.querySelector('.popup__close-button');

const closeButtonImage = popupPhotoShow.querySelector('.popup__close-button')

const addName = document.querySelector('.profile__name');
const addJob = document.querySelector('.profile__description');

const template = document.querySelector('.template');
const elContainer = document.querySelector('.elements');

function openPopup(popupType) {
  popupType.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}
// реализация открытия попапа

function closePopup(popupType) {
  popupType.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}
// реализация закрытия попапа

function closePopupByEsc(evt) {
  const popupOpened = document.querySelector('.popup_opened')
  evt.key == 'Escape' ? closePopup(popupOpened) : false;
}
// реализация условия закрытия попапа по кнопке Esc

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
  
  const inputEl = getEl({name: topInputMesto.value, link: bottomInputMesto.value});
  elContainer.prepend(inputEl)

  formsMesto.reset();

  closePopup(popupMesto);
}
// реализация добавления элемента (карточки) с заголовком и картинкой на страницу при нажатии кнопки "добавить"

function addEl() {
  const newEl = initialEl.map(getEl);
  elContainer.append(...newEl);
}

function getEl(item) {
  const templateEl = template.content.cloneNode(true);
  const imgEl = templateEl.querySelector('.element__image');
  const titleEl = templateEl.querySelector('.element__title')
  imgEl.src = item.link;
  imgEl.alt = item.name;
  titleEl.textContent = item.name;
  // реализация элементов (карточек) через клонирование массива

  const removeElButton = templateEl.querySelector('.element__delete-button');
  removeElButton.addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
  });
  //реализация кнопки удаления

  const likeElButton = templateEl.querySelector('.element__like-button');
  likeElButton.addEventListener('click', (evt) => evt.target.classList.toggle('element__like-button_active'));
  // реализация кнопки лайка

  imgEl.addEventListener('click', () => {
    openPopup(popupPhotoShow);
    
    const popupImage = popupPhotoShow.querySelector('.popup__image');
    const popupCaption = popupPhotoShow.querySelector('.popup__caption');
    popupImage.src = item.link;
    popupImage.alt = item.name;
    popupCaption.textContent = item.name;
  });
  // реализация открытия попапа с картинкой

  return templateEl;
}

editButtonProfile.addEventListener('click', () => {
  topInputProfile.value = addName.textContent;
  bottomInputProfile.value = addJob.textContent;

  openPopup(popupProfile);
  checkButtonStateOpenPopup(popupProfile, validationConfig);
});
popupProfile.addEventListener('click', (evt) => {
  closePopupByOverlay(evt, popupProfile);
});
// слушатели на открытие и закрытие попапа профиля

addButtonMesto.addEventListener('click', () => {
  openPopup(popupMesto);
  checkButtonStateOpenPopup(popupMesto, validationConfig);
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

addEl();