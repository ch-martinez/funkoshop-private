const express = require('express')
const router = express.Router()

router.get('/login', (req,res) => res.send('Pagina LOGIN'))
router.post('/login', (req,res) => res.send('Pagina SE LOGUEA'))
router.get('/register', (req,res) => res.send('Pagina REGISTRO'))
router.post('/register', (req,res) => res.send('Pagina SE REGISTRA'))
router.get('/logout', (req,res) => res.send('Pagina DESLOGUEO'))

module.exports = router