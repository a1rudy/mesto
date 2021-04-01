export const initialEl = [
  {
    name: "Байкал",
    link:
      "https://images.unsplash.com/photo-1552735855-557bdba3961a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80",
  },
  {
    name: "Алтай",
    link:
      "https://images.unsplash.com/photo-1564324738191-7f91304232eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "Куршская дуга",
    link:
      "https://images.unsplash.com/photo-1611056091165-cb3258bb0b44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
  },
  {
    name: "Карелия",
    link:
      "https://images.unsplash.com/photo-1573156667506-115190c68737?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80",
  },
  {
    name: "Камчатский край",
    link:
      "https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1602&q=80",
  },
  {
    name: "Гора Эльбрус",
    link:
      "https://images.unsplash.com/photo-1521311587563-6a3fb9fbaff7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
