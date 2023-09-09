const express = require ('express');
const router= express.Router();
const user = require('../controllers/user.controller');
const secure = require('../middlewares/secure.mid');
const potato = require('../controllers/potato.controller');
const recipe = require('../controllers/recipe.controller');

router.get('/', recipe.recipeList);
router.get('/register', user.register);
router.post('/register', user.doRegister);
router.get('/login', user.login);
router.post('/login', user.doLogin);
router.get('/logout', user.logout)
router.get('/profile', secure.isAuthenticated, user.profile);


router.get('/profile', recipe.registerRecipe);
router.post('/profile', recipe.doRegisterRecipe);

module.exports = router;