const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')

router.get('/', adminController.mainView)
router.get('/create', adminController.createView)
router.post('/create', adminController.createItem)
router.get('/edit/:id', adminController.editView)
router.put('/edit/:id', adminController.editItem)
router.delete('/delete/:id', adminController.deletItem)


module.exports = router