const {
    getAllProductsFromDB,
    getAllProductsFilterFromDB,
    getProductFromDB,
} = require('../models/productsModels')

const mainView = async (req,res) => {
    const view = {
        title: 'Shop - FS',
        logged: req.session.isLog,
    }
    try {
        if (req.query.licence){
            const data = await getAllProductsFilterFromDB(req.query.licence)
            res.render('pages/shop/shop', {view, data})
        }else{
            const data = await getAllProductsFromDB()
            res.render('pages/shop/shop', {view, data})
        }
    } catch (error) {
        console.log(`Error getting products: ${error}`)
        res.status(500).res(`Internal server error ${error}`)
    }
}

const itemView = async (req,res) => {
    try {
        const [product] = await getProductFromDB(req.params.id)
        const products = await getAllProductsFromDB()
        const view = await {
            title: `${product.product_name} - FS`,
            logged: req.session.isLog,
            glide: true
        }
        res.render('pages/shop/item', {view, product, products})
    } catch (error) {
        console.log(`Error getting products: ${error}`)
        res.status(500).res(`Internal server error ${error}`)
    }
} 

const itemAddCart = (req,res) => {
    console.log
    res.send(`Pagina ITEM ${req.body} añadido a carrito`)
}

const cartView =(req,res) => {
    const view = {
        title: 'Carrito - FS',
        logged: req.session.isLog
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