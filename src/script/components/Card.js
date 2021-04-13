export default class Card {
  constructor({data, cardSelector, handleCardClick, handleDelClick, handleDelSubmit, handleLikeEl, handleDelLikeEl}) {
    this._name = data.name;
    this._link = data.link;
    this._likesArr = data.likes;
    this._userId = data.owner._id;
    this._cardId = data._id;
    this._data = data;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDelClick = handleDelClick;
    this._handleDelSubmit = handleDelSubmit;
    this._handleLikeEl = handleLikeEl;
    this._handleDelLikeEl = handleDelLikeEl;
  }

  _getTemplate() {
    const cardEl = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardEl;
  }

  _toggleLike() {
    this._element
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button_active");
  }

  _getLikeEl() {
    this._handleLikeEl();
    this._toggleLike()
    if (Boolean(this._element.querySelector(".element__like-button_active"))) {
      this._element.querySelector(".element__like-counter").textContent = this._likesArr.length + 1;
    } else {
      this._element.querySelector(".element__like-counter").textContent = this._likesArr.length;
      this._handleDelLikeEl();
    }
  }

  _getDelLikeEl() {
    this._handleDelLikeEl();
    this._toggleLike()
    if (Boolean(this._element.querySelector(".element__like-button_active"))) {
      this._element.querySelector(".element__like-counter").textContent = this._likesArr.length;
      this._handleLikeEl();
    } else {
      this._element.querySelector(".element__like-counter").textContent = this._likesArr.length - 1;
    }
  }

  _getRemoveEl() {
    this._handleDelClick()
    document.querySelector(".popup_type_delete").addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleDelSubmit();
      this._element.remove();
    })
  }

  getId() {
    return this._cardId;
  }

  _setEventListeners(UserId) {
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._data);
      });

    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", () => {
        if (Boolean(this._likesArr.find(item => item._id == UserId))) {
          this._getDelLikeEl()
        } else {
          this._getLikeEl();
        }
      });

    this._element
      .querySelector(".element__delete-button")
      .addEventListener("click", () => this._getRemoveEl());
  }

  generateCard(UserId) {
    this._element = this._getTemplate();
    const titleEl = this._element.querySelector(".element__title");
    const imgEl = this._element.querySelector(".element__image");
    const likesEl = this._element.querySelector(".element__like-counter");
    const delButton = this._element.querySelector(".element__delete-button");
    if (this._userId == UserId) delButton.classList.add('element__delete-button_active');
    if (Boolean(this._likesArr.find(item => item._id == UserId))) {
      this._element
        .querySelector(".element__like-button")
        .classList.add("element__like-button_active");
    }
    likesEl.textContent = this._likesArr.length;
    titleEl.textContent = this._name;
    imgEl.src = this._link;
    imgEl.alt = `Это ${this._name}? Не похоже) Введите корректную ссылку.`;

    this._setEventListeners(UserId);

    return this._element;
  }
}
