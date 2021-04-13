export default class Api {
  constructor({address, token}) {
    this._address = address;
    this._token = token;
}
  // Загрузка информации о пользователе с сервера
  setUserProfile() {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token
      }
    })
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка ${res.status}`)
    )
  }
  // Редактирование профиля
  getUserProfile(data) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка ${res.status}`)
    )
  }
  // Обновление аватара пользователя
  editUserAvatar(data) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка ${res.status}`)
    )
  }
  // Загрузка карточек с сервера
  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      method: 'GET',
      headers: {
        authorization: this._token
      }
    })
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка ${res.status}`)
    )
  }
  // Добавление новой карточки
  addNewCard(data) {
    return fetch(`${this._address}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка ${res.status}`)
    )
  }
  // Удаление карточки
  removeCard(id) {
    return fetch(`${this._address}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка ${res.status}`)
    )
  }
  // Постановка лайка
  addLikeCard(id) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка ${res.status}`)
    )
  }
  // Снятие лайка
  removeLikeCard(id) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка ${res.status}`)
    )
  }
}