const template_admin = document.querySelector('#template_admin').content
const fragment = document.createDocumentFragment()
const table = document.querySelector('#tbody')

document.addEventListener('DOMContentLoaded', (e) =>{
    fetchData()
})

const fetchData = async () => {
    const res = await fetch('https://api.npoint.io/d92037831b024e8cc39d')
    const data = await res.json()

    renderAdmin(data)
    renderAdmin(data)
    renderAdmin(data)
}

let i = 0
const renderAdmin = (data) => {
    data.forEach(element => {
        i++
        template_admin.querySelector('.table-admin__data:first-child').textContent = i
        template_admin.querySelector('.table-admin__data:nth-child(2)').textContent = element.sku
        template_admin.querySelector('.table-admin__data:nth-child(3)').textContent = element.name
        template_admin.querySelector('.table-admin__data:nth-child(4)').textContent = element.collection
        const clone = template_admin.cloneNode(true)
        fragment.appendChild(clone)
    })
    table.appendChild(fragment)
}