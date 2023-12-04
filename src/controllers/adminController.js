const items = require('../services/itemsServices')

const mainView = (req,res) => {
    const dbProducts = items.getAllItems()
    const view = {
        title: 'Administracion - FS',
        main: false
    }
    res.render('pages/admin/admin', {view, dbProducts})
}

const createView = (req,res) => {
    const view = {
        title: 'Crear - FS',
        main: false
    }
    res.render('pages/admin/create', {view})
}
const createItem = (req,res) => res.send('Pagina ADMIN, SE CREA ITEM')
const editView = (req,res) => {
    const item = items.getItem(req.params.id)
    const view = {
        title: `${item.product_name} - FS`,
        main: false
    }
    
    res.render('pages/admin/edit', {view, item})
}

const editItem = (req,res) => res.send(`Pagina ADMIN, SE EDITA ${req.params.id}. CONFIRMADO`)
const deletItem = (req,res) => res.send(`Pagina ADMIN, SE ELIMINA ${req.params.id}`)

module.exports = {
    mainView,
    createView,
    createItem,
    editView,
    editItem,
    deletItem
}