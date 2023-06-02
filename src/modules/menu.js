const menuFunc = require('./menuFunc');

exports.clicked = function btnClicked(event) {
  const btnPress = event.target.innerText;
  const classes = event.target.classList.value;

  const command = {
    btnPress: btnPress.toLowerCase(),
    classes
  };

  btnFunc(command);
};

function btnFunc(command) {
  const menu = {
    home() {
      menuFunc.switcher(command.classes);
    },
    projects() {
      menuFunc.switcher(command.classes);
    },
    info() {
      menuFunc.switcher(command.classes);
    },
  }
  const email = {
    email() {
      menuFunc.switcher(command.classes);
    }
  };
  
  const executaBtn = menu[command.btnPress];
  const emailCopy = email[command.classes];
  if (executaBtn) executaBtn();
  if (emailCopy) emailCopy();
};


