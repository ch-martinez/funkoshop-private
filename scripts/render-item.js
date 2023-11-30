const template = document.querySelector('#template_item').content
const fragment = document.querySelector('#fragment')
const main = document.querySelector('.container')
const db = 'https://api.npoint.io/d92037831b024e8cc39d'

document.addEventListener('DOMContentLoaded', (e) =>{
    fetchData()
})

const fetchData = async () => {
    const res = await fetch(db)
    const data = await res.json()

    renderItem(data[3])
}

const renderItem = item => {
    template.querySelector('.item').dataset.id = item.sku
    template.querySelector('.item__collection').innerHTML = item.collection
    template.querySelector('.item__title').innerHTML = item.name
    template.querySelector('.item__description').innerHTML = item.description
    template.querySelector('.item__price').innerHTML = `$${item.price}`
    template.querySelector('.item__cover-front').setAttribute('src', item.cover.front)
    template.querySelector('.item__cover-back').setAttribute('src', item.cover.back)
    template.querySelector('.btn--add').dataset.id = item.sku
    template.querySelector('.btn--substract').dataset.id = item.sku
    const clone = template.cloneNode(true)
    const nodo = main.querySelector(':last-child')
    main.insertBefore(clone, nodo)
}