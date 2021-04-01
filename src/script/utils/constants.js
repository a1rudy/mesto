const elbrus = new URL('../../images/element/1-element__image-elbrus.jpg', import.meta.url);
const altai = new URL('../../images/element/2-element__image-altai.jpg', import.meta.url);
const duga = new URL('../../images/element/3-element__image-duga.jpg', import.meta.url);
const karelia = new URL('../../images/element/4-element__image-karelia.jpg', import.meta.url);
const kamchatka = new URL('../../images/element/5-element__image-kamchatka.jpg', import.meta.url);
const baikal = new URL('../../images/element/6-element__image-baikal.jpg', import.meta.url);

export const initialEl = [
  {
    name: "Байкал",
    link: baikal
  },
  {
    name: "Алтай",
    link: altai,
  },
  {
    name: "Куршская дуга",
    link: duga,
  },
  {
    name: "Карелия",
    link: karelia,
  },
  {
    name: "Камчатский край",
    link: kamchatka,
  },
  {
    name: "Гора Эльбрус",
    link: elbrus,
  },
];

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export const formsMesto = document
  .querySelector(".popup_type_mesto")
  .querySelector(".popup__form");

export const addName = document.querySelector(".profile__name");
export const addJob = document.querySelector(".profile__description");

export const topInputProfile = document
  .querySelector(".popup_type_profile")
  .querySelector(".popup__input_type_top");
export const bottomInputProfile = document
  .querySelector(".popup_type_profile")
  .querySelector(".popup__input_type_bottom");

export const editButtonProfile = document.querySelector(".profile__edit-button");
export const addButtonMesto = document.querySelector(".profile__add-button");

export const elContainer = document.querySelector(".elements");
