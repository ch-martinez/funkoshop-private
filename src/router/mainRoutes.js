const express = require('express')
const router = express.Router()

router.get('/home', (req,res) => res.send('Pagina HOME'))
router.get('/contact', (req,res) => res.send('Pagina CONTACTO'))
router.get('/about', (req,res) => res.send('Pagina SOBRE NOSOTROS'))
router.get('/faqs', (req,res) => res.send('Pagina FAQS'))

module.exports = router