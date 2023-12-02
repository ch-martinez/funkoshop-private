const items = require('../services/itemsServices')

const mainView = (req,res) => {
    const view = {
        title: 'Shop - FS',
        main: true
    }
    const dbProducts = items.getAllItems()
    console.log(dbProducts)
    res.render('pages/shop/shop', {view, dbProducts})
}
const itemView = (req,res) => res.send(`Pagina ITEM: ${req.params.id}`)
const itemAddCart = (req,res) => res.send(`Pagina ITEM ${req.params.id} añadido a carrito`)
const cartView =(req,res) => {
    res.render('pages/shop/cart')
}
const cartConfirm = (req,res) => res.send('Pagina CONFIRMACION DE COMPRA')

module.exports = {
    mainView,
    itemView,
    itemAddCart,
    cartView,
    cartConfirm
}