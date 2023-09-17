const User = require('../models/user.model');
const Recipe = require('../models/recipe.model');

module.exports.registerRecipe = (req, res, next) => {
  res.render('/')
};

module.exports.doRegisterRecipe = (req, res, next) => {
  console.log(req.body);
  console.log(req.file);
  Recipe.create({
    title: req.body.title,
    description: req.body.description, 
    user: req.user.id,
    image: req.file.path,
    likes: req.body.likes
  })
  .then(() => {
    console.log('receta creada')
    res.redirect('/')
  })
  .catch((error) => next(error));
}

module.exports.recipeList = (req, res, next) => {
  const currentUser = req.user;
  console.log(currentUser)
  Recipe.find()
  .populate('user', 'username avatarUrl')
  .sort({ createdAt: -1})
  .limit(3)
  .then((recipes) => res.render('recipe/list', { recipes, currentUser}))
  .catch((error) => next(error));
}




async function findRandomRecipeId() {
  try {
    const count = await Recipe.countDocuments({}).exec();
    const random = Math.floor(Math.random() * count);
    const recipe = await Recipe.findOne().skip(random).exec();
    return recipe._id;
  } catch (err) {
    throw err;
  }
}

module.exports.recipeRandom = async (req, res, next) => {
  try {
    const recipeId = await findRandomRecipeId();

    // Obtener la receta y los detalles del usuario desde la base de datos
    const recipe = await Recipe.findById(recipeId).exec();
    const userId = recipe.user; // Supongamos que la receta tiene una referencia al usuario
    const user = await User.findById(userId).exec(); // Reemplaza 'User' con el modelo de usuario real de tu aplicación

    const username = user.username; // Obtener el nombre de usuario
    const avatarUrl = user.avatarUrl; // Obtener la URL del avatar
    const image = user.image;
    const likes = user.likes;
    const description = user.description;
    const createdAt = user.createdAt;
    const title = user.title;

    res.render('recipe/random', {
      recipe: recipe,
      username: username,
      avatarUrl: avatarUrl,
      image: image,
      likes: likes,
      descriptionId: description,
      createdAt: createdAt,
      title: title
    });
  } catch (err) {
    console.error("Error obteniendo receta aleatoria:", err);
    res.status(500).send("Error obteniendo receta aleatoria");
  }
};