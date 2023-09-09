const User = require('../models/user.model');
const Recipe = require('../models/recipe.model');

module.exports.registerRecipe = (req, res, next) => {
  res.render('/')
};

module.exports.doRegisterRecipe = (req, res, next) => {
  console.log(req.body);
  Recipe.create({
    description: req.body.description, 
    user: req.user.id
  })
  .then(() => {
    console.log('receta creada')
    res.redirect('/')
  })
  .catch((error) => next(error));
}

module.exports.recipeList = (req, res, next) => {
  Recipe.find()
  .then((recipes) =>
  {
    console.log(recipes)
    res.render('recipe/list', {recipes})
  }
  )
}