(function SaveScop() {

    (function eClick() {
        document.addEventListener('click', (e) => {
            const event = e.target;
            console.log(event)

            const header = document.querySelector('header');
            const homeAside = document.querySelector('#home-aside');
            const quadradoBarra = document.querySelector('.quadrado-barra');
            const barraEsquerda = document.querySelector('.barra-esquerda');
            const linhaDiagonal1 = document.querySelector('#linha-diagonal1');
            const linhaDiagonal2 = document.querySelector('#linha-diagonal2');
            const textoNome = document.querySelector('#nome-text');
            const imgMenu = document.querySelector('.menu-project');

            //HOME BUTTON
            if (event.classList.contains('btn-home')) {
                homeAside.classList.add('asideShow');
            } else {
                homeAside.classList.remove('asideShow')
            }

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
            } else {
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
        });
        //PREVENT SCROLL
        (function bloquearRolagem() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
        })();

    })();








})();