const mainView = (req,res) => {
    res.render('pages/shop/shop')
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