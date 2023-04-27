(function SaveScop() {

    (function sizeWrap() {
        const classCanvas = document.querySelector('#conteudo-centro');
        const Canvas = window.getComputedStyle(classCanvas);
        const sizeCanvas = Canvas.getPropertyValue('width');
        console.log(sizeCanvas)

        if (sizeCanvas < 600) {
            console.log('OIA EU AQUI')
        }
    })();

    (function eClick() {
        document.addEventListener('click', (e) => {
            const event = e.target;
            console.log(event)

            const homeAside = document.querySelector
                ('#home-aside');
            homeAside.getAttributeNames()
            if (event.classList.contains('btn-home')) {
                homeAside.classList.add('asideShow');
            } else {
                homeAside.classList.remove('asideShow')
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