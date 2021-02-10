const initialEl = [
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1552735855-557bdba3961a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80'
  },
  {
    name: 'Алтай',
    link: 'https://images.unsplash.com/photo-1564324738191-7f91304232eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'Куршская дуга',
    link: 'https://images.unsplash.com/photo-1611056091165-cb3258bb0b44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
  },
  {
    name: 'Карелия',
    link: 'https://images.unsplash.com/photo-1573156667506-115190c68737?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80'
  },
  {
    name: 'Камчатский край',
    link: 'https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1602&q=80'
  },
  {
    name: 'Гора Эльбрус',
    link: 'https://images.unsplash.com/photo-1521311587563-6a3fb9fbaff7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
];

const popupProfile = document.querySelector('.popup_type_profile');
const popupMesto = document.querySelector('.popup_type_mesto');
const popupPhotoShow = document.querySelector('.popup_type_photoShow');

let topInput = document.querySelector('.popup__form_type_top');
let bottomInput = document.querySelector('.popup__form_type_bottom');

const editButtonProfile = document.querySelector('.profile__edit-button');
const closeButtonProfile = popupProfile.querySelector('.popup__close-button');

const addButtonMesto = document.querySelector('.profile__add-button');
const closeButtonMesto = popupMesto.querySelector('.popup__close-button');

const closeButtonImage = popupPhotoShow.querySelector('.popup__close-button')

const addName = document.querySelector('.profile__name');
const addJob = document.querySelector('.profile__description');

const template = document.querySelector('.template');
const ElContainer = document.querySelector('.elements');

function openPopup(formType) {
  formType.classList.add('popup_opened');
}
//реализация открытия попапа

function closePopup(formType) {
  formType.classList.remove('popup_opened');

  topInput.value = ''
  bottomInput.value = ''
}
//реализация закрытия попапа

function formSubmitHandlerProfile(evt) {
  evt.preventDefault();

  addName.textContent = topInput.value;
  addJob.textContent = bottomInput.value;

  popupProfile.classList.remove('popup_opened');
}
// реализация редактирования профиля при нажатии кнопки "сохранить"

function formSubmitHandlerMesto(evt) {
  evt.preventDefault();

  let topInput = popupMesto.querySelector('.popup__form_type_top');
  let bottomInput = popupMesto.querySelector('.popup__form_type_bottom');

  const inputEl = getEl({name: topInput.value, link: bottomInput.value});
  ElContainer.prepend(inputEl);

  topInput.value = '';
  bottomInput.value = '';

  popupMesto.classList.remove('popup_opened');
}
// реализация добавления элемента (карточки) с заголовком и картинкой на страницу при нажатии кнопки "добавить"

function addEl() {
  const newEl = initialEl.map(getEl);
  ElContainer.prepend(...newEl);
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
    const delEl = evt.target.closest('.element');
    delEl.remove();
  });
  //реализация кнопки удаления

  const likeElButton = templateEl.querySelector('.element__like-button');
  likeElButton.addEventListener('click', evt => evt.target.classList.toggle('element__like-button_active'));
  // реализация кнопки лайка

  imgEl.addEventListener('click', () => {
    openPopup(popupPhotoShow);
    
    const popupImage = popupPhotoShow.querySelector('.popup__image');
    const popupCaption = popupPhotoShow.querySelector('.popup__caption');
    popupImage.src = item.link;
    popupImage.alt = item.name;
    popupCaption.textContent = item.name;
  });
  closeButtonImage.addEventListener('click', () => closePopup(popupPhotoShow));
  // реализация открытия и закрытия попапа с картинкой

  return templateEl;
}

editButtonProfile.addEventListener('click', () => {
  openPopup(popupProfile);

  topInput.value = addName.textContent;
  bottomInput.value = addJob.textContent;
});
closeButtonProfile.addEventListener('click', () => closePopup(popupProfile));

addButtonMesto.addEventListener('click', () => openPopup(popupMesto));
closeButtonMesto.addEventListener('click', () => closePopup(popupMesto));

popupProfile.addEventListener('submit', formSubmitHandlerProfile);
popupMesto.addEventListener('submit', formSubmitHandlerMesto);

addEl();