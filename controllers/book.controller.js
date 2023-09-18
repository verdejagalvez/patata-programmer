const Recipe = require('../models/recipe.model');

module.exports.recipeList = (req, res, next) => {
  Recipe.find()
  .populate('user', 'username avatarUrl')
  .sort({ createdAt: -1})
  .then((recipes) => res.render('recipe/book', { recipes })) 
  .catch((error) => next(error));
}