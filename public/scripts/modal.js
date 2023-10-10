const terms = document.getElementById('terms');
const modal = document.getElementById('modal--terms');
const close_modal = document.querySelector("#close-modal")

terms.addEventListener('click',() => {
    modal.showModal();
});

close-modal.addEventListener('click', () => {
    modal.close();
})