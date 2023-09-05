const express = require ('express');
const router= express.Router();
const user = require('../controllers/user.controller');
const secure = require('../middlewares/secure.mid');
const potato = require('../controllers/potato.controller');
const recipe = require('../controllers/recipe.controller');

router.get('/', potato.list);
router.get('/register', user.register);
router.post('/register', user.doRegister);
router.get('/login', user.login);
router.post('/login', user.doLogin);
router.get('/profile', secure.isAuthenticated, user.profile);


router.get('/profile/registerRecipe', recipe.registerRecipe);
router.post('/profile/registerRecipe', recipe.doRegisterRecipe);

module.exports = router;