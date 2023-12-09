const quantityForm = document.querySelector('.quantity')
const itemQuantity = document.querySelector('.quantity__input')

quantityForm.addEventListener('click', (e) => {
    itemQuantityStock = parseInt(itemQuantity.max)
    itemQuantityValue = parseInt(itemQuantity.value)
    if (e.target.classList.contains('btn--add') && (itemQuantityValue<itemQuantityStock)) {
        itemQuantity.value = itemQuantityValue + 1
    }
    if (e.target.classList.contains('btn--substract') && (itemQuantityValue>1)) {
        itemQuantity.value = itemQuantityValue - 1
    }
})