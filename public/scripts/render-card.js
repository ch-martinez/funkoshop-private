const template_card = document.getElementById("template_li_card").content
const fragment = document.createDocumentFragment()
const shop_item_list = document.querySelector(".shop__items-list")

document.addEventListener('DOMContentLoaded', (e) => {
    fetchData()
})

// Carga de datos
const fetchData = async () => {
    const res = await fetch('https://api.npoint.io/d92037831b024e8cc39d');
    const data = await res.json()

    renderCards(data)
}

const renderCards = (data) => {
    // Carga de datos en template
    data.forEach(element => {
        template_card.querySelector('.card__img-front').setAttribute('src', element.cover.front);
        template_card.querySelector('.card__img-back').setAttribute('src', element.cover.back);
        template_card.querySelector('.card__collection').textContent = element.collection;
        template_card.querySelector('.card__name').textContent = element.name;
        template_card.querySelector('.card__price').textContent = `$${element.price}`;
        template_card.querySelector('.card__payments').textContent = `${element.payments} cuotas sin interés`;
        //Si es un nuevo funko agrega el indicador "nuevo"
        if (element.new) {
            template_card.querySelector('.card').classList.add("new-item")
        };
        const clone = template_card.cloneNode(true);
        fragment.appendChild(clone);
    });
    shop_item_list.appendChild(fragment);
}