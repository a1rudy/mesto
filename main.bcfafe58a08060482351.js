(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},t=document.querySelector(".popup_type_profile").querySelector(".popup__input_type_top"),n=document.querySelector(".popup_type_profile").querySelector(".popup__input_type_bottom"),r=document.querySelector(".profile__edit-button"),o=document.querySelector(".profile__add-button"),i=document.querySelector(".profile__avatar-overlay"),a=document.querySelector(".elements");function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formSelector=n,this._formElement=document.querySelector(this._formSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),n.classList.add(this._config.errorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){if(e.validity.valid)this._hideInputError(e);else{var t=e.validationMessage;this._showInputError(e,t)}}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._config.inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._config.inactiveButtonClass))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"checkButtonStateOpenPopup",value:function(){var e=this;this._inputList.forEach((function(t){e._toggleButtonState(),e._hideInputError(t)}))}},{key:"enableValidation",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}}])&&u(t.prototype,n),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItemAppend",value:function(e){this._containerSelector.append(e)}},{key:"addItemPrepend",value:function(e){this._containerSelector.prepend(e)}}])&&l(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){var n=t.item,r=t.myInfo,o=t.cardSelector,i=t.handleCardClick,a=t.handleDelClick,u=t.handleLikeEl,c=t.handleDelLikeEl;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n.name,this._link=n.link,this._likesArr=n.likes,this._userId=n.owner._id,this._myId=r._id,this._card=n,this._cardSelector=o,this._handleCardClick=i,this._handleDelClick=a,this._handleLikeEl=u,this._handleDelLikeEl=c}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"getCurrentCard",value:function(){return this._card}},{key:"removeCard",value:function(){this._element.remove()}},{key:"handleLike",value:function(e){this._likesArr=e.likes,this._getLikeValue(e),this._checkMyLike()?this._element.querySelector(".element__like-button").classList.add("element__like-button_active"):this._element.querySelector(".element__like-button").classList.remove("element__like-button_active")}},{key:"_getLikeValue",value:function(e){this._element.querySelector(".element__like-counter").textContent=e.likes.length}},{key:"_checkMyLike",value:function(){var e=this;return Boolean(this._likesArr.find((function(t){return t._id==e._myId})))}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleCardClick(e._card)})),this._element.querySelector(".element__like-button").addEventListener("click",(function(){e._checkMyLike()?e._handleDelLikeEl():e._handleLikeEl()})),this._element.querySelector(".element__delete-button").addEventListener("click",(function(){return e._handleDelClick(e._card._id)}))}},{key:"generateCard",value:function(){this._element=this._getTemplate();var e=this._element.querySelector(".element__title"),t=this._element.querySelector(".element__image"),n=this._element.querySelector(".element__like-counter"),r=this._element.querySelector(".element__delete-button");return this._userId==this._myId&&r.classList.add("element__delete-button_active"),this._checkMyLike()&&this._element.querySelector(".element__like-button").classList.add("element__like-button_active"),n.textContent=this._likesArr.length,e.textContent=this._name,t.src=this._link,t.alt="Это ".concat(this._name,"? Не похоже) Введите корректную ссылку."),this._setEventListeners(),this._element}}])&&f(t.prototype,n),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupType=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"==e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"open",value:function(){this._popupType.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupType.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupType.querySelector(".popup__close-button").addEventListener("mousedown",(function(){return e.close()})),this._popupType.addEventListener("mousedown",(function(t){return e._handleOverlayClose(t)}))}}])&&h(t.prototype,n),e}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popupType.querySelector(".popup__image"),t._popupCaption=t._popupType.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupCaption.textContent=e.name,v(k(a.prototype),"open",this).call(this)}}])&&d(t.prototype,n),a}(_);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._popupForm=t._popupType.querySelector(".popup__form"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popupType.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;C(O(a.prototype),"setEventListeners",this).call(this),this._popupType.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"setUserUX",value:function(e){this._popupForm.querySelector(".popup__button-span").textContent=e}},{key:"close",value:function(){this._popupForm.reset(),C(O(a.prototype),"close",this).call(this)}}])&&E(t.prototype,n),a}(_);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.nameUser=document.querySelector(t),this.aboutUser=document.querySelector(n),this.avatarUser=document.querySelector(r)}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this.nameUser.textContent=e.name,this.aboutUser.textContent=e.about,this.avatarUser.src=e.avatar,this.avatarUser.alt=e.name}},{key:"getUserInfo",value:function(){return{name:this.nameUser.textContent,about:this.aboutUser.textContent}}}])&&j(t.prototype,n),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))},q=function(){function e(t){var n=t.address,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=n,this._token=r}var t,n;return t=e,(n=[{key:"setUserProfile",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then(U)}},{key:"getUserProfile",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(U)}},{key:"editUserAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(U)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{method:"GET",headers:{authorization:this._token}}).then(U)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(U)}},{key:"removeCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(U)}},{key:"addLikeCard",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then(U)}},{key:"removeLikeCard",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(U)}}])&&T(t.prototype,n),e}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t,n){return(B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function a(e){var t=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,t)}return t=a,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;B(V(a.prototype),"setEventListeners",this).call(this),this._popupType.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}}])&&A(t.prototype,n),a}(_);function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X=new c(e,".popup__form_type_profile");X.enableValidation();var M=new c(e,".popup__form_type_mesto");M.enableValidation();var N=new c(e,".popup__form_type_avatar");N.enableValidation();var J,G=new q({address:"https://mesto.nomoreparties.co/v1/cohort-22",token:"68ca3bd5-b72c-4fc3-8560-fd3e63ce58a1"}),H=new I(".profile__name",".profile__about",".profile__avatar");Promise.all([G.setUserProfile(),G.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];J=o,H.setUserInfo(o),$.renderItems(i),console.log(o),console.log(i)})).catch((function(e){console.log(e)}));var $=new s({renderer:function(e){K(e),$.addItemAppend(K(e))}},a),K=function(e){var t=new p({item:e,myInfo:J,cardSelector:".template_type_default",handleCardClick:function(e){return ee.open(e)},handleDelClick:function(e){Q.setSubmitAction((function(){G.removeCard(e).then((function(){t.removeCard(),Q.close()})).catch((function(){console.log("Ошибка удаления")}))})),Q.open()},handleLikeEl:function(){G.addLikeCard(t.getCurrentCard()._id).then((function(e){t.handleLike(e)})).catch((function(){return console.log("Ошибка постановки лайка")}))},handleDelLikeEl:function(){G.removeLikeCard(t.getCurrentCard()._id).then((function(e){t.handleLike(e)})).catch((function(){return console.log("Ошибка снятия лайка")}))}});return t.generateCard()},Q=new F({popupSelector:".popup_type_delete"});Q.setEventListeners();var W=new P({popupSelector:".popup_type_avatar",handleFormSubmit:function(e){G.editUserAvatar(e).then((function(e){H.setUserInfo(e),W.setUserUX("Сохранение..."),W.close()})).catch((function(e){return console.log(e)}))}});W.setEventListeners();var Y=new P({popupSelector:".popup_type_profile",handleFormSubmit:function(e){G.getUserProfile(e).then((function(e){H.setUserInfo(e),Y.setUserUX("Сохранение..."),Y.close()})).catch((function(e){return console.log(e)}))}});Y.setEventListeners();var Z=new P({popupSelector:".popup_type_mesto",handleFormSubmit:function(e){G.addNewCard(e).then((function(e){var t=K(e);$.addItemPrepend(t),Z.setUserUX("Сохранение..."),Z.close()})).catch((function(e){return console.log(e)}))}});Z.setEventListeners();var ee=new g(".popup_type_image");ee.setEventListeners(),i.addEventListener("click",(function(){W.setUserUX("Сохранить"),W.open(),N.checkButtonStateOpenPopup()})),r.addEventListener("click",(function(){Y.setUserUX("Сохранить");var e=H.getUserInfo();t.value=e.name,n.value=e.about,Y.open(),X.checkButtonStateOpenPopup()})),o.addEventListener("click",(function(){Z.setUserUX("Создать"),Z.open(),M.checkButtonStateOpenPopup()}))})();