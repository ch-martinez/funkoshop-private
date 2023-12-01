const mainView = (req,res) => res.send('Pagina ADMIN')
const createView = (req,res) => res.send('Pagina ADMIN, CREAR')
const createItem = (req,res) => res.send('Pagina ADMIN, SE CREA ITEM')
const editView = (req,res) => res.send(`Pagina ADMIN, SE EDITA ${req.params.id}`)
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