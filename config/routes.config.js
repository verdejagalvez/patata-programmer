const express = require ('express');
const router= express.Router();
const user = require('../controllers/user.controller');
const potato = require('../controllers/potato.controller');

router.get('/', potato.list);
router.get('/register', user.register);

module.exports = router;