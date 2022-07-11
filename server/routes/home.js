const Router = require('express').Router;

const homeController = require('../controllers/home');

const router = Router();

router.get('/home', homeController.ViewHome);

module.exports = router;