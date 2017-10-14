const express = require('express');
const router = express.Router()
const indexController = require('../controllers/indexController');
const authController = require('../controllers/authController');

router.get('/', indexController.homePage);
router.get('/register', indexController.register)
router.post('/register', authController.validateRegister,);
module.exports = router;