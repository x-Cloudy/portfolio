/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var menuFunc = __webpack_require__(/*! ./menuFunc */ "./src/modules/menuFunc.js");
exports.clicked = function btnClicked(event) {
  var btnPress = event.target.innerText;
  var classes = event.target.classList.value;
  var command = {
    btnPress: btnPress.toLowerCase(),
    classes: classes
  };
  btnFunc(command);
};
function btnFunc(command) {
  var menu = {
    home: function home() {
      menuFunc.switcher(command.classes);
    },
    projects: function projects() {
      menuFunc.switcher(command.classes);
    },
    info: function info() {
      menuFunc.switcher(command.classes);
    }
  };
  var email = {
    email: function email() {
      menuFunc.switcher(command.classes);
    }
  };
  var executaBtn = menu[command.btnPress];
  var emailCopy = email[command.classes];
  if (executaBtn) executaBtn();
  if (emailCopy) emailCopy();
}
;

/***/ }),

/***/ "./src/modules/menuFunc.js":
/*!*********************************!*\
  !*** ./src/modules/menuFunc.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

var header = document.querySelector('header');
var textoNome = document.querySelector('#nome-text');
var homeAside = document.querySelector('#home-aside');
var linhaDiagonal1 = document.querySelector('#linha-diagonal1');
var linhaDiagonal2 = document.querySelector('#linha-diagonal2');
var info = document.querySelector('.info');
var imgMenu = document.querySelector('.menu-project');
var barraEsquerda = document.querySelector('.barra-esquerda');
var quadradoBarra = document.querySelector('.quadrado-barra');
exports.switcher = function switcher(evento) {
  switch (evento) {
    case 'btn-home':
      homeOn();
      projectOff();
      infoOff();
      break;
    case 'btn-projects':
      projectOn();
      homeOff();
      infoOff();
      break;
    case 'btn-info':
      infoOn();
      homeOff();
      projectOff();
      break;
    case 'email':
      copyEmail();
      break;
    default:
      homeOff();
      projectOff();
      infoOff();
      break;
  }
};

//HOME BUTTON
function homeOn() {
  homeAside.classList.add('asideShow');
}
function homeOff() {
  homeAside.classList.remove('asideShow');
}

// //PROJECTS BUTTON
function projectOn() {
  header.style.transform = "translate(-50px, 0px)";
  barraEsquerda.classList.add('barra-esquerdaClicked');
  quadradoBarra.classList.add('quadrado-barraClicked');

  //imgAnimation
  imgMenu.style.opacity = "1";
  imgMenu.style.transition = "opacity 2s ease-in-out";

  //textAnimation
  textoNome.style.opacity = "0";

  //resetDelay
  linhaDiagonal1.style.opacity = "0";
  linhaDiagonal1.style.transitionDelay = "0s";
  linhaDiagonal2.style.opacity = "0";
  linhaDiagonal2.style.transitionDelay = "0s";
}
function projectOff() {
  header.style.transform = "translate(0px, 0px)";
  barraEsquerda.classList.remove('barra-esquerdaClicked');
  quadradoBarra.classList.remove('quadrado-barraClicked');
  imgMenu.style.opacity = "0";
  imgMenu.style.transition = "0s";

  //textoAnimation
  textoNome.style.opacity = "1";

  //delay
  linhaDiagonal1.style.opacity = "1";
  linhaDiagonal1.style.transitionDelay = "1s";
  linhaDiagonal2.style.opacity = "1";
  linhaDiagonal2.style.transitionDelay = "1s";
}

//INFO BUTTON
function infoOn() {
  info.classList.add('infoClicked');
}
function infoOff() {
  info.classList.remove('infoClicked');
}
//COPY EMAIL
function copyEmail() {
  var input = document.createElement('input');
  input.value = "cloudibr@gmail.com";
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  var btnEmail = document.querySelector('.email');
  btnEmail.innerText = "Copy";
  btnEmail.style.color = "#5a5a5a";
  setTimeout(function () {
    btnEmail.innerText = "E-mail ↗";
    btnEmail.style.color = "#e9e6e6";
  }, 800);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/PPNeueMontreal-Book.otf */ "./src/assets/css/fonts/PPNeueMontreal-Book.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/PPNeueMontreal-Thin.otf */ "./src/assets/css/fonts/PPNeueMontreal-Thin.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes animacao {\r\n    from {\r\n        border-bottom: 0px solid var(--black-color);\r\n        width: 0%;\r\n    }\r\n\r\n    to {\r\n        border-bottom: 1px solid var(--black-color);\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@keyframes ani-opacity {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Neue Montreal';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('opentype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Neue-Montreal';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('opentype');\r\n}\r\n\r\n\r\n\r\n:root {\r\n    --white-color: rgb(233, 230, 230);\r\n    --black-color: rgb(25, 25, 30);\r\n    --grey-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-color: var(--white-color);\r\n    font-family: 'Neue Montreal', sans-serif;\r\n    color: black;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    flex-direction: column;\r\n    top: 0;\r\n    margin-top: 250px;\r\n    margin-left: 80px;\r\n    color: var(--black-color);\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n    position: fixed;\r\n    transition: transform .8s;\r\n    z-index: 3;\r\n}\r\n\r\naside {\r\n    color: black;\r\n    position: fixed;\r\n    right: 0;\r\n    transform: translate(-9vw, -510px) skew(0deg, 0deg);\r\n    height: 25vw;\r\n    width: 200px;\r\n    min-height: 400px;\r\n    max-height: 400px;\r\n    font-family: 'Neue Montreal';\r\n    padding: 5px 70px 5px 5px;\r\n    text-align: start;\r\n    letter-spacing: 1px;\r\n    backdrop-filter: blur(2px);\r\n    display: none;\r\n    border-left: 1px solid var(--black-color);\r\n\r\n}\r\n\r\nheader button {\r\n    background-color: rgba(29, 29, 29, 0);\r\n    color: var(--black-color);\r\n    border: none;\r\n    font-family: 'Neue Montreal';\r\n    font-size: 15px;\r\n    line-height: 1.7;\r\n    margin-top: 17px;\r\n    position: relative;\r\n    transform: translate(27px, 10px);\r\n    text-align: start;\r\n    cursor: pointer;\r\n    transition: .4s;\r\n    width: 10px;\r\n    border: 1px solid black;\r\n}\r\n\r\nheader button:hover {\r\n    color: var(--grey-color);\r\n    transition-duration: .4s;\r\n}\r\n\r\nheader button:focus,\r\nheader button:active {\r\n    animation-name: animacao;\r\n    animation-duration: 1s;\r\n    animation-fill-mode: forwards;\r\n    text-align: start;\r\n    animation-iteration-count: 1;\r\n}\r\n\r\n\r\n.info {\r\n    position: fixed;\r\n    opacity: 0;\r\n    transition: opacity .5git s ease-in-out;\r\n    margin-top: 500px;\r\n}\r\n\r\n.infoClicked {\r\n    position: fixed;\r\n    display: flex;             \r\n    justify-content: space-between;\r\n    background-color: rgba(233, 230, 230, 0);\r\n    border: 1px solid var(--black-color);\r\n    backdrop-filter: blur(3px) ;\r\n    height: 600px;\r\n    width: 650px;\r\n    top: 0;\r\n    right: 0;\r\n    margin: 20vh 5vw ;\r\n    padding: 40px;\r\n    opacity: 1;\r\n    z-index: 3;\r\n}\r\n\r\n.info p {\r\n    font-family: \"Neue-Montreal\";\r\n    font-size: 15px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.info .apresentacao {\r\n    width: 100px;\r\n    margin-left: 250px;\r\n}\r\n\r\n.info .biografia{\r\n    width: 130px;\r\n    margin-left: 100px;\r\n    overflow-x: auto;\r\n}\r\n\r\n.info .biografia::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.info label {\r\n    position: fixed;\r\n    transform: translate(-0px, 200px);\r\n    width: 200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 40px;\r\n    margin-left: 60px;\r\n    left: 0;\r\n    border-left: 1px solid var(--black-color);\r\n    border-top: 1px solid var(--black-color);\r\n}\r\n\r\n.info label a{\r\n    text-decoration: none;\r\n    color: var(--black-color);\r\n    transition: .5s;\r\n    margin-top: 10px;\r\n    padding: 10px 20px 20px 20px;\r\n    font-family: \"Neue-Montreal\";\r\n    letter-spacing: 1px;\r\n}\r\n.info label a:hover{\r\n    color: white;\r\n    transition: .5s;\r\n}\r\n\r\n.info .email {\r\n    transition: .1s;\r\n    cursor: pointer;\r\n}\r\n\r\n.info img {\r\n    border: 1px solid var(--grey-color);\r\n    position: fixed;\r\n    left: 0;\r\n    margin-left: 60px;\r\n    filter: saturate(50%);\r\n    transition: filter 1s;\r\n    scale: .9;\r\n}\r\n\r\n.info img:hover {\r\n    filter: saturate(100%);\r\n}\r\n\r\n.asideShow {\r\n    display: block;\r\n    animation-name: ani-opacity;\r\n    animation-duration: .4s;\r\n    animation-fill-mode: forwards;\r\n    scale: .90;\r\n}\r\n\r\n#nome-text {\r\n    position: absolute;\r\n    top: 0;\r\n    font-family: 'Neue-Montreal';\r\n    color: var(--black-color);\r\n    font-size: 45px;\r\n    transform: translate(260px, 80px);\r\n    transition: opacity .5s;\r\n}\r\n\r\n#small-text {\r\n    font-size: 23px;\r\n    font-style: italic;\r\n    color: rgba(17, 15, 15, 0.8);\r\n}\r\n\r\n#conteudo-centro {\r\n    background-color: var(--white-color);\r\n    width: 95vw;\r\n    height: 92.80vh;\r\n    margin: 30px;\r\n    border: 1px solid var(--black-color);\r\n    z-index: 1;\r\n}\r\n\r\n#bar {\r\n    position: fixed;\r\n    margin: 10px 0px 50px 43px;\r\n    height: 90vh;\r\n    width: 80px;\r\n    z-index: 2;\r\n}\r\n\r\n.barra-esquerda {\r\n    border: 1px solid var(--black-color);\r\n    width: 55px;\r\n    margin-top: 20px;\r\n    height: 91.59vh;\r\n    position: fixed;\r\n    background-color: rgba(194, 193, 193, 0.2);\r\n    backdrop-filter: blur(2px);\r\n    transition: .8s ease-in-out;\r\n    z-index: 0;\r\n}\r\n\r\n.barra-esquerdaClicked {\r\n    border: 1px solid var(--black-color);\r\n    width: 90vw;\r\n    max-width: 1300px;\r\n    margin-top: 20px;\r\n    height: 91.59vh;\r\n    position: fixed;\r\n    background-color: rgba(194, 193, 193, 0.2);\r\n    z-index: 0;\r\n    backdrop-filter: blur(2px);\r\n    display: flex;\r\n    justify-content: end;\r\n    padding: 80px 20px 30px 200px;\r\n}\r\n\r\n\r\n.menu-project {\r\n    position: fixed;\r\n    width: 70vw;\r\n    max-width: 1000px;\r\n    height: 70vh;\r\n    opacity: 0;\r\n    list-style: none;\r\n    margin-top: -40px;\r\n    padding: 20px;\r\n    overflow-x: auto;\r\n}\r\n\r\n.item-project {\r\n    height: 140px;\r\n    width: 550px;\r\n    display: flex;\r\n    margin-bottom: 30px;\r\n}\r\n\r\nlabel {\r\n    display: block;\r\n    position: relative;\r\n    color: var(--black-color);\r\n    backdrop-filter: blur(10px);\r\n    font-family: \"Neue-Montreal\";\r\n    width: 250px;\r\n    margin: 20px 0px 0px 30px;\r\n    z-index: 4;\r\n}\r\n\r\nlabel img {\r\n    filter: saturate(50%);\r\n}\r\n\r\n.menu-project::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.img-project {\r\n    position: relative;\r\n    height: 120px;\r\n    width: 250px;\r\n    border: 1px solid rgba(255, 255, 255, 0.3);\r\n    z-index: 3; \r\n    margin: 20px 0px 40px 0; \r\n}\r\n\r\n.quadrado-barra {\r\n    border: 1px solid var(--black-color);\r\n    width: 68px;\r\n    height: 68px;\r\n    position: fixed;\r\n    background-color: rgba(194, 193, 193, 0.2);\r\n    z-index: 1;\r\n    backdrop-filter: blur(1px);\r\n    transition: .8s ease-in-out;\r\n}\r\n\r\n.quadrado-barraClicked {\r\n    border: 1px solid var(--black-color);\r\n    width: 68px;\r\n    height: 15px !important;\r\n    position: fixed;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    z-index: 1;\r\n    transform: translate(0px, 0px);\r\n}\r\n\r\n#js-lateral {\r\n    position: absolute;\r\n    font-style: italic;\r\n    transform: rotate(-90deg);\r\n    color: var(--white-color);\r\n    margin: 79vh 0 0 -53px;\r\n\r\n}\r\n\r\n#linha-diagonal1 {\r\n    border-right: 1px solid rgba(17, 17, 17, 0.6);\r\n    position: fixed;\r\n    transform: translate(59px, 0px) rotate(32deg);\r\n    height: 21px;\r\n    filter: blur(1px);\r\n    transition: opacity .2s ease-in-out;\r\n}\r\n\r\n#linha-diagonal2 {\r\n    border-right: 1px solid var(--black-color);\r\n    position: fixed;\r\n    transform: translate(59px, 64px) rotate(44deg);\r\n    height: 19px;\r\n    transition: opacity .2s ease-in-out;\r\n}\r\n\r\n#particles-js {\r\n    display: flex;\r\n    position: relative;\r\n    height: 92.70vh;\r\n    width: 100%;\r\n}\r\n\r\n@supports (display: flex) {\r\n    @media(max-width: 900px) {\r\n        header {\r\n            margin-left: 40px;\r\n        }\r\n\r\n        #conteudo-centro {\r\n            margin: 0;\r\n            height: 95.70vh;\r\n            width: 99.5vw;\r\n        }\r\n\r\n        #linha-diagonal1 {\r\n            border-right: 1px solid rgba(233, 230, 230, 0.3);\r\n            position: fixed;\r\n            transform: translate(43px, -2px) rotate(32deg);\r\n            height: 16px;\r\n            filter: blur(1px);\r\n        }\r\n\r\n        #linha-diagonal2 {\r\n            border-right: 1px solid var(--grey-color);\r\n            position: fixed;\r\n            transform: translate(43px, 47px) rotate(44deg);\r\n            height: 13px;\r\n        }\r\n\r\n        .barra-esquerda {\r\n            height: 94.20vh;\r\n            width: 40px;\r\n            margin-top: 14px;\r\n        }\r\n\r\n        .quadrado-barra {\r\n            width: 50px;\r\n            height: 50px;\r\n        }\r\n\r\n        #js-lateral {\r\n            transform: rotate(-90deg) translate(0px, 8vw);\r\n            display: none;\r\n        }\r\n\r\n        #btn-language {\r\n            margin-left: 90px;\r\n            margin-top: 95.70vh;\r\n        }\r\n\r\n        #nome-text {\r\n            font-size: 30px;\r\n            transform: translate(39vw, 90px);\r\n            position: fixed;\r\n        }\r\n\r\n        #small-text {\r\n            font-size: 15px;\r\n        }\r\n\r\n        #bar {\r\n            transform: translate(-40px, 0px);\r\n        }\r\n\r\n        .asideShow {\r\n            scale: 0.8;\r\n        }\r\n\r\n        label {\r\n            margin-right: 10px !important;\r\n        }\r\n\r\n        .barra-esquerdaClicked {\r\n            width: 98vw;\r\n        }\r\n\r\n        .img-project {\r\n            scale: .8;\r\n        }\r\n        .infoClicked {\r\n            display: flex;\r\n            flex-direction: column;\r\n            width: 400px;\r\n            overflow: auto;\r\n            scale: .9;\r\n            margin-right: 0;\r\n            padding: 10px;\r\n        }\r\n        .infoClicked::-webkit-scrollbar {\r\n            display: none;\r\n        }\r\n\r\n        .info .biografia {\r\n            position: absolute;\r\n            margin-top: 500px;\r\n            margin-left: 30px;\r\n            overflow: auto;\r\n        }\r\n\r\n        .info .biografia::-webkit-scrollbar {\r\n            display: none;\r\n        }\r\n\r\n        .info img {\r\n            scale: .8;\r\n            margin-left: 10px;\r\n        }\r\n        .info label a{\r\n            text-decoration: none;\r\n            color: var(--white-color);\r\n            transition: .5s;\r\n            margin-top: 10px;\r\n            padding: 10px 20px 20px 20px;\r\n            font-family: \"Neue-Montreal\";\r\n            letter-spacing: 1px;\r\n        }\r\n\r\n        .info label {\r\n            margin-left: 20px;\r\n        }\r\n        .info .apresentacao {\r\n            width: 100px;\r\n            margin-left: 200px;\r\n        }\r\n    }\r\n    @media(max-width: 450px) {\r\n        .infoClicked {\r\n            display: flex;\r\n            flex-direction: column;\r\n            width: 350px;\r\n            overflow: auto;\r\n            scale: .8;\r\n            margin-right: 0;\r\n            padding: 10px;\r\n        }\r\n        .info img {\r\n            scale: .8;\r\n            margin-left: 10px;\r\n        }\r\n    }\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@keyframes animacao {\r\n    from {\r\n        border-bottom: 0px solid var(--black-color);\r\n        width: 0%;\r\n    }\r\n\r\n    to {\r\n        border-bottom: 1px solid var(--black-color);\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@keyframes ani-opacity {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Neue Montreal';\r\n    src: url('./fonts/PPNeueMontreal-Book.otf') format('opentype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Neue-Montreal';\r\n    src: url('./fonts/PPNeueMontreal-Thin.otf') format('opentype');\r\n}\r\n\r\n\r\n\r\n:root {\r\n    --white-color: rgb(233, 230, 230);\r\n    --black-color: rgb(25, 25, 30);\r\n    --grey-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-color: var(--white-color);\r\n    font-family: 'Neue Montreal', sans-serif;\r\n    color: black;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    flex-direction: column;\r\n    top: 0;\r\n    margin-top: 250px;\r\n    margin-left: 80px;\r\n    color: var(--black-color);\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n    position: fixed;\r\n    transition: transform .8s;\r\n    z-index: 3;\r\n}\r\n\r\naside {\r\n    color: black;\r\n    position: fixed;\r\n    right: 0;\r\n    transform: translate(-9vw, -510px) skew(0deg, 0deg);\r\n    height: 25vw;\r\n    width: 200px;\r\n    min-height: 400px;\r\n    max-height: 400px;\r\n    font-family: 'Neue Montreal';\r\n    padding: 5px 70px 5px 5px;\r\n    text-align: start;\r\n    letter-spacing: 1px;\r\n    backdrop-filter: blur(2px);\r\n    display: none;\r\n    border-left: 1px solid var(--black-color);\r\n\r\n}\r\n\r\nheader button {\r\n    background-color: rgba(29, 29, 29, 0);\r\n    color: var(--black-color);\r\n    border: none;\r\n    font-family: 'Neue Montreal';\r\n    font-size: 15px;\r\n    line-height: 1.7;\r\n    margin-top: 17px;\r\n    position: relative;\r\n    transform: translate(27px, 10px);\r\n    text-align: start;\r\n    cursor: pointer;\r\n    transition: .4s;\r\n    width: 10px;\r\n    border: 1px solid black;\r\n}\r\n\r\nheader button:hover {\r\n    color: var(--grey-color);\r\n    transition-duration: .4s;\r\n}\r\n\r\nheader button:focus,\r\nheader button:active {\r\n    animation-name: animacao;\r\n    animation-duration: 1s;\r\n    animation-fill-mode: forwards;\r\n    text-align: start;\r\n    animation-iteration-count: 1;\r\n}\r\n\r\n\r\n.info {\r\n    position: fixed;\r\n    opacity: 0;\r\n    transition: opacity .5git s ease-in-out;\r\n    margin-top: 500px;\r\n}\r\n\r\n.infoClicked {\r\n    position: fixed;\r\n    display: flex;             \r\n    justify-content: space-between;\r\n    background-color: rgba(233, 230, 230, 0);\r\n    border: 1px solid var(--black-color);\r\n    backdrop-filter: blur(3px) ;\r\n    height: 600px;\r\n    width: 650px;\r\n    top: 0;\r\n    right: 0;\r\n    margin: 20vh 5vw ;\r\n    padding: 40px;\r\n    opacity: 1;\r\n    z-index: 3;\r\n}\r\n\r\n.info p {\r\n    font-family: \"Neue-Montreal\";\r\n    font-size: 15px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.info .apresentacao {\r\n    width: 100px;\r\n    margin-left: 250px;\r\n}\r\n\r\n.info .biografia{\r\n    width: 130px;\r\n    margin-left: 100px;\r\n    overflow-x: auto;\r\n}\r\n\r\n.info .biografia::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.info label {\r\n    position: fixed;\r\n    transform: translate(-0px, 200px);\r\n    width: 200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 40px;\r\n    margin-left: 60px;\r\n    left: 0;\r\n    border-left: 1px solid var(--black-color);\r\n    border-top: 1px solid var(--black-color);\r\n}\r\n\r\n.info label a{\r\n    text-decoration: none;\r\n    color: var(--black-color);\r\n    transition: .5s;\r\n    margin-top: 10px;\r\n    padding: 10px 20px 20px 20px;\r\n    font-family: \"Neue-Montreal\";\r\n    letter-spacing: 1px;\r\n}\r\n.info label a:hover{\r\n    color: white;\r\n    transition: .5s;\r\n}\r\n\r\n.info .email {\r\n    transition: .1s;\r\n    cursor: pointer;\r\n}\r\n\r\n.info img {\r\n    border: 1px solid var(--grey-color);\r\n    position: fixed;\r\n    left: 0;\r\n    margin-left: 60px;\r\n    filter: saturate(50%);\r\n    transition: filter 1s;\r\n    scale: .9;\r\n}\r\n\r\n.info img:hover {\r\n    filter: saturate(100%);\r\n}\r\n\r\n.asideShow {\r\n    display: block;\r\n    animation-name: ani-opacity;\r\n    animation-duration: .4s;\r\n    animation-fill-mode: forwards;\r\n    scale: .90;\r\n}\r\n\r\n#nome-text {\r\n    position: absolute;\r\n    top: 0;\r\n    font-family: 'Neue-Montreal';\r\n    color: var(--black-color);\r\n    font-size: 45px;\r\n    transform: translate(260px, 80px);\r\n    transition: opacity .5s;\r\n}\r\n\r\n#small-text {\r\n    font-size: 23px;\r\n    font-style: italic;\r\n    color: rgba(17, 15, 15, 0.8);\r\n}\r\n\r\n#conteudo-centro {\r\n    background-color: var(--white-color);\r\n    width: 95vw;\r\n    height: 92.80vh;\r\n    margin: 30px;\r\n    border: 1px solid var(--black-color);\r\n    z-index: 1;\r\n}\r\n\r\n#bar {\r\n    position: fixed;\r\n    margin: 10px 0px 50px 43px;\r\n    height: 90vh;\r\n    width: 80px;\r\n    z-index: 2;\r\n}\r\n\r\n.barra-esquerda {\r\n    border: 1px solid var(--black-color);\r\n    width: 55px;\r\n    margin-top: 20px;\r\n    height: 91.59vh;\r\n    position: fixed;\r\n    background-color: rgba(194, 193, 193, 0.2);\r\n    backdrop-filter: blur(2px);\r\n    transition: .8s ease-in-out;\r\n    z-index: 0;\r\n}\r\n\r\n.barra-esquerdaClicked {\r\n    border: 1px solid var(--black-color);\r\n    width: 90vw;\r\n    max-width: 1300px;\r\n    margin-top: 20px;\r\n    height: 91.59vh;\r\n    position: fixed;\r\n    background-color: rgba(194, 193, 193, 0.2);\r\n    z-index: 0;\r\n    backdrop-filter: blur(2px);\r\n    display: flex;\r\n    justify-content: end;\r\n    padding: 80px 20px 30px 200px;\r\n}\r\n\r\n\r\n.menu-project {\r\n    position: fixed;\r\n    width: 70vw;\r\n    max-width: 1000px;\r\n    height: 70vh;\r\n    opacity: 0;\r\n    list-style: none;\r\n    margin-top: -40px;\r\n    padding: 20px;\r\n    overflow-x: auto;\r\n}\r\n\r\n.item-project {\r\n    height: 140px;\r\n    width: 550px;\r\n    display: flex;\r\n    margin-bottom: 30px;\r\n}\r\n\r\nlabel {\r\n    display: block;\r\n    position: relative;\r\n    color: var(--black-color);\r\n    backdrop-filter: blur(10px);\r\n    font-family: \"Neue-Montreal\";\r\n    width: 250px;\r\n    margin: 20px 0px 0px 30px;\r\n    z-index: 4;\r\n}\r\n\r\nlabel img {\r\n    filter: saturate(50%);\r\n}\r\n\r\n.menu-project::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.img-project {\r\n    position: relative;\r\n    height: 120px;\r\n    width: 250px;\r\n    border: 1px solid rgba(255, 255, 255, 0.3);\r\n    z-index: 3; \r\n    margin: 20px 0px 40px 0; \r\n}\r\n\r\n.quadrado-barra {\r\n    border: 1px solid var(--black-color);\r\n    width: 68px;\r\n    height: 68px;\r\n    position: fixed;\r\n    background-color: rgba(194, 193, 193, 0.2);\r\n    z-index: 1;\r\n    backdrop-filter: blur(1px);\r\n    transition: .8s ease-in-out;\r\n}\r\n\r\n.quadrado-barraClicked {\r\n    border: 1px solid var(--black-color);\r\n    width: 68px;\r\n    height: 15px !important;\r\n    position: fixed;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    z-index: 1;\r\n    transform: translate(0px, 0px);\r\n}\r\n\r\n#js-lateral {\r\n    position: absolute;\r\n    font-style: italic;\r\n    transform: rotate(-90deg);\r\n    color: var(--white-color);\r\n    margin: 79vh 0 0 -53px;\r\n\r\n}\r\n\r\n#linha-diagonal1 {\r\n    border-right: 1px solid rgba(17, 17, 17, 0.6);\r\n    position: fixed;\r\n    transform: translate(59px, 0px) rotate(32deg);\r\n    height: 21px;\r\n    filter: blur(1px);\r\n    transition: opacity .2s ease-in-out;\r\n}\r\n\r\n#linha-diagonal2 {\r\n    border-right: 1px solid var(--black-color);\r\n    position: fixed;\r\n    transform: translate(59px, 64px) rotate(44deg);\r\n    height: 19px;\r\n    transition: opacity .2s ease-in-out;\r\n}\r\n\r\n#particles-js {\r\n    display: flex;\r\n    position: relative;\r\n    height: 92.70vh;\r\n    width: 100%;\r\n}\r\n\r\n@supports (display: flex) {\r\n    @media(max-width: 900px) {\r\n        header {\r\n            margin-left: 40px;\r\n        }\r\n\r\n        #conteudo-centro {\r\n            margin: 0;\r\n            height: 95.70vh;\r\n            width: 99.5vw;\r\n        }\r\n\r\n        #linha-diagonal1 {\r\n            border-right: 1px solid rgba(233, 230, 230, 0.3);\r\n            position: fixed;\r\n            transform: translate(43px, -2px) rotate(32deg);\r\n            height: 16px;\r\n            filter: blur(1px);\r\n        }\r\n\r\n        #linha-diagonal2 {\r\n            border-right: 1px solid var(--grey-color);\r\n            position: fixed;\r\n            transform: translate(43px, 47px) rotate(44deg);\r\n            height: 13px;\r\n        }\r\n\r\n        .barra-esquerda {\r\n            height: 94.20vh;\r\n            width: 40px;\r\n            margin-top: 14px;\r\n        }\r\n\r\n        .quadrado-barra {\r\n            width: 50px;\r\n            height: 50px;\r\n        }\r\n\r\n        #js-lateral {\r\n            transform: rotate(-90deg) translate(0px, 8vw);\r\n            display: none;\r\n        }\r\n\r\n        #btn-language {\r\n            margin-left: 90px;\r\n            margin-top: 95.70vh;\r\n        }\r\n\r\n        #nome-text {\r\n            font-size: 30px;\r\n            transform: translate(39vw, 90px);\r\n            position: fixed;\r\n        }\r\n\r\n        #small-text {\r\n            font-size: 15px;\r\n        }\r\n\r\n        #bar {\r\n            transform: translate(-40px, 0px);\r\n        }\r\n\r\n        .asideShow {\r\n            scale: 0.8;\r\n        }\r\n\r\n        label {\r\n            margin-right: 10px !important;\r\n        }\r\n\r\n        .barra-esquerdaClicked {\r\n            width: 98vw;\r\n        }\r\n\r\n        .img-project {\r\n            scale: .8;\r\n        }\r\n        .infoClicked {\r\n            display: flex;\r\n            flex-direction: column;\r\n            width: 400px;\r\n            overflow: auto;\r\n            scale: .9;\r\n            margin-right: 0;\r\n            padding: 10px;\r\n        }\r\n        .infoClicked::-webkit-scrollbar {\r\n            display: none;\r\n        }\r\n\r\n        .info .biografia {\r\n            position: absolute;\r\n            margin-top: 500px;\r\n            margin-left: 30px;\r\n            overflow: auto;\r\n        }\r\n\r\n        .info .biografia::-webkit-scrollbar {\r\n            display: none;\r\n        }\r\n\r\n        .info img {\r\n            scale: .8;\r\n            margin-left: 10px;\r\n        }\r\n        .info label a{\r\n            text-decoration: none;\r\n            color: var(--white-color);\r\n            transition: .5s;\r\n            margin-top: 10px;\r\n            padding: 10px 20px 20px 20px;\r\n            font-family: \"Neue-Montreal\";\r\n            letter-spacing: 1px;\r\n        }\r\n\r\n        .info label {\r\n            margin-left: 20px;\r\n        }\r\n        .info .apresentacao {\r\n            width: 100px;\r\n            margin-left: 200px;\r\n        }\r\n    }\r\n    @media(max-width: 450px) {\r\n        .infoClicked {\r\n            display: flex;\r\n            flex-direction: column;\r\n            width: 350px;\r\n            overflow: auto;\r\n            scale: .8;\r\n            margin-right: 0;\r\n            padding: 10px;\r\n        }\r\n        .info img {\r\n            scale: .8;\r\n            margin-left: 10px;\r\n        }\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/css/fonts/PPNeueMontreal-Book.otf":
/*!******************************************************!*\
  !*** ./src/assets/css/fonts/PPNeueMontreal-Book.otf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cd21cf351f4da50cf75d.otf";

/***/ }),

/***/ "./src/assets/css/fonts/PPNeueMontreal-Thin.otf":
/*!******************************************************!*\
  !*** ./src/assets/css/fonts/PPNeueMontreal-Thin.otf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "113878d75d11299845e2.otf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");

var menu = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
var btnClicked = menu.clicked;
document.addEventListener('click', btnClicked);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map