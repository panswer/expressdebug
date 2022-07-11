const Router = require('express').Router;

const router = Router();

router.use(require('./home'));

module.exports = router;