(function SaveScop() {

    (function sizeWrap() {
        const classCanvas = document.querySelector('#conteudo-centro');
        const Canvas = window.getComputedStyle(classCanvas);
        const sizeCanvas = Canvas.getPropertyValue('width');
        console.log(sizeCanvas)

        if(sizeCanvas < 600) {
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

    })();








})();