const Recipe = require('../models/recipe.model');

module.exports.recipeList = (req, res, next) => {
  Recipe.find()
  .populate('user', 'username avatarUrl')
  .sort({ createdAt: -1})
  .then((recipes) => res.render('recipe/book', { recipes })) 
  .catch((error) => next(error));
}


module.exports.bookLike = (req, res, next) => {
  const likes = req.recipe.likes;
  Recipe.findById()
  then((likes) => {
    if(likes) {
      onclick(),
      recipe.likes += 1,
      recipe.save()
    }
  }).catch((error) => next(error));
}
