const header = document.querySelector('header');
const textoNome = document.querySelector('#nome-text');
const homeAside = document.querySelector('#home-aside');
const linhaDiagonal1 = document.querySelector('#linha-diagonal1');
const linhaDiagonal2 = document.querySelector('#linha-diagonal2');
const info = document.querySelector('.info');
const imgMenu = document.querySelector('.menu-project');
const barraEsquerda = document.querySelector('.barra-esquerda');
const quadradoBarra = document.querySelector('.quadrado-barra');


exports.switcher = function switcher(evento) {

  switch (evento) {
    case 'btn-home':
      homeOn()
      projectOff()
      infoOff()
      break;

    case 'btn-projects':
      projectOn()
      homeOff()
      infoOff()
      break;

    case 'btn-info':
      infoOn()
      homeOff()
      projectOff()
      break;

    case 'email':
      copyEmail()
      break;

    default:
      homeOff()
      projectOff()
      infoOff()
      break;

  }
}

//HOME BUTTON
function homeOn() {
  homeAside.classList.add('asideShow');
}

function homeOff() {
  homeAside.classList.remove('asideShow')
}

// //PROJECTS BUTTON
function projectOn() {
  header.style.transform = "translate(-50px, 0px)"
  barraEsquerda.classList.add('barra-esquerdaClicked');
  quadradoBarra.classList.add('quadrado-barraClicked')

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
  quadradoBarra.classList.remove('quadrado-barraClicked')

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
  let input = document.createElement('input');
  input.value = "cloudibr@gmail.com";
  document.body.appendChild(input);
  input.select()
  document.execCommand('copy');
  document.body.removeChild(input);

  const btnEmail = document.querySelector('.email');
  btnEmail.innerText = "Copy";
  btnEmail.style.color = "#5a5a5a"

  setTimeout(function () {
    btnEmail.innerText = "E-mail ↗";
    btnEmail.style.color = "#e9e6e6"
  }, 800)
}
