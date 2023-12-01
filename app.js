const express = require('express')
const app = express()
const PORT = 3000

/* Middelware */
app.use(express.urlencoded({extended:false})) //Permite obtener la informacion de un formulario
app.use(express.json()) //Permite leer json - dev

/* Importacion de rutas */
const mainRoutes = require('./src/router/mainRoutes')
const authRoutes = require('./src/router/authRoutes')
const adminRoutes = require('./src/router/adminRoutes')
const shopRoutes = require('./src/router/shopRoutes')

/* Se define carpeta de archivos estaticos "public" */
//app.use(express.static('public'))

app.use('/', mainRoutes)
app.use('/auth', authRoutes)
app.use('/admin', adminRoutes)
app.use('/shop', shopRoutes)

app.listen(PORT, () => console.log(`Server iniciado en: http://localhost:${PORT}`))