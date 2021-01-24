let formElement = document.querySelector('.popup');

let nameInput = formElement.querySelector('.popup__form_type_name');
let jobInput = formElement.querySelector('.popup__form_type_job');

let editButton = document.querySelector('.profile__edit-button');
let closeButton = formElement.querySelector('.popup__close-button');
let saveButton = formElement.querySelector('.popup__save-button');

let addName = document.querySelector('.profile__name');
let addJob = document.querySelector('.profile__description');

function openPopup() {
  formElement.classList.add('popup_opened');

  nameInput.value = addName.textContent;
  jobInput.value = addJob.textContent;
}

function closePopup() {
  nameInput.value = ''
  jobInput.value = ''
  
  formElement.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  addName.textContent = nameInput.value;
  addJob.textContent = jobInput.value;

  formElement.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler); 