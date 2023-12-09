const { getAllProductsFromDB } = require('../models/productsModels')

const homeView = async(req,res) => {
    const view = {
        title: 'FunkoShop',
        logged: req.session.isLog,
        glide: true
    }
    try {
        const products = await getAllProductsFromDB()
        res.render('home',{view, products})
    } catch (error) {
        console.log(`Error getting products: ${error}`)
        res.status(500).res(`Internal server error ${error}`)
    }
}

const contactView = (req,res) => {
    const view = {
        title: 'Contacto - FS',
        main: true
    }
    res.render('pages/contact', {view})
}
const aboutView = (req,res) => res.send('Pagina SOBRE NOSOTROS')
const faqsView = (req,res) => res.send('Pagina FAQS')

module.exports = {
    homeView,
    contactView,
    aboutView,
    faqsView
}