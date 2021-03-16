import {popupPhotoShow, openPopup} from './utils.js'

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardEl = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true)

    return cardEl;
  }

  _getLikeEl() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }

  _getRemoveEl() {
    this._element.querySelector('.element__delete-button').closest('.element').remove();
  }

  _generatePopupEl() {
    const popupImage = popupPhotoShow.querySelector('.popup__image');
    const popupCaption = popupPhotoShow.querySelector('.popup__caption');
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupCaption.textContent = this._name;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like-button').addEventListener('click', () => this._getLikeEl());

    this._element.querySelector('.element__delete-button').addEventListener('click', () => this._getRemoveEl());

    this._element.querySelector('.element__image').addEventListener('click', () => {
      openPopup(popupPhotoShow);
      this._generatePopupEl();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    const titleEl = this._element.querySelector('.element__title');
    const imgEl = this._element.querySelector('.element__image');
    titleEl.textContent = this._name;
    imgEl.src = this._link;
    imgEl.alt = this._name;
    
    this._setEventListeners();

    return this._element;
  }
}
