import {
  initialEl,
  validationConfig,
  topInputProfile,
  bottomInputProfile,
  editButtonProfile,
  addButtonMesto,
  elContainer,
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

// Активация валидации форм
const formProfileValidator = new FormValidator(
  validationConfig,
  ".popup__form_type_profile"
);
formProfileValidator.enableValidation();

const formCardValidator = new FormValidator(
  validationConfig,
  ".popup__form_type_mesto"
);
formCardValidator.enableValidation();

// Инициализация попапа Изображение
const popupImage = new PopupWithImage(".popup_type_image");

// добавление карточек на страницу из массива
const cardList = new Section(
  {
    itemsArr: initialEl,
    renderer: (item) => {
      const cardEl = new Card(item, ".template_type_default", () => {
        popupImage.open(item);
      }).generateCard();

      cardList.addItem(cardEl);
    },
  },
  elContainer
);
cardList.renderItems();
popupImage.setEventListeners();

// Инициализация попапа Профиль
const popupProfile = new PopupWithForm({
  popupSelector: ".popup_type_profile",
  handleFormSubmit: (item) => {
    const userInfo = new UserInfo(item);
    userInfo.setUserInfo();
  },
});
popupProfile.setEventListeners();

// инициализация попапа "Место"
const popupMesto = new PopupWithForm({
  popupSelector: ".popup_type_mesto",
  handleFormSubmit: (item) => {
    const cardEl = new Card(item, ".template_type_default", () => {
      popupImage.open(item);
    }).generateCard();

    cardList.addItem(cardEl);
  },
});
popupMesto.setEventListeners();

// слушатель для попапа Профиль
editButtonProfile.addEventListener("click", () => {
  const userInfo = new UserInfo({}).getUserInfo();
  topInputProfile.value = userInfo.name;
  bottomInputProfile.value = userInfo.description;

  popupProfile.open();

  formProfileValidator.checkButtonStateOpenPopup();
});

// слушатель для попапа "Место"
addButtonMesto.addEventListener("click", () => {
  popupMesto.open();

  formCardValidator.checkButtonStateOpenPopup();
});