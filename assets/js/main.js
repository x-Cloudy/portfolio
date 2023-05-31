function eClick() {
  document.addEventListener('click', (e) => {
      const event = e.target;
      const header = document.querySelector('header');
      const homeAside = document.querySelector('#home-aside');
      const quadradoBarra = document.querySelector('.quadrado-barra');
      const barraEsquerda = document.querySelector('.barra-esquerda');
      const linhaDiagonal1 = document.querySelector('#linha-diagonal1');
      const linhaDiagonal2 = document.querySelector('#linha-diagonal2');
      const textoNome = document.querySelector('#nome-text');
      const imgMenu = document.querySelector('.menu-project');
      const info = document.querySelector('.info');

      //HOME BUTTON
      if (event.classList.contains('btn-home')) {
          homeAside.classList.add('asideShow');
      } else if (
          event.classList.contains('particles-js-canvas-el') ||
          event.classList.contains('btn-info') ||
          event.classList.contains('btn-projects')
      ) {homeAside.classList.remove('asideShow')}

      //PROJECTS BUTTON
      if (event.classList.contains('btn-projects')) {
          header.style.transform = "translate(-50px, 0px)"
          barraEsquerda.classList.add('barra-esquerdaClicked');
          quadradoBarra.classList.add('quadrado-barraClicked')

          //IMG ANIMATION
          imgMenu.style.opacity = "1";
          imgMenu.style.transition = "opacity 2s ease-in-out";

          //TextoAnimation
          textoNome.style.opacity = "0";

          //RESET DELAY
          linhaDiagonal1.style.opacity = "0";
          linhaDiagonal1.style.transitionDelay = "0s";
          linhaDiagonal2.style.opacity = "0";
          linhaDiagonal2.style.transitionDelay = "0s";
      } else if (
          event.classList.contains('particles-js-canvas-el') ||
          event.classList.contains('btn-home') ||
          event.classList.contains('btn-info')
      ) {
          header.style.transform = "translate(0px, 0px)";
          barraEsquerda.classList.remove('barra-esquerdaClicked');
          quadradoBarra.classList.remove('quadrado-barraClicked')

          imgMenu.style.opacity = "0";
          imgMenu.style.transition = "0s";

          //TextoAnimation
          textoNome.style.opacity = "1";

          //COMEBACK DELAY
          linhaDiagonal1.style.opacity = "1";
          linhaDiagonal1.style.transitionDelay = "1s";
          linhaDiagonal2.style.opacity = "1";
          linhaDiagonal2.style.transitionDelay = "1s";
      }

      //INFO BUTTON
      if (event.classList.contains('btn-info')) {
          info.classList.add('infoClicked');
      } else if (
          event.classList.contains('particles-js-canvas-el') ||
          event.classList.contains('btn-home') ||
          event.classList.contains('btn-projects') ||
          event.classList.contains('menu-project') ||
          event.classList.contains('img-project')
      ) {info.classList.remove('infoClicked');}

      //COPY EMAIL
      if (event.classList.contains('email')) {
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
  });
};
eClick()
