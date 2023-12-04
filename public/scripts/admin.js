const tableAdmin = document.querySelector('.table-admin');
const alertDelet = document.querySelector('.alert-delet');
const alertDeletForm = document.querySelector('#alert-delet__form');
const alertDeletBtnCancel = document.querySelector('.btn--admin-delet');

tableAdmin.addEventListener('click', (e) => {
    if (e.target.classList.contains('alert-delet__btn')){
        eliminar(e)
    }
})

/* Alerta de eliminacion */
const eliminar = (e) => {
    const item = e.target.parentNode.parentNode.parentNode 
    const name = item.querySelector('.table-admin__data:nth-child(3)').textContent
    const id = item.querySelector('.table-admin__data:first-child').textContent
    alertDeletForm.setAttribute('action',`/admin/delete/${id}`)//?_method=DELETE
    alertDelet.querySelector('.alert-delet__text span').textContent = name
    alertDelet.showModal();
}

alertDeletBtnCancel.addEventListener('click',() => {
    alertDelet.close()
});