/* 

container-modal-desabilitado
teste
button-modal
*/


const modal = document.querySelector('.modal')
const abreModal = document.querySelector('.detalhe')
const fechaModal = document.querySelector('.fecha-modal')

abreModal.addEventListener('click', () => {
        modal.classList.add('container-modal')
        modal.classList.remove('container-modal-desabilitado')
})

fechaModal.addEventListener('click', (e) => {
    modal.classList.add('container-modal-desabilitado')
    modal.classList.remove('container-modal')
    
})


modal.addEventListener('click', () => {
    modal.classList.add('container-modal-desabilitado')
    modal.classList.remove('container-modal')
})


console.log(modal);