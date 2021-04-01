import { addName, addJob } from "../utils/constants.js";

export default class UserInfo {
  constructor(formValues) {
    this._formValues = formValues;
  }

  setUserInfo() {
    addName.textContent = this._formValues.name;
    addJob.textContent = this._formValues.description;
  }

  getUserInfo() {
    this._formValues.name = addName.textContent;
    this._formValues.description = addJob.textContent;
    return this._formValues;
  }
}
