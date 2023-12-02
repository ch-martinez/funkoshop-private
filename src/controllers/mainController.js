const homeView = (req,res) => {
    res.render('home')
}
const contactView = (req,res) => res.send('Pagina CONTACTO')
const aboutView = (req,res) => res.send('Pagina SOBRE NOSOTROS')
const faqsView = (req,res) => res.send('Pagina FAQS')

module.exports = {
    homeView,
    contactView,
    aboutView,
    faqsView
}