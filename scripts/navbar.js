const menuBtn = document.querySelector('.navbar-mobile__menu-btn')
const navbar = document.querySelector('.navbar__menu')

const cantidaditems = () => {
    const items = document.querySelectorAll('.navbar__cart-count')
    console.log(items)
    items.forEach(e => {
        console.log(e)
        e.innerHTML = "1"
    });
}
cantidaditems()

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('navbar__menu--active')
    menuBtn.classList.toggle('navbar-mobile__menu-btn--active')
})