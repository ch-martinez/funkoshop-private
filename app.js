const express = require('express')
const app = express()
const { config } = require('dotenv')
config()
const PORT = process.env.DB_PORT || 3000

/* Configuracion express-session */
const session = require('express-session')
app.use(session({
    secret: 'funko',
    resave: false,
    saveUninitialized: true,
    isLog: false
}))

/* Override para habilitar los métodos PUT y DELET */
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

/* Motor de plantillas EJS */
app.set('view engine', 'ejs')
app.set('views', 'src/views')

/* Motor de layouts para EJS */
const ejsLayaouts = require('express-ejs-layouts')
app.use(ejsLayaouts)
app.set('layout', 'layouts/layout')

/* Middlewares */
app.use(express.urlencoded({extended:false})) //Permite obtener la informacion de un formulario
app.use(express.json()) //Permite leer json - dev

/* Importacion de rutas */
const mainRoutes = require('./src/router/mainRoutes')
const authRoutes = require('./src/router/authRoutes')
const adminRoutes = require('./src/router/adminRoutes')
const shopRoutes = require('./src/router/shopRoutes')

/* Se define carpeta de archivos estaticos "public" */
app.use(express.static('public'))

app.use('/', mainRoutes)
app.use('/auth', authRoutes)
app.use('/admin', adminRoutes)
app.use('/shop', shopRoutes)
app.use('', (req,res,next)=>{
    res.render('404',view = {title: 'No encontrada',logged: req.session.isLog,glide: false});
})
app.listen(PORT, () => {console.log(`Server iniciado en: http://localhost:${PORT}`)})