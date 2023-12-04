const loginView = (req,res) => {
    const view = {
        title: 'Login - FS',
        main: false
    }
    res.render('pages/auth/login', {view})
}
const loginRequest = (req,res) => res.send('Pagina SE LOGUEA')
const registerView = (req,res) => {
    const view = {
        title: 'Registrarse - FS',
        main: false
    }
    res.render('pages/auth/register', {view})
}
const registerRequest = (req,res) => res.send('Pagina SE REGISTRA')
const recoverPass = (req,res) => {
    const view = {
        title: 'Recuperar contraseña - FS',
        main: false
    }
    res.render('pages/auth/recoverPass', {view})
}

const logoutRequest = (req,res) => res.send('Pagina DESLOGUEO')

module.exports = {
    loginView,
    loginRequest,
    registerView,
    registerRequest,
    recoverPass,
    logoutRequest
}