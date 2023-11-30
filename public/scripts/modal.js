const modal = document.querySelector('#modal');
const modalOpen = document.querySelector('#modalOpen');
const modalClose = document.querySelector('#modalClose');

modalOpen.addEventListener('click',() => {
    modal.showModal();
});

modalClose.addEventListener('click',() => {
    modal.close();
});