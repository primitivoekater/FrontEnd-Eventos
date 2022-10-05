const botaoInscrever = document.querySelector('.btn');
const botoesmodal = document.querySelectorAll('.modal button')
const botaoConfirmar = document.querySelector('.confirmar')
const modal = document.querySelector('.modal')

botaoInscrever.addEventListener('click', inscrever)

botoesmodal.forEach(botao => {
    botao.addEventListener('click', function () {
        modal.calssList.add('escondido')
    })
})

botaoConfirmar.addEventListener('click', function () {
    botaoInscrever.textContent = 'inscrever-se'
    botaoInscrever.calsslist.remove('inscrito')
    botaoInscrever.addEventListener('click', inscreverSe)

    botaoClicado.removeEventListener('click', inscrever);
    botaoClicado.addEventListener('click', function () {
        modal.classList.remove('escondido');
    })
})