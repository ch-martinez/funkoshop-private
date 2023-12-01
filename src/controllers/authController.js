const loginView = (req,res) => res.send('Pagina LOGIN')
const loginRequest = (req,res) => res.send('Pagina SE LOGUEA')
const registerView = (req,res) => res.send('Pagina REGISTRO')
const registerRequest = (req,res) => res.send('Pagina SE REGISTRA')
const logoutRequest = (req,res) => res.send('Pagina DESLOGUEO')

module.exports = {
    loginView,
    loginRequest,
    registerView,
    registerRequest,
    logoutRequest
}