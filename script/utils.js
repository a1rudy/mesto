export {popupPhotoShow, openPopup, closePopup}

const popupPhotoShow = document.querySelector('.popup_type_photoShow');

function openPopup(popupType) {
  popupType.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

function closePopup(popupType) {
  popupType.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

function closePopupByEsc(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  const esc = 'Escape';
  evt.key == esc ? closePopup(popupOpened) : false;
}