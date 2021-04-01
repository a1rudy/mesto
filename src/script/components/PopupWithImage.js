import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(data) {
    const popupImage = this._popupType.querySelector(".popup__image");
    const popupCaption = this._popupType.querySelector(".popup__caption");
    popupImage.src = data.link;
    popupImage.alt = data.name;
    popupCaption.textContent = data.name;

    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
