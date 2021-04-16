import "./index.css";

import {
  validationConfig,
  topInputProfile,
  bottomInputProfile,
  editButtonProfile,
  addButtonMesto,
  editButtonAvatar,
  elContainer,
} from "../script/utils/constants.js";
import FormValidator from "../script/components/FormValidator.js";
import Section from "../script/components/Section.js";
import Card from "../script/components/Card.js";
import PopupWithImage from "../script/components/PopupWithImage.js";
import PopupWithForm from "../script/components/PopupWithForm.js";
import UserInfo from "../script/components/UserInfo.js";
import Api from "../script/components/Api.js";

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

const formAvatarValidator = new FormValidator(
  validationConfig,
  ".popup__form_type_avatar"
);
formAvatarValidator.enableValidation();

// Инициализация класса API
const api = new Api({
  address: "https://mesto.nomoreparties.co/v1/cohort-22",
  token: "68ca3bd5-b72c-4fc3-8560-fd3e63ce58a1",
});

// Загрузка с сервера информации о пользователе на страницу и отрисовка массивов данных карточек
let myId
Promise.all([
  api.setUserProfile(),
  api.getInitialCards(),
])
  .then(([objectInfo, cardArr]) => {
    myId = objectInfo._id;

    userInfo.setUserInfo(objectInfo);
    cardList.renderItems(cardArr);
    console.log(objectInfo);
    console.log(cardArr);
  })
  .catch((error) => {
    console.log(error);
  }); 

// Добавление карточек на страницу из массива
const cardList = new Section(
  {
    renderer: (item) => {
      createCardEl(item);
      cardList.addItemAppend(createCardEl(item));
    },
  },
  elContainer
);

// Функция создания карточки
let currentCard;
let currentCardNode;

const createCardEl = (item) => {
  const card = new Card({
    item: item,
    cardSelector: ".template_type_default",
    handleCardClick: (data) => popupImage.open(data),
    handleDelClick: () => {
      popupDelCard.open(),
      currentCard = card.getCurrentCard();
      currentCardNode = card.getCurrentCardNode();
    },
    handleLikeEl: () => {
      api.addLikeCard(card.getCurrentCard()._id)
        .then((itemCard) => {
          card.getLikeValue(itemCard);
          console.log("Лайк");
        })
        .catch(() => console.log("Ошибка постановки лайка"));
    },
    handleDelLikeEl: () => {
      api.removeLikeCard(card.getCurrentCard()._id)
        .then((itemCard) => {
          card.getLikeValue(itemCard);
          console.log("Снятие лайка");
        })
        .catch(() => console.log("Ошибка снятия лайка"));
    },
  });
  return card.generateCard(myId);
};


// Инициализация класса по добалению данных пользователя
const userInfo = new UserInfo(
  ".profile__name",
  ".profile__about",
  ".profile__avatar",
);

// инициализация попапа "Аватарка"
const popupAvatar = new PopupWithForm({
  popupSelector: ".popup_type_avatar",
  handleFormSubmit: (data) => {
    api.editUserAvatar(data)
      .then((objectInfo) => {
        userInfo.setUserInfo(objectInfo);
        popupAvatar.setUserUX("Сохранение...");
        popupAvatar.close();
      })
      .catch((error) => console.log(ererrorr));
  },
});
popupAvatar.setEventListeners();

// инициализация попапа "Профиль"
const popupProfile = new PopupWithForm({
  popupSelector: ".popup_type_profile",
  handleFormSubmit: (data) => {
    api.getUserProfile(data)
      .then((dataInfo) => {
        userInfo.setUserInfo(dataInfo);
        popupProfile.setUserUX("Сохранение...");
        popupProfile.close();
      })
      .catch((error) => console.log(error));
  },
});
popupProfile.setEventListeners();

// инициализация попапа "Место"
const popupMesto = new PopupWithForm({
  popupSelector: ".popup_type_mesto",
  handleFormSubmit: (item) => {
    api.addNewCard(item)
      .then((itemCard) => {
        const newCard = createCardEl(itemCard);
        cardList.addItemPrepend(newCard);
        popupMesto.setUserUX("Сохранение...");
        popupMesto.close();
      })
      .catch((error) => console.log(error));
  },
});
popupMesto.setEventListeners();

// Инициализация попапа "Изображение"
const popupImage = new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();

// Инициализация попапа "Удаление карточки"
const popupDelCard = new PopupWithForm({
  popupSelector: ".popup_type_delete",
  handleFormSubmit: () => {
    api.removeCard(currentCard._id)
      .then(() => {
        currentCardNode.remove();
        popupDelCard.close()
      })
      .catch(() => {
        console.log("Ошибка удаления")
      } );
  },
  });
popupDelCard.setEventListeners();

// слушатель для попапа "Аватарка"
editButtonAvatar.addEventListener("click", () => {
  popupAvatar.setUserUX("Сохранить");
  popupAvatar.open();

  formAvatarValidator.checkButtonStateOpenPopup();
});

// слушатель для попапа "Профиль"
editButtonProfile.addEventListener("click", () => {
  popupProfile.setUserUX("Сохранить");
  const getUserInfo = userInfo.getUserInfo();
  topInputProfile.value = getUserInfo.name;
  bottomInputProfile.value = getUserInfo.about;

  popupProfile.open();

  formProfileValidator.checkButtonStateOpenPopup();
});

// слушатель для попапа "Место"
addButtonMesto.addEventListener("click", () => {
  popupMesto.setUserUX("Создать");
  popupMesto.open();
  formCardValidator.checkButtonStateOpenPopup();
});