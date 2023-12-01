const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shopController')

router.get('/', shopController.mainView)
router.get('/item/:id', shopController.itemView)
router.post('/item/:id/add', shopController.itemAddCart)
router.get('/cart', shopController.cartView)
router.post('/cart', shopController.cartConfirm)

module.exports = router