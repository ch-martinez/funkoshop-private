const express = require('express')
const { param } = require('./adminRoutes')
const router = express.Router()

router.get('/', (req,res) => res.send('Pagina SHOP'))
router.get('/item/:id', (req,res) => res.send(`Pagina ITEM: ${req.params.id}`))
router.post('/item/:id/add', (req,res) => res.send(`Pagina ITEM ${req.params.id} añadido a carrito`))
router.get('/cart', (req,res) => res.send('Pagina CARRITO'))
router.post('/cart', (req,res) => res.send('Pagina CONFIRMACION DE COMPRA'))

module.exports = router