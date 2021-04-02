export default class UserInfo {
  constructor() {
    this.addName = document.querySelector(".profile__name");
    this.addJob = document.querySelector(".profile__description");
  }

  setUserInfo(data) {
    this.addName.textContent = data.name;
    this.addJob.textContent = data.description;
  }

  getUserInfo() {
    return {
      name: this.addName.textContent,
      description: this.addJob.textContent
    }
  }
}
