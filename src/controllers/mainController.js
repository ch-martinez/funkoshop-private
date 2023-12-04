const items = require('../services/itemsServices')

const homeView = (req,res) => {
    const dbProducts = items.getAllItems()
    const view = {
        title: 'FunkoShop',
        main: true,
        glide: true
    }
    res.render('home',{view, dbProducts})
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