const input = document.querySelector('input')
input.forEach(item => {
    item.addEventListener('change', function (event) {
        const itemModificado = event.target;
        if (itemModificado.dataset.resposta === itemModificado.value) {
            itemModificado.classlist.add('acerto')
        }

    })

});