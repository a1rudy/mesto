let formElement = document.querySelector('.popup');
let nameInput = formElement.querySelector('.popup__form_type_name');
let jobInput = formElement.querySelector('.popup__form_type_job');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

function openClosePopup() {
  formElement.classList.toggle('popup_opened');
}

editButton.addEventListener('click', openClosePopup);
closeButton.addEventListener('click', openClosePopup);


function formSubmitHandler (evt) {
  evt.preventDefault();

  let addName = document.querySelector('.profile__name');
  let addJob = document.querySelector('.profile__description');

  addName.textContent = nameInput.value;
  addJob.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler); 