const loginView = (req,res) => {
    res.render('pages/auth/login')
}
const loginRequest = (req,res) => res.send('Pagina SE LOGUEA')
const registerView = (req,res) => {
    res.render('pages/auth/register')
}
const registerRequest = (req,res) => res.send('Pagina SE REGISTRA')
const recoveryPass = (req,res) => {
    res.render('pages/auth/recoveryPass')
}

const logoutRequest = (req,res) => res.send('Pagina DESLOGUEO')

module.exports = {
    loginView,
    loginRequest,
    registerView,
    registerRequest,
    recoveryPass,
    logoutRequest
}