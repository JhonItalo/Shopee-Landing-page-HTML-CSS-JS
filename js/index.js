let a = 2000
setInterval(carrosel, 3000);

function carrosel() {
    let imagens = document.querySelectorAll('.carrosel li');
    let carrosel = document.querySelector('.carrosel');

    for (let i = 0; i < imagens.length; i++) {
        if (i + 1 == imagens.length) {
            imagens[0].classList.add('ativ');
            imagens[i].classList.remove('ativ')
            return
        }
        if (imagens[i].classList.contains('ativ')) {
            imagens[i + 1].classList.add('ativ')
            imagens[i].classList.remove('ativ')

            return
        }

    }

}