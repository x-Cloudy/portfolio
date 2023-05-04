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

            //HOME BUTTON
            if (event.classList.contains('btn-home')) {
                homeAside.classList.add('asideShow');
            } else {
                homeAside.classList.remove('asideShow')
            }

            //PROJECTS BUTTON
            if (event.classList.contains('btn-projects')) {
                header.style.transform = "translate(-80px, 0px)"
                barraEsquerda.classList.add('barra-esquerdaClicked');
                quadradoBarra.classList.add('quadrado-barraClicked')
                
                //RESET DELAY
                linhaDiagonal1.style.opacity = "0";
                linhaDiagonal1.style.transitionDelay = "0s";
                linhaDiagonal2.style.opacity = "0";
                linhaDiagonal2.style.transitionDelay = "0s";
            
            } else {
                header.style.transform = "translate(0px, 0px)";
                barraEsquerda.classList.remove('barra-esquerdaClicked');
                quadradoBarra.classList.remove('quadrado-barraClicked')
            
                //COMEBACK DELAY
                linhaDiagonal1.style.opacity = "1";
                linhaDiagonal1.style.transitionDelay = "1s";
                linhaDiagonal2.style.opacity = "1";
                linhaDiagonal2.style.transitionDelay = "1s";
            }
        });
        
        (function bloquearRolagem() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
        })();

    })();








})();