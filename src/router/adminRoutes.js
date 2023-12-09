const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')
const uploadFiles = require('../middlewares/uploadFiles')
const { reqLogin } = require('../middlewares/session')

router.get('/', reqLogin, adminController.mainView)
router.get('/create', reqLogin, adminController.createView)
router.post('/create', reqLogin, uploadFiles.array('images',2), adminController.createItem)
router.get('/edit/:id', reqLogin, adminController.editView)
router.put('/edit/:id', reqLogin, uploadFiles.array('images',2), adminController.editItem)
router.delete('/delete/:id', reqLogin, adminController.deletItem)
router.post('/delete/:id', reqLogin, adminController.deletItem)

module.exports = router