const btn = document.querySelector('.filters-mobile__btn')
const filters = document.querySelector('.filters__form-container')
const body = document.querySelector('body')

btn.addEventListener('click', () => {
    filters.classList.toggle('--filters--show')
    body.classList.toggle('--no-scroll')
})