const express = require('express')
const router = express.Router()

router.get('/', (req,res) => res.send('Pagina ADMIN'))
router.get('/create', (req,res) => res.send('Pagina ADMIN, CREAR'))
router.post('/create', (req,res) => res.send('Pagina ADMIN, SE CREA ITEM'))
router.get('/edit/:id', (req,res) => res.send(`Pagina ADMIN, SE EDITA ${req.params.id}`))
router.put('/edit/:id', (req,res) => res.send(`Pagina ADMIN, SE EDITA ${req.params.id}. CONFIRMADO`))
router.delete('/delete/:id', (req,res) => res.send(`Pagina ADMIN, SE ELIMINA ${req.params.id}`))


module.exports = router