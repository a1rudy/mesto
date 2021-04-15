export default class Card {
  constructor({item, cardSelector, handleCardClick, handleDelClick, handleLikeEl, handleDelLikeEl}) {
    this._name = item.name;
    this._link = item.link;
    this._likesArr = item.likes;
    this._userId = item.owner._id;
    this._card = item;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDelClick = handleDelClick;
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
    this._toggleLike();
    if (!Boolean(this._element.querySelector(".element__like-button_active"))) {
      this._handleDelLikeEl();
    } // не перезагружая страницу позволяет с отправкой запроса снять поставленный лайк
  }

  _getDelLikeEl() {
    this._handleDelLikeEl();
    this._toggleLike();
    if (Boolean(this._element.querySelector(".element__like-button_active"))) {
      this._handleLikeEl();
    } // не перезагружая страницу позволяет с отправкой запроса вернуть снятый лайк
  }

  getLikeValue(item) {
    this._element.querySelector(".element__like-counter").textContent = item.likes.length
  }

  getCurrentCardNode() {
    return this._element
  }

  getCurrentCard() {
    return this._card;
  }

  _setEventListeners(UserId) {
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._card);
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
      .addEventListener("click", () => this._handleDelClick());
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
