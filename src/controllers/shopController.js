const items = require('../services/itemsServices')

const mainView = (req,res) => {
    const view = {
        title: 'Shop - FS',
        main: true
    }
    const dbProducts = items.getAllItems()
    res.render('pages/shop/shop', {view, dbProducts})
}

const itemView = (req,res) => {
    const dbProducts = items.getAllItems()
    const item = items.getItem(req.params.id)
    const view = {
        title: `${item.product_name} - FS`,
        main: true,
        glide: true
    }
   res.render('pages/shop/item', {view, item, dbProducts})
} 

const itemAddCart = (req,res) => res.send(`Pagina ITEM ${req.params.id} añadido a carrito`)
const cartView =(req,res) => {
    const view = {
        title: 'Carrito - FS',
        main: true
    }
    res.render('pages/shop/cart', {view})
}
const cartConfirm = (req,res) => res.send('Pagina CONFIRMACION DE COMPRA')

module.exports = {
    mainView,
    itemView,
    itemAddCart,
    cartView,
    cartConfirm
}