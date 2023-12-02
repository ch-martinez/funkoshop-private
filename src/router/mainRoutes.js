const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

router.get('/', mainController.homeView)
router.get('/index.html', mainController.homeView) //Temporal fix
router.get('/contact', mainController.contactView)
router.get('/about', mainController.aboutView)
router.get('/faqs', mainController.faqsView)

module.exports = router