const express = require('express');
const router = express.Router()
const indexController = require('../controllers/indexController');
const authController = require('../controllers/authController');

router.get('/', indexController.homePage);
router.get('/login', indexController.login);
router.post('/login', (req, res, next) => {
    console.log(req.body.username)
});

module.exports = router;