const homeView = (req,res) => {
    const view = {
        title: 'FunkoShop',
        main: true
    }
    res.render('home',{view})
}
const contactView = (req,res) => {
    res.render('pages/contact')
}
const aboutView = (req,res) => res.send('Pagina SOBRE NOSOTROS')
const faqsView = (req,res) => res.send('Pagina FAQS')

module.exports = {
    homeView,
    contactView,
    aboutView,
    faqsView
}