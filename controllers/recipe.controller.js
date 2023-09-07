const User = require('../models/user.model');
const Recipe = require('../models/recipe.model');

module.exports.registerRecipe = (req, res, next) => {
  res.render('/')
};

module.exports.doRegisterRecipe = (req, res, next) => {
  console.log(req.body);
  Recipe.create({
    recipe: req.body.recipe, 
    user: req.user.id
  })
  .then(() => {
    console.log('´receta creada')
    res.redirect('/')
  })
  .catch((error) => next(error));
}