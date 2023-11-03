const alert = document.querySelector('.alert-delet');
const alertCancel = document.querySelector('#alertCancel');

table.addEventListener('click', (e) => {
    if (e.target.classList.contains('alert-delet__btn')){
        eliminar(e)
    }
})

alertCancel.addEventListener('click',() => {
    alert.close()
});

const eliminar = (e) => {
    const item = e.target.parentNode.parentNode.parentNode 
    const name = item.querySelector('.table-admin__data:nth-child(3)').textContent
    alert.querySelector('.alert-delet__text span').textContent = name
    alert.showModal();
}


