import './assets/css/style.css';

const menu = require('./modules/menu');
const btnClicked = menu.clicked;

document.addEventListener('click', btnClicked);
